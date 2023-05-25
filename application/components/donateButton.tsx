import { Web3Button } from "@thirdweb-dev/react";
import { utils } from "ethers";
import { abi } from "../public/TrustlessDonation.json"

interface DonateProps {
    charityAddress: string;
    amount: number;
}

const Donate: React.FC<DonateProps> = ({
    charityAddress,
    amount,
}) => {

    const parsedAmount = utils.parseEther(amount.toString());
  return (
    <Web3Button
      contractAddress={charityAddress}
      contractAbi={abi}
      action={(contract) => {
        contract.call("donate", [parsedAmount])
      }}
      className="bg-gray-300 hover:bg-gray-400 text-black m-2 px-4 py-2 rounded-md mt-2"
    >
      Donate
    </Web3Button>
  )
}

export default Donate;