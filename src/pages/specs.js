import { Layout, MobileSideFilter, SideFilters } from '@/components'
import Breadcrumbs from '@/components/Breadcrumb'
import PaginationBar from '@/components/PaginationBar'
import Listing from '@/sections/Specs/Listing'
import React, { useState } from 'react'
import { Breadcrumb, Col, Row } from 'react-bootstrap'
import styles from "../styles/Specs.module.css"
const specs = () => {
    const [mobileFilter, setMobileFilter] = useState();

    return (
        <>
            {mobileFilter === "filter" ? (
                <MobileSideFilter setMobileFilter={setMobileFilter} />
            ) :
                <Layout>
                    <div className={`${styles.specs_div}`}>

                        <div className='main'>
                            <Breadcrumbs />
                            <Row className='borderBottom'>
                                <Col lg="3" >
                                    <SideFilters />
                                </Col>
                                <Col lg="9">
                                    <Listing setMobileFilter={setMobileFilter} />
                                </Col>
                            </Row>
                            <div className="text-center d-flex justify-content-center">
                            </div>
                        </div>
                    </div>

                </Layout>}
        </>
    )
}

export default specs