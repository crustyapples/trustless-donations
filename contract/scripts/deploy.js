const { ethers } = require("hardhat");

async function main() {
    let donationToken;
    let donationNFT;
    let charityFactory;
    let charity;
    let supply = ethers.utils.parseEther("1000");
    const DonationToken = await ethers.getContractFactory("DonationToken");
    donationToken = await DonationToken.deploy(supply);

    const DonationNFT = await ethers.getContractFactory("DonationNFT");
    donationNFT = await DonationNFT.deploy();

    const CharityFactory = await ethers.getContractFactory("CharityFactory");
    charityFactory = await CharityFactory.deploy(donationToken.address, donationNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
