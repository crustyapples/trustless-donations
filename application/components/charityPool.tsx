import React, { useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

import { utils } from "ethers";
import Approve from "./approveSpending";
import Donate from "./donateButton";

const sdk = new ThirdwebSDK("mumbai");


interface CharityCardProps {
  name: string;
  contractAddress: string;
  totalDonated: number;
}

const CharityCard: React.FC<CharityCardProps> = ({
  name,
  contractAddress,
  totalDonated,
}) => {
  const [donationAmount, setDonationAmount] = useState<number>(0);

  return (
    <div className="bg-gray-100 hover:bg-black hover:text-white p-8 rounded-lg drop-shadow-lg transition-all border-2 border-black">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="my-4">Contract Address: {contractAddress}</p>
      <p className="">Total Donated: {totalDonated}</p>
      <div className="mt-4">
      <input
            type="text"
            value={donationAmount}
            onChange={(e) => setDonationAmount(Number(e.target.value))}
            className="rounded-md py-2 px-4 bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          />

        <Approve 
          spender={contractAddress}
          amount={donationAmount} 
        />

        <Donate
          charityAddress={contractAddress}
          amount={donationAmount} 
        />
      </div>
    </div>
  );
};

export default CharityCard;
