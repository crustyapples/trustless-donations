// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "contracts/DonationToken.sol";
import "contracts/DonationNFT.sol";
import "contracts/TrustlessDonation.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CharityFactory is Ownable {
    DonationToken private _donationToken;
    DonationNFT private _donationNFT;
    mapping(address => TrustlessDonation) public charityContracts;

    constructor(DonationToken donationToken, DonationNFT donationNFT) {
        _donationToken = donationToken;
        _donationNFT = donationNFT;
    }

    function createCharityContract() external {
        require(address(charityContracts[msg.sender]) == address(0), "User already has a charity contract");
        TrustlessDonation newCharity = new TrustlessDonation(_donationToken, _donationNFT, msg.sender);
        charityContracts[msg.sender] = newCharity;
        _donationNFT.addValidCharity(address(newCharity)); // update the validCharities mapping in DonationNFT
    }
}