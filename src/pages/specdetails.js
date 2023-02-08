import { Layout, SideFilters } from "@/components";
import Breadcrumbs from "@/components/Breadcrumb";
import SpecDetail from "@/sections/SpecDetails/SpecDetails";
import { Col, Row } from "react-bootstrap";

const SpecDetails = () => {
    return (
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
    );
}

export default SpecDetails;