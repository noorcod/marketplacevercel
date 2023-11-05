'use client'
import Head from 'next/head'
import {useState, useEffect, Suspense} from "react"
import RecomendedProducts from '../sections/Home/RecomendedProducts'
import FeaturedCategories from '../sections/Home/FeaturedCategories'
import Brands from '../sections/Home/Brands'
import TopSellers from '../sections/Home/TopSellers'
import { Layout } from "../components/index"
import Meta from '../components/Meta/Meta'
import Banner from "../sections/Home/Banner"
import { useNavigationEvent } from './hooks/useNavigationEvent'
import PhoneNumberModal from '../components/PhoneNumberModal'
import Loading from './login/Loading'
export default function HomePage() {
  useNavigationEvent()
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <Layout>
        <main >
          <Banner />
          <RecomendedProducts />
          <TopSellers />
          <FeaturedCategories />
          <Brands />
        </main>
      </Layout>
    </>
  )
}
