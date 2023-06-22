import { ProductCard, SideFilters } from "../../components";
import Breadcrumbs from "../../components/Breadcrumb";
import PaginationBar from "../../components/PaginationBar";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {
  filterIcon,
  search,
  searchLight,
  sortIcon,
} from "../../../public/icons";

interface prop{
  setMobileFilter:(string:string|undefined)=> String|undefined
}

import styles from "../../styles/ProductListing.module.css";
const Listing = ({ setMobileFilter }:any) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const array = [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ];
  return (
    <div className={`${styles.listingdiv}`}>
      <div className="main">
        <div className="d-flex justify-content-between mb-4">
          {" "}
          <Breadcrumbs />
          <p className="d-lg-block d-md-block d-none">
            1-18 of over 200 results
          </p>{" "}
        </div>
        <Row className="">
          <Col lg="3">
            <SideFilters />
          </Col>

          <Col className=" " lg="9">
            <div className="w-100 border-lg-bottom borderBottom  pb-2 justify-content-between d-block d-lg-flex d-md-flex">
              <h1 className={`${styles.h1}`}>Products</h1>
              <div className="d-flex align-items-baseline">
                <p className="w-100 d-lg-none d-md-none d-block">1-12 of 200</p>
                <Form.Select
                  className="mx-3"
                  aria-label="Default select example"
                >
                  <option>Showing 1-18</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="d-none d-lg-block "
                  aria-label="Default select example"
                >
                  <option>Sort by</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
            <div className="w-100 d-block  d-md-flex mt-3 d-lg-none ">
              <Button
                onClick={() => setMobileFilter("filter")}
                className={`w-100 me-3 mb-2 rounded-2 ${styles.filter_btn} `}
              >
                <Image alt="" className="me-1" src={filterIcon} /> Filter by
              </Button>
              <Button
                onClick={() => setMobileFilter("sort")}
                className={`w-100 rounded-2 mb-2  ${styles.filter_btn}`}
              >
                {" "}
                <Image alt="" src={sortIcon} /> sort by
              </Button>
            </div>
            <Row className="d-flex">
              {array.map((data, index) => (
                <ProductCard loading={loading} key={index} />
              ))}
              <PaginationBar
                noOfPages={6}
                currentPage={3}
                changePage={() => {}}
              />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Listing;
