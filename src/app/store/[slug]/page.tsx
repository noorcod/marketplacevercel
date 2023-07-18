import { Metadata } from 'next'
import React from 'react'
// import { useQuery } from "@tanstack/react-query";
import { marketplaceUrl } from '../../../utility/env';
import Seller from './shop'
// import { useParams } from 'next/navigation';
// export const metadata: Metadata = {
//     title: 'TechBazaar',
//     description: 'Buy & Sell Tech related products with ease.',
//   }
 export async function fetchShopByUser(name: string | string[] | undefined) {
    console.log("----------?", name);
    const res = await fetch(`${marketplaceUrl}/shop/Ammar-Ali`,{   next: { revalidate: 10 }});
  
    return res.json();
  }
async function shop() {
    // const check=await fetchShopByUser("as")
  return (
    <div><Seller/></div>
  )
}

export default shop