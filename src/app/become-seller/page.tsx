// import dynamic from "next/dynamic";
import ScreenLoader from "../../components/ScreenLoader";
import { ResolvingMetadata } from "next";
import React from "react";
import { createMetaData } from "../../components/Meta/Meta";
import BecomeSeller from "./becomeSeller";
export async function generateMetadata({ params, searchParams }: any, parent: ResolvingMetadata): Promise<any> {
  return createMetaData({
    title: "Become Seller",
    slug: "become-seller",
    description: "Buy & Sell Tech related products with ease.",
  });
}

// const BecomeSeller = dynamic(() => import("./becomeSeller"), {
//   loading: () => (
//     <div style={{ width: "100%", height: "100vh" }} className="justify-content-center d-flex align-items-center">
//       {/* <ScreenLoader /> */}
//     </div>
//   ),
// });

function BecomeSellerPage() {
  return <BecomeSeller />;
}

export default BecomeSellerPage;
