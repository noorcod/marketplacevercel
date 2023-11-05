import SendEmailForm from "../../components/SendEmailForm";
import Image from "next/image";
import { email, location, phone, whatsapp } from "../../../public/icons";
import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/SellerContactSection.module.css";
import loadStyle from "../../styles/LoadingCard.module.css";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";
import { googleMapsKey } from "../../utility/env";
import MapContainer from "../../components/map/MapContainer";
const ContactSection = ({ mainLocationData, isLaoding, shopData }: any) => {
  const [emailForm, setEmailForm] = useState<any>(false);
  return (
    <>
      {isLaoding ? (
        <ContactSectionLoading />
      ) : (
        <div>
          {" "}
          <div>
            <div className={styles.map}>
              <MapContainer data={mainLocationData} />
            </div>
            <Image src={location} alt="location" width={15} height={15} />
            <span className="ms-2">Lahore, Pakistan</span>
          </div>
          <div>
            <div
              className={`d-flex align-items-center gap-3 py-2 px-3 mt-3 mb-2 rounded-1 ${styles.actionBtns}`}
            >
              <Image src={phone} alt="call" width={28} height={25} />
              <div className={`ps-1 ${isLaoding ? loadStyle.skeleton : ""}`}>
                <>
                  <h5
                    className={` ${
                      isLaoding ? loadStyle.skeleton : ""
                    } fw-bold  fs-16 m-0`}
                  >
                    {mainLocationData?.location_number}
                  </h5>
                  <h5
                    className={` ${
                      isLaoding ? loadStyle.skeleton : ""
                    } fw-bold fs-16 m-0`}
                  >
                    {mainLocationData?.location_backup_number}
                  </h5>
                </>
              </div>
            </div>
            <div
              className={`d-flex align-items-center  py-2 px-2 mb-2 rounded-1 ${styles.actionBtnWa}`}
            >
              <Col md="10" lg="9" className="p-0 d-flex align-items-center ">
                <Image src={whatsapp} alt="whatsapp" width={28} height={25} />
                <h5 className=" fs-14 m-0 d-grid ms-1">
                  {mainLocationData?.location_number
                    ?.replace("+92", 0)
                    .replaceAll("-", "")}
                  <span
                    className="fs-12 text-center me-1"
                    // onClick={() => setShowWhatsapp(true)}
                  >
                    prepare question before call
                  </span>
                </h5>
              </Col>
              <Col md="1" lg="1" className="p-0 text-center mb-2">
                <Button
                  onClick={(e) =>{
                    window.open(
                      `https://wa.me/${mainLocationData?.location_number
                        ?.replace("+92", 0)
                        .replaceAll("-", "")}`
                    )
                  }  }
                  className={`px-3 ${styles.waBtn} `}
                >
                  Call
                </Button>
              </Col>
              <Col lg="12" className=""></Col>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 my-3">
            <hr className={`${styles.separater}`} />
            <p className="text-center m-0">Or</p>
            <hr className={`${styles.separater}`} />
          </div>
          <div className={`${styles.form_div}`}>
            <div
              className={`d-flex align-items-center gap-3 py-2 px-3 rounded-1 w-100 mx-auto ${styles.actionBtns}`}
            >
              <Col md="1" lg="1" className="p-0">
                <Image src={email} alt="email" width={28} height={25} />
              </Col>
              <div className="p-0">
                <h5 className="fw-bold fs-16 m-0">Send email</h5>
                <span className={`styles.mailTxt`}>With your questions</span>
              </div>
              <Col md="1" lg="1" className="p-0 text-center">
                <Form.Check
                  type="checkbox"
                  className={styles.checkbox}
                  value={emailForm}
                  onChange={(e) => setEmailForm(e.target.checked)}
                />
              </Col>
            </div>
            {emailForm === true && (
              <div className={`rounded-bottom ${styles.emailForm}`}>
                <SendEmailForm shopData={shopData} store={true} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSection;

function ContactSectionLoading({ isLaoding }: any) {
  return (
    <div>
      <div>
        {" "}
        <div>
          <div
            style={{ width: "260px", height: "200px" }}
            className={`${loadStyle.skeleton}  `}
          ></div>
          <Image src={location} alt="location" width={15} height={15} />
          <span className="ms-2">Lahore, Pakistan</span>
        </div>
        <div>
          <div
            className={`d-flex align-items-center gap-3 py-2 px-3 mt-3 mb-2 rounded-1 ${styles.actionBtns}`}
          >
            <div
              style={{ width: "28px", height: "25px" }}
              className={`${loadStyle.skeleton}  `}
            ></div>
            <div className={`ps-1 ${isLaoding ? loadStyle.skeleton : ""}`}>
              <>
                <h5
                  style={{ width: "170px", height: "15px" }}
                  className={` ${loadStyle.skeleton} fw-bold  fs-16 m-0`}
                ></h5>
                <h5
                  style={{ width: "170px", height: "15px" }}
                  className={` ${loadStyle.skeleton} fw-bold fs-16 m-0`}
                ></h5>
              </>
            </div>
          </div>
          <div
            className={`d-flex align-items-center gap-3 py-2 px-3 mb-2 rounded-1 bg-light ${styles.actionBtnWa}`}
          >
            <Col
              style={{ width: "28px", height: "35px" }}
              md="1"
              lg="1"
              className={loadStyle.skeleton}
            >
              {/* <Image src={whatsapp} alt="whatsapp" width={28} height={25} /> */}
            </Col>
            <Col md="10" lg="7" className="p-0">
              <h5 className="fw-bold fs-16 m-0"></h5>
              <h5
                style={{ width: "130px", height: "15px" }}
                className={` ${loadStyle.skeleton} fw-bold  fs-16 m-0`}
              ></h5>
            </Col>
            <Col md="1" lg="1" className="p-0 text-center">
              <div
                style={{ width: "28px", height: "25px" }}
                className={`${loadStyle.skeleton}  `}
              ></div>
            </Col>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2 my-3">
          <hr className={`${styles.separater}`} />
          <p className="text-center m-0">Or</p>
          <hr className={`${styles.separater}`} />
        </div>
        <div className={`${styles.form_div}`}>
          <Row
            className={`d-flex align-items-center gap-3 py-2 px-3 rounded-1 w-100 mx-auto ${styles.actionBtns}`}
          >
            <Col md="1" lg="1" className="p-0">
              <div
                style={{ width: "28px", height: "25px" }}
                className={`${loadStyle.skeleton}  `}
              ></div>
            </Col>
            <Col md="10" lg="8" className="p-0">
              <h5
                style={{ width: "170px", height: "20px" }}
                className={` ${loadStyle.skeleton} fw-bold  fs-16 m-0`}
              ></h5>
            </Col>
            <Col md="1" lg="1" className="p-0 text-center"></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
