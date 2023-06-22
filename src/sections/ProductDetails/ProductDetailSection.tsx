import Image from "next/image";
import { calender, email, location, phone, whatsapp } from "../../../public/icons";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/ProductDetail.module.css";
import { hp } from "../../../public/images";
import SendEmailForm from "../../components/SendEmailForm";
import Link from "next/link";

const ProductDetailSection = () => {
  const [emailForm, setEmailForm] = useState<boolean> (false);
  const [showWhatsapp, setShowWhatsapp] = useState<boolean>(false);
  const [showNumbers, setShowNumbers] = useState<boolean>(false);
  return (
    <>
      <h4 className={`mb-4 ${styles.title}`}>Samsung A73</h4>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className={`mb-0 ${styles.price}`}>
          $890
          <sub
            className={`text-secondary ms-1 text-decoration-line-through ${styles.originalPrice}`}
          >
            $1000
          </sub>
        </h2>
        <div>
          <span className={`${styles.discount} text-success`}>11%OFF</span>
        </div>
      </div>
      <hr className={`mb-1 ${styles.separator}`} />
      <Row>
        <Col xs="4" sm="4" md="4" lg="3">
          <p className={"mb-0"}>Model:</p>
        </Col>
        <Col xs="8" sm="8" md="8" lg="9">
          <p className={"mb-0"}>A73</p>
        </Col>
        <Col xs="4" sm="4" md="4" lg="3">
          <p className={"mb-0"}>Brand:</p>
        </Col>
        <Col xs="8" sm="8" md="8" lg="9">
          <p className={"mb-0"}>Samsung</p>
        </Col>
        <Col xs="4" sm="4" md="4" lg="3">
          <p className={"mb-0"}>Product type:</p>
        </Col>
        <Col xs="8" sm="8" md="8" lg="9">
          <p className={"mb-0"}>Used & New</p>
        </Col>
        <Col xs="4" sm="4" md="4" lg="3">
          <p className={"mb-0"}>Availability:</p>
        </Col>
        <Col xs="8" sm="8" md="8" lg="9">
          <div>
            <span className="mb-0 text-success fw-bold">In Stock</span>{" "}
            <span className={styles.quantity}>(Only 2 left)</span>
          </div>
        </Col>
      </Row>
      <hr className={`mt-1 ${styles.separator}`} />
      <p className="mb-2 mt-4">Available colors:</p>
      <div className={`${styles.grid} mb-4`}>
        <div>
          <div className={`${styles.items}`}>
            <div className={`${styles.colors} mx-auto`}></div>
          </div>
          <p className="m-0">Green</p>
        </div>
        <div>
          <div className={`${styles.items}`}>
            <div className={`${styles.colors} mx-auto`}></div>
          </div>
          <p className="m-0">Green</p>
        </div>
        <div>
          <div className={`${styles.items}`}>
            <div className={`${styles.colors} mx-auto`}></div>
          </div>
          <p className="m-0">Green</p>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <Image src={location} alt="location" width={15} height={15} />
        <span className="ms-1">Lahore, Pakistan</span>
      </div>
      <div className="mt-2 d-flex align-items-center">
        <Image src={calender} alt="calender" width={15} height={15} />
        <span className="ms-1">Listing date - 07-12-2022</span>
      </div>
      <div>
        <div
          className={`d-flex align-items-center gap-3 py-2 px-3 mt-3 mb-2 rounded-1 ${styles.actionBtns}`}
        >
          <Image src={phone} alt="call" width={28} height={25} />
          <div className="ps-1">
            {showNumbers === false && (
              <h5 className={`fw-bold m-0 ${styles.number}`}>0423783...</h5>
            )}
            {showNumbers && (
              <>
                <h5 className={`fw-bold m-0 ${styles.number}`}>03433456974</h5>
                <h5 className={`fw-bold m-0 ${styles.number}`}>03433456974</h5>
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
          <hr className={`${styles.separator}`} />
          <p className="text-center m-0">Or</p>
          <hr className={`${styles.separator}`} />
        </div>
        <Row
          className={`d-flex align-items-center gap-3 py-2 px-3 rounded-1 w-100 mx-auto ${styles.actionBtns}`}
        >
          <Col xs="1" sm="1" md="1" lg="1" className="p-0">
            <Image src={email} alt="email" width={28} height={25} />
          </Col>
          <Col xs="8" sm="8" md="8" lg="8" className="p-0">
            <h5 className={`fw-bold m-0 ${styles.emailheader}`}>Send email</h5>
            <span className={styles.mailTxt}>With your questions</span>
          </Col>
          <Col xs="1" sm="1" md="1" lg="1" className="p-0 text-center">
            <Form.Check
              type="checkbox"
              className={styles.checkbox}
              checked={emailForm}
              onChange={(e) => setEmailForm(e.target.checked)}
            />
          </Col>
        </Row>
        {emailForm === true && (
          <div className={`rounded-bottom ${styles.emailForm}`}>
            <SendEmailForm />
          </div>
        )}
        <div className={`mt-4`}>
          <span className={`mb-0 ps-1 pe-5 pt-1 ${styles.header}`}>
            Seller Info
          </span>
          <Row className={styles.infoSection}>
            <Col xs="2" sm="2" md="2" lg="2" className={`${styles.logo}`}>
              <Image src={hp} alt="Logo" width={70} height={68} />
            </Col>
            <Col xs="6" sm="7" md="6" lg="7">
              <h5 className="m-0 fw-bold">ABC Ltd.</h5>
              <div className="d-flex align-items-center">
                <Image src={location} alt="location" width={15} height={15} />
                <span className="ms-1">Lahore, Pakistan</span>
              </div>
              <span className="ms-3">(full address here)</span>
            </Col>
            <Col xs="3" sm="3" md="3" lg="3" className="px-0 text-center">
              <Link href="/seller/ABC">
                <Button variant="outline-secondary" className="py-1 px-2">
                  More info
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ProductDetailSection;
