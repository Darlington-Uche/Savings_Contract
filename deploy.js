const hre = require("hardhat");

async function main() {
  const Vault = await hre.ethers.getContractFactory("SimpleVault");
  const vault = await Vault.deploy();
  await vault.deployed();
  console.log("Vault deployed to:", vault.address);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});