import { Web3Button } from "@thirdweb-dev/react";
import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

interface RegisterCharityProps {
  charityName: string;
}

const RegisterCharity: React.FC<RegisterCharityProps> = ({ charityName }) => {
  let enabledStyle = "rounded-lg bg-black text-white p-2 m-1 hover:bg-gray-600";
  let loadingStyle = "rounded-lg bg-gray-600 text-white p-2 m-1 hover:bg-gray-600";
  let disabledStyle = "bg-gray-600 text-gray-200 p-2 m-1 rounded-lg";

  const [buttonText, setButtonText] = useState("Register");
  const [buttonStyle, setButtonStyle] = useState(enabledStyle)
  const [isExploding, setIsExploding] = useState(false);

  return (
    <Web3Button
      theme="light"
      contractAddress={process.env.NEXT_PUBLIC_CHARITY_FACTORY!}
      
      onSubmit={() => {
        setButtonText("Registering");
        setButtonStyle(loadingStyle);
      }}

      action={async (contract) => {

        const success = await contract
          .call("createCharityContract", [charityName])
          .catch((error) => {
            console.log("user rejected transaction");
          });

        if (success) {
          setButtonText("Registered");
          setButtonStyle(disabledStyle);
          setIsExploding(true);
          setTimeout(() => {
            setIsExploding(false);
          }, 1000);
        }
      }}
      onError={(error) => alert("Something went wrong!")}
      isDisabled={charityName.length < 1 || buttonText == "Registered" ? true : false}
      className={
        charityName.length < 1
          ? disabledStyle
          : enabledStyle
      }
    >
      {buttonText}
      {isExploding && <ConfettiExplosion />}
    </Web3Button>
  );
};

export default RegisterCharity;
