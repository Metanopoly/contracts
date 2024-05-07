/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPluginMap,
  IPluginMapInterface,
} from "../../../../../contracts/extension/interface/plugin/IPluginMap";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "functionSelector",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "string",
        name: "functionSignature",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pluginAddress",
        type: "address",
      },
    ],
    name: "PluginSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pluginAddress",
        type: "address",
      },
    ],
    name: "getAllFunctionsOfPlugin",
    outputs: [
      {
        internalType: "bytes4[]",
        name: "",
        type: "bytes4[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPlugins",
    outputs: [
      {
        components: [
          {
            internalType: "bytes4",
            name: "functionSelector",
            type: "bytes4",
          },
          {
            internalType: "string",
            name: "functionSignature",
            type: "string",
          },
          {
            internalType: "address",
            name: "pluginAddress",
            type: "address",
          },
        ],
        internalType: "struct IPluginMap.Plugin[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "functionSelector",
        type: "bytes4",
      },
    ],
    name: "getPluginForFunction",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IPluginMap__factory {
  static readonly abi = _abi;
  static createInterface(): IPluginMapInterface {
    return new Interface(_abi) as IPluginMapInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IPluginMap {
    return new Contract(address, _abi, runner) as unknown as IPluginMap;
  }
}