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

export declare namespace IOffers {
  export type OfferStruct = {
    offerId: BigNumberish;
    tokenId: BigNumberish;
    quantity: BigNumberish;
    totalPrice: BigNumberish;
    expirationTimestamp: BigNumberish;
    offeror: AddressLike;
    assetContract: AddressLike;
    currency: AddressLike;
    tokenType: BigNumberish;
    status: BigNumberish;
  };

  export type OfferStructOutput = [
    offerId: bigint,
    tokenId: bigint,
    quantity: bigint,
    totalPrice: bigint,
    expirationTimestamp: bigint,
    offeror: string,
    assetContract: string,
    currency: string,
    tokenType: bigint,
    status: bigint
  ] & {
    offerId: bigint;
    tokenId: bigint;
    quantity: bigint;
    totalPrice: bigint;
    expirationTimestamp: bigint;
    offeror: string;
    assetContract: string;
    currency: string;
    tokenType: bigint;
    status: bigint;
  };

  export type OfferParamsStruct = {
    assetContract: AddressLike;
    tokenId: BigNumberish;
    quantity: BigNumberish;
    currency: AddressLike;
    totalPrice: BigNumberish;
    expirationTimestamp: BigNumberish;
  };

  export type OfferParamsStructOutput = [
    assetContract: string,
    tokenId: bigint,
    quantity: bigint,
    currency: string,
    totalPrice: bigint,
    expirationTimestamp: bigint
  ] & {
    assetContract: string;
    tokenId: bigint;
    quantity: bigint;
    currency: string;
    totalPrice: bigint;
    expirationTimestamp: bigint;
  };
}

export interface IOffersInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOffer"
      | "cancelOffer"
      | "getAllOffers"
      | "getAllValidOffers"
      | "getOffer"
      | "makeOffer"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "AcceptedOffer" | "CancelledOffer" | "NewOffer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOffer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOffer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllOffers",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllValidOffers",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOffer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "makeOffer",
    values: [IOffers.OfferParamsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllOffers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllValidOffers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOffer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeOffer", data: BytesLike): Result;
}

export namespace AcceptedOfferEvent {
  export type InputTuple = [
    offeror: AddressLike,
    offerId: BigNumberish,
    assetContract: AddressLike,
    tokenId: BigNumberish,
    seller: AddressLike,
    quantityBought: BigNumberish,
    totalPricePaid: BigNumberish
  ];
  export type OutputTuple = [
    offeror: string,
    offerId: bigint,
    assetContract: string,
    tokenId: bigint,
    seller: string,
    quantityBought: bigint,
    totalPricePaid: bigint
  ];
  export interface OutputObject {
    offeror: string;
    offerId: bigint;
    assetContract: string;
    tokenId: bigint;
    seller: string;
    quantityBought: bigint;
    totalPricePaid: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CancelledOfferEvent {
  export type InputTuple = [offeror: AddressLike, offerId: BigNumberish];
  export type OutputTuple = [offeror: string, offerId: bigint];
  export interface OutputObject {
    offeror: string;
    offerId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewOfferEvent {
  export type InputTuple = [
    offeror: AddressLike,
    offerId: BigNumberish,
    assetContract: AddressLike,
    offer: IOffers.OfferStruct
  ];
  export type OutputTuple = [
    offeror: string,
    offerId: bigint,
    assetContract: string,
    offer: IOffers.OfferStructOutput
  ];
  export interface OutputObject {
    offeror: string;
    offerId: bigint;
    assetContract: string;
    offer: IOffers.OfferStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IOffers extends BaseContract {
  connect(runner?: ContractRunner | null): IOffers;
  waitForDeployment(): Promise<this>;

  interface: IOffersInterface;

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

  acceptOffer: TypedContractMethod<
    [_offerId: BigNumberish],
    [void],
    "nonpayable"
  >;

  cancelOffer: TypedContractMethod<
    [_offerId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getAllOffers: TypedContractMethod<
    [_startId: BigNumberish, _endId: BigNumberish],
    [IOffers.OfferStructOutput[]],
    "view"
  >;

  getAllValidOffers: TypedContractMethod<
    [_startId: BigNumberish, _endId: BigNumberish],
    [IOffers.OfferStructOutput[]],
    "view"
  >;

  getOffer: TypedContractMethod<
    [_offerId: BigNumberish],
    [IOffers.OfferStructOutput],
    "view"
  >;

  makeOffer: TypedContractMethod<
    [_params: IOffers.OfferParamsStruct],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOffer"
  ): TypedContractMethod<[_offerId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "cancelOffer"
  ): TypedContractMethod<[_offerId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getAllOffers"
  ): TypedContractMethod<
    [_startId: BigNumberish, _endId: BigNumberish],
    [IOffers.OfferStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAllValidOffers"
  ): TypedContractMethod<
    [_startId: BigNumberish, _endId: BigNumberish],
    [IOffers.OfferStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getOffer"
  ): TypedContractMethod<
    [_offerId: BigNumberish],
    [IOffers.OfferStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "makeOffer"
  ): TypedContractMethod<
    [_params: IOffers.OfferParamsStruct],
    [bigint],
    "nonpayable"
  >;

  getEvent(
    key: "AcceptedOffer"
  ): TypedContractEvent<
    AcceptedOfferEvent.InputTuple,
    AcceptedOfferEvent.OutputTuple,
    AcceptedOfferEvent.OutputObject
  >;
  getEvent(
    key: "CancelledOffer"
  ): TypedContractEvent<
    CancelledOfferEvent.InputTuple,
    CancelledOfferEvent.OutputTuple,
    CancelledOfferEvent.OutputObject
  >;
  getEvent(
    key: "NewOffer"
  ): TypedContractEvent<
    NewOfferEvent.InputTuple,
    NewOfferEvent.OutputTuple,
    NewOfferEvent.OutputObject
  >;

  filters: {
    "AcceptedOffer(address,uint256,address,uint256,address,uint256,uint256)": TypedContractEvent<
      AcceptedOfferEvent.InputTuple,
      AcceptedOfferEvent.OutputTuple,
      AcceptedOfferEvent.OutputObject
    >;
    AcceptedOffer: TypedContractEvent<
      AcceptedOfferEvent.InputTuple,
      AcceptedOfferEvent.OutputTuple,
      AcceptedOfferEvent.OutputObject
    >;

    "CancelledOffer(address,uint256)": TypedContractEvent<
      CancelledOfferEvent.InputTuple,
      CancelledOfferEvent.OutputTuple,
      CancelledOfferEvent.OutputObject
    >;
    CancelledOffer: TypedContractEvent<
      CancelledOfferEvent.InputTuple,
      CancelledOfferEvent.OutputTuple,
      CancelledOfferEvent.OutputObject
    >;

    "NewOffer(address,uint256,address,tuple)": TypedContractEvent<
      NewOfferEvent.InputTuple,
      NewOfferEvent.OutputTuple,
      NewOfferEvent.OutputObject
    >;
    NewOffer: TypedContractEvent<
      NewOfferEvent.InputTuple,
      NewOfferEvent.OutputTuple,
      NewOfferEvent.OutputObject
    >;
  };
}