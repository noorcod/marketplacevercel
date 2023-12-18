"use client";
import { useState, useEffect } from "react";
import RecomendedProducts from "../sections/Home/RecomendedProducts";
import FeaturedCategories from "../sections/Home/FeaturedCategories";
import Brands from "../sections/Home/Brands";
import TopSellers from "../sections/Home/TopSellers";
import Banner from "../sections/Home/Banner";
import { useNavigationEvent } from "./hooks/useNavigationEvent";

export default function HomePage() {
  useNavigationEvent();
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <main>
        <Banner />
        <FeaturedCategories />
        <TopSellers />
        <RecomendedProducts />
        <Brands />
      </main>
    </>
  );
}
