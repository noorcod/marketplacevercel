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
    {
        "id": 2357,
        title: "Apple iPhone 6s 2/128 Gold",
        "quantity": 19,
        sale_price: 38000,
        "created_at": "2023-06-07T16:32:53.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/dummyImages/mobiles.jpg"
    },
    {
        "id": 2340,
        title: "Samsung testing 48/1000 Agate Black",
        "quantity": 33,
        sale_price: 250,
        "created_at": "2023-06-01T17:53:33.000Z",
        "updated_at": null,
        "label": "Tabs",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/dummyImages/tablets.jpg"
    },
    {
        "id": 2339,
        title: "Apple iPhone 11 Pro 4/128 Matte Midnight Green",
        "quantity": 11,
        sale_price: 500,
        "created_at": "2023-06-01T17:52:50.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/zK7NHmCbDpszysNL1673934802860.jpg"
    },
    {
        "id": 2336,
        title: "Apple iPhone 11 Pro 4/64 Matte Gold",
        "quantity": 3,
        sale_price: 450000,
        "created_at": "2023-05-31T14:29:30.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/OULxFxWgiYZkUksU1673934822349.jpg"
    },
    {
        "id": 2335,
        title: "CALME C225 0/0 White",
        "quantity": 5,
        sale_price: 3000,
        "created_at": "2023-05-31T14:29:03.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/XLGcFXzFdkPtiUI41685426832687.png"
    },
    {
        "id": 2332,
        title: "Apple iPhone 13 4/256 Green",
        "quantity": 3,
        sale_price: 249999,
        "created_at": "2023-05-31T12:28:08.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/EdnBBOHZctZV2LgQ1673590970744.jpg"
    },
    {
        "id": 2301,
        title: "Oppo F11 6/128 Fluorite Purple",
        "quantity": 30,
        sale_price: 56553,
        "created_at": "2023-05-23T15:39:28.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/ztOro9YpW2g2AORV1684837454273.png"
    },
    {
        "id": 2280,
        title: "Apple iPhone 8 2/256 Red",
        "quantity": 6,
        sale_price: 70000,
        "created_at": "2023-05-22T10:53:06.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/6HzDXSL1AE7FKKPR1673956353702.jpg"
    },
    {
        "id": 2275,
        title: "Apple iPhone 12 Pro Max 6/256 Gold",
        "quantity": 4,
        sale_price: 250000,
        "created_at": "2023-05-19T11:22:44.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/dummyImages/mobiles.jpg"
    },
    {
        "id": 2274,
        title: "Apple iPhone 12 Pro Max 6/256 Graphite",
        "quantity": 5,
        sale_price: 265000,
        "created_at": "2023-05-19T11:14:14.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/c05F32BHUfQOGScQ1673671251917.png"
    }
]
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
                <ProductCard image={data.img0} title={data.title} loading={loading} key={index} price={data.sale_price} />
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
