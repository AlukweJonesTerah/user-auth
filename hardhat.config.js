// require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { ALCHMEY_RPC_URL, DEPLOYER_PRIVATE_KEY, MNEMONIC} = process.env;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  hardhat: {
    chainId: 31337,
    accounts: {
      mnemonic: `${MNEMONIC}`,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
    }
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHMEY_RPC_URL}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`]
    }
  },
  mocha: {
    timeout: 40000
  },
  settings: {
    evmVersion: "shanghai",
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  localhost: {
    url: "http://127.0.0.1:8545",
    chainId: 31337,
  }
};