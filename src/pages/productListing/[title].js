import React, { useState } from "react";
import Filters from "@/sections/ProductListing/Filters";
import Listing from "@/sections/ProductListing/Listing";
import { Layout, MobileSideFilter } from "@/components";
import MobileSortFilter from "@/components/MobileSortFilter";
import Meta from "@/components/Meta/Meta";
function ProductsListing() {
    const [mobileFilter, setMobileFilter] = useState();

    return (
        <>
            <Meta title="Mobile, Laptop, Tab, Desktop, Accessories, LED's" />
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
