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
import type { NonPayableOverrides } from "../../../../common";
import type {
  ContractMetadataStorage,
  ContractMetadataStorageInterface,
} from "../../../../contracts/extension/plugin/ContractMetadataStorage";

const _abi = [
  {
    inputs: [],
    name: "CONTRACT_METADATA_STORAGE_POSITION",
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

const _bytecode =
  "0x0000008003000039000000400030043f00000001022001900000000f0000c13d00000000020100190000000902200198000000170000613d000000000101043b0000000a011001970000000b0110009c000000170000c13d0000000c01000041000000800010043f0000000d010000410000001a0001042e0000000001000416000000000101004b000000170000c13d00000020010000390000010000100443000001200000044300000008010000410000001a0001042e00000000010000190000001b0001043000000019000004320000001a0001042e0000001b000104300000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000004000000100000000000000000000000000000000000000000000000000fffffffc000000000000000000000000ffffffff000000000000000000000000000000000000000000000000000000007e837fbf000000000000000000000000000000000000000000000000000000004bc804ba64359c0e35e5ed5d90ee596ecaa49a3a930ddcb1470ea0dd625da9000000000000000000000000000000000000000020000000800000000000000000e002be5bb4a624de6bb6788fa2168e647b0b76dfb2e761b6c1a611a4172fcfb5";

type ContractMetadataStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContractMetadataStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ContractMetadataStorage__factory extends ContractFactory {
  constructor(...args: ContractMetadataStorageConstructorParams) {
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
      ContractMetadataStorage & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ContractMetadataStorage__factory {
    return super.connect(runner) as ContractMetadataStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContractMetadataStorageInterface {
    return new Interface(_abi) as ContractMetadataStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ContractMetadataStorage {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ContractMetadataStorage;
  }
}