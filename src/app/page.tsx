
import dynamic from "next/dynamic";
import ScreenLoader from "../components/ScreenLoader";
import {  ResolvingMetadata } from "next";
import React from "react";
import { createMetaData } from '../components/Meta/Meta'
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<any> {
  return createMetaData({
    title: "TechBazaar | Buy & Sell Tech Products",
    slug:"dfgs",
    description:"techbazaar, laptop, mobile",
  })
  
}

const HomePage = dynamic(() => import("./home-page"), {
  loading: () => <div style={{ width: "100%", height: "100vh" }} className="justify-content-center d-flex align-items-center">
  <ScreenLoader />
</div>,
});

export default async function Page() {
  // Fetch data directly in a Server Component
  // Forward fetched data to your Client Component
  // console.log(process.env.NEXT_PUBLIC_MARKETPLACE_ENV);

  return <HomePage />;
}
;