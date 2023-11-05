import { Metadata } from "next";
import HomePage from "./home-page";
import { Suspense } from "react";
import React from "react";

export const metadata: Metadata = {
  title: 'TechBazaar | Buy & Sell Tech Products"',
  description: "Buy & Sell Tech related products with ease.",
};

export default async function Page() {
  // Fetch data directly in a Server Component
  // Forward fetched data to your Client Component
  // console.log(process.env.NEXT_PUBLIC_MARKETPLACE_ENV);

  return <HomePage />;
}
