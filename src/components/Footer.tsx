import Image from "next/image";
import Link from "next/link";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./../styles/Footer.module.css";
import { facebook, twitter, instagram, youtube } from "../../public/images";
import { useRouter } from "next/navigation";
import { useQuery,useQueryClient } from "@tanstack/react-query";

const Footer = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const data =queryClient.getQueryData(["viewList"])
  return (
    <footer className="main ">
      <Row className={`${styles.footerRow}`}>
        <Col lg="12" className="px-0  d-none d-lg-block">
          <hr className={`w-100 mt-0  ${styles.separator}`} />
        </Col>
        <Col xs="12" sm="4" md="4" lg="12" className="px-0 pt-lg-0 pt-4">
          <Row className="align-items-center">
            <Col xs="12" sm="12" md="12" lg="2">
              <h6 className="pb-lg-0 pb-4 mb-lg-0 mb-1">Seller Point</h6>
            </Col>
            <Col xs="12" sm="12" md="12" lg="7">
              <p
                className={`fst-italic fs-15 mb-4 mb-lg-0 ${styles.footerText}`}
              >
                {`If you wish to join TechBazaar as a seller, then click here to begin your seller journey.`}
              </p>
            </Col>
            <Col xs="12" sm="12" md="12" lg="3" className="text-lg-end">
              <Button
                onClick={() => {
                  router.push("/become-seller");
                }}
                className={`${styles.sellerBtn} rounded-2`}
                variant="outline-primary"
              >
                Become a seller
              </Button>
            </Col>
          </Row>
        </Col>
        <Col lg="12" className="px-0 d-none d-lg-block">
          <hr className={`w-100 my-4 ${styles.separator}`} />
        </Col>
        <Col
          xs="12"
          sm="4"
          md="4"
          lg="3"
          className="px-0 ps-0 ps-lg-0 ps-sm-3 pt-lg-0 pt-4"
        >
          <h6 className="pb-lg-0 pb-3">Trending searches</h6>
          <p className={`pe-0 pe-lg-5 ${styles.trending}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </Col>
        <Col xs="12" sm="4" md="4" lg="4" className="px-0 ps-lg-5 pt-lg-0 pt-4">
          <h6 className="pb-lg-0 pb-3">TB</h6>
          <ul className={`${styles.footerLinks}`}>
            <li>
              <Link href={"/about"} as="/about" shallow>
                About Us
              </Link>
            </li>
            <li>
              <Link href={"/specs"} as="/specs">
                Specs
              </Link>
            </li>
            <li>
              <Link href={"/contact-us"} as="/contact-us">
                Contact us
              </Link>
            </li>
            <li>
              <Link href={"/"} as="/">
                Sitemap
              </Link>
            </li>
            <li>
              <Link href={"/privacy-policy"} as="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </Col>
        <Col md="12" className="px-0 d-block d-lg-none">
          <hr className={`w-100 my-4 ${styles.separator}`} />
        </Col>
        <Col xs="12" sm="6" md="6" lg="5" className="px-0">
          <h6 className="pb-lg-0 pb-2">Subscribe to our newsletter</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </p>
          <div className={`d-inline-flex ${styles.subscribeButton}`}>
            <Form.Control
              placeholder="Your email address"
              className="rounded-start rounded-0 py-2 px-3"
            />
            <Button className="btn-primary rounded-end rounded-0 px-4">
              Submit
            </Button>
          </div>
          <div className="d-flex gap-2 mt-4">
            <Image
              className="cursor-pointer"
              src={twitter}
              alt="twitter"
              width={22}
              height={23}
            />
            <Image
              className="cursor-pointer"
              src={facebook}
              alt="facebook"
              width={22}
              height={23}
            />
            <Image
              className="cursor-pointer"
              src={youtube}
              alt="youtube"
              width={22}
              height={23}
            />
            <Image
              className="cursor-pointer"
              src={instagram}
              alt="instagram"
              width={22}
              height={23}
            />
          </div>
        </Col>
      </Row>
      <div>
        <hr className={`w-100 my-4 ${styles.separator}`} />
      </div>
      <p className="text-center fs-12">
        © 2022 Techbazaar. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
