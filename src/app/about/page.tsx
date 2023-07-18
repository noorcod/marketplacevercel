import React from 'react'
import About from './about'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About | TechBazaar ',
    description: 'Buy & Sell Tech related products with ease.',
  }
function about() {
  return (
    <div><About/></div>
  )
}

export default about