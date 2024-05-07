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
} from "../../../../common";

export interface PlatformFeeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getFlatPlatformFeeInfo"
      | "getPlatformFeeInfo"
      | "getPlatformFeeType"
      | "setFlatPlatformFeeInfo"
      | "setPlatformFeeInfo"
      | "setPlatformFeeType"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FlatPlatformFeeUpdated"
      | "PlatformFeeInfoUpdated"
      | "PlatformFeeTypeUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "getFlatPlatformFeeInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPlatformFeeInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPlatformFeeType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFlatPlatformFeeInfo",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformFeeInfo",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformFeeType",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getFlatPlatformFeeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlatformFeeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlatformFeeType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFlatPlatformFeeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformFeeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformFeeType",
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

export interface PlatformFee extends BaseContract {
  connect(runner?: ContractRunner | null): PlatformFee;
  waitForDeployment(): Promise<this>;

  interface: PlatformFeeInterface;

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

  getFlatPlatformFeeInfo: TypedContractMethod<[], [[string, bigint]], "view">;

  getPlatformFeeInfo: TypedContractMethod<[], [[string, bigint]], "view">;

  getPlatformFeeType: TypedContractMethod<[], [bigint], "view">;

  setFlatPlatformFeeInfo: TypedContractMethod<
    [_platformFeeRecipient: AddressLike, _flatFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPlatformFeeInfo: TypedContractMethod<
    [_platformFeeRecipient: AddressLike, _platformFeeBps: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPlatformFeeType: TypedContractMethod<
    [_feeType: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getFlatPlatformFeeInfo"
  ): TypedContractMethod<[], [[string, bigint]], "view">;
  getFunction(
    nameOrSignature: "getPlatformFeeInfo"
  ): TypedContractMethod<[], [[string, bigint]], "view">;
  getFunction(
    nameOrSignature: "getPlatformFeeType"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setFlatPlatformFeeInfo"
  ): TypedContractMethod<
    [_platformFeeRecipient: AddressLike, _flatFee: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPlatformFeeInfo"
  ): TypedContractMethod<
    [_platformFeeRecipient: AddressLike, _platformFeeBps: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPlatformFeeType"
  ): TypedContractMethod<[_feeType: BigNumberish], [void], "nonpayable">;

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