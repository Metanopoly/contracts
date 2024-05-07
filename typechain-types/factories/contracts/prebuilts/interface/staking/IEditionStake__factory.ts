/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IEditionStake,
  IEditionStakeInterface,
} from "../../../../../contracts/prebuilts/interface/staking/IEditionStake";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "RewardTokensDepositedByAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "RewardTokensWithdrawnByAdmin",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "depositRewardTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawRewardTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IEditionStake__factory {
  static readonly abi = _abi;
  static createInterface(): IEditionStakeInterface {
    return new Interface(_abi) as IEditionStakeInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IEditionStake {
    return new Contract(address, _abi, runner) as unknown as IEditionStake;
  }
}