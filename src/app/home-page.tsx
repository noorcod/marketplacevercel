"use client"
import Head from 'next/head'
import RecomendedProducts from '../sections/Home/RecomendedProducts'
import FeaturedCategories from '../sections/Home/FeaturedCategories'
import Brands from '../sections/Home/Brands'
import TopSellers from '../sections/Home/TopSellers'
import { Layout } from "../components/index"
import Meta from '../components/Meta/Meta'
import Banner from "../sections/Home/Banner"
import { useNavigationEvent } from './hooks/useNavigationEvent'
export default function HomePage() {
    useNavigationEvent()

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
