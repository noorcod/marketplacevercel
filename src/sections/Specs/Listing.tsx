import PaginationBar from "../../components/PaginationBar";
import Image from "next/image";
import { filterIcon } from "../../../public/icons";
import { MobileImage } from "../../../public/images";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/SpecsListing.module.css";
import LoadingStyles from "../../styles/LoadingCard.module.css";
import { useRouter } from "next/navigation";

const Listing = ({ setMobileFilter }:any) => {
  const [Loading, setloading] = useState(true);
  const router = useRouter();
  setTimeout(() => {
    setloading(false);
  }, 5000);
  const array = [
        {
        "id": 908,
        "title": "Realme Mobile Screen Protector C33",
        "quantity": 20,
        "sale_price": 1150,
        "created_at": "2023-04-26T20:05:31.000Z",
        "updated_at": null,
        "label": "Accessories",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/CenZlbRGY4XgT5CC1682521530271.jpg"
    },
    
    {
        "id": 897,
        "title": "Realme Tablet Screen Protector test protector",
        "quantity": 6,
        "sale_price": 70,
        "created_at": "2023-04-25T17:51:32.000Z",
        "updated_at": null,
        "label": "Accessories",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/UT3GjXIQ8eqfFvAJ1682427091945.jpg"
    },
    {
        "id": 901,
        "title": "V-100 KEYBOARD",
        "quantity": 2,
        "sale_price": 4500,
        "created_at": "2023-04-26T10:33:52.000Z",
        "updated_at": null,
        "label": "Accessories",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/3l52257v4nb7tvgi1682487231020.jpg"
    },
    {
        "id": 903,
        "title": "HP Bag Laptop Parashut",
        "quantity": 4,
        "sale_price": 3200,
        "created_at": "2023-04-26T11:41:55.000Z",
        "updated_at": null,
        "label": "Accessories",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/uIk5IwQDZjhA4sXh1682491313536.jpg"
    },
    {
        "id": 904,
        "title": "Smart Watch Charger 1.5 V T700",
        "quantity": 5,
        "sale_price": 1100,
        "created_at": "2023-04-26T15:37:57.000Z",
        "updated_at": "2023-04-26T15:39:48.000Z",
        "label": "Accessories",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/qKWHDZ7QSj8P3iCs1682505475674.jpg"
    },
    {
        "id": 906,
        "title": "Lenovo Laptop Screen Protector 5D",
        "quantity": 89,
        "sale_price": 900,
        "created_at": "2023-04-26T16:11:46.000Z",
        "updated_at": "2023-04-26T16:15:20.000Z",
        "label": "Accessories",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/CjpcoH82VpdrdaO01682507505751.jpg"
    },
    {
        "id": 907,
        "title": "Apple watch 42 mm First gen 512 MB Ram and 8 GB Storage",
        "quantity": 1,
        "sale_price": 30000,
        "created_at": "2023-04-26T16:19:16.000Z",
        "updated_at": null,
        "label": "Accessories",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/o3skR25aMwQSs9kX1682507955355.jpg"
    },
    {
        "id": 908,
        "title": "Realme Mobile Screen Protector C33",
        "quantity": 20,
        "sale_price": 1150,
        "created_at": "2023-04-26T20:05:31.000Z",
        "updated_at": null,
        "label": "Accessories",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/CenZlbRGY4XgT5CC1682521530271.jpg"
    },
    {
        "id": 920,
        "title": "Realme Smart Watch testing watch",
        "quantity": 6,
        "sale_price": 650,
        "created_at": "2023-04-27T11:07:59.000Z",
        "updated_at": null,
        "label": "Accessories",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/feBg8AlO5WaTyGAF1682575678586.jpg"
    },
    {
        "id": 921,
        "title": "Realme Smart Watch testing watch",
        "quantity": 5,
        "sale_price": 650,
        "created_at": "2023-04-27T11:09:39.000Z",
        "updated_at": null,
        "label": "Accessories",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/1wiNj50mDsHBLFfS1682575779294.jfif"
    },
    {
        "id": 928,
        "title": "X8 Ultra Smart Watch",
        "quantity": 5,
        "sale_price": 9000,
        "created_at": "2023-04-27T11:59:39.000Z",
        "updated_at": null,
        "label": "Accessories",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/XBPHYFl8LJdtJPId1682578778425.jpg"
    },
    {
    "id": 939,
    "title": "MI CHARGER - INV-000594",
    "quantity": 1,
    "sale_price": 1400,
    "created_at": "2023-05-02T17:02:08.000Z",
    "updated_at": "2023-05-09T11:24:38.000Z",
    "label": "Accessories",
    "location_id": 334,
    "img0": "https://cdn.techbazaar.pk/images/dummyImages/chargingCables.jpg"
},{
  "id": 939,
  "title": "MI CHARGER - INV-000594",
  "quantity": 1,
  "sale_price": 1400,
  "created_at": "2023-05-02T17:02:08.000Z",
  "updated_at": "2023-05-09T11:24:38.000Z",
  "label": "Accessories",
  "location_id": 334,
  "img0": "https://cdn.techbazaar.pk/images/dummyImages/chargingCables.jpg"
}
];
  return (
    <div>
      <div
        className={`w-100 border-lg-bottom ${styles.listin_div} mb-3 pb-3 justify-content-between d-block d-lg-flex d-md-flex`}
      >
        <h1 className={`${styles.h1}`}>Explore Categories</h1>
        <div className="d-flex align-items-baseline">
          <p className="w-100 d-lg-none d-md-none d-block">1-12 of 200</p>
          <div className="w-100 d-block  d-md-flex mt-3  d-lg-none  d-none">
            <Button
              onClick={() => setMobileFilter("filter")}
              className={`w-100 me-3 mb-2 rounded-2 ${styles.filter_btn} `}
            >
              <Image width={0} height={0} className="me-1" src={filterIcon} alt="filter icon 2" />{" "}
              Filter by
            </Button>
          </div>
          {/* <Form.Select className="mx-3" aria-label="Default select example">
            <option>Showing 1-18</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select> */}
        </div>
      </div>
      <div className="w-100 d-block  d-md-none mt-3 d-lg-none ">
        <Button
          onClick={() => setMobileFilter("filter")}
          className={`w-100 me-3 mb-2 rounded-2 ${styles.filter_btn} `}
        >
          <Image width={0} height={0} className="me-1" src={filterIcon} alt="filte icon" /> Filter by
        </Button>
      </div>
      <Row>
        {array.slice(0,4).map((data, index) => (
          <Col lg="3" md="3" sm="4" xs="4" className="" key={index}>
            {/* <Loader /> */}
            {Loading ? (
              <Loader />
            ) : (
              <div>
                <div
                  onClick={() => router.push("/specDetails/samsung")}
                  className={`${styles.image_div} text-center cursor-pointer`}
                >
                  <Image
                  style={{objectFit:"scale-down"}}
                    height={122}
                    width={0}
                    src={data.img0}
                    alt="specs image"
                  />
                </div>
                <p className="mt-3 text-center">Galaxy Tab A7 10.4 (2022)</p>
              </div>
            )}
          </Col>
        ))}
      </Row>
      <div
        className={`w-100 border-lg-bottom mt-3 ${styles.listin_div} mb-3 pb-3 justify-content-between d-block d-lg-flex d-md-flex`}
      >
        <h1 className={`${styles.h1}`}>Explore Other  Accessories</h1>
        <div className="d-flex align-items-baseline">
          <p className="w-100 d-lg-none d-md-none d-block">1-12 of 200</p>
          <div className="w-100 d-block  d-md-flex mt-3  d-lg-none  d-none">
            <Button
              onClick={() => setMobileFilter("filter")}
              className={`w-100 me-3 mb-2 rounded-2 ${styles.filter_btn} `}
            >
              <Image width={0} height={0} className="me-1" src={filterIcon} alt="filter icon 2" />{" "}
              Filter by
            </Button>
          </div>
          {/* <Form.Select className="mx-3" aria-label="Default select example">
            <option>Showing 1-18</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select> */}
        </div>
      </div>
      <Row className="mb-5">
        {array.slice(5,15).map((data, index) => (
          <Col lg="3" md="3" sm="4" xs="4" className="" key={index}>
            {/* <Loader /> */}
            {Loading ? (
              <Loader />
            ) : (
              <div>
                <div
                  onClick={() => router.push("/specDetails/samsung")}
                  className={`${styles.image_div} text-center cursor-pointer`}
                >
                  <Image
                  style={{objectFit:"scale-down"}}
                    height={122}
                    // width={"100%"}
                    width={0}
                    src={data.img0}
                    alt="specs image"
                  />
                </div>
                <p className="mt-3 text-center">Galaxy Tab A7 10.4 (2022)</p>
              </div>
            )}
          </Col>
        ))}
      </Row>
      {/* <PaginationBar noOfPages={6} currentPage={3} changePage={() => {}} /> */}
    </div>
  );
};

export default Listing;

const Loader = () => {
  return (
    <div>
      <div>
        <div
          className={`${styles.image_div} ${LoadingStyles.skeleton}  ${LoadingStyles.secondcover}  text-center`}
        >
          {/* <Image height={122} width={"100%"} src={MobileImage} /> */}
        </div>
        <p className={`mt-3 text-center ${LoadingStyles.skeleton} `}></p>
      </div>
    </div>
  );
};
