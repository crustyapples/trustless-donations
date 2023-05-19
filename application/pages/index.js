import { useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";
import { useState } from "react";

// Your smart contract address here
const contractAddress = "0x1CF9E250E6EF2a67134B4c1040Bf8e302CF8efA0";

export default function Home() {
  // Get the smart contract
  const { contract } = useContract(
    contractAddress
  );

  // Read the current greeting
  const { data: currentGreeting, isLoading } = useContractRead(
    contract,
    "greet"
  );

  // Store the new greeting the user enters in the input in state
  const [newGreeting, setNewGreeting] = useState("");

  return (
    <div>
      {/* Display current greeting */}
      <p>
        Current greeting: <b>{isLoading ? "Loading..." : currentGreeting}</b>
      </p>

      {/* Add a new greeting */}
      <input
        type="text"
        value={newGreeting}
        className="input"
        onChange={(e) => setNewGreeting(e.target.value)}
      />

      <Web3Button
        contractAddress={contractAddress}
        action={(contract) => contract.call("setGreeting", newGreeting)}
        colorMode="light"
        accentColor="#F213A4"
      >
        Set Greeting
      </Web3Button>
    </div>
  );
}
