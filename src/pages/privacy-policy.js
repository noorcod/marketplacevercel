import { Layout } from "@/components";
import Breadcrumbs from "@/components/Breadcrumb";
import Meta from "@/components/Meta/Meta";
import Link from "next/link";
import styles from "../styles/PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
    return (<>
        <Meta title="Privacy Policy | TechBazaar" />
        <Layout>
            <main className="main mt-3">
                <Breadcrumbs />
                <div className={styles.main}>
                    <div className="text-center mb-2 mb-lg-5">
                        <h2 className={styles.textHeader}>TechBazaar Privacy Statement</h2>
                        <hr className={styles.separater} />
                        <p>Updated: Friday, February 12, 2021 - 12:20 GMT</p>
                    </div>
                    <div className={styles.section}>
                        <strong>Header text - </strong>
                        <p className={styles.header}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently`}</p>
                        <ol className="ms-3 mt-3 mb-5 secondary-link">
                            <li>Lorem Ipsum is simply dummy text Typesetting industry</li>
                            <li>Lorem Ipsum is simply dummy text Typesetting industry</li>
                            <li>Lorem Ipsum is simply dummy text Typesetting industry</li>
                            <li>Lorem Ipsum is simply dummy text Typesetting industry</li>
                            <li>Lorem Ipsum is simply dummy text Typesetting industry</li>
                            <li>Lorem Ipsum is simply dummy text Typesetting industry</li>
                            <li>Lorem Ipsum is simply dummy text Typesetting industry</li>
                            <li>Lorem Ipsum is simply dummy text Typesetting industry</li>
                        </ol>
                        <h4 className={styles.heading}>Policy 1</h4>
                        <p className={`${styles.header}`}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five`} </p>
                        <h4 className={`mt-5 ${styles.heading}`}>Policy 2</h4>
                        <p className={styles.header}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five`} </p>
                        <h4 className={`mt-5 ${styles.heading}`}>Policy 3</h4>
                        <p className={styles.header}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five`} </p>
                        <h4 className={`mt-5 ${styles.heading}`}>Policy 4</h4>
                        <p className={styles.header}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five`} </p>
                        <h4 className={`mt-5 ${styles.heading}`}>Policy 5</h4>
                        <p className={styles.header}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more`}  </p>
                        <div className="ms-5">
                            <ul className={`${styles.header}`}>
                                <li>Lorem Ipsum is simply dummy text</li>
                                <li className="mt-1">Lorem Ipsum is simply dummy text</li>
                                <li className="mt-1">Lorem Ipsum is simply dummy text</li>
                                <li className="mt-1">Lorem Ipsum is simply dummy text</li>
                                <li className="mt-1">Lorem Ipsum is simply dummy text</li>
                                <li className="mt-1">Lorem Ipsum is simply dummy text</li>
                                <li className="mt-1">Lorem Ipsum is simply dummy text</li>
                            </ul>
                        </div>
                        <h4 className="mt-5">Questions?</h4>
                        <p className={styles.header}>Have any questions? Please visit <Link href="/about" className="text-decoration-underline secondary-link">about us</Link> or requests regarding this Statement or Our processing of your information, please contact:</p>
                        <Link className={`text-decoration-underline secondary-link d-block ${styles.privacyfooter} my-3`} href="mailto:info@techbazaar.com">info@techbazaar.com</Link>
                        <p className={`m-0 ${styles.privacyfooter}`}>Contact with us:</p>
                        <p className={`m-0 ${styles.privacyfooter}`}>Lahore, Pakistan</p>
                        <p className={`m-0 ${styles.privacyfooter}`}>(Details address goes here)</p>
                        <p className={`m-0 mt-3 ${styles.privacyfooter}`}>Phone no:</p>
                        <h4 className={styles.footerPhone}>+92 03433456974</h4>
                    </div>
                </div>
            </main>
        </Layout>
    </>);
}

export default PrivacyPolicy;