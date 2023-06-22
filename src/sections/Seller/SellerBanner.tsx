import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { sellerBannerImage, sellerLogo } from "../../../public/images";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "react-bootstrap";
import styles from "../../styles/SellerBanner.module.css";
import Breadcrumbs from "../../components/Breadcrumb";
const ContactSellerModal = dynamic(
  () => import("../../components/ContactSellerModal"),
  {
    loading: () => "Loading...",
  }as any
);
// import ContactSellerModal from "../../components/ContactSellerModal";
const SellerBanner = () => {
  const [contactModal, setContactModal] = useState(false);
  const handleContactModal = () => {
    setContactModal(true);
  };
  return (
    <div>
      <div className={`${styles.breadcrumbs}`}>
        <Breadcrumbs />
      </div>
      <div className="d-flex  justify-content-center ">
        <div className={`${styles.sellerBanner_div}`}>
          <div
            className={`${styles.logo_div} d-lg-flex d-md-flex  d-sm-flex d-grid align-items-end`}
          >
            <div className={`${styles.logo}`}>
              <img
                height={220}
                width={220}
                alt="cover photo"
                src="https://media.istockphoto.com/id/1313644269/vector/gold-and-silver-circle-star-logo-template.jpg?s=612x612&w=0&k=20&c=hDqCI9qTkNqNcKa6XS7aBim7xKz8cZbnm80Z_xiU2DI="
              />
            </div>

            <div className={`d-block   ${styles.description}`}>
              <h1 className={`${styles.h1} `}> ABC LIMITED</h1>
              <p className="d-flex justify-content-center align-items-center">
                {" "}
                <FontAwesomeIcon className="mx-1 " icon={faCalendarAlt} />{" "}
                <strong className="me-1">Monday </strong> to{" "}
                <strong className="mx-1">Friday</strong> (8am to 5am){" "}
              </p>{" "}
              <Button
                onClick={() => handleContactModal()}
                variant="secondary fs-16 d-lg-none px-5 rounded-1"
              >
                {" "}
                Contact seller
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.second_div}  `}></div>
      <ContactSellerModal
        show={contactModal}
        onHide={() => setContactModal(false)}
      />
    </div>
  );
};

export default SellerBanner;
