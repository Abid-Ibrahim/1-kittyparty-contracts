/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface KittyPartyYieldGeneratorZapperInterface
  extends ethers.utils.Interface {
  functions: {
    "MASK()": FunctionFragment;
    "ZapInContract()": FunctionFragment;
    "ZapOutContract()": FunctionFragment;
    "__KittyPartyYieldGeneratorZapper_init(address)": FunctionFragment;
    "createLockedValue(bytes)": FunctionFragment;
    "kittyPartyYieldInfo(address)": FunctionFragment;
    "lockedAmount(address)": FunctionFragment;
    "lockedPool(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAllowanceZapIn()": FunctionFragment;
    "setAllowanceZapOut()": FunctionFragment;
    "setPartyInfo(address,address)": FunctionFragment;
    "setPlatformDepositContractAddress(address)": FunctionFragment;
    "setPlatformRewardContractAddress(address,address)": FunctionFragment;
    "setPlatformWithdrawContractAddress(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treasuryAddress()": FunctionFragment;
    "unwindLockedValue(bytes)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
    "yieldGenerated(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "MASK", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ZapInContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZapOutContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "__KittyPartyYieldGeneratorZapper_init",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "createLockedValue",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "kittyPartyYieldInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lockedAmount",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "lockedPool", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowanceZapIn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowanceZapOut",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPartyInfo",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformDepositContractAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformRewardContractAddress",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformWithdrawContractAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "treasuryAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unwindLockedValue",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "yieldGenerated",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "MASK", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ZapInContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ZapOutContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "__KittyPartyYieldGeneratorZapper_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createLockedValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "kittyPartyYieldInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockedPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAllowanceZapIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAllowanceZapOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPartyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformDepositContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformRewardContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformWithdrawContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "treasuryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unwindLockedValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "yieldGenerated",
    data: BytesLike
  ): Result;

  events: {
    "KittyPartyReadyToYield(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "KittyPartyReadyToYield"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class KittyPartyYieldGeneratorZapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: KittyPartyYieldGeneratorZapperInterface;

  functions: {
    MASK(overrides?: CallOverrides): Promise<[BigNumber]>;

    ZapInContract(overrides?: CallOverrides): Promise<[string]>;

    ZapOutContract(overrides?: CallOverrides): Promise<[string]>;

    __KittyPartyYieldGeneratorZapper_init(
      treasuryContractParam: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createLockedValue(
      zapCallData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    kittyPartyYieldInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, string] & {
        lockedAmount: BigNumber;
        yieldGeneratedInLastRound: BigNumber;
        sellTokenAddress: string;
        poolAddress: string;
        lpTokenAddress: string;
      }
    >;

    lockedAmount(
      kittyParty: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { totalLockedValue: BigNumber }>;

    lockedPool(
      kittyParty: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAllowanceZapIn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAllowanceZapOut(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPartyInfo(
      _sellTokenAddress: string,
      _lpTokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPlatformDepositContractAddress(
      _zapInContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPlatformRewardContractAddress(
      arg0: string,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPlatformWithdrawContractAddress(
      _zapOutContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    treasuryAddress(
      overrides?: CallOverrides
    ): Promise<[string] & { treasuryContractAddress: string }>;

    unwindLockedValue(
      zapCallData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    yieldGenerated(
      kittyParty: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { yieldGeneratedInLastRound: BigNumber }>;
  };

  MASK(overrides?: CallOverrides): Promise<BigNumber>;

  ZapInContract(overrides?: CallOverrides): Promise<string>;

  ZapOutContract(overrides?: CallOverrides): Promise<string>;

  __KittyPartyYieldGeneratorZapper_init(
    treasuryContractParam: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createLockedValue(
    zapCallData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  kittyPartyYieldInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, string, string] & {
      lockedAmount: BigNumber;
      yieldGeneratedInLastRound: BigNumber;
      sellTokenAddress: string;
      poolAddress: string;
      lpTokenAddress: string;
    }
  >;

  lockedAmount(
    kittyParty: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lockedPool(kittyParty: string, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAllowanceZapIn(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAllowanceZapOut(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPartyInfo(
    _sellTokenAddress: string,
    _lpTokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPlatformDepositContractAddress(
    _zapInContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPlatformRewardContractAddress(
    arg0: string,
    arg1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPlatformWithdrawContractAddress(
    _zapOutContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  treasuryAddress(overrides?: CallOverrides): Promise<string>;

  unwindLockedValue(
    zapCallData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    token: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  yieldGenerated(
    kittyParty: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    MASK(overrides?: CallOverrides): Promise<BigNumber>;

    ZapInContract(overrides?: CallOverrides): Promise<string>;

    ZapOutContract(overrides?: CallOverrides): Promise<string>;

    __KittyPartyYieldGeneratorZapper_init(
      treasuryContractParam: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createLockedValue(
      zapCallData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kittyPartyYieldInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, string] & {
        lockedAmount: BigNumber;
        yieldGeneratedInLastRound: BigNumber;
        sellTokenAddress: string;
        poolAddress: string;
        lpTokenAddress: string;
      }
    >;

    lockedAmount(
      kittyParty: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockedPool(kittyParty: string, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAllowanceZapIn(overrides?: CallOverrides): Promise<void>;

    setAllowanceZapOut(overrides?: CallOverrides): Promise<void>;

    setPartyInfo(
      _sellTokenAddress: string,
      _lpTokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPlatformDepositContractAddress(
      _zapInContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPlatformRewardContractAddress(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPlatformWithdrawContractAddress(
      _zapOutContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    treasuryAddress(overrides?: CallOverrides): Promise<string>;

    unwindLockedValue(
      zapCallData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    yieldGenerated(
      kittyParty: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    KittyPartyReadyToYield(
      kittyparty?: null,
      amountPerRound?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { kittyparty: string; amountPerRound: BigNumber }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    MASK(overrides?: CallOverrides): Promise<BigNumber>;

    ZapInContract(overrides?: CallOverrides): Promise<BigNumber>;

    ZapOutContract(overrides?: CallOverrides): Promise<BigNumber>;

    __KittyPartyYieldGeneratorZapper_init(
      treasuryContractParam: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createLockedValue(
      zapCallData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    kittyPartyYieldInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockedAmount(
      kittyParty: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockedPool(
      kittyParty: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAllowanceZapIn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAllowanceZapOut(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPartyInfo(
      _sellTokenAddress: string,
      _lpTokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPlatformDepositContractAddress(
      _zapInContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPlatformRewardContractAddress(
      arg0: string,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPlatformWithdrawContractAddress(
      _zapOutContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    treasuryAddress(overrides?: CallOverrides): Promise<BigNumber>;

    unwindLockedValue(
      zapCallData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    yieldGenerated(
      kittyParty: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MASK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ZapInContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ZapOutContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __KittyPartyYieldGeneratorZapper_init(
      treasuryContractParam: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createLockedValue(
      zapCallData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    kittyPartyYieldInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockedAmount(
      kittyParty: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockedPool(
      kittyParty: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAllowanceZapIn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAllowanceZapOut(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPartyInfo(
      _sellTokenAddress: string,
      _lpTokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPlatformDepositContractAddress(
      _zapInContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPlatformRewardContractAddress(
      arg0: string,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPlatformWithdrawContractAddress(
      _zapOutContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    treasuryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unwindLockedValue(
      zapCallData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    yieldGenerated(
      kittyParty: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
