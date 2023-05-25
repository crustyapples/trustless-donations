import { Web3Button } from "@thirdweb-dev/react";
import { utils } from "ethers";
import { abi } from "../public/TrustlessDonation.json";
import { useState } from "react";

interface DonateProps {
  charityAddress: string;
  amount: number;
  onDonate: () => void;
}

const Donate: React.FC<DonateProps> = ({
  charityAddress,
  amount,
  onDonate,
}) => {
  const [buttonText, setButtonText] = useState("Donate");
  const [buttonStyle, setButtonStyle] = useState(
    "bg-gray-300 hover:bg-gray-400 text-black m-2 px-4 py-2 rounded-md mt-2"
  );
  const [txnStatus, setTxnStatus] = useState(0);

  const parsedAmount = utils.parseEther(amount.toString());
  return (
    <Web3Button
      contractAddress={charityAddress}
      contractAbi={abi}
      action={async (contract) => {
        const success = await contract
          .call("donate", [parsedAmount])
          .catch((error) => {
            console.log(error, "user rejected transaction");
          });
        if (success) {
          setTxnStatus(1);
          setButtonText("Donate");
          setButtonStyle(
            "bg-gray-300 hover:bg-gray-400 text-black m-2 px-4 py-2 rounded-md mt-2"
          );

          onDonate();
        }
      }}
      className={buttonStyle}
      onSubmit={() => {
        console.log("donation transaction sent");
        setButtonText("Donating");
        setButtonStyle(
          "bg-gray-200 text-gray-300 m-2 px-4 py-2 rounded-md mt-2"
        );
      }}
      isDisabled={buttonText == "Donated" ? true : false}
    >
      {buttonText}
    </Web3Button>
  );
};

export default Donate;
