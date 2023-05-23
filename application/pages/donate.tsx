// - Display a list of registered charities.
// - Include a search bar and filters to search for specific charities.
// - Each charity card should show their charity name, brief information, and a donate button.
// - When the donate button is clicked, a form should appear for the donor to enter the donation amount and approve the donation transaction.

import type { NextPage } from "next";
import Nav from '../components/nav';
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactFragment, ReactPortal, use, useEffect, useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
const sdk = new ThirdwebSDK("mumbai");

// function to call inside useeffect scan for events where "CharityCreated"
// then set state to the array of addresses returned from the event
async function getCharityAddresses() {
  try {
    const contract = await sdk.getContract("0x7412C56c6e0a8Fbe52058D6c4A2f3c5f910109B1");
    const events = await contract.events.getEvents("CharityCreated");
    const charityAddresses = events.map((event) => event.data.charity);
    return charityAddresses;
  } catch (error) {
    console.error("Error fetching charity addresses:", error);
    return [];
  }
}


const Donate: NextPage = () => {
  // state of charity addresses
  const [charityAddresses, setCharityAddresses] = useState<any>([""])
  
  useEffect(() => {
    const fetchCharityAddresses = async () => {
      try {
        console.log("Refreshing Charity Pools");
        const addresses = await getCharityAddresses();
        console.log("Charities: ", addresses);
        setCharityAddresses(addresses);
      } catch (error) {
        console.error("Error fetching charity addresses:", error);
      }
    };
  
    fetchCharityAddresses();
  }, []);
  

  return (
    <div>
      <Nav/>
      <h1>Registered Charities</h1>
      <ul>
        {charityAddresses.map((address: string , index: Key) => (
          <li key={index}>{address}</li>
        ))}
      </ul>
    </div>
  );
};

export default Donate;
