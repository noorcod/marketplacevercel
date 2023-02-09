import Head from 'next/head'
import Banner from '@/sections/Home/Banner'
import RecomendedProducts from '@/sections/Home/RecomendedProducts'
import FeaturedCategories from '@/sections/Home/FeaturedCategories'
import Brands from '@/sections/Home/Brands'
import TopSellers from '@/sections/Home/TopSellers'
import { Layout } from "../components/index"
import Meta from '@/components/Meta/Meta'

export default function Home() {
  return (
    <>
      <Meta title="TechBazaar | Buy & Sell Tech Products" description="Buy & Sell Tech related products with ease." />
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
