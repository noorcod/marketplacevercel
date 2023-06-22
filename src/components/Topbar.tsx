import Image from "next/image";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { announcement, favourite, user } from "../../public/icons/index";
import style from "./../styles/Topbar.module.css";

const Topbar = () => {
  return (
    <main className="main">
      <Row className={`py-2 ${style.banner}`}>
        <Col
          className={`d-flex align-items-center px-0 gap-2 ${style.bannerText}`}
        >
          <Image
            className={style.announcement}
            src={announcement}
            alt={"announcement"}
            width={20}
            height={20}
          />
          <span>
            Important notice goes here{" "}
            <Link className="link text-decoration-underline" href="/">
              Know more
            </Link>
          </span>
        </Col>
        <Col
          className={` align-items-center justify-content-end pe-0 gap-3 ${style.rightBanner}`}
        >
          <div className="d-flex align-items-center gap-2">
            <Image src={favourite} alt="favourite" width={15} height={15} />
            <span>
              Saved items(<span className="link">0</span>)
            </span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Image src={user} alt="user" width={15} height={15} />
            <span>Sign in</span>
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default Topbar;
