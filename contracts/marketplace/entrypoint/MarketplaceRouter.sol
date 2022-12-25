// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

// ====== External imports ======
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

//  ==========  Internal imports    ==========
import "./InitStorage.sol";
import { RouterImmutable, Router } from "../../extension/plugin/RouterImmutable.sol";

import "../extension/ContractMetadataLogic.sol";
import "../extension/PlatformFeeLogic.sol";
import "../extension/PermissionsEnumerableLogic.sol";
import "../extension/ReentrancyGuardLogic.sol";
import "../extension/ERC2771ContextUpgradeableLogic.sol";

/**
 *
 *      "Inherited by entrypoint" extensions.
 *      - ContractMetadata
 *      - PlatformFee
 *      - PermissionsEnumerable
 *      - ReentrancyGuard
 *      - ERC2771Context
 *      - Multicall
 *
 *      "NOT inherited by entrypoint" extensions.
 *      - DirectListings
 *      - EnglishAuctions
 *      - Offers
 */

contract MarketplaceRouter is
    ContractMetadataLogic,
    PlatformFeeLogic,
    PermissionsEnumerableLogic,
    ReentrancyGuardLogic,
    ERC2771ContextUpgradeableLogic,
    IERC721Receiver,
    IERC1155Receiver,
    RouterImmutable
{
    /*///////////////////////////////////////////////////////////////
                            State variables
    //////////////////////////////////////////////////////////////*/

    bytes32 private constant MODULE_TYPE = bytes32("Marketplace");
    uint256 private constant VERSION = 3;

    /*///////////////////////////////////////////////////////////////
                    Constructor + initializer logic
    //////////////////////////////////////////////////////////////*/

    constructor(Plugin[] memory _pluginsToAdd) RouterImmutable(_pluginsToAdd) {}

    /// @dev Initiliazes the contract, like a constructor.
    function initialize(
        address _defaultAdmin,
        string memory _contractURI,
        address[] memory _trustedForwarders,
        address _platformFeeRecipient,
        uint16 _platformFeeBps
    ) external {
        InitStorage.Data storage data = InitStorage.initStorage();

        require(!data.initialized, "Already initialized.");
        data.initialized = true;

        // Initialize inherited contracts, most base-like -> most derived.
        __ReentrancyGuard_init();
        __ERC2771Context_init(_trustedForwarders);

        // Initialize this contract's state.
        _setupContractURI(_contractURI);
        _setupPlatformFeeInfo(_platformFeeRecipient, _platformFeeBps);
        _setupRole(DEFAULT_ADMIN_ROLE, _defaultAdmin);
    }

    /*///////////////////////////////////////////////////////////////
                        Generic contract logic
    //////////////////////////////////////////////////////////////*/

    /// @dev Returns the type of the contract.
    function contractType() external pure returns (bytes32) {
        return MODULE_TYPE;
    }

    /// @dev Returns the version of the contract.
    function contractVersion() external pure returns (uint8) {
        return uint8(VERSION);
    }

    /*///////////////////////////////////////////////////////////////
                        ERC 165 / 721 / 1155 logic
    //////////////////////////////////////////////////////////////*/

    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address,
        address,
        uint256[] memory,
        uint256[] memory,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure override returns (bytes4) {
        return this.onERC721Received.selector;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(Router, IERC165) returns (bool) {
        return
            interfaceId == type(IERC1155Receiver).interfaceId ||
            interfaceId == type(IERC721Receiver).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    /*///////////////////////////////////////////////////////////////
                        Overridable Permissions
    //////////////////////////////////////////////////////////////*/

    /// @dev Checks whether platform fee info can be set in the given execution context.
    function _canSetPlatformFeeInfo() internal view override returns (bool) {
        return hasRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    /// @dev Checks whether contract metadata can be set in the given execution context.
    function _canSetContractURI() internal view override returns (bool) {
        return hasRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function _msgSender()
        internal
        view
        override(ERC2771ContextUpgradeableLogic, PermissionsLogic)
        returns (address sender)
    {
        if (isTrustedForwarder(msg.sender)) {
            // The assembly code is more direct than the Solidity version using `abi.decode`.
            assembly {
                sender := shr(96, calldataload(sub(calldatasize(), 20)))
            }
        } else {
            return msg.sender;
        }
    }

    function _msgData()
        internal
        view
        override(ERC2771ContextUpgradeableLogic, PermissionsLogic)
        returns (bytes calldata)
    {
        if (isTrustedForwarder(msg.sender)) {
            return msg.data[:msg.data.length - 20];
        } else {
            return msg.data;
        }
    }
}