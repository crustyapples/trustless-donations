import type { NextPage } from "next";
import Nav from "../components/nav";
import {
  useEffect,
  useState,
} from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import CharityCard from "../components/charityPool";

const sdk = new ThirdwebSDK("mumbai");

interface Charity {
  name: string;
  charity: string;
  creator: string;
}

// function to call inside useeffect scan for events where "CharityCreated"
// then set state to the array of addresses returned from the event
async function getCharityAddresses() {
  try {
    const contract = await sdk.getContract(
      process.env.NEXT_PUBLIC_CHARITY_FACTORY!
    );
    const events = await contract.events.getEvents("CharityCreated");
    const charityAddresses = events.map((event) => event.data);
    return charityAddresses;
  } catch (error) {
    console.error("Error fetching charity addresses:", error);
    return [];
  }
}

const Donate: NextPage = () => {
  // state of charity addresses
  const [charities, setCharities] = useState<Charity[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchCharityAddresses = async () => {
      try {
        console.log("Refreshing Charity Pools");
        const addresses = await getCharityAddresses();
        console.log("Charities: ", addresses);
        const charities = addresses.map((address) => ({
          name: address.name,
          charity: address.charity,
          creator: address.creator,
        }));
        console.log("Charities: ", charities);
        setCharities(charities);
        setLoaded(true);
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
      <div className="flex justify-center">
        <div className="flex flex-wrap">
          {loaded && charities.map((charity, index) => (
            <div className="m-2" key={index}>
              <CharityCard
                name={charity.name}
                contractAddress={charity.charity}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donate;
