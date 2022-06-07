const {ethers} = require("hardhat");
async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hw = await HelloWorld.deploy("Hello there dantey. This is your simple hello world smart contract.");
    console.log('Contract deployed to: ', hw.address);
}

main().then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});
