import Image from "next/image";
import React, { useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import { search, searchLight } from "../../public/icons";

import styles from "../styles/MobileSideFilter.module.css";
import MultiRangeSlider from "./MultiRangeSlider";
const MobileSideFilter = ({ setMobileFilter }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  return (
    <div className={`${styles.filter_div} pt-3 `}>
      <div className="d-flex  mx-4 justify-content-between align-items-centrer">
        <h2 className={`${styles.h2}`}>Filter by:</h2>
        <span onClick={() => setMobileFilter("")}>Close X</span>
      </div>
      <div className="search_filter p-4 pb-3 ">
        <div className="d-flex mb-1 ">
          <div
            className={`position-relative w-100 d-flex align-items-center ${styles.searchbar}`}
          >
            <Image
              className={`position-absolute `}
              src={search}
              alt="searchIcon"
              width={18}
              height={18}
            />
            <Form.Control
              className="ps-5  rounded-0 rounded-start  py-2 w-100"
              placeholder="Search by name"
            />
          </div>
          <Button className=" h-100 px-4 rounded-0 rounded-end py-2 ">
            <Image src={searchLight} alt="searchLightIcon" width={18} height={26} />
          </Button>
        </div>
      </div>
      <Accordion className={`${styles.accordian_main}`} defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className={`${styles.nav_header}`}>
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
                className={` d-flex justify-content-center ${styles.nav_mb}  px-2`}
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
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div
        className={`${styles.bottom_div} justify-content-center align-items-center d-flex`}
      >
        <Button
          className={`${styles.clearfilter} ms-5 me-3 `}
          variant="outline-secondary w-100 "
        >
          {" "}
          Clear filter{" "}
        </Button>
        <Button className={`${styles.apply} w-100  me-5`} variant="secondary  ">
          {" "}
          Apply{" "}
        </Button>
      </div>
    </div>
  );
};

export default MobileSideFilter;
