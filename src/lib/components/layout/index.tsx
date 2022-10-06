import type { ReactNode } from "react";

import Footer from "lib/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <main className="flex h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
