// import { ProductCard } from "../../components/ProductCard";
"use client";

import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import styles from "../../styles/FeaturedCategories.module.css";
import {
  chevronLeft,
  chevronRight,
  SliderLeft,
  SliderRight,
} from "../../../public/icons";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import ScrollDown from "../../components/ScrollDown";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  desktopImage,
  headPhoneImage,
  laptop,
  MobilePic,
  tabletImage,
  TV,
} from "../../../public/images";
import { motion } from "framer-motion";

const FeaturedCategories = () => {
  const [sliderRef, setSliderRef] = useState<any>(null);
  const router = useRouter();
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
        },
      },
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 990,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: function (index: any) {
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`;
    },
  };
  const data = [
    {
      id: 894,
      title: "Mobiles ",
      quantity: 4,
      sale_price: 450,
      created_at: "2023-04-25T17:15:39.000Z",
      updated_at: null,
      label: "Laptop",
      location_id: 334,
      img0: `	${process.env.NEXT_PUBLIC_MARKETPLACE_CDN}/images/inventoryImages/Eqdohl0Gy5LVlRqH1674299678115.png`,
    },
    {
      id: 895,
      title: "Laptops ",
      quantity: 7,
      sale_price: 950,
      created_at: "2023-04-25T17:26:01.000Z",
      updated_at: null,
      label: "Laptop",
      location_id: 334,
      img0: `${process.env.NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/laptops.jpg`,
    },
    {
      id: 898,
      title: "Tabs",
      quantity: 65,
      sale_price: 600,
      created_at: "2023-04-26T09:20:18.000Z",
      updated_at: null,
      label: "Laptop",
      location_id: 334,
      img0: `${process.env.NEXT_PUBLIC_MARKETPLACE_CDN}/images/inventoryImages/tlC40RKerSmFApbi1682482817383.jfif`,
    },
    {
      id: 900,
      title: " Tv / Monitors ",
      quantity: 7,
      sale_price: 73,
      created_at: "2023-04-26T09:31:51.000Z",
      updated_at: null,
      label: "Laptop",
      location_id: 334,
      img0: `${process.env.NEXT_PUBLIC_MARKETPLACE_CDN}/images/inventoryImages/H5YHRWJ8eULo6z0m1682483510793.jfif`,
    },
    {
      id: 913,
      title: "Accessories ",
      quantity: 5,
      sale_price: 6600,
      created_at: "2023-04-27T10:31:21.000Z",
      updated_at: "2023-04-27T10:46:00.000Z",
      label: "Laptop",
      location_id: 334,
      img0: `${process.env.NEXT_PUBLIC_MARKETPLACE_CDN}/images/inventoryImages/IFSh12Wn4RW4THLb1682573480179.jfif`,
    },
    {
      id: 2372,
      title: "Apple 56 2GB 64GB SSD 160GB HDD 12th Gen A12 Bionic 10.1 Inches ",
      quantity: 20,
      sale_price: 22,
      created_at: "2023-06-08T18:04:24.000Z",
      updated_at: null,
      label: "Laptop",
      location_id: 334,
      img0: `${process.env.NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/laptops.jpg`,
    },
    {
      id: 2373,
      title: "Acer test 64GB SSD 10th Gen A11 Bionic 7 Inches ",
      quantity: 2,
      sale_price: 900,
      created_at: "2023-06-09T11:47:03.000Z",
      updated_at: null,
      label: "Laptop",
      location_id: 334,
      img0: `${process.env.NEXT_PUBLIC_MARKETPLACE_CDN}/images/dummyImages/laptops.jpg`,
    },
  ];
  return (
    <div className={styles.feature_div}>
      <div className="main">
        <div className=" pb-5 mb-5">
          {/* <h1 className={`pb-2 ${styles.re_h1} `}> Categories</h1> */}
          <div className={styles.re_paragraph_div}>
            <Row className="d-flex gap-2 mt-3 justify-content-center w-100 ">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`d-grid mb-2 justify-content-center  ${styles.gridItems}`}
              >
                <Col
                as={Link}
                  onClick={() => {
                    router.push("/products?params=category_id=2");
                  }}
                  href="/products?params=category_id=2"
                  lg={2}
                  className={`d-grid mb-2 w-100  `}
                >
                  <Image
                    alt={MobilePic}
                    height={100}
                    width={100}
                    src={MobilePic}
                  />
                  <span className="fw-bold  text-center">Mobile</span>
                </Col>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`d-grid mb-2 justify-content-center  ${styles.gridItems}`}
              >
                <Col
                  lg={2}
                  as={Link}

                  onClick={() => {
                    router.push("/products?params=category_id=3");
                  }}
                  href="/products?params=category_id=3"
                  className={`d-grid mb-2 `}
                >
                  <Image
                    style={{ transform: "rotate(90deg)" }}
                    alt={MobilePic}
                    height={100}
                    width={100}
                    src={tabletImage}
                  />
                  <span className="fw-bold  text-center">Tablets</span>
                </Col>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`d-grid mb-2 justify-content-center  ${styles.gridItems}`}
              >
                <Col
                  whileHover={{ scale: 1.1 }}
                  as={Link}

                  lg={2}
                  onClick={() => {
                    router.push("/products?params=category_id=4");
                  }}
                  href="/products?params=category_id=4"
                  className={`d-grid mb-2 `}
                >
                  <Image alt={MobilePic} height={100} width={100} src={TV} />
                  <span className="fw-bold  text-center">TV</span>
                </Col>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`d-grid mb-2 justify-content-center  ${styles.gridItems}`}
              >
                <Col
                  whileHover={{ scale: 1.1 }}
                  as={Link}

                  lg={2}
                  onClick={() => {
                    router.push("/products?params=category_id=6");
                  }}
                  href="/products?params=category_id=6"
                  className={`d-grid mb-2 `}
                >
                  <Image
                    alt={MobilePic}
                    height={100}
                    width={100}
                    src={headPhoneImage}
                  />
                  <span className="fw-bold  text-center">Accessories</span>
                </Col>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`d-grid mb-2 justify-content-center  ${styles.gridItems}`}
              >
                <Col
                  whileHover={{ scale: 1.1 }}
                  as={Link}

                  lg={2}
                  onClick={() => {
                    router.push("/products?params=category_id=1");
                  }}
                  href="/products?params=category_id=1"
                  className={`d-grid mb-2`}
                >
                  <Image
                    alt={MobilePic}
                    height={100}
                    width={100}
                    src={laptop}
                  />
                  <span className="fw-bold  text-center">Laptops</span>
                </Col>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`d-grid mb-2 justify-content-center  ${styles.gridItems}`}
              >
                <Col
                  whileHover={{ scale: 1.1 }}
                  as={Link}

                  lg={2}
                  onClick={() => {
                    router.push("/products?params=category_id=5");
                  }}
                  href="/products?params=category_id=5"
                  className={`d-grid mb-2 `}
                >
                  <Image
                    style={{ mixBlendMode: "multiply" }}
                    alt={MobilePic}
                    height={100}
                    width={100}
                    src={desktopImage}
                  />
                  <span className="fw-bold  text-center">DeskTop</span>
                </Col>
              </motion.div>
            </Row>
            {/* <div
              className={` ${styles.arrows} d-lg-flex d-none d-flex align-items-center`}
            >
              <a className={` text-end mb-2  ${styles.re_link}`}>
                {" "}
                All categories{" >"}
              </a>
              <div
                onClick={sliderRef?.slickPrev}
                className={`${styles.favarrow} mb-1 rounded-2 px-2 mx-2 `}
              >
                <Image className=" mb-1" src={chevronLeft} alt="chevron-left" />
              </div>
              <div
                onClick={sliderRef?.slickNext}
                className={`${styles.favarrow} mb-1 rounded-2 px-2`}
              >
                <Image
                  className="mb-1"
                  src={chevronRight}
                  alt="chevron-right"
                />
              </div>
            </div> */}

            {/* <div
              className={`${styles.slider_arrow} d-lg-none d-flex justify-content-between`}
            >
              <div className={`${styles.arrow_btn_div}`}>
                <Button
                  onClick={sliderRef?.slickPrev}
                  className={`${styles.arrow_btn_btn}`}
                >
                  <Image src={SliderLeft} alt="slider-left" />
                </Button>
              </div>
              <div className={`${styles.arrow_btn_div_right}`}>
                <Button
                  onClick={sliderRef?.slickNext}
                  className={`${styles.arrow_btn_btn}`}
                >
                  <Image src={SliderRight} alt="slider-right" />
                </Button>
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="">
          <Slider ref={setSliderRef} {...settings}>
          {data.map((item,index)=>(  <div key={index}>
              <RecomendedCard image={item.img0} title={item.title} />
            </div>))}
           
          </Slider>
        </div> */}
      </div>
      {/* <div className="text-center d-lg-none ">
        <a className={` text-center mb-2  ${styles.re_link}`}>
          {" "}
          All categories{"> "}
        </a>
      </div> */}
      {/* <ScrollDown className="mt-5" /> */}
    </div>
  );
};

export default FeaturedCategories;

const RecomendedCard = ({ image, title }: any) => {
  const router = useRouter();
  return (
    <Card
      onClick={() => {
        router.push("/specs");
      }}
      className="border-0 cursor-pointer"
      style={{ width: "17rem" }}
    >
      <Image
        height={211}
        width={278}
        className="rounded-2 mx-3"
        alt="productimg"
        src={image}
      />
      <Card.Body>
        <Card.Title className="mb-0">
          <p className="fs-18 fw-700 mb-0">{title}</p>
        </Card.Title>
        {/* <div className="mb-4">
          <p className="mb-0">
            Lorem Ipsum is simply dummy text of the printing{" "}
          </p>
        </div> */}
      </Card.Body>
    </Card>
  );
};
