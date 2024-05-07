/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMintableERC721,
  IMintableERC721Interface,
} from "../../../../contracts/extension/interface/IMintableERC721";

const _abi = [
  {
    anonymous: false,
    inputs: [
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
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "TokensMinted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "mintTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMintableERC721__factory {
  static readonly abi = _abi;
  static createInterface(): IMintableERC721Interface {
    return new Interface(_abi) as IMintableERC721Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMintableERC721 {
    return new Contract(address, _abi, runner) as unknown as IMintableERC721;
  }
}