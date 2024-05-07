/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  PermissionsEnumerableInit,
  PermissionsEnumerableInitInterface,
} from "../../../../../contracts/extension/upgradeable/init/PermissionsEnumerableInit";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
] as const;

const _bytecode =
  "0x00000001012001900000000c0000613d0000008001000039000000400010043f0000000001000416000000000101004b0000000c0000c13d00000020010000390000010000100443000001200000044300000005010000410000000f0001042e000000000100001900000010000104300000000e000004320000000f0001042e00000010000104300000000000000000000000000000000000000000000000000000000200000000000000000000000000000040000001000000000000000000363fabf0ae34c2bc92e6daa43c4e8f606f64b344d5e2cedec6e8fe898cdae2f6";

type PermissionsEnumerableInitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PermissionsEnumerableInitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PermissionsEnumerableInit__factory extends ContractFactory {
  constructor(...args: PermissionsEnumerableInitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      PermissionsEnumerableInit & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): PermissionsEnumerableInit__factory {
    return super.connect(runner) as PermissionsEnumerableInit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PermissionsEnumerableInitInterface {
    return new Interface(_abi) as PermissionsEnumerableInitInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PermissionsEnumerableInit {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as PermissionsEnumerableInit;
  }
}