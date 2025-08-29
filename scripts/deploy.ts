import { ethers } from "hardhat";

async function main() {
  const Hola = await ethers.getContractFactory("Hola");
  const hola = await Hola.deploy();
  await hola.waitForDeployment();

  console.log("Contrato Hola desplegado en:", await hola.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
