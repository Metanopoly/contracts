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
} from "../../common";

export interface Staking1155BaseInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "claimRewards"
      | "contractURI"
      | "depositRewardTokens"
      | "getDefaultRewardsPerUnitTime"
      | "getDefaultTimeUnit"
      | "getRewardTokenBalance"
      | "getRewardsPerUnitTime"
      | "getStakeInfo"
      | "getStakeInfoForToken"
      | "getTimeUnit"
      | "indexedTokens"
      | "isIndexed"
      | "multicall"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "owner"
      | "rewardToken"
      | "setContractURI"
      | "setDefaultRewardsPerUnitTime"
      | "setDefaultTimeUnit"
      | "setOwner"
      | "setRewardsPerUnitTime"
      | "setTimeUnit"
      | "stake"
      | "stakers"
      | "stakersArray"
      | "stakingToken"
      | "supportsInterface"
      | "withdraw"
      | "withdrawRewardTokens"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ContractURIUpdated"
      | "OwnerUpdated"
      | "RewardsClaimed"
      | "TokensStaked"
      | "TokensWithdrawn"
      | "UpdatedDefaultRewardsPerUnitTime"
      | "UpdatedDefaultTimeUnit"
      | "UpdatedRewardsPerUnitTime"
      | "UpdatedTimeUnit"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositRewardTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDefaultRewardsPerUnitTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDefaultTimeUnit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardTokenBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardsPerUnitTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeInfo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeInfoForToken",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTimeUnit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "indexedTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isIndexed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setContractURI",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultRewardsPerUnitTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultTimeUnit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardsPerUnitTime",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTimeUnit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakers",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakersArray",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRewardTokens",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositRewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDefaultRewardsPerUnitTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDefaultTimeUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardsPerUnitTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeInfoForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimeUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "indexedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isIndexed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setContractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultRewardsPerUnitTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultTimeUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRewardsPerUnitTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTimeUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakersArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRewardTokens",
    data: BytesLike
  ): Result;
}

