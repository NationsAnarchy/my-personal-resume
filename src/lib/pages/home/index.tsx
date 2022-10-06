import type { NextPage } from "next";

import Hero from "lib/components/Hero";
import Introduction from "lib/components/Introduction";
import Technical from "lib/components/Technical";

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
