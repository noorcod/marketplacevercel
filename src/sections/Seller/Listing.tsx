'use client'
import Image from "next/image";
import { filterIcon, location, search, sortIcon } from "../../../public/icons";
import React, { useEffect, useState } from "react";
import styles from "../../styles/SellerListing.module.css";
import { Button, Card, Form } from "react-bootstrap";
import ReserveDetails from "../../components/ReserveDetails";
import { useRouter } from "next/navigation";
import ListingLoader from "../../components/ListingLoader";
import PaginationBar from "../../components/PaginationBar";
import Link from "next/link";

const Listing = ({
  setOrderBy,
  orderBy,
  filters,
  setFilters,
  totalItems,
  sandwichTriger,
  setMobileFilter,
  shopItems,
  isLoading,
  setSizeOfPages,
  currentPage,
  changePage,
  noOfPages,
}: any) => {
  const [reserveModal, setReserveModal] = useState(false);

  const [reserveData, setReserveData] = useState({});
  const router = useRouter();


  const calculatePrice = (price: any, discount: any, discountUnit: any) => {
    if (discountUnit === "percentage") {
      return price - price * (discount / 100);
    } else if (discountUnit === "fixed") {
      return price - discount;
    }
  };
  return (
    <div className="mx-1">
      <div className="d-flex justify-content-between align-items-baseline">
        <p className="w-100 ">
          1-{shopItems?.length} of {totalItems}
        </p>
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
      <div className="w-100 d-block  d-md-flex mt-3 d-lg-none ">
        <Button
          onClick={() => {
             sandwichTriger();
          }}
          className={`w-100 me-3 mb-2 rounded-2 ${styles.filter_btn} `}
        >
          <Image className="me-1" src={filterIcon} alt="filterIcon" /> Filter by
        </Button>
        <Button
          onClick={() => setMobileFilter("sort")}
          className={`w-100 rounded-2 mb-2  ${styles.filter_btn}`}
        >
          {" "}
          <Image src={sortIcon} alt="sort icon" /> sort by
        </Button>
      </div>
      {isLoading ? (
        <ListingLoader />
      ) : (
        <div>
          {shopItems?.map((data: any, index: number) => (
            <div key={index} className="mt-4">
              <Card
                className={`ms-2 ${styles.card_main} cursor-pointer d-flex rounded-1 `}
              >
                <div className={`d-flex ${styles.Card_body}`}>
                  <img
                   onClick={() => {
                    router.push(
                      `/product/${data?.listing_title.replace(/\s|\//g, "-")}-${data.listing_id}`
                    );
                  }}
                    className="rounded-1 image_cover "
                    height={155}
                    width={188}
                    src={data?.item.itemImages?.img0}
                    alt="productImg"
                  />
                  <Card.Body
                    onClick={() => {
                      router.push(
                        `/product/${data?.listing_title.replace(/\s|\//g, "-")}-${data.listing_id}`
                      );
                    }}
                    className="ms-3"
                  >
                    <Card.Title className="mb-0">
                      <p className="fs-20 fw-700 mb-0">{data.listing_title}</p>
                    </Card.Title>
                    <div className="d-flex  mt-2 ">
                      <div
                        style={{ minWidth: "30%" }}
                        className="d-flex d-lg-none d-md-none align-items-baseline mb-2"
                      >
                        <h6 className={`${styles.h6} me-2`}>
                          Rs.{" "}
                          {calculatePrice(
                            data?.online_price,
                            data?.online_discount,
                            data?.online_discount_unit
                          )?.toLocaleString("en-IN")}
                        </h6>
                        {data.online_discount > 0 ? (
                          <>
                            {" "}
                            <span className={`${styles.price_cut} `}>
                              Rs. {data?.online_price}
                            </span>
                            <span
                              className={`${styles.Off} ms-1 me-2 px-2 rounded-2 `}
                            >
                              {data.online_discount_unit === "fixed"
                                ? "Rs." + data.online_discount + "OFF"
                                : data.online_discount + "%OFF"}
                            </span>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="mb-4 d-lg-block d-md-block d-none  me-3">
                        <li className="fs-14">Brand: {data.brand}</li>
                        <li className="fs-14">
                          Condition: {data?.item.condition_item}
                        </li>
                      </div>
                      <div className="mb-4 d-lg-block d-md-block d-none ">
                        <li className="fs-14">Model: {data?.model}</li>
                        <li className="fs-14">
                          Colors: {data?.listingColorAssociations[0].color}
                        </li>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline   ">
                      <Image
                        className="me-1  rounded-2 "
                        src={location}
                        alt="location"
                        height="12"
                        width="10"
                      />
                      <p className={`${styles.location}`}>Lahore Pakistan</p>
                    </div>
                  </Card.Body>
                  <div
                   style={{ minWidth: "160px" }}
                  className="mt-2 me-3 d-lg-block d-md-block d-none">
                    <h6
                      onClick={() => {
                        router.push(
                          `/product/${data.title.replace(/\s|\//g, "-")}-${
                            data.listing_id
                          }`
                        );
                      }}
                      className={`${styles.h6}`}
                    >
                      Rs.{" "}
                      {calculatePrice(
                        data?.online_price,
                        data?.online_discount,
                        data?.online_discount_unit
                      )?.toLocaleString("en-IN")}
                    </h6>
                    {data.online_discount > 0 ? (
                      <div
                       
                        onClick={() => {
                          router.push(
                            `/product/${data.title.replace(/\s|\//g, "-")}-${
                              data.listing_id
                            }`
                          );
                        }}
                        className="d-flex mb-2"
                      >
                        <span className={`${styles.price_cut} `}>
                          Rs. {data?.online_price}
                        </span>{" "}
                        <span
                          className={`${styles.Off} ms-1 me-2 px-2 rounded-2 `}
                        >
                          {data.online_discount_unit === "fixed"
                            ? "Rs." + data.online_discount + "OFF"
                            : data.online_discount + "%OFF"}
                        </span>{" "}
                      </div>
                    ) : (
                      ""
                    )}
                    <Button
                      onClick={() => {
                        setReserveModal(true);
                      }}
                      className="mt-4  w-100"
                      variant="outline-secondary"
                    >
                      Reserve
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
          {shopItems?.length < 1 && (
            <div className="text-center align-items-center justify-content-center mt-5">
              <Image src={search} alt="search" className="mb-3" />
              <h5 className="text-dark">No result found!</h5>
            </div>
          )}
        </div>
      )}
      <ReserveDetails
        show={reserveModal}
        reserveData={reserveData}
        onHide={() => setReserveModal(false)}
      />
      {shopItems?.length > 0 && (
        <div className="text-center d-flex justify-content-center">
          <PaginationBar
            noOfPages={noOfPages}
            currentPage={currentPage}
            changePage={changePage}
          />
        </div>
      )}
    </div>
  );
};

export default Listing;
