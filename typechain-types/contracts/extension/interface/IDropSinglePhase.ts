/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export declare namespace IClaimCondition {
  export type ClaimConditionStruct = {
    startTimestamp: BigNumberish;
    maxClaimableSupply: BigNumberish;
    supplyClaimed: BigNumberish;
    quantityLimitPerWallet: BigNumberish;
    merkleRoot: BytesLike;
    pricePerToken: BigNumberish;
    currency: AddressLike;
    metadata: string;
  };

  export type ClaimConditionStructOutput = [
    startTimestamp: bigint,
    maxClaimableSupply: bigint,
    supplyClaimed: bigint,
    quantityLimitPerWallet: bigint,
    merkleRoot: string,
    pricePerToken: bigint,
    currency: string,
    metadata: string
  ] & {
    startTimestamp: bigint;
    maxClaimableSupply: bigint;
    supplyClaimed: bigint;
    quantityLimitPerWallet: bigint;
    merkleRoot: string;
    pricePerToken: bigint;
    currency: string;
    metadata: string;
  };
}

export declare namespace IDropSinglePhase {
  export type AllowlistProofStruct = {
    proof: BytesLike[];
    quantityLimitPerWallet: BigNumberish;
    pricePerToken: BigNumberish;
    currency: AddressLike;
  };

  export type AllowlistProofStructOutput = [
    proof: string[],
    quantityLimitPerWallet: bigint,
    pricePerToken: bigint,
    currency: string
  ] & {
    proof: string[];
    quantityLimitPerWallet: bigint;
    pricePerToken: bigint;
    currency: string;
  };
}

export interface IDropSinglePhaseInterface extends Interface {
  getFunction(
    nameOrSignature: "claim" | "setClaimConditions"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "ClaimConditionUpdated" | "TokensClaimed"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "claim",
    values: [
      AddressLike,
      BigNumberish,
      AddressLike,
      BigNumberish,
      IDropSinglePhase.AllowlistProofStruct,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimConditions",
    values: [IClaimCondition.ClaimConditionStruct, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setClaimConditions",
    data: BytesLike
  ): Result;
}

export namespace ClaimConditionUpdatedEvent {
  export type InputTuple = [
    condition: IClaimCondition.ClaimConditionStruct,
    resetEligibility: boolean
  ];
  export type OutputTuple = [
    condition: IClaimCondition.ClaimConditionStructOutput,
    resetEligibility: boolean
  ];
  export interface OutputObject {
    condition: IClaimCondition.ClaimConditionStructOutput;
    resetEligibility: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokensClaimedEvent {
  export type InputTuple = [
    claimer: AddressLike,
    receiver: AddressLike,
    startTokenId: BigNumberish,
    quantityClaimed: BigNumberish
  ];
  export type OutputTuple = [
    claimer: string,
    receiver: string,
    startTokenId: bigint,
    quantityClaimed: bigint
  ];
  export interface OutputObject {
    claimer: string;
    receiver: string;
    startTokenId: bigint;
    quantityClaimed: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IDropSinglePhase extends BaseContract {
  connect(runner?: ContractRunner | null): IDropSinglePhase;
  waitForDeployment(): Promise<this>;

  interface: IDropSinglePhaseInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  claim: TypedContractMethod<
    [
      receiver: AddressLike,
      quantity: BigNumberish,
      currency: AddressLike,
      pricePerToken: BigNumberish,
      allowlistProof: IDropSinglePhase.AllowlistProofStruct,
      data: BytesLike
    ],
    [void],
    "payable"
  >;

  setClaimConditions: TypedContractMethod<
    [
      phase: IClaimCondition.ClaimConditionStruct,
      resetClaimEligibility: boolean
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      quantity: BigNumberish,
      currency: AddressLike,
      pricePerToken: BigNumberish,
      allowlistProof: IDropSinglePhase.AllowlistProofStruct,
      data: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setClaimConditions"
  ): TypedContractMethod<
    [
      phase: IClaimCondition.ClaimConditionStruct,
      resetClaimEligibility: boolean
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "ClaimConditionUpdated"
  ): TypedContractEvent<
    ClaimConditionUpdatedEvent.InputTuple,
    ClaimConditionUpdatedEvent.OutputTuple,
    ClaimConditionUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "TokensClaimed"
  ): TypedContractEvent<
    TokensClaimedEvent.InputTuple,
    TokensClaimedEvent.OutputTuple,
    TokensClaimedEvent.OutputObject
  >;

  filters: {
    "ClaimConditionUpdated(tuple,bool)": TypedContractEvent<
      ClaimConditionUpdatedEvent.InputTuple,
      ClaimConditionUpdatedEvent.OutputTuple,
      ClaimConditionUpdatedEvent.OutputObject
    >;
    ClaimConditionUpdated: TypedContractEvent<
      ClaimConditionUpdatedEvent.InputTuple,
      ClaimConditionUpdatedEvent.OutputTuple,
      ClaimConditionUpdatedEvent.OutputObject
    >;

    "TokensClaimed(address,address,uint256,uint256)": TypedContractEvent<
      TokensClaimedEvent.InputTuple,
      TokensClaimedEvent.OutputTuple,
      TokensClaimedEvent.OutputObject
    >;
    TokensClaimed: TypedContractEvent<
      TokensClaimedEvent.InputTuple,
      TokensClaimedEvent.OutputTuple,
      TokensClaimedEvent.OutputObject
    >;
  };
}