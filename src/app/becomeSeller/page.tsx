import { Metadata } from 'next'
import React from 'react'
import BecomeSeller from './becomeSeller'
export const metadata: Metadata = {
    title: 'Become Seller | Techbazaar',
    description: 'Buy & Sell Tech related products with ease.',
  }
  
function becomeSeller() {
  return (
    <div><BecomeSeller/></div>
  )
}

export default becomeSeller