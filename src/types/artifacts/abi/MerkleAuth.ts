/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MerkleAuthInterface extends utils.Interface {
  functions: {
    "addAdmin(address,address)": FunctionFragment;
    "addHarvester(address,address)": FunctionFragment;
    "admin()": FunctionFragment;
    "authorizeDepositor(address,bytes32[])": FunctionFragment;
    "changeAdmin(address)": FunctionFragment;
    "isAdmin(address,address)": FunctionFragment;
    "isDepositor(address,address)": FunctionFragment;
    "isHarvester(address,address)": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "removeAdmin(address,address)": FunctionFragment;
    "removeHarvester(address,address)": FunctionFragment;
    "setMerkleRoot(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAdmin",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addHarvester",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "authorizeDepositor",
    values: [string, BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "changeAdmin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isAdmin",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isDepositor",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isHarvester",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeAdmin",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeHarvester",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMerkleRoot",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "addAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addHarvester",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "authorizeDepositor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isDepositor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isHarvester",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeHarvester",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMerkleRoot",
    data: BytesLike
  ): Result;

  events: {
    "AdminAdded(address)": EventFragment;
    "AdminRemoved(address)": EventFragment;
    "AdminUpdate(address)": EventFragment;
    "HarvesterAdded(address)": EventFragment;
    "HarvesterRemoved(address)": EventFragment;
    "MerkleRootUpdate(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AdminRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AdminUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "HarvesterAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "HarvesterRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MerkleRootUpdate"): EventFragment;
}

export type AdminAddedEvent = TypedEvent<[string], { admin: string }>;

export type AdminAddedEventFilter = TypedEventFilter<AdminAddedEvent>;

export type AdminRemovedEvent = TypedEvent<[string], { admin: string }>;

export type AdminRemovedEventFilter = TypedEventFilter<AdminRemovedEvent>;

export type AdminUpdateEvent = TypedEvent<[string], { admin: string }>;

export type AdminUpdateEventFilter = TypedEventFilter<AdminUpdateEvent>;

export type HarvesterAddedEvent = TypedEvent<[string], { harvester: string }>;

export type HarvesterAddedEventFilter = TypedEventFilter<HarvesterAddedEvent>;

export type HarvesterRemovedEvent = TypedEvent<[string], { harvester: string }>;

export type HarvesterRemovedEventFilter =
  TypedEventFilter<HarvesterRemovedEvent>;

export type MerkleRootUpdateEvent = TypedEvent<
  [string],
  { merkleRoot: string }
>;

export type MerkleRootUpdateEventFilter =
  TypedEventFilter<MerkleRootUpdateEvent>;

export interface MerkleAuth extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MerkleAuthInterface;

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
    addAdmin(
      arg0: string,
      vaultAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addHarvester(
      arg0: string,
      harvester: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    authorizeDepositor(
      depositor: string,
      proof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeAdmin(
      admin_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAdmin(
      arg0: string,
      caller: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isDepositor(
      arg0: string,
      caller: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isHarvester(
      arg0: string,
      caller: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    merkleRoot(overrides?: CallOverrides): Promise<[string]>;

    removeAdmin(
      arg0: string,
      vaultAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeHarvester(
      arg0: string,
      harvester: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMerkleRoot(
      root: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addAdmin(
    arg0: string,
    vaultAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addHarvester(
    arg0: string,
    harvester: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  admin(overrides?: CallOverrides): Promise<string>;

  authorizeDepositor(
    depositor: string,
    proof: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeAdmin(
    admin_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAdmin(
    arg0: string,
    caller: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isDepositor(
    arg0: string,
    caller: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isHarvester(
    arg0: string,
    caller: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  removeAdmin(
    arg0: string,
    vaultAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeHarvester(
    arg0: string,
    harvester: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMerkleRoot(
    root: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAdmin(
      arg0: string,
      vaultAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addHarvester(
      arg0: string,
      harvester: string,
      overrides?: CallOverrides
    ): Promise<void>;

    admin(overrides?: CallOverrides): Promise<string>;

    authorizeDepositor(
      depositor: string,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    changeAdmin(admin_: string, overrides?: CallOverrides): Promise<void>;

    isAdmin(
      arg0: string,
      caller: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isDepositor(
      arg0: string,
      caller: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isHarvester(
      arg0: string,
      caller: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    removeAdmin(
      arg0: string,
      vaultAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeHarvester(
      arg0: string,
      harvester: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMerkleRoot(root: BytesLike, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AdminAdded(address)"(admin?: string | null): AdminAddedEventFilter;
    AdminAdded(admin?: string | null): AdminAddedEventFilter;

    "AdminRemoved(address)"(admin?: string | null): AdminRemovedEventFilter;
    AdminRemoved(admin?: string | null): AdminRemovedEventFilter;

    "AdminUpdate(address)"(admin?: string | null): AdminUpdateEventFilter;
    AdminUpdate(admin?: string | null): AdminUpdateEventFilter;

    "HarvesterAdded(address)"(
      harvester?: string | null
    ): HarvesterAddedEventFilter;
    HarvesterAdded(harvester?: string | null): HarvesterAddedEventFilter;

    "HarvesterRemoved(address)"(
      harvester?: string | null
    ): HarvesterRemovedEventFilter;
    HarvesterRemoved(harvester?: string | null): HarvesterRemovedEventFilter;

    "MerkleRootUpdate(bytes32)"(merkleRoot?: null): MerkleRootUpdateEventFilter;
    MerkleRootUpdate(merkleRoot?: null): MerkleRootUpdateEventFilter;
  };

  estimateGas: {
    addAdmin(
      arg0: string,
      vaultAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addHarvester(
      arg0: string,
      harvester: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    authorizeDepositor(
      depositor: string,
      proof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeAdmin(
      admin_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAdmin(
      arg0: string,
      caller: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isDepositor(
      arg0: string,
      caller: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isHarvester(
      arg0: string,
      caller: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    removeAdmin(
      arg0: string,
      vaultAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeHarvester(
      arg0: string,
      harvester: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMerkleRoot(
      root: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAdmin(
      arg0: string,
      vaultAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addHarvester(
      arg0: string,
      harvester: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    authorizeDepositor(
      depositor: string,
      proof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeAdmin(
      admin_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAdmin(
      arg0: string,
      caller: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isDepositor(
      arg0: string,
      caller: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isHarvester(
      arg0: string,
      caller: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAdmin(
      arg0: string,
      vaultAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeHarvester(
      arg0: string,
      harvester: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMerkleRoot(
      root: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
