import { Web3Button } from "@thirdweb-dev/react";
import { utils } from "ethers";

interface SpenderProps {
    spender: string;
    amount: number;
}

const Approve: React.FC<SpenderProps> = ({
    spender,
    amount,
}) => {

    const parsedAmount = utils.parseEther(amount.toString());
  return (
    <Web3Button
      contractAddress="0xFC1A42F17d5a078cf31c531a881Fa5Bf1F412326"
      action={(contract) => {
        contract.call("approve", [spender, parsedAmount])
      }}
      className="bg-gray-300 hover:bg-gray-400 text-black m-2 px-4 py-2 rounded-md mt-2"
    >
      Approve
    </Web3Button>
  )
}

export default Approve;