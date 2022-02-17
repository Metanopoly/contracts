// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

// Base
import "./openzeppelin-presets/ERC1155PresetUpgradeable.sol";
import "./openzeppelin-presets/ERC1155PresetUpgradeable.sol";
import "./interfaces/IThirdwebContract.sol";
import "./interfaces/IThirdwebOwnable.sol";
import "./interfaces/IThirdwebRoyalty.sol";

// Token interfaces
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC165.sol";

// Meta transactions
import "./openzeppelin-presets/metatx/ERC2771ContextUpgradeable.sol";

// Utils
import "@openzeppelin/contracts-upgradeable/utils/MulticallUpgradeable.sol";
import "./lib/CurrencyTransferLib.sol";
import "./lib/FeeType.sol";

// Helper Interfaces
import "@openzeppelin/contracts/interfaces/IERC2981.sol";

// Thirdweb top-level
import "./TWFee.sol";

contract Bundle is
    IERC2981,
    IThirdwebContract,
    IThirdwebOwnable,
    IThirdwebRoyalty,
    Initializable,
    ERC2771ContextUpgradeable,
    MulticallUpgradeable,
    ERC1155PresetUpgradeable
{
    bytes32 private constant MODULE_TYPE = bytes32("Bundle");
    uint256 private constant VERSION = 1;

    // Token name
    string public name;

    // Token symbol
    string public symbol;

    /// @dev Only TRANSFER_ROLE holders can have tokens transferred from or to them, during restricted transfers.
    bytes32 private constant TRANSFER_ROLE = keccak256("TRANSFER_ROLE");

    /// @dev Max bps in the thirdweb system
    uint256 private constant MAX_BPS = 10_000;

    /// @dev The address interpreted as native token of the chain.
    address private constant NATIVE_TOKEN = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;

    /// @dev The thirdweb contract with fee related information.
    TWFee public immutable thirdwebFee;

    /// @dev Owner of the contract (purpose: OpenSea compatibility, etc.)
    address private _owner;

    /// @dev The token Id of the next token to be minted.
    uint256 public nextTokenId;

    /// @dev The recipient of who gets the royalty.
    address private royaltyRecipient;

    /// @dev The percentage of royalty how much royalty in basis points.
    uint256 private royaltyBps;

    /// @dev Collection level metadata.
    string public contractURI;

    /// @dev Whether the ERC 1155 token is a wrapped ERC 20 / 721 token.
    enum UnderlyingType {
        None,
        ERC20,
        ERC721
    }

    /// @dev The state of a token.
    struct TokenState {
        address creator;
        string uri;
        UnderlyingType underlyingType;
    }

    /// @dev The state of the underlying ERC 721 token, if any.
    struct ERC721Wrapped {
        address source;
        uint256 tokenId;
    }

    /// @dev The state of the underlying ERC 20 token, if any.
    struct ERC20Wrapped {
        address source;
        uint256 shares;
        uint256 underlyingTokenAmount;
    }

    /// @dev Emitted when restrictions on transfers is updated.
    event RestrictedTransferUpdated(bool transferable);

    /// @dev Emitted when native ERC 1155 tokens are created.
    event NativeTokens(address indexed creator, uint256[] tokenIds, string[] tokenURIs, uint256[] tokenSupplies);

    /// @dev Emitted when ERC 721 wrapped as an ERC 1155 token is minted.
    event ERC721WrappedToken(
        address indexed creator,
        address indexed sourceOfUnderlying,
        uint256 tokenIdOfUnderlying,
        uint256 tokenId,
        string tokenURI
    );

    /// @dev Emitted when an underlying ERC 721 token is redeemed.
    event ERC721Redeemed(
        address indexed redeemer,
        address indexed sourceOfUnderlying,
        uint256 tokenIdOfUnderlying,
        uint256 tokenId
    );

    /// @dev Emitted when ERC 20 wrapped as an ERC 1155 token is minted.
    event ERC20WrappedToken(
        address indexed creator,
        address indexed sourceOfUnderlying,
        uint256 totalAmountOfUnderlying,
        uint256 shares,
        uint256 tokenId,
        string tokenURI
    );

    /// @dev Emitted when an underlying ERC 20 token is redeemed.
    event ERC20Redeemed(
        address indexed redeemer,
        uint256 indexed tokenId,
        address indexed sourceOfUnderlying,
        uint256 tokenAmountReceived,
        uint256 sharesRedeemed
    );

    /// @dev Emitted when a new Owner is set.
    event NewOwner(address prevOwner, address newOwner);

    /// @dev Emitted when the contract receives ether.
    event EtherReceived(address sender, uint256 amount);

    /// @dev Emitted when accrued royalties are withdrawn from the contract.
    event FundsWithdrawn(
        address indexed paymentReceiver,
        address feeRecipient,
        uint256 totalAmount,
        uint256 feeCollected
    );

    /// @dev Token ID => royalty recipient and bps for token
    mapping(uint256 => RoyaltyInfo) private royaltyInfoForToken;

    /// @dev NFT tokenId => token state.
    mapping(uint256 => TokenState) public tokenState;

    /// @dev NFT tokenId => state of underlying ERC721 token.
    mapping(uint256 => ERC721Wrapped) public erc721WrappedTokens;

    /// @dev NFT tokenId => state of underlying ERC20 token.
    mapping(uint256 => ERC20Wrapped) public erc20WrappedTokens;

    constructor(address _thirdwebFee) initializer {
        thirdwebFee = TWFee(_thirdwebFee);
    }

    /// @dev Initiliazes the contract, like a constructor.
    function initialize(
        address _defaultAdmin,
        string memory _name,
        string memory _symbol,
        string memory _contractURI,
        address _trustedForwarder,
        address _royaltyRecipient,
        uint256 _royaltyBps
    ) external initializer {
        // Initialize inherited contracts, most base-like -> most derived.
        __ERC2771Context_init(_trustedForwarder);
        __ERC1155Preset_init(_defaultAdmin, _contractURI);

        // Initialize this contract's state.
        name = _name;
        symbol = _symbol;
        royaltyBps = _royaltyBps;
        royaltyRecipient = _royaltyRecipient;
        contractURI = _contractURI;

        _owner = _defaultAdmin;
        _setupRole(DEFAULT_ADMIN_ROLE, _defaultAdmin);
        _setupRole(TRANSFER_ROLE, _defaultAdmin);
        _setupRole(TRANSFER_ROLE, address(0));
    }

    /**
     *      Public functions
     */

    /// @dev Returns the module type of the contract.
    function contractType() external pure returns (bytes32) {
        return MODULE_TYPE;
    }

    /// @dev Returns the version of the contract.
    function contractVersion() external pure returns (uint8) {
        return uint8(VERSION);
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() external view returns (address) {
        return hasRole(DEFAULT_ADMIN_ROLE, _owner) ? _owner : address(0);
    }

    /// @notice Create native ERC 1155 NFTs.
    function createNativeTokens(
        address to,
        string[] calldata _nftURIs,
        uint256[] calldata _nftSupplies,
        bytes memory data
    ) public whenNotPaused onlyRole(MINTER_ROLE) returns (uint256[] memory nftIds) {
        require(_nftURIs.length == _nftSupplies.length, "unequal lengths of configs.");
        require(_nftURIs.length > 0, "cannot mint 0 NFTs.");

        // Get creator
        address tokenCreator = _msgSender();

        // Get tokenIds.
        nftIds = new uint256[](_nftURIs.length);

        // Store token state for each token.
        uint256 id = nextTokenId;

        for (uint256 i = 0; i < _nftURIs.length; i++) {
            nftIds[i] = id;

            tokenState[id] = TokenState({
                creator: tokenCreator,
                uri: _nftURIs[i],
                underlyingType: UnderlyingType.None
            });

            id += 1;
        }

        // Update contract level tokenId.
        nextTokenId = id;

        // Mint NFTs to token creator.
        _mintBatch(to, nftIds, _nftSupplies, data);

        emit NativeTokens(tokenCreator, nftIds, _nftURIs, _nftSupplies);
    }

    /// @dev See {ERC1155Minter}.
    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public virtual override {
        require(id < nextTokenId, "cannot mint new NFTs.");
        require(tokenState[id].underlyingType == UnderlyingType.None, "cannot freely mint more ERC20 or ERC721.");

        super.mint(to, id, amount, data);
    }

    /// @dev See {ERC1155Minter}.
    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public virtual override {
        bool validIds = true;
        bool validTokenType = true;

        for (uint256 i = 0; i < ids.length; ++i) {
            if (ids[i] >= nextTokenId && validIds) {
                validIds = false;
            }

            if (tokenState[ids[i]].underlyingType != UnderlyingType.None && validTokenType) {
                validTokenType = false;
            }
        }

        require(validIds, "cannot mint new NFTs.");
        require(validTokenType, "cannot freely mint more ERC20 or ERC721.");

        super.mintBatch(to, ids, amounts, data);
    }

    /**
     *      External functions
     */

    /// @dev See EIP-2981
    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        external
        view
        virtual
        returns (address receiver, uint256 royaltyAmount)
    {
        (address recipient, uint256 bps) = getRoyaltyInfoForToken(tokenId);
        receiver = recipient;
        royaltyAmount = (salePrice * bps) / MAX_BPS;
    }

    /// @dev Wraps an ERC721 NFT as an ERC1155 NFT.
    function wrapERC721(
        address _nftContract,
        uint256 _tokenId,
        string calldata _nftURI
    ) external whenNotPaused onlyRole(MINTER_ROLE) {
        require(IERC721(_nftContract).ownerOf(_tokenId) == _msgSender(), "not owner.");
        require(
            IERC721(_nftContract).getApproved(_tokenId) == address(this) ||
                IERC721(_nftContract).isApprovedForAll(_msgSender(), address(this)),
            "must approve transfer."
        );

        // Get token creator
        address tokenCreator = _msgSender();

        // Get tokenId
        uint256 id = nextTokenId;
        nextTokenId += 1;

        // Transfer the NFT to this contract.
        IERC721(_nftContract).safeTransferFrom(tokenCreator, address(this), _tokenId);

        // Mint wrapped NFT to token creator.
        _mint(tokenCreator, id, 1, "");

        // Store wrapped NFT state.
        tokenState[id] = TokenState({ creator: tokenCreator, uri: _nftURI, underlyingType: UnderlyingType.ERC721 });

        // Map the native NFT tokenId to the underlying NFT
        erc721WrappedTokens[id] = ERC721Wrapped({ source: _nftContract, tokenId: _tokenId });

        emit ERC721WrappedToken(tokenCreator, _nftContract, _tokenId, id, _nftURI);
    }

    /// @dev Lets a wrapped nft owner redeem the underlying ERC721 NFT.
    function redeemERC721(uint256 _nftId) external {
        // Get redeemer
        address redeemer = _msgSender();

        require(balanceOf(redeemer, _nftId) > 0, "must own token to redeem.");

        // Burn the native NFT token
        _burn(redeemer, _nftId, 1);

        // Transfer the NFT to redeemer
        IERC721(erc721WrappedTokens[_nftId].source).safeTransferFrom(
            address(this),
            redeemer,
            erc721WrappedTokens[_nftId].tokenId
        );

        emit ERC721Redeemed(redeemer, erc721WrappedTokens[_nftId].source, erc721WrappedTokens[_nftId].tokenId, _nftId);
    }

    /// @dev Wraps ERC20 tokens as ERC1155 NFTs.
    function wrapERC20(
        address _tokenContract,
        uint256 _tokenAmount,
        uint256 _numOfNftsToMint,
        string calldata _nftURI
    ) external whenNotPaused onlyRole(MINTER_ROLE) {
        // Get creator
        address tokenCreator = _msgSender();

        require(IERC20(_tokenContract).balanceOf(tokenCreator) >= _tokenAmount, "owns insufficient amount.");
        require(
            IERC20(_tokenContract).allowance(tokenCreator, address(this)) >= _tokenAmount,
            "must approve transfer."
        );
        require(
            IERC20(_tokenContract).transferFrom(tokenCreator, address(this), _tokenAmount),
            "failed to transfer tokens."
        );

        // Get NFT tokenId
        uint256 id = nextTokenId;
        nextTokenId += 1;

        // Mint NFTs to token creator
        _mint(tokenCreator, id, _numOfNftsToMint, "");

        tokenState[id] = TokenState({ creator: tokenCreator, uri: _nftURI, underlyingType: UnderlyingType.ERC20 });

        erc20WrappedTokens[id] = ERC20Wrapped({
            source: _tokenContract,
            shares: _numOfNftsToMint,
            underlyingTokenAmount: _tokenAmount
        });

        emit ERC20WrappedToken(tokenCreator, _tokenContract, _tokenAmount, _numOfNftsToMint, id, _nftURI);
    }

    /// @dev Lets the nft owner redeem their ERC20 tokens.
    function redeemERC20(uint256 _nftId, uint256 _amount) external {
        // Get redeemer
        address redeemer = _msgSender();

        require(balanceOf(redeemer, _nftId) >= _amount, "must own token to redeem.");

        // Burn the native NFT token
        _burn(redeemer, _nftId, _amount);

        // Get the ERC20 token amount to distribute
        uint256 amountToDistribute = (erc20WrappedTokens[_nftId].underlyingTokenAmount * _amount) /
            erc20WrappedTokens[_nftId].shares;

        // Transfer the ERC20 tokens to redeemer
        require(
            IERC20(erc20WrappedTokens[_nftId].source).transfer(redeemer, amountToDistribute),
            "failed to transfer tokens."
        );

        emit ERC20Redeemed(redeemer, _nftId, erc20WrappedTokens[_nftId].source, amountToDistribute, _amount);
    }

    /// @dev Returns the platform fee bps and recipient.
    function getDefaultRoyaltyInfo() external view returns (address, uint16) {
        return (royaltyRecipient, uint16(royaltyBps));
    }

    /// @dev Returns the royalty recipient for a particular token Id.
    function getRoyaltyInfoForToken(uint256 _tokenId) public view returns (address, uint16) {
        RoyaltyInfo memory royaltyForToken = royaltyInfoForToken[_tokenId];

        return
            royaltyForToken.recipient == address(0)
                ? (royaltyRecipient, uint16(royaltyBps))
                : (royaltyForToken.recipient, uint16(royaltyForToken.bps));
    }

    /**
     *      External: setter functions
     */

    /// @dev Lets a module admin update the royalty bps and recipient.
    function setDefaultRoyaltyInfo(address _royaltyRecipient, uint256 _royaltyBps)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        require(_royaltyBps <= MAX_BPS, "exceed royalty bps");

        royaltyRecipient = _royaltyRecipient;
        royaltyBps = uint128(_royaltyBps);

        emit DefaultRoyalty(_royaltyRecipient, _royaltyBps);
    }

    /// @dev Lets a module admin set the royalty recipient for a particular token Id.
    function setRoyaltyInfoForToken(
        uint256 _tokenId,
        address _recipient,
        uint256 _bps
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_bps <= MAX_BPS, "exceed royalty bps");

        royaltyInfoForToken[_tokenId] = RoyaltyInfo({ recipient: _recipient, bps: _bps });

        emit RoyaltyForToken(_tokenId, _recipient, _bps);
    }

    /// @dev Lets a module admin set a new owner for the contract. The new owner must be a module admin.
    function setOwner(address _newOwner) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(hasRole(DEFAULT_ADMIN_ROLE, _newOwner), "new owner not module admin.");
        address _prevOwner = _owner;
        _owner = _newOwner;

        emit NewOwner(_prevOwner, _newOwner);
    }

    /// @dev Sets contract URI for the storefront-level metadata of the contract.
    function setContractURI(string calldata _uri) external onlyRole(DEFAULT_ADMIN_ROLE) {
        contractURI = _uri;
    }

    /**
     *      Internal functions.
     */

    /// @dev Runs on every transfer.
    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);

        if (!hasRole(TRANSFER_ROLE, address(0)) && from != address(0) && to != address(0)) {
            require(hasRole(TRANSFER_ROLE, from) || hasRole(TRANSFER_ROLE, to), "transfers restricted.");
        }
    }

    /// @dev See EIP-2771
    function _msgSender()
        internal
        view
        virtual
        override(ContextUpgradeable, ERC2771ContextUpgradeable)
        returns (address sender)
    {
        return ERC2771ContextUpgradeable._msgSender();
    }

    /// @dev See EIP-2771
    function _msgData()
        internal
        view
        virtual
        override(ContextUpgradeable, ERC2771ContextUpgradeable)
        returns (bytes calldata)
    {
        return ERC2771ContextUpgradeable._msgData();
    }

    /**
     *      Rest: view functions
     */

    /// @dev See EIP 165
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155PresetUpgradeable, IERC165)
        returns (bool)
    {
        return super.supportsInterface(interfaceId) || type(IERC2981).interfaceId == interfaceId;
    }

    /// @dev See EIP 1155
    function uri(uint256 _nftId) public view override returns (string memory) {
        return tokenState[_nftId].uri;
    }
}