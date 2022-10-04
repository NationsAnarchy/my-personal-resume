import type { NextPage } from "next";

import AnchorLink from "lib/components/ui/AnchorLink";

const Home: NextPage = () => {
  return (
    <div className="mx-auto text-center">
      <h1 className="text-2xl font-bold">Test</h1>
      <AnchorLink href="https://vercel.com">Vercel.com</AnchorLink>
    </div>
  );
};

export default Home;
