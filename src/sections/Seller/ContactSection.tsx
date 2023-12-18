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
import { useUserStore } from "../../store/User";
import SignInModal from "../../components/SignInModal";
const ContactSection = ({ mainLocationData, isLaoding, shopData }: any) => {
  const [emailForm, setEmailForm] = useState<any>(false);
  const [title, setTitle] = useState("");
  const { user, token } = useUserStore((state: any) => state);
  const [signInModal, setSignInModal] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState<boolean>(false);
  const [showNumbers, setShowNumbers] = useState<boolean>(false);
  const noPart = mainLocationData?.location_number.split("-");

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
            <span className="ms-2">
              {mainLocationData?.city?.city_name}, Pakistan
            </span>
          </div>
          <div>
            <div
              className={`d-flex align-items-center gap-3 py-2 px-3 mt-3 mb-2 rounded-1 ${styles.actionBtns}`}
            >
              <Image src={phone} alt="call" width={28} height={25} />
              <div className="ps-1">
                {/* {showNumbers === false && (
              <h5 className={`fw-bold m-0 ${styles.number}`}>
                {mainLocationData?.location_number}
              </h5>
            )} */}
                {showNumbers && (
                  <>
                    <h5 className={`fw-bold m-0 ${styles.number}`}>
                      {mainLocationData?.location_number}
                    </h5>
                  </>
                )}
                {showNumbers === false && (
                  <span
                    className="link"
                    onClick={() => {
                      setTitle("To get contact number first create account  ");
                      if (user) {
                        setShowNumbers(true);
                      } else {
                        setSignInModal(true);
                      }
                    }}
                  >
                    Show phone number
                  </span>
                )}
              </div>
            </div>
            <div
              className={`d-flex align-items-center gap-3 py-2 px-3 mb-2 rounded-1 ${styles.actionBtnWa}`}
              style={{ display: "none" }}
              // style={{display:fetchedData?.activation_date === null ||
              //   fetchedData?.archived_on !== null ||
              //   fetchedData?.is_deleted === true?'none':''}}
            >
              <Col md="1" lg="1" className="p-0">
                <Image src={whatsapp} alt="whatsapp" width={28} height={25} />
              </Col>
              <Col
                onClick={() => {
                  setTitle(
                    "To get contact on whatsapp number first create account  "
                  );
                  if (user) {
                    window.open(
                      `https://wa.me/${mainLocationData?.location_number
                        .replace("+92", 0)
                        .replaceAll("-", "")}`
                    );
                  } else {
                    setSignInModal(true);
                  }
                }}
                md="10"
                lg="8"
                className="p-0 cursor-pointer"
              >
                {showWhatsapp === false && (
                  <h5 className="fw-bold m-0">
                    {noPart
                      ? noPart?.slice(0, 2).join("-") +
                        "-" +
                        "-".repeat(noPart[2]?.length)
                      : ""}
                  </h5>
                )}
                {showWhatsapp && (
                  <h5 className="fw-bold m-0">
                    {mainLocationData?.location_number}
                  </h5>
                )}
                {showWhatsapp === false && (
                  <span
                    onClick={() => {
                      if (user) {
                        setShowWhatsapp(true);
                      } else {
                        setSignInModal(true);
                      }
                    }}
                  >
                    Contact on Whatsapp number
                  </span>
                )}
                {showWhatsapp && <span>With your valuable questions</span>}
              </Col>
              {/* {showWhatsapp && (
              <Col
                md="1"
                lg="2"
                className="p-0 text-center d-md-none d-sm-none"
              >
                <Button
                  onClick={(e) =>
                    window.open(
                      `https://wa.me/${mainLocationData?.location_number
                        .replace("+92", 0)
                        .replaceAll("-", "")}`
                    )
                  }
                  className={`px-3 ${styles.waBtn}`}
                >
                  Call
                </Button>
              </Col>
            )} */}
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
      <SignInModal
        title={title}
        show={signInModal}
        onHide={() => setSignInModal(false)}
      />
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
