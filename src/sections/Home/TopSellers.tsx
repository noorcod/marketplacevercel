import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import styles from '../../styles/TopSeller.module.css';
import Slider from "react-slick";
import { apple, samsung, oneplus } from '../../../public/images'
import Image from "next/image";
import ScrollDown from "../../components/ScrollDown";
import Link from "next/link";

const TopSellers = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3
        }
      }
    ]
  };
  const data = [
    {
      image: apple,
      name: "Apple"
    },
    {
      image: samsung,
      name: "Samsung"
    },
    {
      image: oneplus,
      name: "OnePlus"
    },
    {
      image: apple,
      name: "Apple"
    },
    {
      image: samsung,
      name: "Samsung"
    },
    {
      image: oneplus,
      name: "OnePlus"
    },
    {
      image: samsung,
      name: "Samsung"
    }
  ]
  return (
    <div className={`${styles.topSellers}`}>
      <main className="main py-5">
        <Row className={`${styles.header}`}>
          <Col xs="4" sm="4" md="5" lg="5" className="px-0">
            <hr className={`${styles.separater}`} />
          </Col>
          <Col xs="4" sm="4" md="2" lg="2" className="px-0">
            <h4 className="text-center">Top sellers</h4>
          </Col>
          <Col xs="4" sm="4" md="5" lg="5" className="px-0">
            <hr className={`${styles.separater}`} />
          </Col>
        </Row>
        <div className={`py-5 ${styles.sellerSlider}`}>
          <Slider className="w-100" {...settings}>
            {
              data.map((seller, index) => (
                <Link href={`/seller/${seller.name}`} key={index}>
                  <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2"><div>{seller.name}</div></Tooltip>}>
                    <Image src={seller.image} alt={seller.name} width={100} height={50} />
                  </OverlayTrigger>
                </Link>
              ))
            }
          </Slider>
        </div>
      </main>
      <ScrollDown className="mb-5" />
    </div>
  );
}

export default TopSellers;