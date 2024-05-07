/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  SignatureMintERC721,
  SignatureMintERC721Interface,
} from "../../../contracts/extension/SignatureMintERC721";

const _abi = [
  {
    inputs: [],
    name: "SignatureMintInvalidQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureMintInvalidRecipient",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureMintInvalidSigner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actualTime",
        type: "uint256",
      },
    ],
    name: "SignatureMintInvalidTime",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureMintUnauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "mintedTo",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenIdMinted",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "address",
            name: "royaltyRecipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "royaltyBps",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "primarySaleRecipient",
            type: "address",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerToken",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "validityStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "validityEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
        ],
        indexed: false,
        internalType: "struct ISignatureMintERC721.MintRequest",
        name: "mintRequest",
        type: "tuple",
      },
    ],
    name: "TokensMintedWithSignature",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "address",
            name: "royaltyRecipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "royaltyBps",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "primarySaleRecipient",
            type: "address",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerToken",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "validityStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "validityEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
        ],
        internalType: "struct ISignatureMintERC721.MintRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "mintWithSignature",
    outputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "address",
            name: "royaltyRecipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "royaltyBps",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "primarySaleRecipient",
            type: "address",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerToken",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "validityStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "validityEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
        ],
        internalType: "struct ISignatureMintERC721.MintRequest",
        name: "_req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class SignatureMintERC721__factory {
  static readonly abi = _abi;
  static createInterface(): SignatureMintERC721Interface {
    return new Interface(_abi) as SignatureMintERC721Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SignatureMintERC721 {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as SignatureMintERC721;
  }
}