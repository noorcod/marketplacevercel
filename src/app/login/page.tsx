// import dynamic from "next/dynamic";
import React from "react";
import ScreenLoader from "../../components/ScreenLoader";
import { Metadata } from "next";
import Login from "./Login";

export const metadata: Metadata = {
  title: "Login | TechBazaar",
  description: "Buy & Sell Tech related products with ease.",
};

// const Login = dynamic(() => import("./Login"), {
//   loading: () => (
//     <div style={{ width: "100%", height: "100vh" }} className="justify-content-center d-flex align-items-center">
//       <ScreenLoader />
//     </div>
//   ),
// });

function page() {
  return <Login />;
}

export default page;
