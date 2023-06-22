import React, { useState } from "react";
import { Layout, MobileSideFilter, SideFilters } from "../../components";
import SellerBanner from "../../sections/Seller/SellerBanner";
import { Row } from "react-bootstrap";
import styles from "../../styles/Seller.module.css";
import ContactSection from "../../sections/Seller/ContactSection";
import MobileSortFilter from "../../components/MobileSortFilter";
import PaginationBar from "../../components/PaginationBar";
import { useRouter } from "next/router";
import Meta from "../../components/Meta/Meta";
import Breadcrumbs from "../../components/Breadcrumb";
import nProgress from "nprogress";
import Listing from "../../sections/Seller/Listing";
const Seller = () => {
    const [mobileFilter, setMobileFilter] = useState();
    const router = useRouter();
    router?.events?.on('routeChangeStart', (url) => {
        console.log(`Loading: ${url}`)
        nProgress.start()
    })
    router?.events?.on('routeChangeComplete', () => nProgress.done())
    router?.events?.on('routeChangeError', () => nProgress.done())
    return (<>
        <Meta title={router.query.slug} />
        <div>
            {mobileFilter === "filter" ? (
                <MobileSideFilter setMobileFilter={setMobileFilter} />
            ) : mobileFilter === "sort" ? (
                <MobileSortFilter setMobileFilter={setMobileFilter} />
            ) : (
                <Layout>
                    <div>
                        <SellerBanner />
                    </div>
                    <div className={`${styles.seller_div}`}>
                        <div className="main">
                            <Row className={`${styles.wrapper}  `}>
                                <div  className={`  ${styles.sidefilter_div}`}>
                                    <SideFilters />
                                </div>
                                <div>
                                    <Listing setMobileFilter={setMobileFilter} />
                                </div>
                                <div
                                    className={`d-lg-block d-md-none d-none ${styles.contact_div}`}
                                >
                                    <ContactSection />
                                </div>
                            </Row>
                            <div className="text-center d-flex justify-content-center">
                                <PaginationBar
                                    noOfPages={6}
                                    currentPage={3}
                                    changePage={() => { }}
                                />
                            </div>
                        </div>
                    </div>
                </Layout>
            )}
        </div>
    </>);
};

export default Seller;
