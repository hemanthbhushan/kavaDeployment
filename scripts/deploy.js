

const { ethers } = require("hardhat");


async function main() {
  
  let owner;
  [owner] = await ethers.getSigners()
  // const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
  // const uniswapV2Factory = await UniswapV2Factory.deploy(owner.address);

  // await uniswapV2Factory.deployed();
  // //init hash "0xaae7dc513491fb17b541bd4a9953285ddf2bb20a773374baecc88c4ebada0767"
  // //factory "0x6bD7396A03d3065aFc0a4BA17733296FD035182F"

  // console.log(
  //   `contract deployed to ${uniswapV2Factory.address} the init_hash address of pairContract ${await uniswapV2Factory.INIT_CODE_HASH()} end`
  // );
  

  // const WETH= await ethers.getContractFactory("WETH9");
  // const wETH = await WETH.deploy();

  // await wETH.deployed();
  

  // console.log(
  //   `wETH contract deployed to ${wETH.address} `
  // );
  const wETH ="0x0098ee7e7CF3755D3f01fC2bd393104F083e288D"
  const uniswapV2Factory = "0x6683Ff8A01A3c1F0b380fE4Cd72999476dA6b73a"

  const UniswapV2Router02 = await ethers.getContractFactory("UniswapV2Router02");
  const uniswapV2Router02 = await UniswapV2Router02.deploy(wETH,uniswapV2Factory);

  await uniswapV2Router02.deployed();
  

  console.log(
    `UniswapV2Router02 contract deployed to ${uniswapV2Router02.address} `
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
