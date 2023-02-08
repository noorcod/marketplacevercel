import React, { useState } from "react";
import { Layout, MobileSideFilter, SideFilters } from "@/components";
import SellerBanner from "@/sections/Seller/SellerBanner";
import { Col, Row } from "react-bootstrap";
import Listing from "@/sections/Seller/Listing";
import styles from "../styles/Seller.module.css";
import ContactSection from "@/sections/Seller/ContactSection";
import MobileSortFilter from "@/components/MobileSortFilter";
import PaginationBar from "@/components/PaginationBar";
const Seller = () => {
    const [mobileFilter, setMobileFilter] = useState();

    return (
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
                                <div lg="3" className={`  ${styles.sidefilter_div}`}>
                                    <SideFilters />
                                </div>
                                <div>
                                    <Listing setMobileFilter={setMobileFilter} />
                                </div>
                                <div
                                    lg="3"
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
    );
};

export default Seller;
