import Head from "next/head";

const Meta = ({title, keywords, description}) => {
    return ( 
        <Head>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
     );
}

Meta.defaultProps = {
    title: "TechBazaar | Buy & Sell Tech Products",
    description: "Buy & Sell Tech related products with ease.",
    keywords: "techbazaar, laptop, mobile"
}
 
export default Meta;