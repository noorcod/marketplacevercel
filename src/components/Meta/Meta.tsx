// import Head from "next/head";

import { ultracodesLogo } from "../../../public/images";

interface props {
  title?: string | string[];
  slug?: string;
  description?: string;
}

export const createMetaData = ({ title, slug, description }: props) => {
  return {
    title: title ? `${title} | TechBazaar` : "TechBazaar | Buy & Sell Tech Products",
    description: description ? description : "Buy & Sell Tech related products with ease.",
    keywords: "techbazaar, laptop, mobile",
    opeGraph: {
        images:[`${ultracodesLogo}`],
      title: title ? `${title} | TechBazaar` : "TechBazaar | Buy & Sell Tech Products",
      description: description ? description : "Buy & Sell Tech related products with ease.",
      url: `https://stagging.techbazaar.pk/${slug}`,
      type: "website",
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `https://stagging.techbazaar.pk`,
    },
  };
};

// Meta.defaultProps = {
//     title: "TechBazaar | Buy & Sell Tech Products",
//     description: "Buy & Sell Tech related products with ease.",
//     keywords: "techbazaar, laptop, mobile"
// }

export default createMetaData;
