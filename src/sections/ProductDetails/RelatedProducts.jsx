import { ProductCard } from "@/components";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import styles from "../../styles/RelatedProducts.module.css";
import {
  chevronLeft,
  chevronRight,
  SliderLeft,
  SliderRight,
} from "public/icons";
import { Button, Card, Row } from "react-bootstrap";
const RelatedProducts = () => {
  const [sliderRef, setSliderRef] = useState(null);
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
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToScroll: 3,
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
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className={styles.recomended_div}>
      <div className="main">
        <div className="text-center mb-1">
          <div className={styles.re_paragraph_div}>
            <h1 className={` ${styles.re_h1}   `}> Related products</h1>

            <div
              className={` ${styles.arrows} d-lg-flex d-none d-flex align-items-center`}
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
            </div>
            <div>
              <ProductCard recomended={true} />
            </div>
            <div>
              <ProductCard recomended={true} />
            </div>
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
