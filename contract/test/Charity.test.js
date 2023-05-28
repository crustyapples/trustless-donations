const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const { utils } = require("ethers");

describe("Trustless Donation", function () {
  let donationToken;
  let donationNFT;
  let charityFactory;
  let charity;
  let supply = ethers.utils.parseEther("1000");
  
beforeEach(async function () {
    const DonationToken = await ethers.getContractFactory("DonationToken");
    donationToken = await DonationToken.deploy(supply);

    const DonationNFT = await ethers.getContractFactory("DonationNFT");
    donationNFT = await DonationNFT.deploy();

    const CharityFactory = await ethers.getContractFactory("CharityFactory");
    charityFactory = await CharityFactory.deploy(donationToken.address, donationNFT.address);

    await donationNFT.setCharityFactory(charityFactory.address);

    await charityFactory.createCharityContract("Test Charity");

    const filter = await charityFactory.filters.CharityCreated(null, null);
    const logs = await charityFactory.queryFilter(filter);

    charity = logs[0].args.charity;
    charity = await ethers.getContractAt("TrustlessDonation", charity);
    charityOwner = await charity.charityOwner();
});


  it("Donation", async function () {
    // Create a donor and transfer tokens to them
    const [_, donor] = await ethers.getSigners();
    const amount = utils.parseEther("1");
    await donationToken.transfer(donor.address, amount);

    // Approve the charity contract to spend the donor's tokens
    await donationToken.connect(donor).approve(charity.address, amount);
    
    await expect(charity.connect(donor).donate(amount))
      .to.emit(charity, "Donation")
      .withArgs(donor.address, charity.address, amount, 1);
  });

  it("Purchase", async function () {
    // Create a donor and supplier and transfer tokens to them

    const [_, donor, supplier] = await ethers.getSigners();
    const amount = utils.parseEther("1");
    await donationToken.transfer(donor.address, amount);
    await donationToken.connect(donor).approve(charity.address, amount);
    
    await charity.connect(donor).donate(amount);

    // Register the supplier with the charity contract

    await charity.registerSupplier(supplier.address)
    await expect(charity.purchase(supplier.address, amount))
      .to.emit(charity, "Purchase")
      .withArgs(charityOwner, supplier.address, amount);
  });

  // Test that the charity owner can reset the charity name for the newly created trustless donations chariy contract
  
  it("Set Charity Name", async function () {
    const [owner] = await ethers.getSigners();
    // only the chariyOwner can call the setCharityName function in the charity contract
    await expect(charity.connect(owner).setCharityName("New Charity Name"))
      .to.emit(charity, "CharityNameChanged")
      .withArgs(owner.address,"New Charity Name");
      
  })
});