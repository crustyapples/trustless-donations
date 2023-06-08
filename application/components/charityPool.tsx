import React, { useState, useEffect } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import ConfettiExplosion from "react-confetti-explosion";
import { abi } from "../public/TrustlessDonation.json";
import { utils } from "ethers";
import Approve from "./approveButton";
import Donate from "./donateButton";

const sdk = new ThirdwebSDK("mumbai");

interface CharityCardProps {
  name: string;
  contractAddress: string;
}

const getTotalDonations = async (address: string) => {
  const contract = await sdk.getContract(address);
  const totalDonated = await contract.call("totalDonations",[]);
  const totalDonatedDecimal = utils.formatEther(totalDonated);
  console.log("totalDonated: ", totalDonatedDecimal);
  return totalDonatedDecimal;
}

const CharityCard: React.FC<CharityCardProps> = ({
  name,
  contractAddress,
}) => {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [totalDonations, setTotalDonations] = useState<String>("");
  const [approved, setApproved] = useState<boolean>(false);
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    // get total donations for the charity and setdonation amount
    getTotalDonations(contractAddress).then((totalDonated) => {
      setTotalDonations(totalDonated);
    })
  })

  return (
    <div className="bg-gray-100 hover:bg-black hover:text-white p-8 rounded-lg drop-shadow-lg transition-all border-2 border-black">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="font-bold my-2">Contract Address: </p>
      
      <p className="font-light" >{contractAddress}</p>
      
      <p className="font-bold my-2">Total Donated: </p>
      <p className="font-light">{totalDonations}</p>
      <div className="mt-4">
        <input
          type="text"
          value={donationAmount}
          onChange={(e) => setDonationAmount(Number(e.target.value))}
          className="rounded-md py-2 px-4 bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
        />

        {approved ? (
          <Donate
            charityAddress={contractAddress}
            amount={donationAmount}
            onDonate={() => {
              setIsExploding(true);
              setApproved(false);
            }}
          />
        ) : (
          <Approve
            spender={contractAddress}
            amount={donationAmount}
            onApprove={() => setApproved(true)}
          />
        )}
        {isExploding && <ConfettiExplosion />}
      </div>
    </div>
  );
};

export default CharityCard;
