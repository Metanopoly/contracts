/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IRoyaltyPayments,
  IRoyaltyPaymentsInterface,
} from "../../../../contracts/extension/interface/IRoyaltyPayments";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "RoyaltyEngineUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "getRoyalty",
    outputs: [
      {
        internalType: "address payable[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_royaltyEngineAddress",
        type: "address",
      },
    ],
    name: "setRoyaltyEngine",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IRoyaltyPayments__factory {
  static readonly abi = _abi;
  static createInterface(): IRoyaltyPaymentsInterface {
    return new Interface(_abi) as IRoyaltyPaymentsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IRoyaltyPayments {
    return new Contract(address, _abi, runner) as unknown as IRoyaltyPayments;
  }
}