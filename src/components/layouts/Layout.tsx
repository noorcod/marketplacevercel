import React, { useState } from "react";
import { Sidebar } from "..";
import Topbar from "../Topbar";
import Footer from "../Footer";
import Header from "../Header";
import ReactQueryProvider from "../../app/ReactQueryProvider";

const Layout = ({ children }:any) => {
  const [isSandwichOpen, setisSandwichOpen] = useState(false);
  const sandwichTriger = () => {
    setisSandwichOpen((prev) => !prev);
  };
  return (
    <div>
      <Sidebar
        setisSandwichOpen={setisSandwichOpen}
        isSandwichOpen={isSandwichOpen}
      />
      <Topbar />
      <Header sandwichTriger={sandwichTriger} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
