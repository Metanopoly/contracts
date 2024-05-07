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

export interface PlatformFeeLogicInterface extends Interface {
  getFunction(
    nameOrSignature: "getPlatformFeeInfo" | "setPlatformFeeInfo"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FlatPlatformFeeUpdated"
      | "PlatformFeeInfoUpdated"
      | "PlatformFeeTypeUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "getPlatformFeeInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformFeeInfo",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getPlatformFeeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformFeeInfo",
    data: BytesLike
  ): Result;
}

export namespace FlatPlatformFeeUpdatedEvent {
  export type InputTuple = [
    platformFeeRecipient: AddressLike,
    flatFee: BigNumberish
  ];
  export type OutputTuple = [platformFeeRecipient: string, flatFee: bigint];
  export interface OutputObject {
    platformFeeRecipient: string;
    flatFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PlatformFeeInfoUpdatedEvent {
  export type InputTuple = [
    platformFeeRecipient: AddressLike,
    platformFeeBps: BigNumberish
  ];
  export type OutputTuple = [
    platformFeeRecipient: string,
    platformFeeBps: bigint
  ];
  export interface OutputObject {
    platformFeeRecipient: string;
    platformFeeBps: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PlatformFeeTypeUpdatedEvent {
  export type InputTuple = [feeType: BigNumberish];
  export type OutputTuple = [feeType: bigint];
  export interface OutputObject {
    feeType: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PlatformFeeLogic extends BaseContract {
  connect(runner?: ContractRunner | null): PlatformFeeLogic;
  waitForDeployment(): Promise<this>;

  interface: PlatformFeeLogicInterface;

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

  getPlatformFeeInfo: TypedContractMethod<[], [[string, bigint]], "view">;

  setPlatformFeeInfo: TypedContractMethod<
    [_platformFeeRecipient: AddressLike, _platformFeeBps: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getPlatformFeeInfo"
  ): TypedContractMethod<[], [[string, bigint]], "view">;
  getFunction(
    nameOrSignature: "setPlatformFeeInfo"
  ): TypedContractMethod<
    [_platformFeeRecipient: AddressLike, _platformFeeBps: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "FlatPlatformFeeUpdated"
  ): TypedContractEvent<
    FlatPlatformFeeUpdatedEvent.InputTuple,
    FlatPlatformFeeUpdatedEvent.OutputTuple,
    FlatPlatformFeeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "PlatformFeeInfoUpdated"
  ): TypedContractEvent<
    PlatformFeeInfoUpdatedEvent.InputTuple,
    PlatformFeeInfoUpdatedEvent.OutputTuple,
    PlatformFeeInfoUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "PlatformFeeTypeUpdated"
  ): TypedContractEvent<
    PlatformFeeTypeUpdatedEvent.InputTuple,
    PlatformFeeTypeUpdatedEvent.OutputTuple,
    PlatformFeeTypeUpdatedEvent.OutputObject
  >;

  filters: {
    "FlatPlatformFeeUpdated(address,uint256)": TypedContractEvent<
      FlatPlatformFeeUpdatedEvent.InputTuple,
      FlatPlatformFeeUpdatedEvent.OutputTuple,
      FlatPlatformFeeUpdatedEvent.OutputObject
    >;
    FlatPlatformFeeUpdated: TypedContractEvent<
      FlatPlatformFeeUpdatedEvent.InputTuple,
      FlatPlatformFeeUpdatedEvent.OutputTuple,
      FlatPlatformFeeUpdatedEvent.OutputObject
    >;

    "PlatformFeeInfoUpdated(address,uint256)": TypedContractEvent<
      PlatformFeeInfoUpdatedEvent.InputTuple,
      PlatformFeeInfoUpdatedEvent.OutputTuple,
      PlatformFeeInfoUpdatedEvent.OutputObject
    >;
    PlatformFeeInfoUpdated: TypedContractEvent<
      PlatformFeeInfoUpdatedEvent.InputTuple,
      PlatformFeeInfoUpdatedEvent.OutputTuple,
      PlatformFeeInfoUpdatedEvent.OutputObject
    >;

    "PlatformFeeTypeUpdated(uint8)": TypedContractEvent<
      PlatformFeeTypeUpdatedEvent.InputTuple,
      PlatformFeeTypeUpdatedEvent.OutputTuple,
      PlatformFeeTypeUpdatedEvent.OutputObject
    >;
    PlatformFeeTypeUpdated: TypedContractEvent<
      PlatformFeeTypeUpdatedEvent.InputTuple,
      PlatformFeeTypeUpdatedEvent.OutputTuple,
      PlatformFeeTypeUpdatedEvent.OutputObject
    >;
  };
}