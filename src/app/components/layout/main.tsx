import React from "react";
import Footer from "./footer";
import Header from "./header";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
