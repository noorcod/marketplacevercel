import React from "react";
import dynamic from "next/dynamic";
import ScreenLoader from "../../components/ScreenLoader";
import About from "./aboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us | TechBazaar ",
  description: "Buy & Sell Tech related products with ease.",
};

// const AboutUs = dynamic(() => import("./aboutUs"), {
//   loading: () => (
//     <div style={{ width: "100%", height: "100vh" }} className="justify-content-center d-flex align-items-center">
//       <ScreenLoader />
//     </div>
//   ),
// });

function about() {
  return (
    <div>
      <About />
    </div>
  );
}

export default about;
