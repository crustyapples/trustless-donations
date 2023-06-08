import { Web3Button } from "@thirdweb-dev/react";

interface RegisterCharityProps {
  charityName: string;
}

const RegisterCharity: React.FC<RegisterCharityProps> = ({ charityName }) => {
  let disabledStyle = "bg-gray-600 text-gray-200 p-2 my-2 ml-1 rounded-lg";
  return (
    
    <Web3Button
      theme="light"
      contractAddress={process.env.NEXT_PUBLIC_CHARITY_FACTORY!}
      action={(contract) => {
        contract.call("createCharityContract", [charityName]).catch((error) => {
          console.log("user rejected transaction");
        });
      }}
      onError={(error) => alert("Something went wrong!")}
      isDisabled={charityName.length < 1 ? true : false}
      className={charityName.length < 1 ? disabledStyle : "rounded-lg bg-black text-white p-2 my-2 ml-1 hover:bg-gray-600"}
    >
      Register
    </Web3Button>
  );
};

export default RegisterCharity;
