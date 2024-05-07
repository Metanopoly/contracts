/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  OperatorFilterToggle,
  OperatorFilterToggleInterface,
} from "../../../../../contracts/extension/upgradeable/OperatorFilterToggle.sol/OperatorFilterToggle";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "restriction",
        type: "bool",
      },
    ],
    name: "OperatorRestriction",
    type: "event",
  },
  {
    inputs: [],
    name: "operatorRestriction",
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
  {
    inputs: [
      {
        internalType: "bool",
        name: "_restriction",
        type: "bool",
      },
    ],
    name: "setOperatorRestriction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class OperatorFilterToggle__factory {
  static readonly abi = _abi;
  static createInterface(): OperatorFilterToggleInterface {
    return new Interface(_abi) as OperatorFilterToggleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OperatorFilterToggle {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as OperatorFilterToggle;
  }
}