import { Metadata } from 'next'
import React, { Suspense } from 'react'
// import { useQuery } from "@tanstack/react-query";
import { marketplaceUrl } from '../../../utility/env';
// import Loading from './loading';
import Seller from './shop'
// import { useParams } from 'next/navigation';
// export const metadata: Metadata = {
//     title: 'TechBazaar',
//     description: 'Buy & Sell Tech related products with ease.',
//   }

async function shop() {
    // const check=await fetchShopByUser("as")
  return (
    // <Suspense fallback={<Loading/>}>
    <div><Seller/></div>
    // </Suspense>
  )
}

export default shop