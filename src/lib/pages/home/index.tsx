import type { NextPage } from "next";

import Hero from "lib/components/sections/Hero";
import Introduction from "lib/components/sections/Introduction";
import Technical from "lib/components/sections/Technical";

const Home: NextPage = () => {
  return (
    <div className="mx-auto flex-col">
      <Hero />
      <Introduction />
      <Technical />
    </div>
  );
};

export default Home;
