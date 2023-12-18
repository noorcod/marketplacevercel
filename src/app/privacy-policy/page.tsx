import dynamic from "next/dynamic";
import ScreenLoader from "../../components/ScreenLoader";
import { ResolvingMetadata } from "next";
import React from "react";
import { createMetaData } from "../../components/Meta/Meta";
export async function generateMetadata({ params, searchParams }: any, parent: ResolvingMetadata): Promise<any> {
  return createMetaData({
    title: "Privacy Policy",
    slug: "privacy-policy",
    description: "Buy & Sell Tech related products with ease.",
  });
}

const PrivacyPolicy = dynamic(() => import("./privacyPolicy"), {
  loading: () => (
    <div style={{ width: "100%", height: "100vh" }} className="justify-content-center d-flex align-items-center">
      <ScreenLoader />
    </div>
  ),
});

function privacy() {
  return <PrivacyPolicy />;
}

export default privacy;
