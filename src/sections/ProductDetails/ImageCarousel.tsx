import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { img1, img2 } from "../../../public/images";
import styles from "../../styles/ImageCarousel.module.css";
import { Col, Row } from "react-bootstrap";
import { SliderLeft, SliderRight } from "../../../public/icons";
import { SlideshowLightbox } from "lightbox.js-react";
// import ReactImageMagnify from "react-image-magnify";
import "lightbox.js-react/dist/index.css";
function ImageCarousel({ fetchedData }: any) {
  const [mainNav, setMainNav] = useState<any>(null);
  const [thumbnailNav, setThumbnailNav] = useState<any>(null);
  const [mainSlider, setMainSlider] = useState<any>(null);
  const [thumbnailSlider, setThumbnailSlider] = useState<any>(null);
  let [isOpen, setIsOpen] = useState(false);

  const imgLength: any = Object.values(
    fetchedData?.item.itemImages ? fetchedData?.item.itemImages : []
  ).length;
  useEffect(() => {
    setMainNav(mainSlider);
    setThumbnailNav(thumbnailSlider);
  });

  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: false,
    infinite: true,
    asNavFor: ".slider-nav",
    prevArrow: (
      <div
        onClick={() => {
          mainSlider.slickPrev();
        }}
        className="arrow top-arrow"
      >
        <Image src={SliderLeft} alt="chevronLeft" />
      </div>
    ),
    nextArrow: (
      <div
        onClick={() => mainSlider.slickNext()}
        className="arrow bottom-arrow"
      >
        <Image src={SliderRight} alt="chevronRight" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: true,
          dots: true,
          vertical: true,
        },
      },
    ],
  };

  const thumbnailSettings = {
    slidesToShow: Object.values(
      fetchedData?.item.itemImages ? fetchedData?.item.itemImages : []
    ).filter((item) => item !== "nil").length,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "2px",
    vertical: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: Object.values(
            fetchedData?.item.itemImages ? fetchedData?.item.itemImages : []
          ).filter((item) => item !== "nil").length,
          slidesToScroll: 1,
          vertical: false,
        },
      },
    ],
  };
  const slidesData = [
    {
      id: 1,
      title: "repellendus id ullam",
      label: "Dolorem officiis temporibus.",
      image: img1,
    },
    {
      id: 2,
      title: "excepturi consequatur est",
      label: "Officia non provident dolor esse et neque.",
      image: img2,
    },
    {
      id: 3,
      title: "repellendus id ullam",
      label: "Dolorem officiis temporibus.",
      image: img1,
    },
    {
      id: 4,
      title: "excepturi consequatur est",
      label: "Officia non provident dolor esse et neque.",
      image: img2,
    },
    {
      id: 5,
      title: "excepturi consequatur est",
      label: "Officia non provident dolor esse et neque.",
      image: img2,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <div
        onClick={() => {
          mainSlider.slickPrev();
        }}
        className="arrow top-arrow"
      >
        <Image src={SliderLeft} alt="chevronLeft" />
      </div>
    ),
    nextArrow: (
      <div
        onClick={() => mainSlider.slickNext()}
        className="arrow bottom-arrow"
      >
        <Image src={SliderRight} alt="chevronRight" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: true,
          dots: true,
          vertical: true,
        },
      },
    ],
  };
  return (
    <div>
      <SlideshowLightbox
        images={Object.values(
          fetchedData?.item.itemImages ? fetchedData?.item.itemImages : []
        )
          .filter((item) => item !== "nil")
          .map((slide: any, index: number) => {
            return {
              src: slide,
              alt: slide,
            };
          })}
        showThumbnails={true}
        open={isOpen}
        lightboxIdentifier="lbox1"
        onClose={() => {
          setIsOpen(false);
        }}
      ></SlideshowLightbox>
      <Row
        className={`${styles?.sliderWrapper} flex-lg-row flex-column-reverse`}
      >
        <Col
          xs="12"
          sm="12"
          md="12"
          lg="2"
          className="mt-4 mt-lg-0 d-none d-md-block"
        >
          <div className={`${styles.thumbnailSliderWrap}`}>
            <Slider
              {...thumbnailSettings}
              asNavFor={mainNav}
              ref={setThumbnailSlider}
            >
              {Object.values(
                fetchedData?.item.itemImages ? fetchedData?.item.itemImages : []
              )
                .filter((item) => item !== "nil")
                .map((slide: any, index: number) => (
                  <div className={`${styles.slickSlide}`} key={index}>
                    <Image
                      style={{ objectFit: "contain" }}
                      unoptimized
                      className={`${styles.slickSlideImage}`}
                      alt={slide}
                      src={slide}
                      width={76}
                      height={63}
                    />
                  </div>
                ))}
            </Slider>
          </div>
        </Col>
        <Col
          xs="12"
          sm="12"
          md="12"
          lg="10"
          className={`px-0 mb-4 mb-md-0 ${styles.mainImage}`}
        >
          <Slider {...settings} asNavFor={thumbnailNav} ref={setMainSlider}>
            {Object.values(
              fetchedData?.item.itemImages ? fetchedData?.item.itemImages : []
            )
              .filter((item) => item !== "nil")
              .map((slide: any, index: number) => (
                <div className={`${styles.slickSlide}`} key={index}>
                  {/* <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: slide,
                      },
                      largeImage: {
                        src: slide,
                        width: 2000,
                        height: 2000,
                      },

                      enlargedImagePosition: "over",
                    }}
                  /> */}
                  <Image
                    onClick={() => {
                      setIsOpen(true);
                    }}
                    style={{
                      border: "2px solid #F5F5FC",
                      objectFit: "contain",
                    }}
                    unoptimized
                    className={`${styles.slickSlideImage}`}
                    alt={slide}
                    src={slide}
                    width={76}
                    height={63}
                  />
                  <div></div>
                </div>
              ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
}

export default ImageCarousel;
