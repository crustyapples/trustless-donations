import React, { useState } from "react";

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

  const handleDonation = () => {
    // Perform the donation logic here
    console.log(`Donating ${donationAmount} to ${name}`);
    // Reset the donation amount field after donation
    setDonationAmount(0);
  };

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
        <button
          onClick={handleDonation}
          className="bg-gray-300 hover:bg-gray-400 text-black m-1 px-4 py-2 rounded-md mt-2"
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default CharityCard;
