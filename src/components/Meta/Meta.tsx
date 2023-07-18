// import Head from "next/head";

interface props {
    title?:string | string[],
    keywords?:string,
    description?:string
}

const Meta = ({title, keywords, description}:props) => {
    return ( <div></div>
        // <Head>
        //     <meta name="keywords" content={keywords} />
        //     <meta name="description" content={description} />
        //     <title>{title}</title>
        // </Head>
     );
}

// Meta.defaultProps = {
//     title: "TechBazaar | Buy & Sell Tech Products",
//     description: "Buy & Sell Tech related products with ease.",
//     keywords: "techbazaar, laptop, mobile"
// }
 
export default Meta;