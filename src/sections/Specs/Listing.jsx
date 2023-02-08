import PaginationBar from "@/components/PaginationBar";
import Image from "next/image";
import { filterIcon } from "public/icons";
import { MobileImage } from "public/images";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/SpecsListing.module.css";
import LoadingStyles from "../../styles/LoadingCard.module.css";
const Listing = () => {
  const [Loading, setloading] = useState(true);
  setTimeout(() => {
    setloading(false);
  }, 5000);
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
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ];
  return (
    <div>
      <div
        className={`w-100 border-lg-bottom ${styles.listin_div} mb-3 pb-3 justify-content-between d-block d-lg-flex d-md-flex`}
      >
        <h1 className={`${styles.h1}`}>Explore specs</h1>
        <div className="d-flex align-items-baseline">
          <p className="w-100 d-lg-none d-md-none d-block">1-12 of 200</p>
          <div className="w-100 d-block  d-md-flex mt-3  d-lg-none  d-none">
            <Button
              onClick={() => setMobileFilter("filter")}
              className={`w-100 me-3 mb-2 rounded-2 ${styles.filter_btn} `}
            >
              <Image className="me-1" src={filterIcon} /> Filter by
            </Button>
          </div>
          <Form.Select className="mx-3" aria-label="Default select example">
            <option>Showing 1-18</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>
      <div className="w-100 d-block  d-md-none mt-3 d-lg-none ">
        <Button
          onClick={() => setMobileFilter("filter")}
          className={`w-100 me-3 mb-2 rounded-2 ${styles.filter_btn} `}
        >
          <Image className="me-1" src={filterIcon} /> Filter by
        </Button>
      </div>
      <Row>
        {array.map((data, index) => (
          <Col lg="3" md="3" sm="4" xs="4" key={index}>
            {/* <Loader /> */}
            {Loading ? (
              <Loader />
            ) : (
              <div>
                <div className={`${styles.image_div} text-center`}>
                  <img
                    height={122}
                    width={"100%"}
                    src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  />
                </div>
                <p className="mt-3 text-center">Galaxy Tab A7 10.4 (2022)</p>
              </div>
            )}
          </Col>
        ))}
      </Row>
      <PaginationBar noOfPages={6} currentPage={3} changePage={() => {}} />
    </div>
  );
};

export default Listing;

const Loader = () => {
  return (
    <div>
      <div>
        <div
          className={`${styles.image_div} ${LoadingStyles.skeleton}  ${LoadingStyles.cover}  text-center`}
        >
          {/* <Image height={122} width={"100%"} src={MobileImage} /> */}
        </div>
        <p className={`mt-3 text-center ${LoadingStyles.skeleton} `}></p>
      </div>
    </div>
  );
};
