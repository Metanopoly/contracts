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

export declare namespace IAirdropERC721 {
  export type AirdropContentStruct = {
    recipient: AddressLike;
    tokenId: BigNumberish;
  };

  export type AirdropContentStructOutput = [
    recipient: string,
    tokenId: bigint
  ] & { recipient: string; tokenId: bigint };
}

export interface IAirdropERC721Interface extends Interface {
  getFunction(nameOrSignature: "airdropERC721"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "AirdropFailed"): EventFragment;

  encodeFunctionData(
    functionFragment: "airdropERC721",
    values: [AddressLike, AddressLike, IAirdropERC721.AirdropContentStruct[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "airdropERC721",
    data: BytesLike
  ): Result;
}

export namespace AirdropFailedEvent {
  export type InputTuple = [
    tokenAddress: AddressLike,
    tokenOwner: AddressLike,
    recipient: AddressLike,
    tokenId: BigNumberish
  ];
  export type OutputTuple = [
    tokenAddress: string,
    tokenOwner: string,
    recipient: string,
    tokenId: bigint
  ];
  export interface OutputObject {
    tokenAddress: string;
    tokenOwner: string;
    recipient: string;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IAirdropERC721 extends BaseContract {
  connect(runner?: ContractRunner | null): IAirdropERC721;
  waitForDeployment(): Promise<this>;

  interface: IAirdropERC721Interface;

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

  airdropERC721: TypedContractMethod<
    [
      tokenAddress: AddressLike,
      tokenOwner: AddressLike,
      contents: IAirdropERC721.AirdropContentStruct[]
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "airdropERC721"
  ): TypedContractMethod<
    [
      tokenAddress: AddressLike,
      tokenOwner: AddressLike,
      contents: IAirdropERC721.AirdropContentStruct[]
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "AirdropFailed"
  ): TypedContractEvent<
    AirdropFailedEvent.InputTuple,
    AirdropFailedEvent.OutputTuple,
    AirdropFailedEvent.OutputObject
  >;

  filters: {
    "AirdropFailed(address,address,address,uint256)": TypedContractEvent<
      AirdropFailedEvent.InputTuple,
      AirdropFailedEvent.OutputTuple,
      AirdropFailedEvent.OutputObject
    >;
    AirdropFailed: TypedContractEvent<
      AirdropFailedEvent.InputTuple,
      AirdropFailedEvent.OutputTuple,
      AirdropFailedEvent.OutputObject
    >;
  };
}