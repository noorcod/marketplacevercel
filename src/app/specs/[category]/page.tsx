import React from "react";
import Listings from "./listings";
import { createMetaData } from "../../../components/Meta/Meta";
import { ResolvingMetadata } from "next";
export async function generateMetadata({ params, searchParams }: any, parent: ResolvingMetadata): Promise<any> {
  return createMetaData({
    title: "Specs Listing",
    slug: "specs",
    description: "Buy & Sell Tech related products with ease.",
  });
}
function category() {
  return <Listings />;
}

export default category;