export namespace ContractURIUpdatedEvent {
  export type InputTuple = [prevURI: string, newURI: string];
  export type OutputTuple = [prevURI: string, newURI: string];
  export interface OutputObject {
    prevURI: string;
    newURI: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnerUpdatedEvent {
  export type InputTuple = [prevOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [prevOwner: string, newOwner: string];
  export interface OutputObject {
    prevOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardsClaimedEvent {
  export type InputTuple = [staker: AddressLike, rewardAmount: BigNumberish];
  export type OutputTuple = [staker: string, rewardAmount: bigint];
  export interface OutputObject {
    staker: string;
    rewardAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokensStakedEvent {
  export type InputTuple = [
    staker: AddressLike,
    tokenId: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [staker: string, tokenId: bigint, amount: bigint];
  export interface OutputObject {
    staker: string;
    tokenId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokensWithdrawnEvent {
  export type InputTuple = [
    staker: AddressLike,
    tokenId: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [staker: string, tokenId: bigint, amount: bigint];
  export interface OutputObject {
    staker: string;
    tokenId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedDefaultRewardsPerUnitTimeEvent {
  export type InputTuple = [
    oldRewardsPerUnitTime: BigNumberish,
    newRewardsPerUnitTime: BigNumberish
  ];
  export type OutputTuple = [
    oldRewardsPerUnitTime: bigint,
    newRewardsPerUnitTime: bigint
  ];
  export interface OutputObject {
    oldRewardsPerUnitTime: bigint;
    newRewardsPerUnitTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedDefaultTimeUnitEvent {
  export type InputTuple = [
    oldTimeUnit: BigNumberish,
    newTimeUnit: BigNumberish
  ];
  export type OutputTuple = [oldTimeUnit: bigint, newTimeUnit: bigint];
  export interface OutputObject {
    oldTimeUnit: bigint;
    newTimeUnit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedRewardsPerUnitTimeEvent {
  export type InputTuple = [
    _tokenId: BigNumberish,
    oldRewardsPerUnitTime: BigNumberish,
    newRewardsPerUnitTime: BigNumberish
  ];
  export type OutputTuple = [
    _tokenId: bigint,
    oldRewardsPerUnitTime: bigint,
    newRewardsPerUnitTime: bigint
  ];
  export interface OutputObject {
    _tokenId: bigint;
    oldRewardsPerUnitTime: bigint;
    newRewardsPerUnitTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedTimeUnitEvent {
  export type InputTuple = [
    _tokenId: BigNumberish,
    oldTimeUnit: BigNumberish,
    newTimeUnit: BigNumberish
  ];
  export type OutputTuple = [
    _tokenId: bigint,
    oldTimeUnit: bigint,
    newTimeUnit: bigint
  ];
  export interface OutputObject {
    _tokenId: bigint;
    oldTimeUnit: bigint;
    newTimeUnit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Staking1155Base extends BaseContract {
  connect(runner?: ContractRunner | null): Staking1155Base;
  waitForDeployment(): Promise<this>;

  interface: Staking1155BaseInterface;

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

  claimRewards: TypedContractMethod<
    [_tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  contractURI: TypedContractMethod<[], [string], "view">;

  depositRewardTokens: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "payable"
  >;

  getDefaultRewardsPerUnitTime: TypedContractMethod<[], [bigint], "view">;

  getDefaultTimeUnit: TypedContractMethod<[], [bigint], "view">;

  getRewardTokenBalance: TypedContractMethod<[], [bigint], "view">;

  getRewardsPerUnitTime: TypedContractMethod<
    [_tokenId: BigNumberish],
    [bigint],
    "view"
  >;

  getStakeInfo: TypedContractMethod<
    [_staker: AddressLike],
    [
      [bigint[], bigint[], bigint] & {
        _tokensStaked: bigint[];
        _tokenAmounts: bigint[];
        _totalRewards: bigint;
      }
    ],
    "view"
  >;

  getStakeInfoForToken: TypedContractMethod<
    [_tokenId: BigNumberish, _staker: AddressLike],
    [[bigint, bigint] & { _tokensStaked: bigint; _rewards: bigint }],
    "view"
  >;

  getTimeUnit: TypedContractMethod<[_tokenId: BigNumberish], [bigint], "view">;

  indexedTokens: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  isIndexed: TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;

  multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;

  onERC1155BatchReceived: TypedContractMethod<
    [
      operator: AddressLike,
      from: AddressLike,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  onERC1155Received: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  rewardToken: TypedContractMethod<[], [string], "view">;

  setContractURI: TypedContractMethod<[_uri: string], [void], "nonpayable">;

  setDefaultRewardsPerUnitTime: TypedContractMethod<
    [_defaultRewardsPerUnitTime: BigNumberish],
    [void],
    "nonpayable"
  >;

  setDefaultTimeUnit: TypedContractMethod<
    [_defaultTimeUnit: BigNumberish],
    [void],
    "nonpayable"
  >;

  setOwner: TypedContractMethod<[_newOwner: AddressLike], [void], "nonpayable">;

  setRewardsPerUnitTime: TypedContractMethod<
    [_tokenId: BigNumberish, _rewardsPerUnitTime: BigNumberish],
    [void],
    "nonpayable"
  >;

  setTimeUnit: TypedContractMethod<
    [_tokenId: BigNumberish, _timeUnit: BigNumberish],
    [void],
    "nonpayable"
  >;

  stake: TypedContractMethod<
    [_tokenId: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  stakers: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        conditionIdOflastUpdate: bigint;
        amountStaked: bigint;
        timeOfLastUpdate: bigint;
        unclaimedRewards: bigint;
      }
    ],
    "view"
  >;

  stakersArray: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [string],
    "view"
  >;

  stakingToken: TypedContractMethod<[], [string], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  withdraw: TypedContractMethod<
    [_tokenId: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawRewardTokens: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "claimRewards"
  ): TypedContractMethod<[_tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "contractURI"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "depositRewardTokens"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "getDefaultRewardsPerUnitTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getDefaultTimeUnit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRewardTokenBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRewardsPerUnitTime"
  ): TypedContractMethod<[_tokenId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getStakeInfo"
  ): TypedContractMethod<
    [_staker: AddressLike],
    [
      [bigint[], bigint[], bigint] & {
        _tokensStaked: bigint[];
        _tokenAmounts: bigint[];
        _totalRewards: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getStakeInfoForToken"
  ): TypedContractMethod<
    [_tokenId: BigNumberish, _staker: AddressLike],
    [[bigint, bigint] & { _tokensStaked: bigint; _rewards: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTimeUnit"
  ): TypedContractMethod<[_tokenId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "indexedTokens"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "isIndexed"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "multicall"
  ): TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
  getFunction(
    nameOrSignature: "onERC1155BatchReceived"
  ): TypedContractMethod<
    [
      operator: AddressLike,
      from: AddressLike,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC1155Received"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rewardToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setContractURI"
  ): TypedContractMethod<[_uri: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setDefaultRewardsPerUnitTime"
  ): TypedContractMethod<
    [_defaultRewardsPerUnitTime: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setDefaultTimeUnit"
  ): TypedContractMethod<
    [_defaultTimeUnit: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[_newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRewardsPerUnitTime"
  ): TypedContractMethod<
    [_tokenId: BigNumberish, _rewardsPerUnitTime: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTimeUnit"
  ): TypedContractMethod<
    [_tokenId: BigNumberish, _timeUnit: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<
    [_tokenId: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stakers"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        conditionIdOflastUpdate: bigint;
        amountStaked: bigint;
        timeOfLastUpdate: bigint;
        unclaimedRewards: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "stakersArray"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "stakingToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [_tokenId: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawRewardTokens"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "ContractURIUpdated"
  ): TypedContractEvent<
    ContractURIUpdatedEvent.InputTuple,
    ContractURIUpdatedEvent.OutputTuple,
    ContractURIUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnerUpdated"
  ): TypedContractEvent<
    OwnerUpdatedEvent.InputTuple,
    OwnerUpdatedEvent.OutputTuple,
    OwnerUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "RewardsClaimed"
  ): TypedContractEvent<
    RewardsClaimedEvent.InputTuple,
    RewardsClaimedEvent.OutputTuple,
    RewardsClaimedEvent.OutputObject
  >;
  getEvent(
    key: "TokensStaked"
  ): TypedContractEvent<
    TokensStakedEvent.InputTuple,
    TokensStakedEvent.OutputTuple,
    TokensStakedEvent.OutputObject
  >;
  getEvent(
    key: "TokensWithdrawn"
  ): TypedContractEvent<
    TokensWithdrawnEvent.InputTuple,
    TokensWithdrawnEvent.OutputTuple,
    TokensWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedDefaultRewardsPerUnitTime"
  ): TypedContractEvent<
    UpdatedDefaultRewardsPerUnitTimeEvent.InputTuple,
    UpdatedDefaultRewardsPerUnitTimeEvent.OutputTuple,
    UpdatedDefaultRewardsPerUnitTimeEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedDefaultTimeUnit"
  ): TypedContractEvent<
    UpdatedDefaultTimeUnitEvent.InputTuple,
    UpdatedDefaultTimeUnitEvent.OutputTuple,
    UpdatedDefaultTimeUnitEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedRewardsPerUnitTime"
  ): TypedContractEvent<
    UpdatedRewardsPerUnitTimeEvent.InputTuple,
    UpdatedRewardsPerUnitTimeEvent.OutputTuple,
    UpdatedRewardsPerUnitTimeEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedTimeUnit"
  ): TypedContractEvent<
    UpdatedTimeUnitEvent.InputTuple,
    UpdatedTimeUnitEvent.OutputTuple,
    UpdatedTimeUnitEvent.OutputObject
  >;

  filters: {
    "ContractURIUpdated(string,string)": TypedContractEvent<
      ContractURIUpdatedEvent.InputTuple,
      ContractURIUpdatedEvent.OutputTuple,
      ContractURIUpdatedEvent.OutputObject
    >;
    ContractURIUpdated: TypedContractEvent<
      ContractURIUpdatedEvent.InputTuple,
      ContractURIUpdatedEvent.OutputTuple,
      ContractURIUpdatedEvent.OutputObject
    >;

    "OwnerUpdated(address,address)": TypedContractEvent<
      OwnerUpdatedEvent.InputTuple,
      OwnerUpdatedEvent.OutputTuple,
      OwnerUpdatedEvent.OutputObject
    >;
    OwnerUpdated: TypedContractEvent<
      OwnerUpdatedEvent.InputTuple,
      OwnerUpdatedEvent.OutputTuple,
      OwnerUpdatedEvent.OutputObject
    >;

    "RewardsClaimed(address,uint256)": TypedContractEvent<
      RewardsClaimedEvent.InputTuple,
      RewardsClaimedEvent.OutputTuple,
      RewardsClaimedEvent.OutputObject
    >;
    RewardsClaimed: TypedContractEvent<
      RewardsClaimedEvent.InputTuple,
      RewardsClaimedEvent.OutputTuple,
      RewardsClaimedEvent.OutputObject
    >;

    "TokensStaked(address,uint256,uint256)": TypedContractEvent<
      TokensStakedEvent.InputTuple,
      TokensStakedEvent.OutputTuple,
      TokensStakedEvent.OutputObject
    >;
    TokensStaked: TypedContractEvent<
      TokensStakedEvent.InputTuple,
      TokensStakedEvent.OutputTuple,
      TokensStakedEvent.OutputObject
    >;

    "TokensWithdrawn(address,uint256,uint256)": TypedContractEvent<
      TokensWithdrawnEvent.InputTuple,
      TokensWithdrawnEvent.OutputTuple,
      TokensWithdrawnEvent.OutputObject
    >;
    TokensWithdrawn: TypedContractEvent<
      TokensWithdrawnEvent.InputTuple,
      TokensWithdrawnEvent.OutputTuple,
      TokensWithdrawnEvent.OutputObject
    >;

    "UpdatedDefaultRewardsPerUnitTime(uint256,uint256)": TypedContractEvent<
      UpdatedDefaultRewardsPerUnitTimeEvent.InputTuple,
      UpdatedDefaultRewardsPerUnitTimeEvent.OutputTuple,
      UpdatedDefaultRewardsPerUnitTimeEvent.OutputObject
    >;
    UpdatedDefaultRewardsPerUnitTime: TypedContractEvent<
      UpdatedDefaultRewardsPerUnitTimeEvent.InputTuple,
      UpdatedDefaultRewardsPerUnitTimeEvent.OutputTuple,
      UpdatedDefaultRewardsPerUnitTimeEvent.OutputObject
    >;

    "UpdatedDefaultTimeUnit(uint256,uint256)": TypedContractEvent<
      UpdatedDefaultTimeUnitEvent.InputTuple,
      UpdatedDefaultTimeUnitEvent.OutputTuple,
      UpdatedDefaultTimeUnitEvent.OutputObject
    >;
    UpdatedDefaultTimeUnit: TypedContractEvent<
      UpdatedDefaultTimeUnitEvent.InputTuple,
      UpdatedDefaultTimeUnitEvent.OutputTuple,
      UpdatedDefaultTimeUnitEvent.OutputObject
    >;

    "UpdatedRewardsPerUnitTime(uint256,uint256,uint256)": TypedContractEvent<
      UpdatedRewardsPerUnitTimeEvent.InputTuple,
      UpdatedRewardsPerUnitTimeEvent.OutputTuple,
      UpdatedRewardsPerUnitTimeEvent.OutputObject
    >;
    UpdatedRewardsPerUnitTime: TypedContractEvent<
      UpdatedRewardsPerUnitTimeEvent.InputTuple,
      UpdatedRewardsPerUnitTimeEvent.OutputTuple,
      UpdatedRewardsPerUnitTimeEvent.OutputObject
    >;

    "UpdatedTimeUnit(uint256,uint256,uint256)": TypedContractEvent<
      UpdatedTimeUnitEvent.InputTuple,
      UpdatedTimeUnitEvent.OutputTuple,
      UpdatedTimeUnitEvent.OutputObject
    >;
    UpdatedTimeUnit: TypedContractEvent<
      UpdatedTimeUnitEvent.InputTuple,
      UpdatedTimeUnitEvent.OutputTuple,
      UpdatedTimeUnitEvent.OutputObject
    >;
  };
}