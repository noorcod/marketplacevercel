import React, { useState,useEffect } from "react";
import { Sidebar } from "..";
import Topbar from "../Topbar";
import Footer from "../Footer";
import Header from "../Header";
import useAuth from "../auth/useAuth";
const Layout = ({ children }:any) => {
  const [isMounted, setIsMounted] = useState(false);

  const { verifyToken} = useAuth();

  const [isSandwichOpen, setisSandwichOpen] = useState(false);

  const sandwichTriger = () => {
    setisSandwichOpen((prev) => !prev);
  };

 
  useEffect(()=>{
    setIsMounted(true)
  },[])
  if (!isMounted) {
    return null;
    }
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
      {/* <PhoneNumberModal show={phoneNumberModal} onHide={()=>setphoneNumberModal(false)}  /> */}

    </div>
  );
};

export default Layout;
