/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token__factory>;
    getContractFactory(
      name: "Migrations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Migrations__factory>;
    getContractFactory(
      name: "EpochHelpers",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EpochHelpers__factory>;
    getContractFactory(
      name: "IProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProvider__factory>;
    getContractFactory(
      name: "Provider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Provider__factory>;
    getContractFactory(
      name: "RewardHelpers",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RewardHelpers__factory>;
    getContractFactory(
      name: "IStakingMaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakingMaster__factory>;
    getContractFactory(
      name: "StakingMaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakingMaster__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Mintable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Mintable__factory>;
    getContractFactory(
      name: "AuroxToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AuroxToken__factory>;
    getContractFactory(
      name: "IAuroxToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAuroxToken__factory>;
    getContractFactory(
      name: "TokenVesting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenVesting__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Token>;
    getContractAt(
      name: "Migrations",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Migrations>;
    getContractAt(
      name: "EpochHelpers",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EpochHelpers>;
    getContractAt(
      name: "IProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProvider>;
    getContractAt(
      name: "Provider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Provider>;
    getContractAt(
      name: "RewardHelpers",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RewardHelpers>;
    getContractAt(
      name: "IStakingMaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakingMaster>;
    getContractAt(
      name: "StakingMaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakingMaster>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Mintable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Mintable>;
    getContractAt(
      name: "AuroxToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AuroxToken>;
    getContractAt(
      name: "IAuroxToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAuroxToken>;
    getContractAt(
      name: "TokenVesting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenVesting>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
