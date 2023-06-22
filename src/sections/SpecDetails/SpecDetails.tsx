import Image from "next/image";
import Link from "next/link";
import { battery, calender, camera, rectangle, stroke } from "../../../public/icons";
import { specImg } from "../../../public/images";
import { Col, Row, Table } from "react-bootstrap";
import styles from "../../styles/SpecDetail.module.css";

const SpecDetail = () => {
  return (
    <div className="ps-0 ps-lg-3">
      <Row className={`${styles.specDetail}`}>
        <Col xs="2" sm="4" md="3" lg="3" className={`${styles.specImage}`}>
          <Image src={specImg} alt="specs" width={195} height={260} />
        </Col>
        <Col xs="6" sm="8" md="9" lg="8" className="px-0">
          <div className={`p-0 mt-2`}>
            <div className={styles.specs}>
              <h3 className="fw-bold">Samsung galaxy m04</h3>
              <div className="d-flex align-items-center gap-1">
                <Image src={calender} alt="calender" width={10} height={10} />
                <span className="fs-13">Exp. release 2022, December 16</span>
              </div>
              <ul className={`mt-3 ps-4  ${styles.basicDetails}`}>
                <li className="">Android 12, One UI Core 4.1</li>
                <li className="">64GB/128GB storage, microSDXC</li>
                <li className="">18%30,164 HITS</li>
              </ul>
            </div>
          </div>
          <Row className={`${styles.specBasic} d-sm-flex d-none px-0`}>
            <Col
              xs="6"
              sm="6"
              md="6"
              lg="6"
              className="d-flex align-items-center gap-3 mb-4"
            >
              <Image src={rectangle} alt="rectangle" width={20} height={32} />
              <div>
                <h4 className="m-0 fw-bold">{`6.5"`}</h4>
                <p className="m-0 fs-13">720x1600 pixels</p>
              </div>
            </Col>
            <Col
              xs="6"
              sm="6"
              md="6"
              lg="6"
              className="d-flex align-items-center gap-3 mb-4"
            >
              <Image src={camera} alt="camera" width={32} height={29} />
              <div>
                <h4 className="m-0 fw-bold">13MP</h4>
                <p className="m-0 fs-13">1080p</p>
              </div>
            </Col>
            <Col
              xs="6"
              sm="6"
              md="6"
              lg="6"
              className="d-flex align-items-center gap-3"
            >
              <Image src={stroke} alt="stroke" width={30} height={30} />
              <div>
                <h4 className="m-0 fw-bold">4GB RAM</h4>
                <p className="m-0">Helio P35</p>
              </div>
            </Col>
            <Col
              xs="6"
              sm="6"
              md="6"
              lg="6"
              className="d-flex align-items-center gap-3"
            >
              <Image src={battery} alt="battery" width={40} height={21} />
              <div>
                <h4 className="m-0 fw-bold">5000mAh</h4>
                <p className="m-0">Li-Po</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        className={`${styles.specBasic} ${styles.specBasicSm} d-flex d-sm-none px-0`}
      >
        <Col
          xs="6"
          sm="6"
          md="6"
          lg="6"
          className="d-flex align-items-center gap-3 mb-4 px-0"
        >
          <Image src={rectangle} alt="rectangle" width={20} height={32} />
          <div>
            <h4 className="m-0 fw-bold">{`6.5"`}</h4>
            <p className="m-0">720x1600 pixels</p>
          </div>
        </Col>
        <Col
          xs="6"
          sm="6"
          md="6"
          lg="6"
          className="d-flex align-items-center gap-3 mb-4 px-0"
        >
          <Image src={camera} alt="camera" width={32} height={29} />
          <div>
            <h4 className="m-0 fw-bold">13MP</h4>
            <p className="m-0">1080p</p>
          </div>
        </Col>
        <Col
          xs="6"
          sm="6"
          md="6"
          lg="6"
          className="d-flex align-items-center gap-3 px-0"
        >
          <Image src={stroke} alt="stroke" width={30} height={30} />
          <div>
            <h4 className="m-0 fw-bold">4GB RAM</h4>
            <p className="m-0">Helio P35</p>
          </div>
        </Col>
        <Col
          xs="6"
          sm="6"
          md="6"
          lg="6"
          className="d-flex align-items-center gap-3 px-0"
        >
          <Image src={battery} alt="battery" width={40} height={21} />
          <div>
            <h4 className="m-0 fw-bold">5000mAh</h4>
            <p className="m-0">Li-Po</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="12" md="12" lg="12" className="px-0">
          <div className="my-5">
            <Table className={styles.specsTable}>
              <thead>
                <tr className={styles.tablehead}>
                  <th colSpan={12}>Network</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={1} className={styles.tdhead}>
                    Technology
                  </td>
                  <td colSpan={4}>GSM / HSPA / LTE</td>
                  <td colSpan={2} className="text-end">
                    <Link href="#" className="link pe-2">
                      Learn more
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1} className={styles.tdhead}>
                    Technology
                  </td>
                  <td colSpan={4}>GSM / HSPA / LTE</td>
                  <td colSpan={2} className="text-end">
                    <Link href="#" className="link pe-2">
                      Learn more
                    </Link>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr className={styles.tablehead}>
                  <th colSpan={12}>Network</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={1} className={styles.tdhead}>
                    Technology
                  </td>
                  <td colSpan={4}>GSM / HSPA / LTE</td>
                  <td colSpan={2} className="text-end">
                    <Link href="#" className="link pe-2">
                      Learn more
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td colSpan={1} className={styles.tdhead}>
                    Technology
                  </td>
                  <td colSpan={4}>GSM / HSPA / LTE</td>
                  <td colSpan={2} className="text-end">
                    <Link href="#" className="link pe-2">
                      Learn more
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SpecDetail;
