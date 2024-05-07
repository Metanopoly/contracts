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

export declare namespace IMarketplace {
  export type ListingStruct = {
    listingId: BigNumberish;
    tokenOwner: AddressLike;
    assetContract: AddressLike;
    tokenId: BigNumberish;
    startTime: BigNumberish;
    endTime: BigNumberish;
    quantity: BigNumberish;
    currency: AddressLike;
    reservePricePerToken: BigNumberish;
    buyoutPricePerToken: BigNumberish;
    tokenType: BigNumberish;
    listingType: BigNumberish;
  };

  export type ListingStructOutput = [
    listingId: bigint,
    tokenOwner: string,
    assetContract: string,
    tokenId: bigint,
    startTime: bigint,
    endTime: bigint,
    quantity: bigint,
    currency: string,
    reservePricePerToken: bigint,
    buyoutPricePerToken: bigint,
    tokenType: bigint,
    listingType: bigint
  ] & {
    listingId: bigint;
    tokenOwner: string;
    assetContract: string;
    tokenId: bigint;
    startTime: bigint;
    endTime: bigint;
    quantity: bigint;
    currency: string;
    reservePricePerToken: bigint;
    buyoutPricePerToken: bigint;
    tokenType: bigint;
    listingType: bigint;
  };

  export type ListingParametersStruct = {
    assetContract: AddressLike;
    tokenId: BigNumberish;
    startTime: BigNumberish;
    secondsUntilEndTime: BigNumberish;
    quantityToList: BigNumberish;
    currencyToAccept: AddressLike;
    reservePricePerToken: BigNumberish;
    buyoutPricePerToken: BigNumberish;
    listingType: BigNumberish;
  };

  export type ListingParametersStructOutput = [
    assetContract: string,
    tokenId: bigint,
    startTime: bigint,
    secondsUntilEndTime: bigint,
    quantityToList: bigint,
    currencyToAccept: string,
    reservePricePerToken: bigint,
    buyoutPricePerToken: bigint,
    listingType: bigint
  ] & {
    assetContract: string;
    tokenId: bigint;
    startTime: bigint;
    secondsUntilEndTime: bigint;
    quantityToList: bigint;
    currencyToAccept: string;
    reservePricePerToken: bigint;
    buyoutPricePerToken: bigint;
    listingType: bigint;
  };
}

