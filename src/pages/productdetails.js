import { Row, Col } from "react-bootstrap";
import { Layout } from "@/components";
import ImageCarousel from "@/sections/ProductDetails/ImageCarousel";
import ProductDetailSection from "@/sections/ProductDetails/ProductDetailSection";
import RelatedProducts from "@/sections/ProductDetails/RelatedProducts";
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumb";

function ProductDetails() {
    const [showText, setShowText] = useState(false);
    const text = "Lorem Ipsum is simply dummy text of the printing. Simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing. Simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.";
    return (
        <Layout>
            <main className="main mt-3">
                <Breadcrumbs />
                <Row className="my-5">
                    <Col xs="12" sm="12" md="6" lg="7">
                        <ImageCarousel />
                        <Row className="mt-3">
                            <Col xs="12" sm="12" md="12" lg="2" className='mt-4 mt-lg-0 d-none d-md-block'>
                            </Col>
                            <Col xs="12" sm="12" md="12" lg="10" className={`px-0 pe-4 mb-4 mb-md-0 `}>
                                <p><strong>Product details -</strong> {showText ? text.slice(0, 100) : text} <span onClick={() => setShowText(!showText)} className="link cursor-pointer">{showText ? "Read more..." : "Show less"}</span></p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="5">
                        <ProductDetailSection />
                    </Col>
                </Row>
            </main>
            <RelatedProducts />
        </Layout>
    );
}

export default ProductDetails;