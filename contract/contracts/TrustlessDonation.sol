// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "contracts/DonationToken.sol";
import "contracts/DonationNFT.sol";

contract TrustlessDonation {
    DonationToken private _donationToken;
    DonationNFT private _donationNFT;
    address public charityOwner;
    
    mapping(address => bool) suppliers;
    
    event Donation(address indexed donor, address indexed charity, uint256 amount, uint256 tokenId);
    event Purchase(address indexed charity, address indexed supplier, uint256 amount);

    constructor(DonationToken donationToken, DonationNFT donationNFT, address _charityOwner) {
        _donationToken = donationToken;
        _donationNFT = donationNFT;
        charityOwner = _charityOwner;
    }

    modifier onlyCharityOwner() {
        require(msg.sender == charityOwner, "Caller is not the charity owner");
        _;
    }
    
    function registerSupplier(address _supplier) external onlyCharityOwner {
        suppliers[_supplier] = true;
    }
    
    function removeSupplier(address _supplier) external onlyCharityOwner {
        suppliers[_supplier] = false;
    }
    
    function donate(uint256 amount) external {
        require(_donationToken.transferFrom(msg.sender, address(this), amount), "Donation failed");
        
        uint256 tokenId = _donationNFT.mintDonationNFT(msg.sender, amount);
        
        emit Donation(msg.sender, address(this), amount, tokenId);
    }
    
    function purchase(address supplier, uint256 amount) external onlyCharityOwner {
        require(suppliers[supplier], "Invalid supplier");
        
        require(_donationToken.transfer(supplier, amount), "Purchase failed");
        
        emit Purchase(msg.sender, supplier, amount);
    }
}
