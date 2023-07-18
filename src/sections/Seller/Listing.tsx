import Image from "next/image";
import { filterIcon, location, search, sortIcon } from "../../../public/icons";
import React, { useState } from "react";
import styles from "../../styles/SellerListing.module.css";
import { Button, Card, Form } from "react-bootstrap";
import ReserveDetails from "../../components/ReserveDetails";
import { useRouter } from "next/navigation";
import ListingLoader from "../../components/ListingLoader";

const Listing = ({ totalItems, sandwichTriger, setMobileFilter, shopItems, isLoading, setSizeOfPages }: any) => {
  const [reserveModal, setReserveModal] = useState(false);
  const router = useRouter();
  // router.events.on("routeChangeStart", (url) => {
  //   console.log("route is changing");
  // });
console.log(shopItems)
  return (
    <div className="mx-1">
      <div  className="d-flex justify-content-between align-items-baseline" >
        <p className="w-100 ">1-{shopItems?.length} of {totalItems}</p>
        <div className="d-flex w-100">
          <Form.Select
            onChange={(e) => {
              setSizeOfPages(e.target.value)
            }}
            className="ms-3" aria-label="Default select example">
            <option value={10}> Showing 10</option>
            <option value={20}>Showing 20</option>
            <option value={30}>Showing 30</option>
          </Form.Select>
          <Form.Select
            className="d-none d-lg-block ms-3"
            aria-label="Default select example"
          >
            <option>Sort by</option>

            <option value="10">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>
      <div className="w-100 d-block  d-md-flex mt-3 d-lg-none ">
        <Button
          onClick={() => { setMobileFilter("filter"), sandwichTriger() }}
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
      {isLoading ? <ListingLoader /> :
        <div>
          {shopItems?.map((data: any, index: number) => (
            <div key={index} className="mt-4">

              <Card
                onClick={() => {
                  router.push(`/product/${data.title.replace(/\s|\//g, "")}/?id=${data.item_id}` )
                }}
                className={`ms-2 ${styles.card_main} cursor-pointer d-flex rounded-1 `}
              >
                <div className={`d-flex ${styles.Card_body}`}>
                  <img
                    className="rounded-1 image_cover "
                    height={155}
                    width={188}
                    src={data.img0}
                    alt="productImg"
                  />
                  <Card.Body className="ms-3">
                    <Card.Title className="mb-0">
                      <p className="fs-20 fw-700 mb-0">{data.title}</p>
                    </Card.Title>
                    <div className="d-flex  mt-2 ">
                      <div className="d-flex d-lg-none d-md-none align-items-baseline mb-2">
                        <h6 className={`${styles.h6} me-2`}>Rs. {data.sale_price.toLocaleString("en-IN")}</h6>
                        <span className={`${styles.price_cut} `}>Rs. 1000</span>{" "}
                        <span className={`${styles.Off} ms-1 me-2 px-2 rounded-2 `}>
                          11%OFF
                        </span>{" "}
                      </div>
                      <div className="mb-4 d-lg-block d-md-block d-none  me-3">
                        <li className="fs-14">Brand: {data.brand}</li>
                        <li className="fs-14">Condition: {data.condition_item}</li>
                      </div>
                      <div className="mb-4 d-lg-block d-md-block d-none ">
                        <li className="fs-14">Model: {data.model}</li>
                        <li className="fs-14">Colors: {data.color}</li>
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
                    <h6 className={`${styles.h6}`}>Rs. {data.sale_price.toLocaleString("en-IN")}</h6>
                    <div className="d-flex mb-2">
                      <span className={`${styles.price_cut} `}>Rs. 1000</span>{" "}
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
          {shopItems?.length < 1 && <div className="text-center align-items-center justify-content-center mt-5">
            <Image
              src={search}
              alt="search"
              className="mb-3"
            />
            <h5 className="text-dark">No result found!</h5>

          </div>}
        </div>

      }<ReserveDetails
        show={reserveModal}
        onHide={() => setReserveModal(false)}
      />

    </div>
  );
};

export default Listing;



