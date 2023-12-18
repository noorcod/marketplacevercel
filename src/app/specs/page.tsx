import dynamic from "next/dynamic";
import ScreenLoader from "../../components/ScreenLoader";

const Specs = dynamic(() => import("./specs"), {
  loading: () => (
    <div style={{ width: "100%", height: "100vh" }} className="justify-content-center d-flex align-items-center">
      <ScreenLoader />
    </div>
  ),
});

import React from "react";
import { createMetaData } from "../../components/Meta/Meta";
import { ResolvingMetadata } from "next";
export async function generateMetadata({ params, searchParams }: any, parent: ResolvingMetadata): Promise<any> {
  return createMetaData({
    title: "Specs",
    slug: "specs",
    description: "Buy & Sell Tech related products with ease.",
  });
}
function page() {
  return <Specs />;
}

export default page;
