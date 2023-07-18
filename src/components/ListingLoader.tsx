import Image from "next/image";
import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "../styles/SellerListing.module.css";
import loadStyle from "../styles/LoadingCard.module.css"

function ListingLoader() {
  const fetchedItems=[1,2,3,4,5,6]
  return (
    <div>
      {fetchedItems?.map((data: any, index: number) => (
        <div className="mt-4">
          <Card
            // onClick={() => router.push("/productDetails/samsung")}
            className={`ms-2 ${styles.card_main} cursor-pointer d-flex rounded-1 `}
          >
            <div className={`d-flex ${styles.Card_body}`}>
            <div style={{width:"188px" ,height:"160px"}} className={`${loadStyle.skeleton}  ` }>
             </div>

              <Card.Body className="ms-3">
                <Card.Title className="mb-0">
                <h5 style={{ width: "260px", height: "37px" }} className={` ${loadStyle.skeleton} fw-bold  fs-16 m-0`}></h5>

                </Card.Title>
                <div className="d-flex  mt-2 ">
                  <div className="d-flex d-lg-none d-md-none align-items-baseline mb-2">
                  <h5 style={{ width: "60px", height: "37px" }} className={` ${loadStyle.skeleton} fw-bold  fs-16 m-0`}></h5>

                    <span className={`${styles.price_cut} `}>Rs. 1000</span>{" "}
                    <h5 style={{ width: "60px", height: "37px" }} className={` ${loadStyle.skeleton} fw-bold  fs-16 m-0`}></h5>

                  </div>
                  <div className="mb-4 d-lg-block d-md-block d-none  me-3">
                  <h5 style={{ width: "80px", height: "37px" }} className={` ${loadStyle.skeleton} fw-bold mb-1 fs-16 m-0`}></h5>

                  <h5 style={{ width: "80px", height: "37px" }} className={` ${loadStyle.skeleton} fw-bold  fs-16 m-0`}></h5>

                  </div>
                  <div className="mb-4 d-lg-block d-md-block d-none ">
                  <h5 style={{ width: "80px", height: "37px" }} className={` ${loadStyle.skeleton} fw-bold mb-1 fs-16 m-0`}></h5>

                  <h5 style={{ width: "80px", height: "37px" }} className={` ${loadStyle.skeleton} fw-bold  fs-16 m-0`}></h5>
                  </div>
                </div>
                <div className="d-flex align-items-baseline   ">

                <h5 style={{ width: "60px", height: "10px" }} className={` ${loadStyle.skeleton} fw-bold mb-1 fs-16 m-0`}></h5>

                </div>
              </Card.Body>
              <div className="mt-2 me-3 d-lg-block d-md-block d-none">
              <h5 style={{ width: "60px", height: "30px" }} className={` ${loadStyle.skeleton} fw-bold  fs-16 m-0`}></h5>

                <div className="d-flex mb-2">
                <h5 style={{ width: "100px", height: "37px" }} className={` ${loadStyle.skeleton} fw-bold  mt-1 fs-16 m-0`}></h5>

                </div>
                <div style={{width:"68px" ,height:"25px"}} className={`${loadStyle.skeleton} mt-5 ` }>
             </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ListingLoader;
