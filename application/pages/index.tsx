import type { NextPage } from "next";
import Nav from "../components/nav";
import Hero from "../components/hero";

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <Hero />
    </div>
  );
};

export default Home;
