const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("MyToken");

  const token = await Token.deploy(
    "EduCoin",
    "EDU",
    18,
    hre.ethers.parseEther("1000000")
  );

  await token.waitForDeployment();

  const address = await token.getAddress();
  console.log("Token deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});