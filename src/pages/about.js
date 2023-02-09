import { Layout } from "@/components";
import Breadcrumbs from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { about1, about2 } from "public/images";
import { Button, Col, Row } from "react-bootstrap";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
import Meta from "@/components/Meta/Meta";
function About() {
    const cardVariants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 50,
            rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };
    return (<>
        <Meta title="About Us | TechBazaar" />
        <Layout>
            <main>
                <div className={`d-flex flex-column ${styles.aboutSection}`}>
                    <div className={` main ${styles.breadcrumb}`}>
                        <Breadcrumbs />
                    </div>
                    <div className={` main ${styles.aboutTxt}`}>
                        <h1 className="text-white">About <strong className="link">Techbazaar</strong></h1>
                        <p className="text-white">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}</p>
                        <Link href="/contact-us"><Button className="px-4 py-2 rounded-1 mt-3">Contact Us</Button></Link>
                    </div>
                </div>
                <div className="main">
                    <div className={styles.mainSection}>
                        <Row className={` align-items-center`}>
                            <Col xs="12" sm="12" md="6" lg="6" className="px-0">
                                <motion.div initial={{ x: -200, opacity: 0 }} transition={{ type: "tween", duration: 0.4 }} animate={{ x: 0, opacity: 1 }}>

                                    <Image src={about1} alt={"mission"} width={512} height={426} />
                                </motion.div>
                            </Col>
                            <Col xs="12" sm="12" md="6" lg="6" className={`${styles.textSection1} px-0`}>
                                <motion.div initial={{ x: 200, opacity: 0 }} transition={{ type: "tween", duration: 0.4 }} animate={{ x: 0, opacity: 1 }}>

                                    <h3>Our mission</h3>
                                    <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</p>
                                </motion.div>

                            </Col>
                        </Row>
                        <Row className={` align-items-center flex-md-row flex-column-reverse`}>
                            <Col xs="12" sm="12" md="6" lg="6" className={`${styles.textSection2} px-0`}>
                                <motion.div
                                    viewport={{ once: true }} initial={{ x: -200, opacity: 0 }} transition={{ type: "tween", duration: 0.4 }} whileInView={{ x: 0, opacity: 1 }}>

                                    <h3>Our vision</h3>
                                    <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</p>
                                </motion.div>

                            </Col>
                            <Col xs="12" sm="12" md="6" lg="6" className="px-0">
                                <motion.div viewport={{ once: true }} initial={{ x: 200, opacity: 0 }} transition={{ type: "tween", duration: 0.4 }} whileInView={{ x: 0, opacity: 1 }}>

                                    <Image src={about2} alt={"vision"} width={512} height={426} />
                                </motion.div>

                            </Col>
                        </Row>
                    </div>
                    <motion.div
                        viewport={{ once: true }} initial={{ x: -200, opacity: 0 }} transition={{ type: "tween", duration: 0.7 }} whileInView={{ x: 0, opacity: 1 }}
                        className={`${styles.statement} `}>
                        <p >{`“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy“`}</p>
                        <div>
                            <img className="rounded-circle" src={"https://ca.slack-edge.com/TR5410L2Y-UR5HRP3BP-910cf62a3486-72"} alt="profile" />
                        </div>
                        <h6 className="mt-3">Usman Yousaf</h6>
                        <span>Founder and CEO, Techbazaar</span>
                    </motion.div>
                </div>
            </main>
        </Layout>
    </>);
}

export default About;