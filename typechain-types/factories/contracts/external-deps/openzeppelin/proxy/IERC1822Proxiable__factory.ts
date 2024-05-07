/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IERC1822Proxiable,
  IERC1822ProxiableInterface,
} from "../../../../../contracts/external-deps/openzeppelin/proxy/IERC1822Proxiable";

const _abi = [
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IERC1822Proxiable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1822ProxiableInterface {
    return new Interface(_abi) as IERC1822ProxiableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IERC1822Proxiable {
    return new Contract(address, _abi, runner) as unknown as IERC1822Proxiable;
  }
}