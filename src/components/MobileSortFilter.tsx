import Image from "next/image";
import React from "react";
import { Accordion, Button, Form, Offcanvas } from "react-bootstrap";
import { search, searchLight } from "../../public/icons";

import styles from "../styles/MobileSortFilter.module.css";
const MobileSortFilter = ({ setMobileFilter,mobileFilter, orderBy, setOrderBy }:any) => {
  return (
    <Offcanvas  backdrop={true} scroll={true} show={mobileFilter} onHide={()=>setMobileFilter(false)}>
      <Offcanvas.Header closeButton>

<h2 className={`${styles.h2}`}>Sort by:</h2>

</Offcanvas.Header>
<Offcanvas.Body   style={{height: '100vh'}} >
      <div className="search_filter p-4 pb-3 ">
        <div className="bg-white p-2">
          {" "}
          <Form.Check
            type="radio"
            label="Price - low to high"
            name="group2"
            id="radio1"
            onChange={()=>{
              setOrderBy({
                price: "asc",
              });
            }}
          
          />
        </div>
        <div className={`${styles.radio_div} bg-white p-2 `}>
          <Form.Check
            type="radio"
            label="Price - high to low"
            name="group2"
            id="radio3"
            onChange={()=>{
              setOrderBy({
                price: "desc",
              });
            }}
          />
        </div>
        {/* <div className={`${styles.radio_div} bg-white p-2 `}>
          <Form.Check
            type="radio"
            label="Sort by Date"
            name="group2"
            id="radio2"
            onChange={()=>{
              
            }}
          />
        </div> */}
        {/* <div className={`${styles.radio_div} bg-white p-2 `}>
          <Form.Check type="radio" label="Distance" name="group2" id="radio4" />
        </div> */}
      </div>

      {/* <div
        className={`${styles.bottom_div} justify-content-center align-items-center d-flex`}
      >
        <Button
          className={`${styles.apply} w-100 ms-5 me-5`}
          variant="secondary  "
        >
          {" "}
          Apply{" "}
        </Button>
      </div> */}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MobileSortFilter;
