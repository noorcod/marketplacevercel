import React, { useState } from "react";
import { Sidebar } from ".";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isSandwichOpen, setisSandwichOpen] = useState(false);

  return (
    <div>
      <Sidebar
        setisSandwichOpen={setisSandwichOpen}
        isSandwichOpen={isSandwichOpen}
      />
      <Topbar />
      <Header setisSandwichOpen={setisSandwichOpen} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
