// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

// Test helper imports
import "../utils/BaseTest.sol";

// Test contracts and interfaces
import "contracts/extension/interface/plugin/IMap.sol";
import { MarketplaceRouter } from "contracts/marketplace/entrypoint/MarketplaceRouter.sol";
import { OffersLogic } from "contracts/marketplace/offers/OffersLogic.sol";
import { TWProxy } from "contracts/TWProxy.sol";

import { IOffers } from "contracts/marketplace/IMarketplace.sol";

contract MarketplaceOffersTest is BaseTest {
    // Target contract
    address public marketplace;

    // Participants
    address public adminDeployer;
    address public marketplaceDeployer;
    address public seller;
    address public buyer;

    function setUp() public override {
        super.setUp();

        adminDeployer = getActor(0);
        marketplaceDeployer = getActor(1);
        seller = getActor(2);
        buyer = getActor(3);

        setupMarketplace(adminDeployer, marketplaceDeployer);
    }

    function setupMarketplace(address _adminDeployer, address _marketplaceDeployer) private {
        vm.startPrank(_adminDeployer);

        // [1] Deploy `Offers`
        address offers = address(new OffersLogic());

        // [2] Index `Offers` functions in `Map`
        IMap.Plugin[] memory pluginMaps = new IMap.Plugin[](7);
        pluginMaps[0] = IMap.Plugin(OffersLogic.totalOffers.selector, offers, "totalOffers()");
        pluginMaps[1] = IMap.Plugin(
            OffersLogic.makeOffer.selector,
            offers,
            "makeOffer((address,uint256,uint256,address,uint256,uint256))"
        );
        pluginMaps[2] = IMap.Plugin(OffersLogic.cancelOffer.selector, offers, "cancelOffer(uint256)");
        pluginMaps[3] = IMap.Plugin(OffersLogic.acceptOffer.selector, offers, "acceptOffer(uint256)");
        pluginMaps[4] = IMap.Plugin(
            OffersLogic.getAllValidOffers.selector,
            offers,
            "getAllValidOffers(uint256,uint256)"
        );
        pluginMaps[5] = IMap.Plugin(OffersLogic.getAllOffers.selector, offers, "getAllOffers(uint256,uint256)");
        pluginMaps[6] = IMap.Plugin(OffersLogic.getOffer.selector, offers, "getOffer(uint256)");

        // [3] Deploy `MarketplaceRouter`

        MarketplaceRouter router = new MarketplaceRouter(pluginMaps);
        assertEq(router.getAllPlugins().length, 7);

        vm.stopPrank();

        // [4] Deploy proxy pointing to `MarketplaceRouter`
        vm.prank(_marketplaceDeployer);
        marketplace = address(
            new TWProxy(
                address(router),
                abi.encodeCall(
                    MarketplaceRouter.initialize,
                    (_marketplaceDeployer, "", new address[](0), _marketplaceDeployer, 0)
                )
            )
        );

        // [5] Setup roles for seller and assets
        vm.startPrank(marketplaceDeployer);
        Permissions(marketplace).grantRole(keccak256("ASSET_ROLE"), address(erc721));
        Permissions(marketplace).grantRole(keccak256("ASSET_ROLE"), address(erc1155));

        vm.stopPrank();

        vm.label(address(router), "MarketplaceRouter_Impl");
        vm.label(marketplace, "Marketplace");
        vm.label(offers, "Offers_Extension");
        vm.label(seller, "Seller");
        vm.label(buyer, "Buyer");
        vm.label(address(erc721), "ERC721_Token");
        vm.label(address(erc1155), "ERC1155_Token");
    }

    function test_state_initial() public {
        uint256 totalOffers = OffersLogic(marketplace).totalOffers();
        assertEq(totalOffers, 0);
    }

    /*///////////////////////////////////////////////////////////////
                            Make Offer
    //////////////////////////////////////////////////////////////*/

    function test_state_makeOffer() public {
        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 tokenId = 0;
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = 200;

        // mint total-price to buyer
        erc20.mint(buyer, totalPrice);

        // Approve Marketplace to transfer currency tokens.
        vm.prank(buyer);
        erc20.approve(marketplace, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        vm.prank(buyer);
        uint256 offerId = OffersLogic(marketplace).makeOffer(offerParams);

        // Test consequent state of the contract.

        // Total offers incremented
        assertEq(OffersLogic(marketplace).totalOffers(), 1);

        // Fetch listing and verify state.
        IOffers.Offer memory offer = OffersLogic(marketplace).getOffer(offerId);

        assertEq(offer.offerId, offerId);
        assertEq(offer.offeror, buyer);
        assertEq(offer.assetContract, assetContract);
        assertEq(offer.tokenId, tokenId);
        assertEq(offer.quantity, quantity);
        assertEq(offer.currency, currency);
        assertEq(offer.totalPrice, totalPrice);
        assertEq(offer.expirationTimestamp, expirationTimestamp);
        assertEq(uint256(offer.tokenType), uint256(IOffers.TokenType.ERC721));
    }

    function test_revert_makeOffer_notOwnerOfOfferedTokens() public {
        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 tokenId = 0;
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = 200;

        // Approve Marketplace to transfer currency tokens. (without owning)
        vm.prank(buyer);
        erc20.approve(marketplace, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        vm.prank(buyer);
        vm.expectRevert("Marketplace: insufficient currency balance.");
        OffersLogic(marketplace).makeOffer(offerParams);
    }

    function test_revert_makeOffer_notApprovedMarketplaceToTransferTokens() public {
        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 tokenId = 0;
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = 200;

        // mint total-price to buyer, but not approved to marketplace
        erc20.mint(buyer, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        vm.prank(buyer);
        vm.expectRevert("Marketplace: insufficient currency balance.");
        OffersLogic(marketplace).makeOffer(offerParams);
    }

    function test_revert_makeOffer_wantedZeroTokens() public {
        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 tokenId = 0;
        uint256 quantity = 0;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = 200;

        // mint total-price to buyer
        erc20.mint(buyer, totalPrice);

        // Approve Marketplace to transfer currency tokens.
        vm.prank(buyer);
        erc20.approve(marketplace, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        vm.prank(buyer);
        vm.expectRevert("Marketplace: wanted zero tokens.");
        OffersLogic(marketplace).makeOffer(offerParams);
    }

    function test_revert_makeOffer_invalidQuantity() public {
        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 tokenId = 0;
        uint256 quantity = 2; // Asking for more than `1` quantity of erc721 tokenId
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = 200;

        // mint total-price to buyer
        erc20.mint(buyer, totalPrice);

        // Approve Marketplace to transfer currency tokens.
        vm.prank(buyer);
        erc20.approve(marketplace, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        vm.prank(buyer);
        vm.expectRevert("Marketplace: wanted invalid quantity.");
        OffersLogic(marketplace).makeOffer(offerParams);
    }

    function test_revert_makeOffer_invalidExpirationTimestamp() public {
        uint256 blockTimestamp = 100 minutes;
        // Set block.timestamp
        vm.warp(blockTimestamp);

        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 tokenId = 0;
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = blockTimestamp - 61 minutes;

        // mint total-price to buyer
        erc20.mint(buyer, totalPrice);

        // Approve Marketplace to transfer currency tokens.
        vm.prank(buyer);
        erc20.approve(marketplace, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        vm.prank(buyer);
        vm.expectRevert("Marketplace: invalid expiration timestamp.");
        OffersLogic(marketplace).makeOffer(offerParams);
    }

    function test_revert_makeOffer_invalidAssetContract() public {
        // Sample offer parameters.
        address assetContract = address(erc20);
        uint256 tokenId = 0;
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = block.timestamp;

        // mint total-price to buyer
        erc20.mint(buyer, totalPrice);

        // Approve Marketplace to transfer currency tokens.
        vm.prank(buyer);
        erc20.approve(marketplace, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        // Grant ERC20 token asset role.
        vm.prank(marketplaceDeployer);
        Permissions(marketplace).grantRole(keccak256("ASSET_ROLE"), address(erc20));

        vm.prank(buyer);
        vm.expectRevert("Marketplace: token must be ERC1155 or ERC721.");
        OffersLogic(marketplace).makeOffer(offerParams);
    }

    function test_revert_createListing_noAssetRoleWhenRestrictionsActive() public {
        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 tokenId = 0;
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = block.timestamp;

        // mint total-price to buyer
        erc20.mint(buyer, totalPrice);

        // Approve Marketplace to transfer currency tokens.
        vm.prank(buyer);
        erc20.approve(marketplace, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        // Revoke ASSET_ROLE from token to list.
        vm.startPrank(marketplaceDeployer);
        assertEq(Permissions(marketplace).hasRole(keccak256("ASSET_ROLE"), address(0)), false);
        Permissions(marketplace).revokeRole(keccak256("ASSET_ROLE"), address(erc721));
        assertEq(Permissions(marketplace).hasRole(keccak256("ASSET_ROLE"), address(erc721)), false);

        vm.stopPrank();

        vm.prank(buyer);
        vm.expectRevert("!ASSET_ROLE");
        OffersLogic(marketplace).makeOffer(offerParams);
    }

    /*///////////////////////////////////////////////////////////////
                            Cancel Offer
    //////////////////////////////////////////////////////////////*/

    function test_state_cancelOffer() public {
        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 tokenId = 0;
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = 200;

        // mint total-price to buyer
        erc20.mint(buyer, totalPrice);

        // Approve Marketplace to transfer currency tokens.
        vm.prank(buyer);
        erc20.approve(marketplace, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        vm.prank(buyer);
        uint256 offerId = OffersLogic(marketplace).makeOffer(offerParams);

        IOffers.Offer memory offer = OffersLogic(marketplace).getOffer(offerId);

        assertEq(offer.offerId, offerId);
        assertEq(offer.offeror, buyer);
        assertEq(offer.assetContract, assetContract);
        assertEq(offer.tokenId, tokenId);
        assertEq(offer.quantity, quantity);
        assertEq(offer.currency, currency);
        assertEq(offer.totalPrice, totalPrice);
        assertEq(offer.expirationTimestamp, expirationTimestamp);
        assertEq(uint256(offer.tokenType), uint256(IOffers.TokenType.ERC721));

        vm.prank(buyer);
        OffersLogic(marketplace).cancelOffer(offerId);

        // Total offers count shouldn't change
        assertEq(OffersLogic(marketplace).totalOffers(), 1);

        bytes memory err = "DNE";
        vm.expectRevert(err);
        offer = OffersLogic(marketplace).getOffer(offerId);
    }

    function test_revert_cancelOffer_callerNotOfferor() public {
        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 tokenId = 0;
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = 200;

        // mint total-price to buyer
        erc20.mint(buyer, totalPrice);

        // Approve Marketplace to transfer currency tokens.
        vm.prank(buyer);
        erc20.approve(marketplace, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        vm.prank(buyer);
        uint256 offerId = OffersLogic(marketplace).makeOffer(offerParams);

        vm.prank(address(0x345));
        vm.expectRevert("!Offeror");
        OffersLogic(marketplace).cancelOffer(offerId);
    }

    /*///////////////////////////////////////////////////////////////
                            Accept Offer
    //////////////////////////////////////////////////////////////*/

    function test_state_acceptOffer() public {
        // set owner of NFT
        erc721.mint(seller, 1);

        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 tokenId = 0;
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = 200;

        // mint total-price to buyer
        erc20.mint(buyer, totalPrice);

        // Approve Marketplace to transfer currency tokens.
        vm.prank(buyer);
        erc20.approve(marketplace, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        vm.prank(buyer);
        uint256 offerId = OffersLogic(marketplace).makeOffer(offerParams);

        // accept offer
        vm.startPrank(seller);
        erc721.setApprovalForAll(marketplace, true);
        OffersLogic(marketplace).acceptOffer(offerId);
        vm.stopPrank();

        // Total offers count shouldn't change
        assertEq(OffersLogic(marketplace).totalOffers(), 1);

        // offer deleted
        bytes memory err = "DNE";
        vm.expectRevert(err);
        OffersLogic(marketplace).getOffer(offerId);

        // check states after accepting offer
        assertEq(erc721.ownerOf(tokenId), buyer);
        assertEq(erc20.balanceOf(seller), totalPrice);
        assertEq(erc20.balanceOf(buyer), 0);
    }

    function test_revert_acceptOffer_notOwnedRequiredTokens() public {
        // set owner of NFT to address other than seller
        erc721.mint(address(0x345), 1);

        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 tokenId = 0;
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = 200;

        // mint total-price to buyer
        erc20.mint(buyer, totalPrice);

        // Approve Marketplace to transfer currency tokens. (but not owned)
        vm.prank(buyer);
        erc20.approve(marketplace, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        vm.prank(buyer);
        uint256 offerId = OffersLogic(marketplace).makeOffer(offerParams);

        // accept offer
        vm.startPrank(seller);
        erc721.setApprovalForAll(marketplace, true);
        vm.expectRevert("Marketplace: not owner or approved tokens.");
        OffersLogic(marketplace).acceptOffer(offerId);
        vm.stopPrank();
    }

    function test_revert_acceptOffer_notApprovedMarketplaceToTransferOfferedTokens() public {
        // set owner of NFT
        erc721.mint(seller, 1);

        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 tokenId = 0;
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = 200;

        // mint total-price to buyer
        erc20.mint(buyer, totalPrice);

        // Approve Marketplace to transfer currency tokens. (but not owned)
        vm.prank(buyer);
        erc20.approve(marketplace, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        vm.prank(buyer);
        uint256 offerId = OffersLogic(marketplace).makeOffer(offerParams);

        // accept offer, without approving NFT to marketplace
        vm.startPrank(seller);
        vm.expectRevert("Marketplace: not owner or approved tokens.");
        OffersLogic(marketplace).acceptOffer(offerId);
        vm.stopPrank();
    }

    function test_revert_acceptOffer_offerorBalanceLessThanPrice() public {
        // set owner of NFT
        erc721.mint(seller, 1);

        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 tokenId = 0;
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = 200;

        // mint total-price to buyer
        erc20.mint(buyer, totalPrice);

        // Approve Marketplace to transfer currency tokens. (but not owned)
        vm.prank(buyer);
        erc20.approve(marketplace, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        vm.prank(buyer);
        uint256 offerId = OffersLogic(marketplace).makeOffer(offerParams);

        // reduce erc20 balance of buyer
        vm.prank(buyer);
        erc20.burn(totalPrice);

        // accept offer
        vm.startPrank(seller);
        erc721.setApprovalForAll(marketplace, true);
        vm.expectRevert("Marketplace: insufficient currency balance.");
        OffersLogic(marketplace).acceptOffer(offerId);
        vm.stopPrank();
    }

    function test_revert_acceptOffer_notApprovedMarketplaceToTransferPrice() public {
        // set owner of NFT
        erc721.mint(seller, 1);

        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 tokenId = 0;
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = 200;

        // mint total-price to buyer
        erc20.mint(buyer, totalPrice);

        // Approve Marketplace to transfer currency tokens. (but not owned)
        vm.prank(buyer);
        erc20.approve(marketplace, totalPrice);

        // Make offer.
        IOffers.OfferParams memory offerParams = IOffers.OfferParams(
            assetContract,
            tokenId,
            quantity,
            currency,
            totalPrice,
            expirationTimestamp
        );

        vm.prank(buyer);
        uint256 offerId = OffersLogic(marketplace).makeOffer(offerParams);

        // remove erc20 approval
        vm.prank(buyer);
        erc20.approve(marketplace, 0);

        // accept offer
        vm.startPrank(seller);
        erc721.setApprovalForAll(marketplace, true);
        vm.expectRevert("Marketplace: insufficient currency balance.");
        OffersLogic(marketplace).acceptOffer(offerId);
        vm.stopPrank();
    }

    /*///////////////////////////////////////////////////////////////
                            View functions
    //////////////////////////////////////////////////////////////*/

    function test_state_getAllOffers() public {
        uint256[] memory offerIds = new uint256[](5);
        uint256[] memory tokenIds = new uint256[](5);

        // mint total-price to buyer
        erc20.mint(buyer, 1000 ether);

        // Approve Marketplace to transfer currency tokens. (but not owned)
        vm.prank(buyer);
        erc20.approve(marketplace, 1000 ether);

        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 totalPrice = 1 ether;
        uint256 expirationTimestamp = 200;

        IOffers.OfferParams memory offerParams;

        for (uint256 i = 0; i < 5; i += 1) {
            tokenIds[i] = i;

            // make offer
            offerParams = IOffers.OfferParams(
                assetContract,
                tokenIds[i],
                quantity,
                currency,
                totalPrice,
                expirationTimestamp
            );

            vm.prank(buyer);
            offerIds[i] = OffersLogic(marketplace).makeOffer(offerParams);
        }

        IOffers.Offer[] memory allOffers = OffersLogic(marketplace).getAllOffers(0, 4);
        assertEq(allOffers.length, 5);

        for (uint256 i = 0; i < 5; i += 1) {
            assertEq(allOffers[i].offerId, offerIds[i]);
            assertEq(allOffers[i].offeror, buyer);
            assertEq(allOffers[i].assetContract, assetContract);
            assertEq(allOffers[i].tokenId, tokenIds[i]);
            assertEq(allOffers[i].quantity, quantity);
            assertEq(allOffers[i].currency, currency);
            assertEq(allOffers[i].totalPrice, totalPrice);
            assertEq(allOffers[i].expirationTimestamp, expirationTimestamp);
            assertEq(uint256(allOffers[i].tokenType), uint256(IOffers.TokenType.ERC721));
        }
    }

    function test_state_getAllValidOffers() public {
        uint256[] memory offerIds = new uint256[](5);
        uint256[] memory tokenIds = new uint256[](5);

        // mint total-price to buyer
        erc20.mint(buyer, 5 ether);

        // Approve Marketplace to transfer currency tokens. (but not owned)
        vm.prank(buyer);
        erc20.approve(marketplace, 5 ether);

        // Sample offer parameters.
        address assetContract = address(erc721);
        uint256 quantity = 1;
        address currency = address(erc20);
        uint256 expirationTimestamp = 200;

        IOffers.OfferParams memory offerParams;

        for (uint256 i = 0; i < 5; i += 1) {
            tokenIds[i] = i;

            // make offer, with total-price as i
            offerParams = IOffers.OfferParams(
                assetContract,
                tokenIds[i],
                quantity,
                currency,
                (i + 1) * 1 ether,
                expirationTimestamp
            );

            vm.prank(buyer);
            offerIds[i] = OffersLogic(marketplace).makeOffer(offerParams);
        }

        vm.prank(buyer);
        erc20.burn(2 ether); // reduce balance to make some offers invalid

        IOffers.Offer[] memory allOffers = OffersLogic(marketplace).getAllValidOffers(0, 4);
        assertEq(allOffers.length, 3);

        for (uint256 i = 0; i < 3; i += 1) {
            assertEq(allOffers[i].offerId, offerIds[i]);
            assertEq(allOffers[i].offeror, buyer);
            assertEq(allOffers[i].assetContract, assetContract);
            assertEq(allOffers[i].tokenId, tokenIds[i]);
            assertEq(allOffers[i].quantity, quantity);
            assertEq(allOffers[i].currency, currency);
            assertEq(allOffers[i].totalPrice, (i + 1) * 1 ether);
            assertEq(allOffers[i].expirationTimestamp, expirationTimestamp);
            assertEq(uint256(allOffers[i].tokenType), uint256(IOffers.TokenType.ERC721));
        }

        // create an offer, and check the offers returned post its expiry
        offerParams = IOffers.OfferParams(assetContract, 5, quantity, currency, 10, 10);

        vm.prank(buyer);
        OffersLogic(marketplace).makeOffer(offerParams);

        vm.warp(10);
        allOffers = OffersLogic(marketplace).getAllValidOffers(0, 5);
        assertEq(allOffers.length, 3);
    }
}