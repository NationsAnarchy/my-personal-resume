import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <main className="flex h-screen">{children}</main>
    </div>
  );
};

export default Layout;
