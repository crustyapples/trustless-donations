// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "contracts/DonationToken.sol";
import "contracts/DonationNFT.sol";

contract TrustlessDonation {
    DonationToken private _donationToken;
    DonationNFT private _donationNFT;
    string public charityName;
    uint public totalDonations;
    address public charityOwner;
    
    mapping(address => bool) suppliers;
    
    event Donation(address indexed donor, address indexed charity, uint256 amount, uint256 tokenId);
    event Purchase(address indexed charity, address indexed supplier, uint256 amount);
    event CharityNameChanged(address indexed charity, string newName);

    constructor(DonationToken donationToken, DonationNFT donationNFT, address _charityOwner, string memory _charityName) {
        _donationToken = donationToken;
        _donationNFT = donationNFT;
        charityOwner = _charityOwner;
        charityName = _charityName;
    }

    modifier onlyCharityOwner() {
        require(msg.sender == charityOwner, "Caller is not the charity owner");
        _;
    }

    // function to set the charity name to something new (only charity owner can call this) 
    function setCharityName(string memory _charityName) external onlyCharityOwner {
        charityName = _charityName;
        emit CharityNameChanged(msg.sender, _charityName);
    }

    // function to register supply addresses: only charity owner can call this
    // TODO: Consider implementing this through a DAO voted proposal instead
    function registerSupplier(address _supplier) external onlyCharityOwner {
        suppliers[_supplier] = true;
    }
    
    function removeSupplier(address _supplier) external onlyCharityOwner {
        suppliers[_supplier] = false;
    }

    function donate(uint256 amount) external {
        require(_donationToken.transferFrom(msg.sender, address(this), amount), "Donation failed");
        
        uint256 tokenId = _donationNFT.mintDonationNFT(msg.sender, amount);

        totalDonations += amount;
        
        emit Donation(msg.sender, address(this), amount, tokenId);
    }
    
    function purchase(address supplier, uint256 amount) external onlyCharityOwner {
        require(suppliers[supplier], "Invalid supplier");
        
        require(_donationToken.transfer(supplier, amount), "Purchase failed");

        totalDonations -= amount;

        emit Purchase(msg.sender, supplier, amount);
    }
}