export interface IMarketplaceInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOffer"
      | "buy"
      | "cancelDirectListing"
      | "closeAuction"
      | "contractType"
      | "contractURI"
      | "contractVersion"
      | "createListing"
      | "getPlatformFeeInfo"
      | "offer"
      | "setContractURI"
      | "setPlatformFeeInfo"
      | "updateListing"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AuctionBuffersUpdated"
      | "AuctionClosed"
      | "FlatPlatformFeeUpdated"
      | "ListingAdded"
      | "ListingRemoved"
      | "ListingUpdated"
      | "NewOffer"
      | "NewSale"
      | "PlatformFeeInfoUpdated"
      | "PlatformFeeTypeUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOffer",
    values: [BigNumberish, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [BigNumberish, AddressLike, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelDirectListing",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closeAuction",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "contractType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createListing",
    values: [IMarketplace.ListingParametersStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlatformFeeInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "offer",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setContractURI",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformFeeInfo",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateListing",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelDirectListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlatformFeeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "offer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setContractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformFeeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateListing",
    data: BytesLike
  ): Result;
}

export namespace AuctionBuffersUpdatedEvent {
  export type InputTuple = [
    timeBuffer: BigNumberish,
    bidBufferBps: BigNumberish
  ];
  export type OutputTuple = [timeBuffer: bigint, bidBufferBps: bigint];
  export interface OutputObject {
    timeBuffer: bigint;
    bidBufferBps: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AuctionClosedEvent {
  export type InputTuple = [
    listingId: BigNumberish,
    closer: AddressLike,
    cancelled: boolean,
    auctionCreator: AddressLike,
    winningBidder: AddressLike
  ];
  export type OutputTuple = [
    listingId: bigint,
    closer: string,
    cancelled: boolean,
    auctionCreator: string,
    winningBidder: string
  ];
  export interface OutputObject {
    listingId: bigint;
    closer: string;
    cancelled: boolean;
    auctionCreator: string;
    winningBidder: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace ListingAddedEvent {
  export type InputTuple = [
    listingId: BigNumberish,
    assetContract: AddressLike,
    lister: AddressLike,
    listing: IMarketplace.ListingStruct
  ];
  export type OutputTuple = [
    listingId: bigint,
    assetContract: string,
    lister: string,
    listing: IMarketplace.ListingStructOutput
  ];
  export interface OutputObject {
    listingId: bigint;
    assetContract: string;
    lister: string;
    listing: IMarketplace.ListingStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ListingRemovedEvent {
  export type InputTuple = [
    listingId: BigNumberish,
    listingCreator: AddressLike
  ];
  export type OutputTuple = [listingId: bigint, listingCreator: string];
  export interface OutputObject {
    listingId: bigint;
    listingCreator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ListingUpdatedEvent {
  export type InputTuple = [
    listingId: BigNumberish,
    listingCreator: AddressLike
  ];
  export type OutputTuple = [listingId: bigint, listingCreator: string];
  export interface OutputObject {
    listingId: bigint;
    listingCreator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewOfferEvent {
  export type InputTuple = [
    listingId: BigNumberish,
    offeror: AddressLike,
    listingType: BigNumberish,
    quantityWanted: BigNumberish,
    totalOfferAmount: BigNumberish,
    currency: AddressLike
  ];
  export type OutputTuple = [
    listingId: bigint,
    offeror: string,
    listingType: bigint,
    quantityWanted: bigint,
    totalOfferAmount: bigint,
    currency: string
  ];
  export interface OutputObject {
    listingId: bigint;
    offeror: string;
    listingType: bigint;
    quantityWanted: bigint;
    totalOfferAmount: bigint;
    currency: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewSaleEvent {
  export type InputTuple = [
    listingId: BigNumberish,
    assetContract: AddressLike,
    lister: AddressLike,
    buyer: AddressLike,
    quantityBought: BigNumberish,
    totalPricePaid: BigNumberish
  ];
  export type OutputTuple = [
    listingId: bigint,
    assetContract: string,
    lister: string,
    buyer: string,
    quantityBought: bigint,
    totalPricePaid: bigint
  ];
  export interface OutputObject {
    listingId: bigint;
    assetContract: string;
    lister: string;
    buyer: string;
    quantityBought: bigint;
    totalPricePaid: bigint;
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

export interface IMarketplace extends BaseContract {
  connect(runner?: ContractRunner | null): IMarketplace;
  waitForDeployment(): Promise<this>;

  interface: IMarketplaceInterface;

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
    [
      _listingId: BigNumberish,
      _offeror: AddressLike,
      _currency: AddressLike,
      _totalPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  buy: TypedContractMethod<
    [
      _listingId: BigNumberish,
      _buyFor: AddressLike,
      _quantity: BigNumberish,
      _currency: AddressLike,
      _totalPrice: BigNumberish
    ],
    [void],
    "payable"
  >;

  cancelDirectListing: TypedContractMethod<
    [_listingId: BigNumberish],
    [void],
    "nonpayable"
  >;

  closeAuction: TypedContractMethod<
    [_listingId: BigNumberish, _closeFor: AddressLike],
    [void],
    "nonpayable"
  >;

  contractType: TypedContractMethod<[], [string], "view">;

  contractURI: TypedContractMethod<[], [string], "view">;

  contractVersion: TypedContractMethod<[], [bigint], "view">;

  createListing: TypedContractMethod<
    [_params: IMarketplace.ListingParametersStruct],
    [void],
    "nonpayable"
  >;

  getPlatformFeeInfo: TypedContractMethod<[], [[string, bigint]], "view">;

  offer: TypedContractMethod<
    [
      _listingId: BigNumberish,
      _quantityWanted: BigNumberish,
      _currency: AddressLike,
      _pricePerToken: BigNumberish,
      _expirationTimestamp: BigNumberish
    ],
    [void],
    "payable"
  >;

  setContractURI: TypedContractMethod<[_uri: string], [void], "nonpayable">;

  setPlatformFeeInfo: TypedContractMethod<
    [_platformFeeRecipient: AddressLike, _platformFeeBps: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateListing: TypedContractMethod<
    [
      _listingId: BigNumberish,
      _quantityToList: BigNumberish,
      _reservePricePerToken: BigNumberish,
      _buyoutPricePerToken: BigNumberish,
      _currencyToAccept: AddressLike,
      _startTime: BigNumberish,
      _secondsUntilEndTime: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOffer"
  ): TypedContractMethod<
    [
      _listingId: BigNumberish,
      _offeror: AddressLike,
      _currency: AddressLike,
      _totalPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "buy"
  ): TypedContractMethod<
    [
      _listingId: BigNumberish,
      _buyFor: AddressLike,
      _quantity: BigNumberish,
      _currency: AddressLike,
      _totalPrice: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "cancelDirectListing"
  ): TypedContractMethod<[_listingId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "closeAuction"
  ): TypedContractMethod<
    [_listingId: BigNumberish, _closeFor: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "contractType"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "contractURI"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "contractVersion"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "createListing"
  ): TypedContractMethod<
    [_params: IMarketplace.ListingParametersStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getPlatformFeeInfo"
  ): TypedContractMethod<[], [[string, bigint]], "view">;
  getFunction(
    nameOrSignature: "offer"
  ): TypedContractMethod<
    [
      _listingId: BigNumberish,
      _quantityWanted: BigNumberish,
      _currency: AddressLike,
      _pricePerToken: BigNumberish,
      _expirationTimestamp: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setContractURI"
  ): TypedContractMethod<[_uri: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPlatformFeeInfo"
  ): TypedContractMethod<
    [_platformFeeRecipient: AddressLike, _platformFeeBps: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateListing"
  ): TypedContractMethod<
    [
      _listingId: BigNumberish,
      _quantityToList: BigNumberish,
      _reservePricePerToken: BigNumberish,
      _buyoutPricePerToken: BigNumberish,
      _currencyToAccept: AddressLike,
      _startTime: BigNumberish,
      _secondsUntilEndTime: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "AuctionBuffersUpdated"
  ): TypedContractEvent<
    AuctionBuffersUpdatedEvent.InputTuple,
    AuctionBuffersUpdatedEvent.OutputTuple,
    AuctionBuffersUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "AuctionClosed"
  ): TypedContractEvent<
    AuctionClosedEvent.InputTuple,
    AuctionClosedEvent.OutputTuple,
    AuctionClosedEvent.OutputObject
  >;
  getEvent(
    key: "FlatPlatformFeeUpdated"
  ): TypedContractEvent<
    FlatPlatformFeeUpdatedEvent.InputTuple,
    FlatPlatformFeeUpdatedEvent.OutputTuple,
    FlatPlatformFeeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "ListingAdded"
  ): TypedContractEvent<
    ListingAddedEvent.InputTuple,
    ListingAddedEvent.OutputTuple,
    ListingAddedEvent.OutputObject
  >;
  getEvent(
    key: "ListingRemoved"
  ): TypedContractEvent<
    ListingRemovedEvent.InputTuple,
    ListingRemovedEvent.OutputTuple,
    ListingRemovedEvent.OutputObject
  >;
  getEvent(
    key: "ListingUpdated"
  ): TypedContractEvent<
    ListingUpdatedEvent.InputTuple,
    ListingUpdatedEvent.OutputTuple,
    ListingUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "NewOffer"
  ): TypedContractEvent<
    NewOfferEvent.InputTuple,
    NewOfferEvent.OutputTuple,
    NewOfferEvent.OutputObject
  >;
  getEvent(
    key: "NewSale"
  ): TypedContractEvent<
    NewSaleEvent.InputTuple,
    NewSaleEvent.OutputTuple,
    NewSaleEvent.OutputObject
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
    "AuctionBuffersUpdated(uint256,uint256)": TypedContractEvent<
      AuctionBuffersUpdatedEvent.InputTuple,
      AuctionBuffersUpdatedEvent.OutputTuple,
      AuctionBuffersUpdatedEvent.OutputObject
    >;
    AuctionBuffersUpdated: TypedContractEvent<
      AuctionBuffersUpdatedEvent.InputTuple,
      AuctionBuffersUpdatedEvent.OutputTuple,
      AuctionBuffersUpdatedEvent.OutputObject
    >;

    "AuctionClosed(uint256,address,bool,address,address)": TypedContractEvent<
      AuctionClosedEvent.InputTuple,
      AuctionClosedEvent.OutputTuple,
      AuctionClosedEvent.OutputObject
    >;
    AuctionClosed: TypedContractEvent<
      AuctionClosedEvent.InputTuple,
      AuctionClosedEvent.OutputTuple,
      AuctionClosedEvent.OutputObject
    >;

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

    "ListingAdded(uint256,address,address,tuple)": TypedContractEvent<
      ListingAddedEvent.InputTuple,
      ListingAddedEvent.OutputTuple,
      ListingAddedEvent.OutputObject
    >;
    ListingAdded: TypedContractEvent<
      ListingAddedEvent.InputTuple,
      ListingAddedEvent.OutputTuple,
      ListingAddedEvent.OutputObject
    >;

    "ListingRemoved(uint256,address)": TypedContractEvent<
      ListingRemovedEvent.InputTuple,
      ListingRemovedEvent.OutputTuple,
      ListingRemovedEvent.OutputObject
    >;
    ListingRemoved: TypedContractEvent<
      ListingRemovedEvent.InputTuple,
      ListingRemovedEvent.OutputTuple,
      ListingRemovedEvent.OutputObject
    >;

    "ListingUpdated(uint256,address)": TypedContractEvent<
      ListingUpdatedEvent.InputTuple,
      ListingUpdatedEvent.OutputTuple,
      ListingUpdatedEvent.OutputObject
    >;
    ListingUpdated: TypedContractEvent<
      ListingUpdatedEvent.InputTuple,
      ListingUpdatedEvent.OutputTuple,
      ListingUpdatedEvent.OutputObject
    >;

    "NewOffer(uint256,address,uint8,uint256,uint256,address)": TypedContractEvent<
      NewOfferEvent.InputTuple,
      NewOfferEvent.OutputTuple,
      NewOfferEvent.OutputObject
    >;
    NewOffer: TypedContractEvent<
      NewOfferEvent.InputTuple,
      NewOfferEvent.OutputTuple,
      NewOfferEvent.OutputObject
    >;

    "NewSale(uint256,address,address,address,uint256,uint256)": TypedContractEvent<
      NewSaleEvent.InputTuple,
      NewSaleEvent.OutputTuple,
      NewSaleEvent.OutputObject
    >;
    NewSale: TypedContractEvent<
      NewSaleEvent.InputTuple,
      NewSaleEvent.OutputTuple,
      NewSaleEvent.OutputObject
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