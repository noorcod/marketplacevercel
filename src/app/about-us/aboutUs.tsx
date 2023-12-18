"use client";
import Breadcrumbs from "../../components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { about1, about2, sir } from "../../../public/images";
import { Button, Col, Row } from "react-bootstrap";
import styles from "../../styles/About.module.css";
import { motion } from "framer-motion";
import { useNavigationEvent } from "../hooks/useNavigationEvent";

function About() {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  useNavigationEvent();

  return (
    <main>
      <div className={`d-flex flex-column ${styles.aboutSection}`}>
        <div className={` main ${styles.breadcrumb}`}>
          <Breadcrumbs />
        </div>
        <div className={` main ${styles.aboutTxt}`}>
          <h1 className="text-white">
            About <strong className="link">Techbazaar</strong>
          </h1>
          <p className="text-white">{`Welcome to TechBazaar—pioneering retail tech innovation, seamlessly connecting retailers and customers through our powerful POS system and marketplace platform, leading the industry into the future.`}</p>
          <Link href="/contact-us">
            <Button className="px-4 py-2 rounded-1 mt-3">Contact Us</Button>
          </Link>
        </div>
      </div>
      <div className="main">
        <div className={styles.mainSection}>
          <Row className={` align-items-center`}>
            <Col xs="12" sm="6" md="6" lg="6" className="px-0">
              <motion.div initial={{ x: -200, opacity: 0 }} transition={{ type: "tween", duration: 0.4 }} animate={{ x: 0, opacity: 1 }}>
                <Image
                  // loader={() => `${about1}`}
                  src={about1}
                  alt={"mission"}
                  width={512}
                  height={426}
                />
              </motion.div>
            </Col>
            <Col xs="12" sm="6" md="6" lg="6" className={`${styles.textSection1}`}>
              <motion.div initial={{ x: 200, opacity: 0 }} transition={{ type: "tween", duration: 0.4 }} animate={{ x: 0, opacity: 1 }}>
                <h3>Our mission</h3>
                <p>{`Our primary mission is to digitally transform the retail tech industry by bridging the gap between tech retailers and potential customers. By offering an all-in-one solution comprising a powerful POS system and a marketplace platform, TechBazaar aims to empower retailers to thrive in the digital age. The company believes in leveraging technology to enhance business efficiency, foster growth, and create a seamless shopping experience for both retailers and customers.`}</p>
              </motion.div>
            </Col>
          </Row>
          <Row className={` align-items-center flex-sm-row flex-column-reverse`}>
            <Col xs="12" sm="6" md="6" lg="6" className={`${styles.textSection2}`}>
              <motion.div viewport={{ once: true }} initial={{ x: -200, opacity: 0 }} transition={{ type: "tween", duration: 0.4 }} whileInView={{ x: 0, opacity: 1 }}>
                <h3>Our vision</h3>
                <p>{`We envision becoming the leading provider of POS and ERP solutions for tech retailers worldwide. By continually innovating and evolving its offerings, TechBazaar aims to revolutionize the retail tech industry, enable businesses to adapt to changing market dynamics and unlock their full growth potential.`}</p>
              </motion.div>
            </Col>
            <Col xs="12" sm="6" md="6" lg="6" className="px-0">
              <motion.div viewport={{ once: true }} initial={{ x: 200, opacity: 0 }} transition={{ type: "tween", duration: 0.4 }} whileInView={{ x: 0, opacity: 1 }}>
                <Image src={about2} alt={"vision"} width={512} height={426} />
              </motion.div>
            </Col>
          </Row>
        </div>
        <motion.div viewport={{ once: true }} initial={{ x: -200, opacity: 0 }} transition={{ type: "tween", duration: 0.7 }} whileInView={{ x: 0, opacity: 1 }} className={`${styles.statement} `}>
          <p
            style={{ textAlign: "justify" }}
          >{`"At TechBazaar, our core value is simple yet profound: ‘Customers First’ and ‘Collaboration.’ These values drive us to prioritize your success above all else and to work together with unwavering dedication, ensuring that every effort is made to amplify your achievement."`}</p>
          <div>
            <Image className="rounded-circle" src={sir} alt="profile" />
          </div>
          <h6 className="mt-3">Usman Yousaf</h6>
          <span>Founder and CEO, Techbazaar</span>
        </motion.div>
      </div>
    </main>
  );
}

export default About;
