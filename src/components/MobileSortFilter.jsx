import Image from "next/image";
import React from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import { search, searchLight } from "../../public/icons";

import styles from "../styles/MobileSortFilter.module.css";
const MobileSortFilter = ({ setMobileFilter }) => {
  return (
    <div className={`${styles.filter_div} pt-3 `}>
      <div className="d-flex  mx-4 justify-content-between align-items-centrer">
        <h2 className={`${styles.h2}`}>Sort by:</h2>
        <span onClick={() => setMobileFilter("")}>Close X</span>
      </div>
      <div className="search_filter p-4 pb-3 ">
        <div className="bg-white p-2">
          {" "}
          <Form.Check
            type="radio"
            label="Price - low to high"
            name="group2"
            id="radio1"
          />
        </div>
        <div className={`${styles.radio_div} bg-white p-2 `}>
          <Form.Check
            type="radio"
            label="Price - high to low"
            name="group2"
            id="radio3"
          />
        </div>
        <div className={`${styles.radio_div} bg-white p-2 `}>
          <Form.Check
            type="radio"
            label="Sort by Date"
            name="group2"
            id="radio2"
          />
        </div>
        <div className={`${styles.radio_div} bg-white p-2 `}>
          <Form.Check type="radio" label="Distance" name="group2" id="radio4" />
        </div>
      </div>

      <div
        className={`${styles.bottom_div} justify-content-center align-items-center d-flex`}
      >
        <Button
          className={`${styles.apply} w-100 ms-5 me-5`}
          variant="secondary  "
        >
          {" "}
          Apply{" "}
        </Button>
      </div>
    </div>
  );
};

export default MobileSortFilter;
