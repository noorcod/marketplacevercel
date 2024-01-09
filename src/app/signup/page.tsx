// import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import ScreenLoader from "../../components/ScreenLoader";
import { Metadata } from "next";
import Signup from "./Signup";

export const metadata: Metadata = {
  title: "Sign Up | TechBazaar",
  description: "Buy & Sell Tech related products with ease.",
};

// const Signup = dynamic(() => import("./Signup"), {
//   loading: () => (
//     <div style={{ width: "100%", height: "100vh" }} className="justify-content-center d-flex align-items-center">
//       <ScreenLoader />
//     </div>
//   ),
// });

function page() {
  return <Signup />;
}

export default page;
