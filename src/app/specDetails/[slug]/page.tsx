'use client'

import { Layout, SideFilters } from "../../../components"
import Breadcrumbs from "../../../components/Breadcrumb";
// import Meta from "../../../components/Meta/Meta";
import SpecDetail from "../../../sections/SpecDetails/SpecDetails";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import { Col, Row } from "react-bootstrap";
import { useNavigationEvent } from "../../hooks/useNavigationEvent";

const SpecDetails = () => {
    const router = useRouter();
    useNavigationEvent()

    // router?.events?.on('routeChangeStart', (url) => {
    //     console.log(`Loading: ${url}`)
    //     nProgress.start()
    // })
    // router?.events?.on('routeChangeComplete', () => nProgress.done())
    // router?.events?.on('routeChangeError', () => nProgress.done())
    return (<>
        {/* <Meta
         title={router.query.title}
          /> */}
        <Layout>
            <main className="main mt-3">
                <Breadcrumbs />
                <Row className="my-4 mt-lg-3 mt-5">
                    <Col lg="3" className="d-none d-lg-block">
                        <SideFilters />
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="9">
                        <SpecDetail />
                    </Col>
                </Row>
            </main>
        </Layout>
    </>);
}

export default SpecDetails;