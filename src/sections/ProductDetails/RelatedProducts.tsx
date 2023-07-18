import { ProductCard } from "../../components";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import styles from "../../styles/RelatedProducts.module.css";
import {
  chevronLeft,
  chevronRight,
  SliderLeft,
  SliderRight,
} from "../../../public/icons";
import { Button, Card, Col } from "react-bootstrap";

import { location } from "../../../public/icons/index";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import LoadingCard from "../../components/LoadingCard";
import ContactSellerModal from "../../components/ContactSellerModal";
import ReserveDetails from "../../components/ReserveDetails";
const RelatedProducts = () => {
  const [sliderRef, setSliderRef] = useState<any>(null);
  const settings = {
    className: "center",
    infinite: true,
    // centerMode: true,
    arrows: false,
    centerPadding: "10px",
    slidesToShow: 4,
    swipeToSlide: true,
    variableWidth: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1824,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          initialSlide: 2,

        },
      },
      {
        breakpoint: 1490,
        settings: {
          infinite: true,

          // centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          infinite: true,

          // centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          dots: false,

          slidesToScroll: 1,
        },
      },
    ],
    afterChange: function (index:any) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
    const data=[
    {
        "id": 894,
        title: "Samsung tester test 2GB 120GB SSD 40GB HDD 1st Gen Exynos 2100 10.1 Inches ",
        "quantity": 4,
        "sale_price": 450,
        "created_at": "2023-04-25T17:15:39.000Z",
        "updated_at": null,
        "label": "Laptop",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/nNb197LTK1rt7F6v1682424938104.jpg"
    },
    {
        "id": 895,
        title: "Apple macbook 4GB 128GB SSD 60GB HDD 2nd Gen Snapdragon 888 11.6 Inches ",
        "quantity": 7,
        "sale_price": 950,
        "created_at": "2023-04-25T17:26:01.000Z",
        "updated_at": null,
        "label": "Laptop",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/YvhD4l9bycVD41bT1682425559633.jpg"
    },
    {
        "id": 898,
        title: "Realme test 2GB 120GB SSD 40GB HDD 1st Gen Exynos 2100 10.1 Inches",
         "quantity": 65,
        "sale_price": 600,
        "created_at": "2023-04-26T09:20:18.000Z",
        "updated_at": null,
        "label": "Laptop",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/tlC40RKerSmFApbi1682482817383.jfif"
    },
    {
        "id": 900,
        title: "Samsung test 2GB 120GB SSD 2nd Gen Snapdragon 888 11.6 Inches ",
        "quantity": 7,
        "sale_price": 73,
        "created_at": "2023-04-26T09:31:51.000Z",
        "updated_at": null,
        "label": "Laptop",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/H5YHRWJ8eULo6z0m1682483510793.jfif"
    },
    {
        "id": 913,
        title: "Apple . 8GB 120GB SSD 60GB HDD 3rd Gen Snapdragon 888 11.6 Inches ",
        "quantity": 5,
        sale_price: 6600,
        "created_at": "2023-04-27T10:31:21.000Z",
        "updated_at": "2023-04-27T10:46:00.000Z",
        "label": "Laptop",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/IFSh12Wn4RW4THLb1682573480179.jfif"
    },
    {
        "id": 2372,
        title: "Apple 56 2GB 64GB SSD 160GB HDD 12th Gen A12 Bionic 10.1 Inches ",
        "quantity": 20,
        "sale_price": 22,
        "created_at": "2023-06-08T18:04:24.000Z",
        "updated_at": null,
        "label": "Laptop",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/dummyImages/laptops.jpg"
    },
    {
        "id": 2373,
        title: "Acer test 64GB SSD 10th Gen A11 Bionic 7 Inches ",
        "quantity": 2,
        "sale_price": 900,
        "created_at": "2023-06-09T11:47:03.000Z",
        "updated_at": null,
        "label": "Laptop",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/dummyImages/laptops.jpg"
    }
]
  return (
    <div className={styles.related_div}>
      <div className="main">
        <div className="text-center mb-1">
          <div className={styles.re_paragraph_div}>
            <h1 className={` ${styles.re_h1} `}> Related products</h1>

            <div
              className={` ${styles.arrows} d-lg-flex d-none me-4 d-flex align-items-center`}
            >
              <div
                onClick={sliderRef?.slickPrev}
                className={`${styles.favarrow} mb-1 py-1 rounded-2 px-2 mx-2 `}
              >
                <Image className=" mb-1" src={chevronLeft} alt="chevronleft" />
              </div>
              <div
                onClick={sliderRef?.slickNext}
                className={`${styles.favarrow} mb-1 py-1 rounded-2 px-2 `}
              >
                <Image className="mb-1" src={chevronRight} alt="chevronright" />
              </div>
            </div>
            <div
              className={`${styles.slider_arrow} d-lg-none d-flex justify-content-between`}
            >
              <div className={`${styles.arrow_btn_div}`}>
                <Button
                  onClick={sliderRef?.slickPrev}
                  className={`${styles.arrow_btn_btn}`}
                >
                  <Image src={SliderLeft} alt="sliderleft" />
                </Button>
              </div>
              <div className={`${styles.arrow_btn_div_right}`}>
                <Button
                  onClick={sliderRef?.slickNext}
                  className={`${styles.arrow_btn_btn}`}
                >
                  <Image src={SliderRight} alt="sliderright" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Slider ref={setSliderRef} {...settings}>
            {data.map(item=>(<div>
              <RelatedProductCard  price= {item.sale_price}image={item.img0} title={item.title}  />
            </div>))}
            {/* <div>
              <ProductCard recomended={true} />
            </div>
            <div>
              <ProductCard recomended={true} />
            </div>
            <div>
              <ProductCard recomended={true} />
            </div>
            <div>
              <ProductCard recomended={true} />
            </div>
            <div>
              <ProductCard recomended={true} />
            </div>
            <div>
              <ProductCard recomended={true} />
            </div> */}
          </Slider>
        </div>
        {/* <div className="text-center mt-5 d-lg-none">
          <a className={` text-center mb-2   ${styles.re_link}`}>
            {" "}
            All products{"> "}
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default RelatedProducts;

interface productProp {
  recomended?: boolean;
  loading?: Boolean;
  image:any
  title:string,
  price:number
}

interface heightType{
  height: {
    delay: number;
    duration: number;
}
}
const RelatedProductCard:React.FC<productProp> = ({ recomended,price, loading,image,title }) => {
  const [reserveModal, setReserveModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const router = useRouter();
  const handleReserveModal = () => {
    setReserveModal(true);
  };

  const handleContactModal = () => {
    setContactModal(true);
  };
  return (
    <>
      <Col className="mt-4" lg="4" md="4" sm="6" xs="6">
        {loading ? (
          <LoadingCard  />
        ) : (
          <Card
            className={` ${recomended ? "" : " "} cursor-pointer`}
            style={
              recomended
                ? { width: "17.7rem", border: " 1px solid #D8E4F8" }
                : { width:"15.3rem", border: " 1px solid #D8E4F8" }
            }
            // onClick={() => router.push("/productDetails/Samsung")}
          >
            <motion.img
            onClick={() => router.push("/productDetails/Samsung")}

            style={{padding:"10px",objectFit:"scale-down"}}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={
                ({ height: { delay: 0, duration: 0.4 } }as heightType,
                { opacity: { delay: 0.3, duration: 0.4 } })
              }
              className="object-fit-cover  rounded-top "
              height={211}
              width={recomended ? 281 :"100%"}
              src={image}
              alt="productImg"
            />
            <Card.Body>
              <Card.Title style={{height:"100px"}} className="mb-0"
               onClick={() => router.push("/productDetails/Samsung")}   >
                <p className="fs-18 fw-700 mb-0">{title}</p>
              </Card.Title>
              <div className="mb-4"
               onClick={() => router.push("/productDetails/Samsung")} >
                <p className="mb-0">Condition :Used</p>
                <strong className="d-flex align-items-baseline ">
                  {" "}
                  Rs. {price.toLocaleString("en-IN")} <p className={`ms-1 discount`}>Rs. 200</p>
                </strong>
              </div>
              <div className="d-flex align-items-baseline ">
                <Image
                  className="me-1 rounded-2"
                  src={location}
                  alt="location"
                  height="12"
                  width="10"
                />
                <p>Lahore</p>
              </div>
              <Button
                className="w-100 mb-2"
                variant="secondary"
                onClick={() => handleContactModal()}
              >
                Contact seller
              </Button>
              <Button
                className="w-100"
                variant="outline-secondary"
                onClick={() => handleReserveModal()}
              >
                Reserve
              </Button>
            </Card.Body>
          </Card>
        )}
      </Col>
      <ReserveDetails
        show={reserveModal}
        onHide={() => setReserveModal(false)}
      />
      <ContactSellerModal
        show={contactModal}
        onHide={() => setContactModal(false)}
      />
    </>
  );
};

