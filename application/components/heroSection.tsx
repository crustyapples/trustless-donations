import React from "react";
import Link from "next/link";
import RegisterCharity from "./registerCharityButton";
import HeroImage from "./heroImage";

export default function Hero() {
  const [charityName, setCharityName] = React.useState("");
  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCharityName(e.target.value);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl m-12 font-bold">trustless donations.</h1>

      <HeroImage />
      <div className="my-12">
        <button className="rounded-lg bg-[#FF6584] text-white p-2 m-2 hover:bg-[#a14255]">
          <Link href="/donate" legacyBehavior>
            Donate Today
          </Link>
        </button>

        <span>
        <input
          type="text"
          className="border border-gay-300 rounded-lg p-2 ml-2 my-2"
          placeholder="Charity Name"
          value={charityName}
          onChange={handleInputChange}
        />
        <RegisterCharity charityName={charityName}/>
        </span>

      </div>
    </div>
  );
}
