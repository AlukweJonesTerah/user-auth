const { ethers } = require("hardhat");
// Import web3.js from the scripts folder
const web3 = require('web3');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const initialUnlockTime = Math.floor(Date.now() / 1000) + 60; // 1 minute from now for the Lock contract
  const initialTokenPrice = ethers.utils.parseUnits("1", "ether"); // 

  try{
    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(initialUnlockTime);
    await lock.deployed();
    console.log("Lock contract deployed to:", lock.address);
  }catch (error) {
    console.log("Error deploying Lock contract:", error);
  }

  try{
    const UserAuth = await ethers.getContractFactory("UserAuth");
    const userAuth = await UserAuth.deploy();
    await userAuth.deployed();
    console.log("UserAuth contract deployed to:", userAuth.address);
  }catch (error) {
    console.log("Error deploying UserAuth contract:", error);
  }

  try{
    const KYCProcess = await ethers.getContractFactory("KYCProcess");
    const kycProcess = await KYCProcess.deploy();
    await kycProcess.deployed(); // Deploy KYCProcess contract
    console.log("KYCProcess contract deployed to:", kycProcess.address);
  }catch (error) {
    console.log("Error deploying KYCProcess contract:", error);
  }

  try{
    const GreenCreditToken = await ethers.getContractFactory("GreenCreditToken");
    const greenCreditToken = await GreenCreditToken.deploy(initialTokenPrice);
    await greenCreditToken.deployed();
    console.log("GreenCreditToken contract deployed to:", greenCreditToken.address);
  }catch (error) {
    console.log("Error deploying GreenCreditToken contract:", error);
  }
  try{
    const Emission = await ethers.getContractFactory("Emission");
    const emission = await Emission.deploy();
    await emission.deployed();
    console.log("Emission contract deployed to:", emission.address);
  }catch (error) {
      console.log("Error deploying Emission contract:", error);
  }

  // const accounts = await web3.eth.getAccounts();
  // console.log(accounts)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
