import Image from "next/image";
import React, { useState } from "react";
import { Accordion, Button, Col, Form, Row } from "react-bootstrap";
import { search, searchLight } from "../../public/icons";
import styles from "../styles/SideFilters.module.css";
import loadStyles from "../styles/LoadingCard.module.css";
import MultiRangeSlider from "./MultiRangeSlider";
const SideFilters = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

  return (
    <div>
      {" "}
      <div
        className={`${styles.sideFilters}  border rounded-2 d-lg-block d-md-none d-none me-4`}
      >
        <div className="search_filter p-4 pb-3 ">
          <div className="d-flex mb-1 ">
            <Form.Control
              className=" rounded-0 fs-14 rounded-start   w-100"
              placeholder="Search by keyword"
            />
            <Button className=" h-100 rounded-0 rounded-end py-2 ">
              <Image
                src={searchLight}
                alt="searchLight"
                width={18}
                height={18}
              />
            </Button>
          </div>

          <a className="secondary-link text-decoration-underline " href="#">
            {" "}
            clear all filters{" "}
          </a>
        </div>
        <Accordion className={`${styles.accordian_main}`} defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className={`${styles.nav_header} `}>
              BRANDS{" "}
              <a href="#" className="ms-2 secondary-link">
                {" "}
                Clear
              </a>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-1`}
                      label={`Samsung (200)`}
                    />
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-122`}
                      label={`Apple (200)`}
                    />
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-12`}
                      label={`Vivo (200)`}
                    />
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className={`${styles.nav_header}`}>
              City{" "}
              <a href="#" className="ms-2 secondary-link">
                {" "}
                Clear
              </a>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-1`}
                      label={`Samsung (200)`}
                    />
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-122`}
                      label={`Apple (200)`}
                    />
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-12`}
                      label={`Vivo (200)`}
                    />
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className={`${styles.nav_header}`}>
              City{" "}
              <a href="#" className="ms-2 secondary-link">
                {" "}
                Clear
              </a>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-1`}
                      label={`Samsung (200)`}
                    />
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-122`}
                      label={`Apple (200)`}
                    />
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-12`}
                      label={`Vivo (200)`}
                    />
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className={`${styles.nav_header}`}>
              City{" "}
              <a href="#" className="ms-2 secondary-link">
                {" "}
                Clear
              </a>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-1`}
                      label={`Samsung (200)`}
                    />
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-122`}
                      label={`Apple (200)`}
                    />
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-12`}
                      label={`Vivo (200)`}
                    />
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className={`${styles.nav_header}`}>
              City{" "}
              <a href="#" className="ms-2 secondary-link">
                {" "}
                Clear
              </a>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-1`}
                      label={`Samsung (200)`}
                    />
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-122`}
                      label={`Apple (200)`}
                    />
                    <Form.Check
                      className={`${styles.checkbox}`}
                      type="checkbox"
                      id={`default-12`}
                      label={`Vivo (200)`}
                    />
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className={`${styles.nav_header}`}>
              Prices{" "}
              <a href="#" className="ms-2 secondary-link">
                {" "}
                Clear
              </a>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <MultiRangeSlider
                    min={0}
                    max={5000}
                    minValue={minValue}
                    maxValue={maxValue}
                    onChange={({ min, max }) =>
                      console.log(`min = ${min}, max = ${max}`)
                    }
                  />
                </div>
                <Button
                  onClick={() => {
                    setMinValue(100);
                    setMaxValue(1500);
                  }}
                  variant="outline-secondary "
                  className="mt-4"
                >
                  $100 to $1500
                </Button>
                <Button
                  onClick={() => {
                    setMinValue(100);
                    setMaxValue(700);
                  }}
                  variant="outline-secondary mt-2"
                >
                  $100 to $700
                </Button>
                <Button
                  onClick={() => {
                    setMinValue(100);
                    setMaxValue(3000);
                  }}
                  variant="outline-secondary mt-2"
                >
                  $100 to $3000
                </Button>
                <Button
                  onClick={() => {
                    setMinValue(600);
                    setMaxValue(4000);
                  }}
                  variant="outline-secondary mt-2"
                >
                  $600 to $4000
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default SideFilters;
