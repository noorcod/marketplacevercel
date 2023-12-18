import ProductDetails from "./ProductDetails";
import { createMetaData } from "../../../components/Meta/Meta";
import { ResolvingMetadata } from "next";
export async function generateMetadata({ params, searchParams }: any, parent: ResolvingMetadata): Promise<any> {
  return createMetaData({ title: "Product ", slug: "products", description: "mobile,laptop,tech" });
}

function page() {
  return <ProductDetails />;
}

export default page;
