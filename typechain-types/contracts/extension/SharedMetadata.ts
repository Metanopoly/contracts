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
} from "../../common";

export declare namespace ISharedMetadata {
  export type SharedMetadataInfoStruct = {
    name: string;
    description: string;
    imageURI: string;
    animationURI: string;
  };

  export type SharedMetadataInfoStructOutput = [
    name: string,
    description: string,
    imageURI: string,
    animationURI: string
  ] & {
    name: string;
    description: string;
    imageURI: string;
    animationURI: string;
  };
}

export interface SharedMetadataInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "setSharedMetadata"
      | "sharedMetadata"
      | "supportsInterface"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BatchMetadataUpdate"
      | "MetadataUpdate"
      | "SharedMetadataUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "setSharedMetadata",
    values: [ISharedMetadata.SharedMetadataInfoStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "sharedMetadata",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "setSharedMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sharedMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
}

export namespace BatchMetadataUpdateEvent {
  export type InputTuple = [
    _fromTokenId: BigNumberish,
    _toTokenId: BigNumberish
  ];
  export type OutputTuple = [_fromTokenId: bigint, _toTokenId: bigint];
  export interface OutputObject {
    _fromTokenId: bigint;
    _toTokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MetadataUpdateEvent {
  export type InputTuple = [_tokenId: BigNumberish];
  export type OutputTuple = [_tokenId: bigint];
  export interface OutputObject {
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SharedMetadataUpdatedEvent {
  export type InputTuple = [
    name: string,
    description: string,
    imageURI: string,
    animationURI: string
  ];
  export type OutputTuple = [
    name: string,
    description: string,
    imageURI: string,
    animationURI: string
  ];
  export interface OutputObject {
    name: string;
    description: string;
    imageURI: string;
    animationURI: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SharedMetadata extends BaseContract {
  connect(runner?: ContractRunner | null): SharedMetadata;
  waitForDeployment(): Promise<this>;

  interface: SharedMetadataInterface;

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

  setSharedMetadata: TypedContractMethod<
    [_metadata: ISharedMetadata.SharedMetadataInfoStruct],
    [void],
    "nonpayable"
  >;

  sharedMetadata: TypedContractMethod<
    [],
    [
      [string, string, string, string] & {
        name: string;
        description: string;
        imageURI: string;
        animationURI: string;
      }
    ],
    "view"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "setSharedMetadata"
  ): TypedContractMethod<
    [_metadata: ISharedMetadata.SharedMetadataInfoStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sharedMetadata"
  ): TypedContractMethod<
    [],
    [
      [string, string, string, string] & {
        name: string;
        description: string;
        imageURI: string;
        animationURI: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;

  getEvent(
    key: "BatchMetadataUpdate"
  ): TypedContractEvent<
    BatchMetadataUpdateEvent.InputTuple,
    BatchMetadataUpdateEvent.OutputTuple,
    BatchMetadataUpdateEvent.OutputObject
  >;
  getEvent(
    key: "MetadataUpdate"
  ): TypedContractEvent<
    MetadataUpdateEvent.InputTuple,
    MetadataUpdateEvent.OutputTuple,
    MetadataUpdateEvent.OutputObject
  >;
  getEvent(
    key: "SharedMetadataUpdated"
  ): TypedContractEvent<
    SharedMetadataUpdatedEvent.InputTuple,
    SharedMetadataUpdatedEvent.OutputTuple,
    SharedMetadataUpdatedEvent.OutputObject
  >;

  filters: {
    "BatchMetadataUpdate(uint256,uint256)": TypedContractEvent<
      BatchMetadataUpdateEvent.InputTuple,
      BatchMetadataUpdateEvent.OutputTuple,
      BatchMetadataUpdateEvent.OutputObject
    >;
    BatchMetadataUpdate: TypedContractEvent<
      BatchMetadataUpdateEvent.InputTuple,
      BatchMetadataUpdateEvent.OutputTuple,
      BatchMetadataUpdateEvent.OutputObject
    >;

    "MetadataUpdate(uint256)": TypedContractEvent<
      MetadataUpdateEvent.InputTuple,
      MetadataUpdateEvent.OutputTuple,
      MetadataUpdateEvent.OutputObject
    >;
    MetadataUpdate: TypedContractEvent<
      MetadataUpdateEvent.InputTuple,
      MetadataUpdateEvent.OutputTuple,
      MetadataUpdateEvent.OutputObject
    >;

    "SharedMetadataUpdated(string,string,string,string)": TypedContractEvent<
      SharedMetadataUpdatedEvent.InputTuple,
      SharedMetadataUpdatedEvent.OutputTuple,
      SharedMetadataUpdatedEvent.OutputObject
    >;
    SharedMetadataUpdated: TypedContractEvent<
      SharedMetadataUpdatedEvent.InputTuple,
      SharedMetadataUpdatedEvent.OutputTuple,
      SharedMetadataUpdatedEvent.OutputObject
    >;
  };
}