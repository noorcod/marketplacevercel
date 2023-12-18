import dynamic from "next/dynamic";
import ScreenLoader from "../../components/ScreenLoader";

const ProductsListing = dynamic(() => import("./listing"), {
  loading: () => (
    <div style={{ width: "100%", height: "100vh" }} className="justify-content-center d-flex align-items-center">
      <ScreenLoader />
    </div>
  ),
});
import { ResolvingMetadata } from "next";
import React from "react";
import { createMetaData } from "../../components/Meta/Meta";

export async function generateMetadata({ params, searchParams }: any, parent: ResolvingMetadata): Promise<any> {
  return createMetaData({ title: "Products", slug: "products", description: "mobile,laptop,tech" });
}

function listing() {
  return <ProductsListing />;
}

export default listing;
