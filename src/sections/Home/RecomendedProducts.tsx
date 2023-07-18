import { ProductCard } from "../../components";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import styles from "../../styles/RecomendedProducts.module.css";
import {
  chevronLeft,
  chevronRight,
  SliderLeft,
  SliderRight,
} from "../../../public/icons";
import { Button, Card, Row } from "react-bootstrap";
import Link from "next/link";
const RecomendedProducts = () => {
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
        },
      },
      {
      breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
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
        "id": 2405,
        title: "Apple iPhone 11 Pro 4/64 Matte Gold",
        "quantity": 4,
        sale_price: 115000,
        "created_at": "2023-06-26T11:59:32.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/OULxFxWgiYZkUksU1673934822349.jpg"
    },
    {
        "id": 2404,
        title: "Xiaomi Redmi Note 4 4/64 Dark Gray",
        "quantity": 99,
        sale_price: 27000,
        "created_at": "2023-06-23T12:17:46.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/fArNUdxHqqubmXKg1687436030785.png"
    },
    {
        "id": 2403,
        title: "Xiaomi Redmi Note 12 Discovery 12/512 Black",
        "quantity": 498,
        sale_price: 230000,
        "created_at": "2023-06-23T12:10:02.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/oyZXlY66tl5ufQaO1686293212812.jpg"
    },
    {
        "id": 2402,
        title: "Vivo V20 6/128 Midnight Black",
        "quantity": 1,
        sale_price: 27000,
        "created_at": "2023-06-23T11:43:36.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/oH6RfFmpOX34QTJr1680498470869.jpg"
    },
    {
        "id": 2385,
        title: "E-Tachi B12 0/0 Black",
        "quantity": 1,
        sale_price: 5500,
        "created_at": "2023-06-14T14:49:09.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/JgNuhRGNvc2hxoTY1678087673110.png"
    },
    {
        "id": 2374,
        title: "Honor 10i 4/64 Aurora",
        "quantity": 1,
        sale_price: 70000,
        "created_at": "2023-06-13T11:24:38.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/inventoryImages/GlC4mJzwk2aKqxz71680514288681.jpg"
    },
    {
        "id": 2373,
        title: "Acer test 64GB SSD 10th Gen A11 Bionic 7 Inches ",
        "quantity": 2,
        sale_price: 900,
        "created_at": "2023-06-09T11:47:03.000Z",
        "updated_at": null,
        "label": "Laptop",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/dummyImages/laptops.jpg"
    },
    {
        "id": 2372,
        title: "Apple 56 2GB 64GB SSD 160GB HDD 12th Gen A12 Bionic 10.1 Inches ",
        "quantity": 20,
        sale_price: 22,
        "created_at": "2023-06-08T18:04:24.000Z",
        "updated_at": null,
        "label": "Laptop",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/dummyImages/laptops.jpg"
    },
    {
        "id": 2371,
        title: "Apple test 17 Inches 90Hz Foldable OLED ",
        "quantity": 49,
        sale_price: 60,
        "created_at": "2023-06-08T17:58:06.000Z",
        "updated_at": null,
        "label": "TV / Monitor",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/dummyImages/tvs.jpg"
    },
    {
        "id": 2370,
        title: "Apple iPhone 11 4/128 Green",
        "quantity": 11,
        sale_price: 20,
        "created_at": "2023-06-08T16:40:34.000Z",
        "updated_at": null,
        "label": "Mobile",
        "location_id": 334,
        img0: "https://cdn.techbazaar.pk/images/dummyImages/mobiles.jpg"
    }
]
  return (
    <div className={styles.recomended_div}>
      <div className="main">
        <div className="text-center mb-4">
          <h1 className={`pb-2 ${styles.re_h1}`}> Recommended products</h1>
          <div className={styles.re_paragraph_div}>
            <div className={styles.para}>
              Lorem Ipsum is simply dummy text of the p rinting lorem
              Ipsumrinting lorem Ipsum
            </div>
            <div
              className={` ${styles.arrows} d-lg-flex d-none me-4 d-flex align-items-center`}
            >
              <Link
                href="listing/All-products"
                className={` text-end mb-2  ${styles.re_link}`}
              >
                {" "}
                All products{" "}
              </Link>
              <div
                onClick={sliderRef?.slickPrev}
                className="bg-white mb-1 rounded-2 px-2 mx-2 "
              >
                <Image className=" mb-1" src={chevronLeft} alt="chevron-left" />
              </div>
              <div
                onClick={sliderRef?.slickNext}
                className="bg-white mb-1 rounded-2 px-2"
              >
                <Image
                  className="mb-1"
                  src={chevronRight}
                  alt="chevron-right"
                />
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
                  <Image src={SliderLeft} alt="sliderLeft" />
                </Button>
              </div>
              <div className={`${styles.arrow_btn_div_right}`}>
                <Button
                  onClick={sliderRef?.slickNext}
                  className={`${styles.arrow_btn_btn}`}
                >
                  <Image src={SliderRight} alt="slider" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Slider ref={setSliderRef} {...settings}>
          {
data.map(item=>(
            <div>
              <ProductCard price={item.sale_price} recomended={true} image={item.img0} title={item.title} />
            </div>
         )) }
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
        <div className="text-center mt-5 d-lg-none">
          <a className={` text-center mb-2   ${styles.re_link}`}>
            {" "}
            All products{"> "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecomendedProducts;
