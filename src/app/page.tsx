import { Metadata } from "next"
import HomePage from "./home-page"

export const metadata: Metadata = {
    title: 'TechBazaar | Buy & Sell Tech Products"',
    description: 'Buy & Sell Tech related products with ease.',
  }
export default async function Page() {
    // Fetch data directly in a Server Component
    // Forward fetched data to your Client Component
    return <HomePage  />
  }