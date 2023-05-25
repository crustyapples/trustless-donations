import { Web3Button } from "@thirdweb-dev/react";
import { utils } from "ethers";
import { useState } from "react";

interface SpenderProps {
  spender: string;
  amount: number;
  onApprove: () => void;
}

const Approve: React.FC<SpenderProps> = ({ spender, amount,onApprove }) => {
  const [buttonText, setButtonText] = useState("Approve");
  const [buttonStyle, setButtonStyle] = useState(
    "bg-gray-300 hover:bg-gray-400 text-black m-2 px-4 py-2 rounded-md mt-2"
  );
  const [txnStatus, setTxnStatus] = useState(0);

  const parsedAmount = utils.parseEther(amount.toString());
  return (
    <Web3Button
      contractAddress="0xFC1A42F17d5a078cf31c531a881Fa5Bf1F412326"
      action={async (contract) => {
        const success = await contract.call("approve", [spender, parsedAmount]).catch((error) => {console.log(error,"user rejected transaction")});
        if (success) {
            setTxnStatus(1);
            setButtonText("Approve");
            setButtonStyle(
              "bg-gray-300 hover:bg-gray-400 text-black m-2 px-4 py-2 rounded-md mt-2"
            );
            onApprove();
        }
      }}
      className={buttonStyle}
      onSubmit={() => {
        console.log("approval transaction sent");
        setButtonText("Approving");
        setButtonStyle(
            "bg-gray-200 text-gray-300 m-2 px-4 py-2 rounded-md mt-2"
          );
      }}
      isDisabled={buttonText == "Approving" ? true : false}
    >
      {buttonText}
    </Web3Button>
  );
};

export default Approve;
