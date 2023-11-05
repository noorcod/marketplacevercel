import { Metadata } from 'next'
import React from 'react'
import ProductsListing from './listing'
export const metadata: Metadata = {
    title:  "Mobile, Laptop, Tab, Desktop, Accessories, LED's ",
    description: 'Buy & Sell Tech related products with ease.',
  }
function listing() {
  return (
    <div><ProductsListing/></div>
  )
}

export default listing