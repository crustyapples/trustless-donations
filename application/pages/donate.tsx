import type { NextPage } from "next";
import Nav from "../components/nav";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactFragment,
  ReactPortal,
  use,
  useEffect,
  useState,
} from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import CharityCard from "../components/charityPool";
import mockData from "../public/mockCharityPool";

const sdk = new ThirdwebSDK("mumbai");

// function to call inside useeffect scan for events where "CharityCreated"
// then set state to the array of addresses returned from the event
async function getCharityAddresses() {
  try {
    const contract = await sdk.getContract(
      process.env.NEXT_PUBLIC_CHARITY_FACTORY!
    );
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
  const [charityAddresses, setCharityAddresses] = useState<any>([""]);

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
    <div style={{ overflow: "hidden" }}>
      <Nav />
      <h1 className="text-4xl font-bold text-center my-8">
        Registered Charities
      </h1>
      {/* <ul>
        {charityAddresses.map((address: string , index: Key) => (
          <li key={index}>{address}</li>
        ))}
      </ul> */}
      <div className="flex justify-center">
        <div className="flex flex-wrap">
          {mockData.map((charity, index) => (
            <div className="m-2">
              <CharityCard
                key={index}
                name={charity.charity.name}
                contractAddress={charity.charity.contract_address}
                totalDonated={charity.charity.total_donated}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donate;
