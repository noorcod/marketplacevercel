import { LoadingCard, ProductCard, SideFilters } from "../../components";
import Breadcrumbs from "../../components/Breadcrumb";
import PaginationBar from "../../components/PaginationBar";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { filterIcon, search, searchLight, sortIcon } from "../../../public/icons";

interface prop {
  setMobileFilter: (string: string | undefined) => String | undefined;
}

import styles from "../../styles/ProductListing.module.css";
const Listing = ({
  dependentFilters,
  isSandwichOpen,
  setisSandwichOpen,
  setCategory,
  setBrand,
  setColor,
  setCondition,
  setLocation,
  setOrderBy,
  orderBy,
  getFilters,
  setdependentFilters,
  filters,
  setFilters,
  totalItems,
  filtersData,
  sandwichTriger,
  setMobileFilter,
  shopItems,
  getItems,
  setSizeOfPages,
  currentPage,
  changePage,
  noOfPages,
}: any) => {
  // const [loading, setLoading] = useState(isLoading);

  // useEffect(() => {
  //     setLoading(isLoading);
  // }, [isLoading]);

  return (
    <div className={`${styles.listingdiv}`}>
      <div className="main">
        <div className="d-flex justify-content-between mb-4">
          {" "}
          <Breadcrumbs />
          <p className="d-lg-block d-md-block d-none">
            1-{shopItems?.length} of {totalItems} results
          </p>{" "}
        </div>
        <Row className="">
          <Col lg="3">
            <SideFilters
              dependentFilters={dependentFilters}
              setisSandwichOpen={setisSandwichOpen}
              isSandwichOpen={isSandwichOpen}
              setCategory={setCategory}
              setOrderBy={setOrderBy}
              orderBy={orderBy}
              setFilters={setFilters}
              isLoading={getFilters?.isLoading}
              setdependentFilters={setdependentFilters}
              setBrand={setBrand}
              setColor={setColor}
              setCondition={setCondition}
              setLocation={setLocation}
              filtersData={filtersData}
            />
          </Col>

          <Col lg="9">
            <div className="w-100 border-lg-bottom borderBottom  pb-2 justify-content-between d-block d-lg-flex d-md-flex">
              <h1 className={`${styles.h1}`}>Products</h1>
              <div className="d-flex align-items-baseline">
                <div className="d-flex w-100">
                  <Form.Select
                    onChange={(e) => {
                      setSizeOfPages(e.target.value);
                    }}
                    className="ms-3"
                    aria-label="Default select example"
                  >
                    <option value={10}> Showing 10</option>
                    <option value={20}>Showing 20</option>
                    <option value={30}>Showing 30</option>
                  </Form.Select>
                  <Form.Select
                    className="d-none d-lg-block ms-3"
                    aria-label="Default select example"
                    onChange={(e) => {
                      let value = e.target.value;
                      if (value === "PASC") {
                        setOrderBy({
                          price: "asc",
                        });
                      } else if (value === "PDESC") {
                        setOrderBy({ price: "desc" });
                      }
                    }}
                  >
                    <option>select Sort</option>
                    <option id="price" value="PASC">
                      Price low to high
                    </option>
                    <option id="price" value="PDESC">
                      Price high to low
                    </option>
                    {/* <option  id="title" value="ASC">Top sold</option> */}
                    {/* <option value="ASC">Top reviewed</option> */}
                  </Form.Select>
                </div>
              </div>
            </div>
            <div className="w-100 d-block  d-md-flex mt-3 d-lg-none ">
              <Button
                onClick={() => {
                  setisSandwichOpen(true);
                }}
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
              {shopItems?.map((data: any, index: number) => (
                <ProductCard
                  listingId={data?.listing_id}
                  item={data?.item}
                  title={data?.listing_title}
                  condition={data?.item.condition_item}
                  loading={getItems?.isLoading}
                  key={index}
                  discount={parseInt(data.online_discount)}
                  price={data.online_price}
                />
              ))}
              {shopItems?.length > 0 && (
                <PaginationBar
                  noOfPages={noOfPages}
                  currentPage={currentPage}
                  changePage={changePage}
                />
              )}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Listing;
