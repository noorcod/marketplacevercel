import {
  faRightFromBracket,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect } from "react";
import { profile } from "../../../public/images";
import styles from "../../styles/Sidebar.module.css";
import Image from "next/image";
import { Accordion, Button, Dropdown } from "react-bootstrap";
const Sidebar = ({ isSandwichOpen, setisSandwichOpen }:any) => {
  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef, setIsSandwichOpen);
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div className="pos-f-t">
      <div
        className={`bg-light collapse overflow-auto ${
          styles.navbarToggleExternalContent
        } ${isSandwichOpen ? "menu-show" : ""} position-fixed`}
        id="navbarToggleExternalContent"
      >
        <div className={` ${styles.profile_div} py-3`}>
          <div className={`${styles.userInfo}`}>
            <div
              className={`${styles.profile_pic} d-flex align-items-center justify-content-between mx-4 `}
            >
              <div className="d-flex">
                <Image
                  src={profile}
                  alt="profile"
                  id="output"
                  width="42"
                  height={42}
                />
                <div className="d-grid ms-2">
                  <p className=" fw-500 text-white mb-0 text-capitalize">
                    John
                  </p>
                  <span className=" fs-12 text-white text-capitalize">
                    Logged user
                  </span>
                </div>
              </div>
              <span
                onClick={() => {
                  setisSandwichOpen(false);
                }}
                className="text-white"
              >
                {" "}
                Close X
              </span>
            </div>
          </div>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item className={styles.acor_item} eventKey="0">
            <Accordion.Header className={`${styles.nav_header}`}>
              Laptops
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <span>Apple</span>
                  <span className={`fs-14 ${styles.stock_span} `}>
                    In stock - 200
                  </span>
                </div>
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb} py-3 px-2`}
                >
                  <span>Apple</span>
                  <span className={`fs-14 ${styles.stock_span} `}>
                    In stock - 200
                  </span>
                </div>
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb} py-3 px-2`}
                >
                  <span>Apple</span>
                  <span className={`fs-14 ${styles.stock_span} `}>
                    In stock - 200
                  </span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className={`${styles.nav_header}`}>
              Mobile
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb} py-3 px-2`}
                >
                  <span>Apple</span>
                  <span className={`fs-14 ${styles.stock_span} `}>
                    In stock - 200
                  </span>
                </div>
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb} py-3 px-2`}
                >
                  <span>Apple</span>
                  <span className={`fs-14 ${styles.stock_span} `}>
                    In stock - 200
                  </span>
                </div>
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb} py-3 px-2`}
                >
                  <span>Apple</span>
                  <span className={`fs-14 ${styles.stock_span} `}>
                    In stock - 200
                  </span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className={`${styles.nav_header}`}>
              Desktop
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb} py-3 px-2`}
                >
                  <span>Apple</span>
                  <span className={`fs-14 ${styles.stock_span} `}>
                    In stock - 200
                  </span>
                </div>
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb} py-3 px-2`}
                >
                  <span>Apple</span>
                  <span className={`fs-14 ${styles.stock_span} `}>
                    In stock - 200
                  </span>
                </div>
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb} py-3 px-2`}
                >
                  <span>Apple</span>
                  <span className={`fs-14 ${styles.stock_span} `}>
                    In stock - 200
                  </span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className={`${styles.nav_header}`}>
              Accesories
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb} py-3 px-2`}
                >
                  <span>Apple</span>
                  <span className={`fs-14 ${styles.stock_span} `}>
                    In stock - 200
                  </span>
                </div>
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb} py-3 px-2`}
                >
                  <span>Apple</span>
                  <span className={`fs-14 ${styles.stock_span} `}>
                    In stock - 200
                  </span>
                </div>
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb} py-3 px-2`}
                >
                  <span>Apple</span>
                  <span className={`fs-14 ${styles.stock_span} `}>
                    In stock - 200
                  </span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div
          className={`${styles.bottom_div} justify-content-start border-top  ms-3 align-items-center d-flex`}
        >
          <FontAwesomeIcon className="me-1 fs-18 " icon={faRightFromBracket} />{" "}
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
