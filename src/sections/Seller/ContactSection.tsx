import SendEmailForm from "../../components/SendEmailForm";
import Image from "next/image";
import { email, location, phone, whatsapp } from "../../../public/icons";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/SellerContactSection.module.css";
const ContactSection = () => {
  const [emailForm, setEmailForm] = useState<any>(false);

  return (
    <div>
      {" "}
      <div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
            width="450"
            height="200"
            style={{ border: "0", borderRadius: "4px" }}
          ></iframe>
        </div>
        <Image src={location} alt="location" width={15} height={15} />
        <span className="ms-2">Lahore, Pakistan</span>
      </div>
      <div>
        <div
          className={`d-flex align-items-center gap-3 py-2 px-3 mt-3 mb-2 rounded-1 ${styles.actionBtns}`}
        >
          <Image src={phone} alt="call" width={28} height={25} />
          <div className="ps-1">
            <>
              <h5 className="fw-bold fs-16 m-0">03433456974</h5>
              <h5 className="fw-bold fs-16 m-0">03433456974</h5>
            </>
          </div>
        </div>
        <div
          className={`d-flex align-items-center gap-3 py-2 px-3 mb-2 rounded-1 ${styles.actionBtnWa}`}
        >
          <Col md="1" lg="1" className="p-0">
            <Image src={whatsapp} alt="whatsapp" width={28} height={25} />
          </Col>
          <Col md="10" lg="7" className="p-0">
            <h5 className="fw-bold fs-16 m-0">0423783...</h5>
            <span className="fs-16" 
            // onClick={() => setShowWhatsapp(true)}
            >
              prepare question before call
            </span>
          </Col>
          <Col md="1" lg="1" className="p-0 text-center">
            <Button className={`px-3 ${styles.waBtn} `}>Call</Button>
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
            <Image src={email} alt="email" width={28} height={25} />
          </Col>
          <Col md="10" lg="8" className="p-0">
            <h5 className="fw-bold fs-16 m-0">Send email</h5>
            <span className={`styles.mailTxt`}>With your questions</span>
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
    </div>
  );
};

export default ContactSection;
