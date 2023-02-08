import { Layout, SideFilters } from '@/components'
import Breadcrumbs from '@/components/Breadcrumb'
import PaginationBar from '@/components/PaginationBar'
import Listing from '@/sections/Specs/Listing'
import React from 'react'
import { Breadcrumb, Col, Row } from 'react-bootstrap'

const specs = () => {
    return (
        <Layout>

            <div className='main'>
                <Breadcrumbs />
                <Row className='borderBottom'>
                    <Col lg="3" >
                        <SideFilters />
                    </Col>
                    <Col lg="9">
                        <Listing />
                    </Col>
                </Row>
                <div className="text-center d-flex justify-content-center">
                </div>
            </div>
        </Layout>
    )
}

export default specs