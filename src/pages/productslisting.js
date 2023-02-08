import React, { useState } from "react";

import Filters from "@/sections/ProductListing/Filters";
import Listing from "@/sections/ProductListing/Listing";
import { Layout, MobileSideFilter } from "@/components";
import MobileSortFilter from "@/components/MobileSortFilter";
import PaginationBar from "@/components/PaginationBar";
function ProductsListing() {
    const [mobileFilter, setMobileFilter] = useState();

    return (
        <>
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
