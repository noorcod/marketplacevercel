import Image from "next/image";
import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "../styles/Header.module.css";
import { tblogo, tblogoName } from "public/images/index";
import { hanburger, favourite, user } from "./../../public/icons/index";
import Link from "next/link";
import { motion } from "framer-motion";
const Header = ({ sandwichTriger }) => {
  const [active, setActive] = useState();
  const [navActive, setNavActive] = useState();

  const accressories = [
    {
      title: "Bags ",
    },
    {
      title: "Mouse",
    },
    {
      title: "Printers",
    },
    {
      title: "Wireless Ear Pods",
    },
    {
      title: "Wires",
    },
    {
      title: "Chargers",
    },
    {
      title: "Keyboaeds",
    },
    {
      title: "Others",
    },
  ];
  const data = [
    {
      title: "Samsung",
      description: "Availbale in stock -500",
    },
    {
      title: "Samsung",
      description: "Availbale in stock -500",
    },
    {
      title: "Samsung",
      description: "Availbale in stock -500",
    },
    {
      title: "Dell",
      description: "Availbale in stock -500",
    },
    {
      title: "Dell",
      description: "Availbale in stock -500",
    },
    {
      title: "Vivo",
      description: "Availbale in stock -500",
    },
    {
      title: "Vivo",
      description: "Availbale in stock -500",
    },
    {
      title: "Vivo",
      description: "Availbale in stock -500",
    },
    {
      title: "Oppo",
      description: "Availbale in stock -500",
    },
    {
      title: "Oppo",
      description: "Availbale in stock -500",
    },
    {
      title: "Oppo",
      description: "Availbale in stock -500",
    },
    {
      title: "OnePLus",
      description: "Availbale in stock -500",
    },
    {
      title: "OnePLus",
      description: "Availbale in stock -500",
    },
    {
      title: "OnePLus",
      description: "Availbale in stock -500",
    },
    {
      title: "Dell",
      description: "Availbale in stock -500",
    },
    // {
    //   title: "Dell",
    //   description: "Availbale in stock -500",
    // },
    // {
    //   title: "Samsung",
    //   description: "Availbale in stock -500",
    // },
  ];
  const Tablets = [
    {
      title: "Samsung",
      description: "Availbale in stock -500",
    },
    {
      title: "Samsung",
      description: "Availbale in stock -500",
    },
    {
      title: "Samsung",
      description: "Availbale in stock -500",
    },
    {
      title: "Dell",
      description: "Availbale in stock -500",
    },
    {
      title: "Dell",
      description: "Availbale in stock -500",
    },
    {
      title: "Vivo",
      description: "Availbale in stock -500",
    },
    {
      title: "Vivo",
      description: "Availbale in stock -500",
    },
  ];
  return (
    <div className={styles.navContainer}>
      <main className={`main  py-2`}>
        {" "}
        <Navbar bg="white" className={` ${styles.nav_bar}`} expand="lg">
          <div className="d-flex  justify-content-between align-items-center w-100">
            <div className="d-flex align-items-center p-0">
              <div
                className={`ps-3 pe-2 d-lg-none    pb-2 text-center ${styles.hamburger}`}
                onClick={() => {
                  sandwichTriger();
                }}
              >
                <Image
                  className="me-2"
                  alt="hamburger"
                  src={hanburger}
                  height="15"
                  width={18}
                />
              </div>
              <Link href="/">
                <div>
                  <Image
                    className={`mx-3 ${styles.tblogo} `}
                    src={tblogo}
                    alt={"Logo"}
                    height="32"
                    width={30}
                  />
                  <Image
                    className={` d-lg-inline d-md-inline d-none d-sm-inline ${styles.tblogoName}`}
                    src={tblogoName}
                    alt={"Logo name"}
                    height={30}
                    width={135}
                  />
                </div>
              </Link>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className={`${styles.navrow}`} id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown
                  title="Laptop"
                  onClick={() => {
                    setNavActive(1);
                  }}
                  className={`me-3 w-100 ${styles.navitem} ${styles.navitemActive} `}
                  id="#action3"
                >
                  {data.map((mapData, index) => (
                    <NavDropdown.Item
                      key={index}
                      onClick={() => {
                        setActive(index);
                      }}
                      className={`d-grid  pb-3 ${styles.nav_content} ${
                        (index + 1) % 5 === 0 ? "" : styles.nav_border
                      } ${active === index ? styles.nav_content_active : ""}`}
                      href="#action3"
                    >
                      <motion.span
                        initial={{ y: "10px", opacity: 0 }}
                        whileInView={{ y: "0px", opacity: 1 }}
                        transition={{ type: "tween", duration: 0.2 }}
                        className={`${styles.navsubitems} ${
                          active === index ? styles.Nav_active : ""
                        } `}
                      >
                        {" "}
                        {mapData.title}
                      </motion.span>
                      <span className={`${styles.nav_des}`}>
                        Availbale in stock -500
                      </span>
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>

                <NavDropdown
                  className={`me-3 ${styles.navitem} ${styles.navitemActive}`}
                  title="Mobile"
                  id="navbarScrollingDropdown"
                >
                  {data.map((data, index) => (
                    <React.Fragment key={index}>
                      <NavDropdown.Item
                        onClick={() => {
                          setActive(index);
                        }}
                        className={`d-grid  pb-3 ${styles.nav_content} ${
                          (index + 1) % 5 === 0 ? "" : styles.nav_border
                        } ${
                          active === index ? styles.nav_content_active : ""
                        } `}
                        href="/productslisting"
                      >
                        <motion.span
                          initial={{ y: "10px", opacity: 0 }}
                          whileInView={{ y: "0px", opacity: 1 }}
                          transition={{ type: "tween", duration: 0.2 }}
                          className={`${styles.navsubitems}  ${
                            active === index ? styles.Nav_active : ""
                          }  `}
                        >
                          {" "}
                          {data.title}
                        </motion.span>
                        <span className={`${styles.nav_des}`}>
                          Availbale in stock -500
                        </span>
                      </NavDropdown.Item>
                    </React.Fragment>
                  ))}
                </NavDropdown>
                <NavDropdown
                  className={`me-3 ${styles.navitem2} ${styles.navitemActive}`}
                  title="Desktop"
                  id="navbarScrollingDropdown"
                >
                  {accressories.map((data, index) => (
                    <React.Fragment key={index}>
                      <NavDropdown.Item
                        onClick={() => {
                          setActive(index);
                        }}
                        className={`d-grid  pb-1 ${styles.nav_content2} ${
                          (index + 1) % 8 === 0 ? "" : styles.nav_border
                        } ${
                          active === index ? styles.nav_content_active : ""
                        } `}
                        href="#action3"
                      >
                        <motion.span
                          initial={{ y: "10px", opacity: 0 }}
                          whileInView={{ y: "0px", opacity: 1 }}
                          transition={{ type: "tween", duration: 0.2 }}
                          className={`${styles.navsubitems2} ${
                            active === index ? styles.Nav_active : ""
                          }  `}
                        >
                          {" "}
                          {data.title}
                        </motion.span>
                      </NavDropdown.Item>
                    </React.Fragment>
                  ))}
                </NavDropdown>
                <NavDropdown
                  title="Tablet"
                  className={`me-3 ${styles.navitem} ${styles.navitemActive}`}
                  id="navbarScrollingDropdown"
                >
                  {Tablets.map((data, index) => (
                    <React.Fragment key={index}>
                      <NavDropdown.Item
                        onClick={() => {
                          setActive(index);
                        }}
                        className={`d-grid  pb-3 ${styles.nav_content} ${
                          (index + 1) % 5 === 0 ? "" : styles.nav_border
                        }`}
                        href="#action3"
                      >
                        <motion.span
                          initial={{ y: "10px", opacity: 0 }}
                          whileInView={{ y: "0px", opacity: 1 }}
                          transition={{ type: "tween", duration: 0.2 }}
                          className={`${styles.navsubitems}`}
                        >
                          {" "}
                          {data.title}
                        </motion.span>
                        <span className={`${styles.nav_des}`}>
                          Availbale in stock -500
                        </span>
                      </NavDropdown.Item>
                    </React.Fragment>
                  ))}
                </NavDropdown>
                <NavDropdown
                  title="LEDs"
                  className={`me-3 ${styles.navitem2} ${styles.navitemActive}`}
                  id="navbarScrollingDropdown"
                >
                  {accressories.map((data, index) => (
                    <React.Fragment key={index}>
                      <NavDropdown.Item
                        onClick={() => {
                          setActive(index);
                        }}
                        className={`d-grid  pb-1 ${styles.nav_content2} ${
                          (index + 1) % 8 === 0 ? "" : styles.nav_border
                        } ${active === index ? styles.nav_content_active : ""}`}
                        href="#action3"
                      >
                        <motion.span
                          initial={{ y: "10px", opacity: 0 }}
                          whileInView={{ y: "0px", opacity: 1 }}
                          transition={{ type: "tween", duration: 0.2 }}
                          className={`${styles.navsubitems2} ${
                            active === index ? styles.Nav_active : ""
                          }`}
                        >
                          {" "}
                          {data.title}
                        </motion.span>
                      </NavDropdown.Item>
                    </React.Fragment>
                  ))}
                </NavDropdown>
                <NavDropdown
                  className={` ${styles.navitem2} ${styles.navitemActive}`}
                  title="Acessories"
                  id="navbarScrollingDropdown"
                >
                  {accressories.map((data, index) => (
                    <React.Fragment key={index}>
                      <NavDropdown.Item
                        onClick={() => {
                          setActive(index);
                        }}
                        className={`d-grid  pb-1 ${styles.nav_content2} ${
                          (index + 1) % 8 === 0 ? "" : styles.nav_border
                        } ${active === index ? styles.nav_content_active : ""}`}
                        href="#action3"
                      >
                        <motion.span
                          initial={{ y: "10px", opacity: 0 }}
                          whileInView={{ y: "0px", opacity: 1 }}
                          transition={{ type: "tween", duration: 0.2 }}
                          className={`${styles.navsubitems2} ${
                            active === index ? styles.Nav_active : ""
                          }`}
                        >
                          {" "}
                          {data.title}{" "}
                          <span className={` ms-1 ${styles.numberSpan} fw-400`}>
                            (12)
                          </span>
                        </motion.span>
                      </NavDropdown.Item>
                    </React.Fragment>
                  ))}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <div className="d-flex d-lg-none">
              <div className="d-flex mx-3 align-items-center gap-2">
                <Image src={favourite} alt="favourite" width={15} height={15} />
                <span className="d-md-inline d-none">
                  Saved items(<span className="link ">0</span>)
                </span>
                <span className="link d-md-none">(0)</span>
              </div>
              <div className="d-flex me-4 align-items-center gap-2">
                <Image src={user} alt="user" width={15} height={15} />
                <span>Sign in</span>
              </div>
            </div>
          </div>
        </Navbar>
      </main>
    </div>
  );
};

export default Header;
