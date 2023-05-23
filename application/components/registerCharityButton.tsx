import { Web3Button } from "@thirdweb-dev/react";

export default function RegisterCharity() {
  return (
    <Web3Button
    theme="light"

      contractAddress="0x7412C56c6e0a8Fbe52058D6c4A2f3c5f910109B1"
      action={(contract) => {
        contract.call("createCharityContract").catch((error) => {console.log("user rejected transaction")})
      }}
      onError={(error) => alert("Something went wrong!")}
    >
      Register Your Charity
    </Web3Button>
  )
}