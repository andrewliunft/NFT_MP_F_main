/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface AuctionInterface extends utils.Interface {
  functions: {
    "active()": FunctionFragment;
    "addressToBid(address)": FunctionFragment;
    "authorAddr()": FunctionFragment;
    "bid()": FunctionFragment;
    "endTime()": FunctionFragment;
    "highestBid()": FunctionFragment;
    "highestBidder()": FunctionFragment;
    "initialize(address,uint256,uint256,address,address)": FunctionFragment;
    "isActive()": FunctionFragment;
    "marketplaceAddr()": FunctionFragment;
    "nativeNftAddr()": FunctionFragment;
    "nft()": FunctionFragment;
    "nftId()": FunctionFragment;
    "resolve()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "active"
      | "addressToBid"
      | "authorAddr"
      | "bid"
      | "endTime"
      | "highestBid"
      | "highestBidder"
      | "initialize"
      | "isActive"
      | "marketplaceAddr"
      | "nativeNftAddr"
      | "nft"
      | "nftId"
      | "resolve"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "active", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addressToBid",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "authorAddr",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bid", values?: undefined): string;
  encodeFunctionData(functionFragment: "endTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "highestBid",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "highestBidder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "isActive", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "marketplaceAddr",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nativeNftAddr",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(functionFragment: "nftId", values?: undefined): string;
  encodeFunctionData(functionFragment: "resolve", values?: undefined): string;

  decodeFunctionResult(functionFragment: "active", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addressToBid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "authorAddr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "highestBid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "highestBidder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isActive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marketplaceAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nativeNftAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nftId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "resolve", data: BytesLike): Result;

  events: {
    "AuctionActivated(address,address,uint256,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "NewBid(address,address,uint256)": EventFragment;
    "Resolved(address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionActivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewBid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Resolved"): EventFragment;
}

export interface AuctionActivatedEventObject {
  nftContractAddress: string;
  authorAddress: string;
  tokenId: BigNumber;
  endTime: BigNumber;
}
export type AuctionActivatedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  AuctionActivatedEventObject
>;

export type AuctionActivatedEventFilter =
  TypedEventFilter<AuctionActivatedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface NewBidEventObject {
  nftContractAddress: string;
  bidder: string;
  amount: BigNumber;
}
export type NewBidEvent = TypedEvent<
  [string, string, BigNumber],
  NewBidEventObject
>;

export type NewBidEventFilter = TypedEventFilter<NewBidEvent>;

export interface ResolvedEventObject {
  nftContractAddress: string;
  tokenId: BigNumber;
  winner: string;
}
export type ResolvedEvent = TypedEvent<
  [string, BigNumber, string],
  ResolvedEventObject
>;

export type ResolvedEventFilter = TypedEventFilter<ResolvedEvent>;

export interface Auction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AuctionInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    active(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addressToBid(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    authorAddr(overrides?: CallOverrides): Promise<[string]>;

    bid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    highestBid(overrides?: CallOverrides): Promise<[BigNumber]>;

    highestBidder(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _nftContract: PromiseOrValue<string>,
      _nftId: PromiseOrValue<BigNumberish>,
      _startingBid: PromiseOrValue<BigNumberish>,
      _marketplaceAddr: PromiseOrValue<string>,
      _nativeNftAddr: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isActive(overrides?: CallOverrides): Promise<[boolean]>;

    marketplaceAddr(overrides?: CallOverrides): Promise<[string]>;

    nativeNftAddr(overrides?: CallOverrides): Promise<[string]>;

    nft(overrides?: CallOverrides): Promise<[string]>;

    nftId(overrides?: CallOverrides): Promise<[BigNumber]>;

    resolve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  active(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addressToBid(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  authorAddr(overrides?: CallOverrides): Promise<string>;

  bid(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endTime(overrides?: CallOverrides): Promise<BigNumber>;

  highestBid(overrides?: CallOverrides): Promise<BigNumber>;

  highestBidder(overrides?: CallOverrides): Promise<string>;

  initialize(
    _nftContract: PromiseOrValue<string>,
    _nftId: PromiseOrValue<BigNumberish>,
    _startingBid: PromiseOrValue<BigNumberish>,
    _marketplaceAddr: PromiseOrValue<string>,
    _nativeNftAddr: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isActive(overrides?: CallOverrides): Promise<boolean>;

  marketplaceAddr(overrides?: CallOverrides): Promise<string>;

  nativeNftAddr(overrides?: CallOverrides): Promise<string>;

  nft(overrides?: CallOverrides): Promise<string>;

  nftId(overrides?: CallOverrides): Promise<BigNumber>;

  resolve(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    active(overrides?: CallOverrides): Promise<void>;

    addressToBid(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    authorAddr(overrides?: CallOverrides): Promise<string>;

    bid(overrides?: CallOverrides): Promise<void>;

    endTime(overrides?: CallOverrides): Promise<BigNumber>;

    highestBid(overrides?: CallOverrides): Promise<BigNumber>;

    highestBidder(overrides?: CallOverrides): Promise<string>;

    initialize(
      _nftContract: PromiseOrValue<string>,
      _nftId: PromiseOrValue<BigNumberish>,
      _startingBid: PromiseOrValue<BigNumberish>,
      _marketplaceAddr: PromiseOrValue<string>,
      _nativeNftAddr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isActive(overrides?: CallOverrides): Promise<boolean>;

    marketplaceAddr(overrides?: CallOverrides): Promise<string>;

    nativeNftAddr(overrides?: CallOverrides): Promise<string>;

    nft(overrides?: CallOverrides): Promise<string>;

    nftId(overrides?: CallOverrides): Promise<BigNumber>;

    resolve(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AuctionActivated(address,address,uint256,uint256)"(
      nftContractAddress?: PromiseOrValue<string> | null,
      authorAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      endTime?: null
    ): AuctionActivatedEventFilter;
    AuctionActivated(
      nftContractAddress?: PromiseOrValue<string> | null,
      authorAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      endTime?: null
    ): AuctionActivatedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "NewBid(address,address,uint256)"(
      nftContractAddress?: PromiseOrValue<string> | null,
      bidder?: PromiseOrValue<string> | null,
      amount?: null
    ): NewBidEventFilter;
    NewBid(
      nftContractAddress?: PromiseOrValue<string> | null,
      bidder?: PromiseOrValue<string> | null,
      amount?: null
    ): NewBidEventFilter;

    "Resolved(address,uint256,address)"(
      nftContractAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      winner?: PromiseOrValue<string> | null
    ): ResolvedEventFilter;
    Resolved(
      nftContractAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      winner?: PromiseOrValue<string> | null
    ): ResolvedEventFilter;
  };

  estimateGas: {
    active(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addressToBid(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    authorAddr(overrides?: CallOverrides): Promise<BigNumber>;

    bid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endTime(overrides?: CallOverrides): Promise<BigNumber>;

    highestBid(overrides?: CallOverrides): Promise<BigNumber>;

    highestBidder(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _nftContract: PromiseOrValue<string>,
      _nftId: PromiseOrValue<BigNumberish>,
      _startingBid: PromiseOrValue<BigNumberish>,
      _marketplaceAddr: PromiseOrValue<string>,
      _nativeNftAddr: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isActive(overrides?: CallOverrides): Promise<BigNumber>;

    marketplaceAddr(overrides?: CallOverrides): Promise<BigNumber>;

    nativeNftAddr(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    nftId(overrides?: CallOverrides): Promise<BigNumber>;

    resolve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    active(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addressToBid(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    authorAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    highestBid(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    highestBidder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _nftContract: PromiseOrValue<string>,
      _nftId: PromiseOrValue<BigNumberish>,
      _startingBid: PromiseOrValue<BigNumberish>,
      _marketplaceAddr: PromiseOrValue<string>,
      _nativeNftAddr: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marketplaceAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nativeNftAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
