import { ProductCard } from "@/components";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import styles from "../../styles/FeaturedCategories.module.css";
import {
  chevronLeft,
  chevronRight,
  SliderLeft,
  SliderRight,
} from "public/icons";
import { Button, Card, Form } from "react-bootstrap";
import ScrollDown from "@/components/ScrollDown";
import { useRouter } from "next/router";
const FeaturedCategories = () => {
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
        },
      },

      {
        breakpoint: 990,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 3,
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
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className={styles.feature_div}>
      <div className="main">
        <div className="text-center mb-4">
          <h1 className={`pb-2 ${styles.re_h1}`}> Feature Categories</h1>
          <div className={styles.re_paragraph_div}>
            <div className="d-lg-inline d-md-none d-none">
              <Form.Select aria-label="Default select example">
                <option>New</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className={styles.para}>
              Lorem Ipsum is simply dummy text of the p rinting lorem
              Ipsumrinting lorem Ipsum
            </div>
            <div
              className={` ${styles.arrows} d-lg-flex d-none d-flex align-items-center`}
            >
              <a className={` text-end mb-2  ${styles.re_link}`}>
                {" "}
                All categories{" >"}
              </a>
              <div
                onClick={sliderRef?.slickPrev}
                className=" mb-1 rounded-2 px-2 mx-2 "
              >
                <Image className=" mb-1" src={chevronLeft} alt="chevron-left" />
              </div>
              <div
                onClick={sliderRef?.slickNext}
                className=" mb-1 rounded-2 px-2"
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
            </div>
          </div>
        </div>

        <div>
          <Slider ref={setSliderRef} {...settings}>
            <div>
              <RecomendedCard />
            </div>
            <div>
              <RecomendedCard />
            </div>
            <div>
              <RecomendedCard />
            </div>
            <div>
              <RecomendedCard />
            </div>
            <div>
              <RecomendedCard />
            </div>
            <div>
              <RecomendedCard />
            </div>
            <div>
              <RecomendedCard />
            </div>
            <div>
              <RecomendedCard />
            </div>
            <div>
              <RecomendedCard />
            </div>
          </Slider>
        </div>
      </div>
      <div className="text-center d-lg-none ">
        <a className={` text-center mb-2  ${styles.re_link}`}>
          {" "}
          All categories{"> "}
        </a>
      </div>
      <ScrollDown className="mt-5" />
    </div>
  );
};

export default FeaturedCategories;

const RecomendedCard = () => {
  const router = useRouter();
  return (
    <Card
      onClick={() => {
        router.push("productListing/Laptop");
      }}
      className="border-0 cursor-pointer"
      style={{ width: "17rem" }}
    >
      <img
        height={211}
        width={261}
        className="rounded-2 mx-3"
        alt="productimg"
        src="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80"
      />
      <Card.Body>
        <Card.Title className="mb-0">
          <p className="fs-18 fw-700 mb-0">Laptop</p>
        </Card.Title>
        <div className="mb-4">
          <p className="mb-0">
            Lorem Ipsum is simply dummy text of the printing{" "}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};
