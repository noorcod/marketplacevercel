import Image from "next/image";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import styles from "../styles/ContactSellerModal.module.css";
import { hp } from "../../public/images";
import { email, location, phone, whatsapp } from "../../public/icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import SendEmailForm from "../components/SendEmailForm";
import SendEmail from "../sections/ProductListing/SendEmail";
import MapContainer from "./map/MapContainer";
import React from "react";
import { useUserStore } from "../store/User";
import SignInModal from "./SignInModal";

interface shopDetails {
  shop_name: string;
  owner_whatsapp_number: string;
}
interface ContactSellerModalProps {
  show: boolean;
  onHide: () => void;
  size?: string | undefined;
  shopDetails: shopDetails;
  city: string;
  locations: any;
}

const ContactSellerModal = ({
  onHide,
  show,
  shopDetails,
  city,
  locations,
}: ContactSellerModalProps) => {
  const [emailForm, setEmailForm] = useState<any>(false);
  const { user, token } = useUserStore((state: any) => state);
  const [signInModal, setSignInModal] = useState(false);

  const [showWhatsapp, setShowWhatsapp] = useState<any>(false);
  const [showNumbers, setShowNumbers] = useState<any>(false);
  const [emailModal, setEmailModal] = useState<any>(false);
  const [isHidden, setIsHidden] = useState(true);
  
  const number = shopDetails?.owner_whatsapp_number?.split("-");
  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          onHide();
          setShowNumbers(false);
          setShowWhatsapp(false);
        }}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{width:'100vw',height:'90vh',overflow:"auto",scrollBehavior:'unset'}}
      >
        <Modal.Header className="border-0 px-md-4 px-lg-4 px-3" closeButton>
          <div className={`d-flex align-items-center gap-3`}>
            <div className={`border border-dark ${styles.logo}`}>
              <Image src={hp} alt="Logo" width={70} height={68} />
            </div>
            <Container fluid>
              <h5 className="m-0 fw-bold">{shopDetails?.shop_name}.</h5>
              <a className="m-0 fw-bold" >{shopDetails?.owner_email}</a>
            </Container>
          </div>
        </Modal.Header>
        <Modal.Body className=" px-md-4 px-lg-4 px-3">
          <div>
            <div className={styles.map}>
              <MapContainer data={locations} />
            </div>
            <Image src={location} alt="location" width={15} height={15} />
            <span className="ms-2">{locations?.address}</span>
          </div>
          <div className="d-md-block d-lg-block d-sm-block d-none">
            <div
              className={`d-flex align-items-center gap-3 py-2 px-3 mt-3 mb-2 rounded-1 ${styles.actionBtns}`}
            >
              <Image src={phone} alt="call" width={28} height={25} />
              <div className="ps-1">
                {/* {showNumbers === false && (
                  <h5 className="fw-bold m-0">{shopDetails?.owner_whatsapp_number}</h5>
                )} */}
                {showNumbers && (
                  <>
                    <h5 className="fw-bold m-0">
                      {shopDetails?.owner_whatsapp_number}
                    </h5>
                    <h5 className="fw-bold m-0">
                      {shopDetails?.owner_whatsapp_number}
                    </h5>
                  </>
                )}
                {showNumbers === false && (
                  <span
                    className="link"
                    onClick={() => {
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
            >
              <Col md="1" lg="1" className="p-0">
                <Image src={whatsapp} alt="whatsapp" width={28} height={25} />
              </Col>
              <Col md="10" lg="8" className="p-0">
                {showWhatsapp === false && (
                  <h5 className="fw-bold m-0">
                    {number
                      ? number?.slice(0, 2).join("-") +
                        "-" +
                        "-".repeat(number[2]?.length)
                      : ""}
                  </h5>
                )}
                {showWhatsapp && (
                  <h5 className="fw-bold m-0">
                    {shopDetails?.owner_whatsapp_number}
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
                    Show Whatsapp number
                  </span>
                )}
                {showWhatsapp && <span>With your valuable questions</span>}
              </Col>
              {showWhatsapp && (
                <Col md="1" lg="2" className="p-0 text-center">
                  <Button
                    onClick={() => {
                      if (user) {
                        window.open(
                          `https://wa.me/${shopDetails?.owner_whatsapp_number
                            .replace("+92", 0)
                            .replaceAll("-", "")}`
                        );
                      } else {
                        setSignInModal(true);
                      }
                    }}
                    className={`px-3 ${styles.waBtn}`}
                  >
                    Call
                  </Button>
                </Col>
              )}
            </div>
            <div className="d-flex align-items-center gap-2 my-3">
              <hr className={`${styles.separater}`} />
              <p className="text-center m-0">Or</p>
              <hr className={`${styles.separater}`} />
            </div>
            <Row
              className={`align-items-center gap-3 py-2 px-3 rounded-1 w-100 mx-auto ${styles.actionBtns}`}
            >
              <Col md="1" lg="1" sm="1" className="p-0">
                <Image src={email} alt="email" width={28} height={25} />
              </Col>
              <Col md="9" lg="9" sm="9" className="p-0">
                <h5 className="fw-bold m-0">Send email</h5>
                <span className={styles.mailTxt}>With your questions</span>
              </Col>
              <Col md="1" lg="1" sm="1" className="p-0 text-center">
                <Form.Check
                  type="checkbox"
                  className={styles.checkbox}
                  value={emailForm}
                  onChange={(e) => setEmailForm(e.target.checked)}
                />
              </Col>
            </Row>
            {emailForm === true && (
              <div className={`rounded-bottom ${styles.emailForm}`}>
                <SendEmailForm store={true} shopData={shopDetails} />
              </div>
            )}
          </div>
          <div className="d-block d-xs-block d-sm-none d-md-none d-lg-none d-xl-none mt-3">
  <div className={styles.grid} style={{ display: 'flex', justifyContent: 'center' }}>
    <div className={`${styles.actionBtnsm} d-flex flex-column justify-content-between`} onClick={() => {
      if (user) {
        setIsHidden(!isHidden);
      } else {
        setIsHidden(true);
        setSignInModal(true);
      }
    }} style={{ width: '100px' }}>
      <div style={{width:"25px",height:"23px"}}>
        <FontAwesomeIcon icon={faPhone}   style={{width:"100%",height:"100%"}}  />
      </div>
      <span>Call</span>
    </div>
    <div
      className={styles.actionBtnsm}
      style={{ pointerEvents: "none", display: 'none', width: '100px' }}
    >
      <FontAwesomeIcon icon={faMessage} />
      <span>Sms</span>
    </div>
    <div
      onClick={() => setEmailModal(true)}
      className={`${styles.actionBtnsm}  d-flex flex-column justify-content-between`}
      style={{ width: '100px' }}
    >
      <div style={{width:"25px",height:"25px"}}>
      <FontAwesomeIcon icon={faEnvelope}  style={{width:"100%",height:"100%"}}  />
      </div>
      <span>Email</span>
    </div>
    <div
      className={`${styles.actionBtnsm} d-flex flex-column justify-content-between`}
      onClick={() => {
        if (user) {
          window.open(
            `https://wa.me/${shopDetails?.owner_whatsapp_number
              .replace("+92", 0)
              .replaceAll("-", "")}`
          );
        } else {
          setSignInModal(true);
        }
      }}
      style={{ width: '100px' }}
    >
      <div style={{width:"25px",height:"25px"}}>

      <FontAwesomeIcon icon={faWhatsapp}  style={{width:"100%",height:"100%"}}  />
      </div>
      <span>WhatsApp</span>
    </div>
  </div>
</div>

        </Modal.Body>

        {isHidden ? (
          ""
        ) : (
          <div
            className={`d-flex justify-content-center p-3 `}
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <Image src={phone} alt="call" width={28} height={25} />
            <h5 className={`fw-bold m-0 ps-2 ${styles.number}`}>{number}</h5>
          </div>
        )}
      </Modal>

      <SignInModal
        title="To contact seller you must login"
        show={signInModal}
        onHide={() => setSignInModal(false)}
      />

      <SendEmail
        shopData={shopDetails}
        show={emailModal}
        onHide={() => setEmailModal(false)}
      />
    </>
  );
};

export default ContactSellerModal;
