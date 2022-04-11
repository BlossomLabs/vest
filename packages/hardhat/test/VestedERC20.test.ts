export {}; // https://web.archive.org/web/20180609155906/http://fullstack-developer.academy/cannot-redeclare-block-scoped-variable-name/

import chai from 'chai';
import { solidity } from 'ethereum-waffle';

const { expect } = chai;
chai.use(solidity);

import { BigNumber, BytesLike, ContractFactory } from 'ethers';
import { ethers, waffle } from 'hardhat';
const { deployContract } = waffle;

import TestERC20Artifact from '../artifacts/contracts/test/TestERC20.sol/TestERC20.json';
import VestedERC20Artifact from '../artifacts/contracts/VestedERC20.sol/VestedERC20.json';
import VestedERC20FactoryArtifact from '../artifacts/contracts/VestedERC20Factory.sol/VestedERC20Factory.json';

import type { TestERC20, VestedERC20, VestedERC20Factory } from '../typechain-types';

describe('Vested Token Factory contract', function () {
  let vestedERC20: VestedERC20;
  let vestedERC20Factory: VestedERC20Factory;
  let testToken: TestERC20;

  let testTokenName: BytesLike;
  let testTokenSymbol: BytesLike;
  let testTokenDecimals: number;

  beforeEach(async () => {
    const signers = await ethers.getSigners();
    const deployer = signers[0];

    testToken = (await deployContract(deployer, TestERC20Artifact, [
      'Token',
      'TKN',
      BigNumber.from('100000000000000000000'),
    ])) as TestERC20;

    testTokenName = ethers.utils.formatBytes32String(await testToken.name());
    testTokenSymbol = ethers.utils.formatBytes32String(await testToken.symbol());
    testTokenDecimals = await testToken.decimals();

    vestedERC20 = (await deployContract(deployer, VestedERC20Artifact)) as VestedERC20;

    vestedERC20Factory = (await deployContract(deployer, VestedERC20FactoryArtifact, [
      vestedERC20.address,
    ])) as VestedERC20Factory;
  });

  xit('should create a VestedERC20 token and emit DeployVestedERC20 event', async function () {
    const now = (await ethers.provider.getBlock(await ethers.provider.getBlockNumber())).timestamp;
    console.log('now:', now);

    // vestedERC20Factory.on(vestedERC20Factory.filters.DeployVestedERC20(),(newAddress, _event)=>{
    //   console.log('newAddress',newAddress)
    // })

    await expect(
      vestedERC20Factory.createVestedERC20(
        testTokenName,
        testTokenSymbol,
        testTokenDecimals,
        testToken.address,
        now,
        now + 5 * 60,
      ),
    ).to.emit(vestedERC20Factory, 'DeployVestedERC20');

    // await new Promise(res => setTimeout(res, 5000)); //Wait for event be emitted
  }).timeout(10 * 1000);

  it('should create a VestedERC20 token and emit DeployVestedERC20 event', async function () {
    const now = (await ethers.provider.getBlock(await ethers.provider.getBlockNumber())).timestamp;
    console.log('now:', now);

    // vestedERC20Factory.on(vestedERC20Factory.filters.DeployVestedERC20(),(newAddress, _event)=>{
    //   console.log('newAddress',newAddress)
    // })

    const newAddress = await vestedERC20Factory.callStatic.createVestedERC20(
      testTokenName,
      testTokenSymbol,
      testTokenDecimals,
      testToken.address,
      now,
      now + 5 * 60,
    );

    console.log('newAddress', newAddress);

    // await new Promise(res => setTimeout(res, 5000)); //Wait for event be emitted
  });
});
