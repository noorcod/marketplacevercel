import Image from "next/image";
import styles from "../../styles/Banner.module.css";
import { banner } from "../../../public/images";
import { search, searchLight, location, box } from "../../../public/icons";
import { Button, Col, Form, Row } from "react-bootstrap";
import Link from "next/link";
import ScrollDown from "../../components/ScrollDown";


const Banner = () => {
  return (
    <div className={`${styles.bannerWrapper}`}>
      <Row className={`${styles.bannerInner} flex-lg-row flex-column-reverse`}>
        <Col className="p-0 text-md-center text-sm-center text-center">
          <Image
            className={`${styles.bannerImg}`}
            alt="banner"
            src={banner}
            width={500}
            height={500}
          />
        </Col>
        <Col className={`mt-md-5 mt-0 p-0`}>
          <div className={`${styles.bannerTextWrapper}`}>
            <h1
              className={`${styles.bannerText} text-md-start text-start  text-lg-start`}
            >
              Find your favourite products
            </h1>
            <Form>
              <div
                className={`position-relative d-flex align-items-center ${styles.searchbar}`}
              >
                <Image
                  className={`position-absolute`}
                  src={search}
                  alt="search"
                  width={18}
                  height={18}
                />
                <Form.Control
                  className="ps-5 border-dark w-100"
                  placeholder="Search by name"
                />
              </div>
              <Row className={`mt-3 ${styles.dropdownItems}`}>
                <Col className={`pe-0  ${styles.cities}`}>
                  <div
                    className={`position-relative d-flex align-items-center ${styles.dropdowns}`}
                  >
                    <Image
                      className={`position-absolute`}
                      src={location}
                      alt="location"
                      width={18}
                      height={18}
                    />
                    <Form.Select className="border-dark border-end-0 rounded-0 rounded-start">
                      <option value="All" className="border-0 ps-0">
                        All Cities
                      </option>
                      <option value="" className="border-0">
                        Lahore
                      </option>
                      <option value="">Islamabad</option>
                      <option value="">Karachi</option>
                    </Form.Select>
                  </div>
                </Col>
                <Col className={`ps-0  ${styles.condition}`}>
                  <div
                    className={`position-relative d-flex align-items-center ${styles.dropdowns}`}
                  >
                    <Image
                      className={`position-absolute`}
                      src={box}
                      alt="condition"
                      width={18}
                      height={18}
                    />
                    <Form.Select className="border-dark rounded-0 rounded-end">
                      <option
                        value="All"
                        className="border-0 ps-0 text-secondary"
                      >
                        All products
                      </option>
                      <option value="">Used</option>
                      <option value="">New</option>
                      <option value="">Refurbished</option>
                    </Form.Select>
                  </div>
                </Col>
              </Row>
              <div className={styles.ctaButton}>
                <Button className="w-100 mt-4">
                  <Image
                    src={searchLight}
                    alt="searchBox"
                    width={18}
                    height={18}
                  />
                </Button>
              </div>
              <p className="my-3 text-secondary text-center">Or</p>
              <div className="text-center mb-0">
                <Link href={"/"} className="link text-center">
                  Find all filters {">"}
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <ScrollDown className={styles.ScrollDown} />
    </div>
  );
};

export default Banner;
