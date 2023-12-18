"use client";

import { useParams } from "next/navigation";
import { Col, Row } from "react-bootstrap";
import { useNavigationEvent } from "../../../hooks/useNavigationEvent";
import SpecDetail from "../../../../sections/SpecDetails/SpecDetails";
import Breadcrumbs from "../../../../components/Breadcrumb";

const SpecDetails = () => {
  useNavigationEvent();
  const params = useParams();
  // router?.events?.on('routeChangeStart', (url) => {
  //     (`Loading: ${url}`)
  //     nProgress.start()
  // })
  // router?.events?.on('routeChangeComplete', () => nProgress.done())
  // router?.events?.on('routeChangeError', () => nProgress.done())

  const categories: { [key: string]: number } = {
    mobile: 2,
    tablet: 3,
    "tv-monitor": 4,
    laptop: 1,
    "desktop-computer": 5,
    accessories: 6,
  };

  let paramArray = params.model.split("-");
  let modelId = paramArray[paramArray.length - 1];

  return (
    <>
      <main className="main mt-3">
        <Breadcrumbs />
        <Row className="my-4 mt-lg-3 mt-5">
          <Col xs="12" sm="12" md="12" lg="12">
            <SpecDetail categoryId={+categories[params.category]} category={params.category} modelId={+modelId} />
          </Col>
        </Row>
      </main>
    </>
  );
};

export default SpecDetails;
