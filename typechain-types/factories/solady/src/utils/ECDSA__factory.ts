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
import type { ECDSA, ECDSAInterface } from "../../../../solady/src/utils/ECDSA";

const _abi = [
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
] as const;

const _bytecode =
  "0x00000001012001900000000c0000613d0000008001000039000000400010043f0000000001000416000000000101004b0000000c0000c13d00000020010000390000010000100443000001200000044300000005010000410000000f0001042e000000000100001900000010000104300000000e000004320000000f0001042e00000010000104300000000000000000000000000000000000000000000000000000000200000000000000000000000000000040000001000000000000000000b814428223a6e8fa582f2b01ea3d57ee7d26b3cd61ef0e326169e8db032053f8";

type ECDSAConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ECDSAConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ECDSA__factory extends ContractFactory {
  constructor(...args: ECDSAConstructorParams) {
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
      ECDSA & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ECDSA__factory {
    return super.connect(runner) as ECDSA__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ECDSAInterface {
    return new Interface(_abi) as ECDSAInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ECDSA {
    return new Contract(address, _abi, runner) as unknown as ECDSA;
  }
}