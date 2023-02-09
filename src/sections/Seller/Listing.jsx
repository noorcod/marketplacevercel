import Image from "next/image";
import { filterIcon, location, sortIcon } from "public/icons";
import React, { useState } from "react";
import styles from "../../styles/SellerListing.module.css";
import { Button, Card, Form } from "react-bootstrap";
import ReserveDetails from "@/components/ReserveDetails";
import { useRouter } from "next/router";

const Listing = ({ setMobileFilter }) => {
  const [reserveModal, setReserveModal] = useState(false);
  const router = useRouter();
  // router.events.on("routeChangeStart", (url) => {
  //   console.log("route is changing");
  // });
  const handleReserveModal = () => {
    setReserveModal(true);
  };
  const array = ["1", "2", "3", "6", "7"];
  return (
    <div className="mx-1">
      <div className="d-flex justify-content-between align-items-baseline">
        <p className="w-100 ">1-12 of 200</p>
        <div className="d-flex w-100">
          <Form.Select className="ms-3" aria-label="Default select example">
            <option>Showing 1-18</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select
            className="d-none d-lg-block ms-3"
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
      {array.map((data, index) => (
        <div key={index} className="mt-4">
          <Card
            onClick={() => router.push("/productDetails/samsung")}
            className={`ms-2 ${styles.card_main} cursor-pointer d-flex rounded-1 `}
          >
            <div className={`d-flex ${styles.Card_body}`}>
              <img
                className="rounded-1 image_cover "
                height={155}
                width={188}
                src="https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-50..v1668971764.jpg"
                alt="productImg"
              />
              <Card.Body className="ms-3">
                <Card.Title className="mb-0">
                  <p className="fs-20 fw-700 mb-0">Samsung Galaxy A72</p>
                </Card.Title>
                <div className="d-flex  mt-2 ">
                  <div className="d-flex d-lg-none d-md-none align-items-baseline mb-2">
                    <h6 className={`${styles.h6} me-2`}>$890</h6>
                    <span className={`${styles.price_cut} `}>$1000</span>{" "}
                    <span className={`${styles.Off} ms-1 me-2 px-2 rounded-2 `}>
                      11%OFF
                    </span>{" "}
                  </div>
                  <div className="mb-4 d-lg-block d-md-block d-none  me-3">
                    <li>brand: Samsung</li>
                    <li>condition: Used</li>
                  </div>
                  <div className="mb-4 d-lg-block d-md-block d-none ">
                    <li>brand: Samsung</li>
                    <li>condition: Used</li>
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
              <div className="mt-2 me-3 d-lg-block d-md-block d-none">
                <h6 className={`${styles.h6}`}>$890</h6>
                <div className="d-flex mb-2">
                  <span className={`${styles.price_cut} `}>$1000</span>{" "}
                  <span className={`${styles.Off} ms-1 me-2 px-2 rounded-2 `}>
                    11%OFF
                  </span>{" "}
                </div>
                <Button
                  onClick={() => setReserveModal(true)}
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
      <ReserveDetails
        show={reserveModal}
        onHide={() => setReserveModal(false)}
      />
    </div>
  );
};

export default Listing;
