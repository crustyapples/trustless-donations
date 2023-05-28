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
    address[] public supplierList;
    
    event Donation(address indexed donor, address indexed charity, uint256 amount, uint256 tokenId);
    event Purchase(address indexed charity, address indexed supplier, uint256 amount);
    event CharityNameChanged(address indexed charity, string newName);
    event SupplierRegistered(address indexed charity, address indexed supplier);
    event SupplierRemoved(address indexed charity, address indexed supplier);

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
        supplierList.push(_supplier);
        emit SupplierRegistered(msg.sender, _supplier);
    }
    
    function removeSupplier(address _supplier) external onlyCharityOwner {
        suppliers[_supplier] = false;
        for (uint i = 0; i < supplierList.length; i++) {
            if (supplierList[i] == _supplier) {
                supplierList[i] = supplierList[supplierList.length - 1];
                supplierList.pop();
                break;
            }
        }
        emit SupplierRemoved(msg.sender, _supplier);
    }

    function getRegisteredSuppliers() external view returns (address[] memory) {
        return supplierList;
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
