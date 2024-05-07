/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ITWRegistry,
  ITWRegistryInterface,
} from "../../../../contracts/infra/interface/ITWRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "deployer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "deployment",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "Added",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "deployer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "deployment",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "Deleted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_deployer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_deployment",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_deployer",
        type: "address",
      },
    ],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "deploymentCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_deployer",
        type: "address",
      },
    ],
    name: "getAll",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "deploymentAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
        ],
        internalType: "struct ITWRegistry.Deployment[]",
        name: "allDeployments",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_deployer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_deployment",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ITWRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): ITWRegistryInterface {
    return new Interface(_abi) as ITWRegistryInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ITWRegistry {
    return new Contract(address, _abi, runner) as unknown as ITWRegistry;
  }
}