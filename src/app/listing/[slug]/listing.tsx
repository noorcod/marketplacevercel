"use client"
import React, { useState } from "react";
import Filters from "../../../sections/ProductListing/Filters";
import Listing from "../../../sections/ProductListing/Listing";
import { Layout, MobileSideFilter } from "../../../components";
import MobileSortFilter from "../../../components/MobileSortFilter";
// import Meta from "../../../components/Meta/Meta";
import { usePathname, useRouter } from "next/navigation";
import nProgress from "nprogress";
import {useNavigationEvent} from "../../hooks/useNavigationEvent";
function ProductsListing() {
    const [mobileFilter, setMobileFilter] = useState<any>();
    const router = useRouter();
    const pathname=usePathname()
useNavigationEvent()
    // router?.events?.on('routeChangeStart', (url) => {
    //     console.log(`Loading: ${url}`)
    //     nProgress.start()
    // })
    // router?.events?.on('routeChangeComplete', () => nProgress.done())
    // router?.events?.on('routeChangeError', () => nProgress.done())
    return (
        <>
            {/* <Meta title="Mobile, Laptop, Tab, Desktop, Accessories, LED's" /> */}
            {mobileFilter === "filter" ? (
                <MobileSideFilter setMobileFilter={setMobileFilter} />
            ) : mobileFilter === "sort" ? (
                <MobileSortFilter setMobileFilter={setMobileFilter} />
            ) : (
                <Layout>
                    <main>
                        <Filters />
                        <Listing setMobileFilter={setMobileFilter} />
                    </main>
                </Layout>
            )}
        </>
    );
}

export default ProductsListing;
