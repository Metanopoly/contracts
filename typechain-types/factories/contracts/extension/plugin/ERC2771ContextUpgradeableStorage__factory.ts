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
  ERC2771ContextUpgradeableStorage,
  ERC2771ContextUpgradeableStorageInterface,
} from "../../../../contracts/extension/plugin/ERC2771ContextUpgradeableStorage";

const _abi = [
  {
    inputs: [],
    name: "ERC2771_CONTEXT_UPGRADEABLE_STORAGE_POSITION",
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
  "0x0000008003000039000000400030043f00000001022001900000000f0000c13d00000000020100190000000902200198000000170000613d000000000101043b0000000a011001970000000b0110009c000000170000c13d0000000c01000041000000800010043f0000000d010000410000001a0001042e0000000001000416000000000101004b000000170000c13d00000020010000390000010000100443000001200000044300000008010000410000001a0001042e00000000010000190000001b0001043000000019000004320000001a0001042e0000001b000104300000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000004000000100000000000000000000000000000000000000000000000000fffffffc000000000000000000000000ffffffff00000000000000000000000000000000000000000000000000000000d4c9c3570000000000000000000000000000000000000000000000000000000008b81add78656d45cb1db131fc8babf6da94538f821f834e8160ef32928adeef0000000000000000000000000000000000000020000000800000000000000000d4cf8c3418be9d4f6cfe72dda4b395ff544b87aeb9fa098f3e6a284f3e5f634c";

type ERC2771ContextUpgradeableStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC2771ContextUpgradeableStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC2771ContextUpgradeableStorage__factory extends ContractFactory {
  constructor(...args: ERC2771ContextUpgradeableStorageConstructorParams) {
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
      ERC2771ContextUpgradeableStorage & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ERC2771ContextUpgradeableStorage__factory {
    return super.connect(runner) as ERC2771ContextUpgradeableStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC2771ContextUpgradeableStorageInterface {
    return new Interface(_abi) as ERC2771ContextUpgradeableStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ERC2771ContextUpgradeableStorage {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ERC2771ContextUpgradeableStorage;
  }
}