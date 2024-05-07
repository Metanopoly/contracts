/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  LazyMintWithTier_V1,
  LazyMintWithTier_V1Interface,
} from "../../../../contracts/legacy-contracts/extension/LazyMintWithTier_V1";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "tier",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "startTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encryptedBaseURI",
        type: "bytes",
      },
    ],
    name: "TokensLazyMinted",
    type: "event",
  },
  {
    inputs: [],
    name: "getBaseURICount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getBatchIdAtIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMetadataForAllTiers",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "tier",
            type: "string",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "startIdInclusive",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endIdNonInclusive",
                type: "uint256",
              },
            ],
            internalType: "struct LazyMintWithTier_V1.TokenRange[]",
            name: "ranges",
            type: "tuple[]",
          },
          {
            internalType: "string[]",
            name: "baseURIs",
            type: "string[]",
          },
        ],
        internalType: "struct LazyMintWithTier_V1.TierMetadata[]",
        name: "metadataForAllTiers",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_baseURIForTokens",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tier",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "lazyMint",
    outputs: [
      {
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class LazyMintWithTier_V1__factory {
  static readonly abi = _abi;
  static createInterface(): LazyMintWithTier_V1Interface {
    return new Interface(_abi) as LazyMintWithTier_V1Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LazyMintWithTier_V1 {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as LazyMintWithTier_V1;
  }
}