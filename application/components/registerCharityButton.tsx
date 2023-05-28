import { Web3Button } from "@thirdweb-dev/react";

export default function RegisterCharity() {
  return (
    <Web3Button
    theme="light"

      contractAddress={process.env.NEXT_PUBLIC_CHARITY_FACTORY!}
      action={(contract) => {
        contract.call("createCharityContract",["Test Charity"]).catch((error) => {console.log("user rejected transaction")})
      }}
      onError={(error) => alert("Something went wrong!")}
    >
      Register Your Charity
    </Web3Button>
  )
}