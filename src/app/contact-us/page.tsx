import { Metadata } from 'next'
import React from 'react'
import Contact from './contactUs'
export const metadata: Metadata = {
    title: 'Contact Us | TechBazaar ',
    description: 'Buy & Sell Tech related products with ease.',
  }
function contact() {
  return (
    <div><Contact/></div>
  )
}

export default contact