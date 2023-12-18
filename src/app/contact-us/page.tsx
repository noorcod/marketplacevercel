import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";
import ScreenLoader from "../../components/ScreenLoader";
export const metadata: Metadata = {
  title: "Contact Us | TechBazaar ",
  description: "Buy & Sell Tech related products with ease.",
};

const Contact = dynamic(() => import("./contactUs"), {
  loading: () => (
    <div style={{ width: "100%", height: "100vh" }} className="justify-content-center d-flex align-items-center">
      <ScreenLoader />
    </div>
  ),
});
function contact() {
  return <Contact />;
}

export default contact;
