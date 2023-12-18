"use client";

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/Specs.module.css";
import { useNavigationEvent } from "../hooks/useNavigationEvent";
import LandingPage from "../../sections/Specs/LandingPage";
import Breadcrumbs from "../../components/Breadcrumb";
import { MobileSideFilter } from "../../components";
const Specs = () => {
  const [mobileFilter, setMobileFilter] = useState();
  useNavigationEvent();

  return (
    <>
      {mobileFilter === "filter" ? (
        <MobileSideFilter setMobileFilter={setMobileFilter} />
      ) : (
        <div className={`${styles.specs_div}`}>
          <div className="main">
            <Breadcrumbs />
            <Row className="borderBottom">
              <Col lg="12">
                <LandingPage />
              </Col>
            </Row>
            <div className="text-center d-flex justify-content-center"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Specs;
