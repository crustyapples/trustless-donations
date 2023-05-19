// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DonationNFT is ERC721, Ownable {
    uint256 private _tokenIds;
    mapping(address => bool) public validCharities;
    address CharityFactory;

    constructor() ERC721("DonationNFT", "DNFT") {}

    function mintDonationNFT(address _to, uint256 _donationAmount) external returns (uint256) {
        require(validCharities[msg.sender], "Only valid charity contracts can mint"); 
        require(_donationAmount > 0, "A donation must be made");

        _tokenIds += 1;
        _safeMint(_to, _tokenIds);
        return _tokenIds;
    }

    function setCharityFactory(address charityFactory) public onlyOwner {
        CharityFactory = charityFactory;
    }

    function addValidCharity(address charity) external {
        require(msg.sender == CharityFactory);
        validCharities[charity] = true;
    }   
}