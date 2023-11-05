'use client'
import React, { useEffect, useState } from "react";
import { Sidebar } from ".";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Header from "./Header";
import useAuth from "./auth/useAuth";

const Layout = ({ children }:any) => {
  const [isSandwichOpen, setisSandwichOpen] = useState(false);
  const {verifyToken} = useAuth();
  useEffect(()=>{
    verifyToken()
  },[])
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
