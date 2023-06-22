import Image from "next/image";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
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

const ContactSellerModal = (props:any) => {
  const [emailForm, setEmailForm] = useState<any>(false);
  const [showWhatsapp, setShowWhatsapp] = useState<any>(false);
  const [showNumbers, setShowNumbers] = useState<any>(false);
  const [emailModal, setEmailModal] = useState<any>(false);
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="border-0 px-md-4 px-lg-4 px-3" closeButton>
          <div className={`d-flex align-items-center gap-3`}>
            <div className={`border border-dark ${styles.logo}`}>
              <Image src={hp} alt="Logo" width={70} height={68} />
            </div>
            <div>
              <h5 className="m-0 fw-bold">ABC Ltd.</h5>
              <span className="m-0">www.abc.com</span>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className=" px-md-4 px-lg-4 px-3">
          <div>
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                width="450"
                height="200"
              ></iframe>
            </div>
            <Image src={location} alt="location" width={15} height={15} />
            <span className="ms-2">Lahore, Pakistan</span>
          </div>
          <div className="d-md-block d-lg-block d-none">
            <div
              className={`d-flex align-items-center gap-3 py-2 px-3 mt-3 mb-2 rounded-1 ${styles.actionBtns}`}
            >
              <Image src={phone} alt="call" width={28} height={25} />
              <div className="ps-1">
                {showNumbers === false && (
                  <h5 className="fw-bold m-0">0423783...</h5>
                )}
                {showNumbers && (
                  <>
                    <h5 className="fw-bold m-0">03433456974</h5>
                    <h5 className="fw-bold m-0">03433456974</h5>
                  </>
                )}
                {showNumbers === false && (
                  <span className="link" onClick={() => setShowNumbers(true)}>
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
                  <h5 className="fw-bold m-0">0423783...</h5>
                )}
                {showWhatsapp && <h5 className="fw-bold m-0">03433456974</h5>}
                {showWhatsapp === false && (
                  <span onClick={() => setShowWhatsapp(true)}>
                    Show Whatsapp number
                  </span>
                )}
                {showWhatsapp && <span>With your valuable questions</span>}
              </Col>
              {showWhatsapp && (
                <Col md="1" lg="2" className="p-0 text-center">
                  <Button className={`px-3 ${styles.waBtn}`}>Call</Button>
                </Col>
              )}
            </div>
            <div className="d-flex align-items-center gap-2 my-3">
              <hr className={`${styles.separater}`} />
              <p className="text-center m-0">Or</p>
              <hr className={`${styles.separater}`} />
            </div>
            <Row
              className={`d-flex align-items-center gap-3 py-2 px-3 rounded-1 w-100 mx-auto ${styles.actionBtns}`}
            >
              <Col md="1" lg="1" className="p-0">
                <Image src={email} alt="email" width={28} height={25} />
              </Col>
              <Col md="10" lg="9" className="p-0">
                <h5 className="fw-bold m-0">Send email</h5>
                <span className={styles.mailTxt}>With your questions</span>
              </Col>
              <Col md="1" lg="1" className="p-0 text-center">
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
                <SendEmailForm />
              </div>
            )}
          </div>
          <div className="d-sm-block d-xs-block d-lg-none d-md-none mt-3">
            <div className={styles.grid}>
              <div className={styles.actionBtnsm}>
                <FontAwesomeIcon icon={faPhone} />
                <span>Call</span>
              </div>
              <div className={styles.actionBtnsm}>
                <FontAwesomeIcon icon={faMessage} />
                <span>Sms</span>
              </div>
              <div
                onClick={() => setEmailModal(true)}
                className={styles.actionBtnsm}
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Email</span>
              </div>
              <div className={styles.actionBtnsm}>
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>WhatsApp</span>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <SendEmail show={emailModal} onHide={() => setEmailModal(false)} />
    </>
  );
};

export default ContactSellerModal;
