import { Metadata } from 'next'
import React from 'react'
import PrivacyPolicy from './privacyPolicy'
export const metadata: Metadata = {
    title: 'Privacy Policy | TechBazaar',
    description: 'Buy & Sell Tech related products with ease.',
  }
function privacy() {
  return (
    <div><PrivacyPolicy/></div>
  )
}

export default privacy