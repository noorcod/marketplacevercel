import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { sellerBannerImage, sellerLogo } from "../../../public/images";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "react-bootstrap";
import styles from "../../styles/SellerBanner.module.css";
import Breadcrumbs from "../../components/Breadcrumb";
import loadStyles from "../../styles/LoadingCard.module.css";

const ContactSellerModal = dynamic(
  () => import("../../components/ContactSellerModal"),
  {
    loading: () => "Loading...",
  } as any
);
// import ContactSellerModal from "../../components/ContactSellerModal";
const SellerBanner = ({ shopData, mainLocationData, isLaoding }: any) => {
  const [contactModal, setContactModal] = useState(false);
  const handleContactModal = () => {
    setContactModal(true);
  };
  // if (mainLocationData?.shop_working_days)
    // ("locations", JSON.parse(mainLocationData?.shop_working_days));
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
            {isLaoding ? (
              <div className={`${styles.logo}`}>
                <div
                  style={{
                    // width: "220px",
                    // height: "220px",
                    borderRadius: "999px",
                  }}
                  className={loadStyles.skeleton}
                ></div>
              </div>
            ) : (
              <div className={`${styles.logo}`}>
                <img 
                  height={220}
                  width={220}
                  alt="cover photo"
                  src={shopData?.logo_path}
                />
              </div>
            )}
            <div className={`d-block    ${styles.description}`}>
              <h1 className={`${styles.h1} `}> {shopData?.shop_name}</h1>
              <p className="d-flex justify-content-center align-items-center">
                {" "}
                {/* <FontAwesomeIcon className="mx-1 " icon={faCalendarAlt} />{" "} */}
                {/* <strong className="me-1">Monday </strong> to{" "} */}
                {/* <strong className="mx-1">Friday</strong> (8am to 5am){" "} */}
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
      shopDetails={shopData}
      locations={mainLocationData}
      city={mainLocationData?.city?.city_name}
        show={contactModal}
        onHide={() => setContactModal(false)}
      />
    </div>
  );
};

export default SellerBanner;
