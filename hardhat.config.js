require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_Key, PRIVATE_KEY } = process.env;


     

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
      },
      {
        version: "0.6.6",
        settings: {},
      },
    ],
  },
 
  networks: {
   
    goerli: { 
        url: `https://eth-goerli.g.alchemy.com/v2/${API_Key}`,
        accounts: [`${PRIVATE_KEY}`],
       },
   },
};
