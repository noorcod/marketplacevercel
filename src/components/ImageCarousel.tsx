import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../styles/ImageCarousel.module.css";
import { Col, Row } from "react-bootstrap";
import { SliderLeft, SliderRight } from "../../public/icons";
import { SlideshowLightbox } from "lightbox.js-react";
import imagePlaceholder from "../../public/images/imagePlaceholder.png";
import "lightbox.js-react/dist/index.css";

const SliderThumbnail = ({ image, index }: any) => {
  const [imageSrc, setImageSrc] = useState(image ? image : `${imagePlaceholder.src}`);
  useEffect(() => {
    setImageSrc(image ? image : `${imagePlaceholder.src}`);
  }, [image]);

  return (
    <div className={`${styles.slickSlide}`}>
      <Image
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
        unoptimized
        className={`${styles.slickSlideImage}`}
        alt={"image#" + (index + 1)}
        src={imageSrc}
        width={76}
        height={63}
        onError={() => {
          setImageSrc(`${imagePlaceholder.src}`);
        }}
      />
    </div>
  );
};

const SliderThumbnail2 = ({ image, index, setIsOpen }: any) => {
  const [imageSrc, setImageSrc] = useState(image ? image : `${imagePlaceholder.src}`);
  useEffect(() => {
    setImageSrc(image ? image : `${imagePlaceholder.src}`);
  }, [image]);
  return (
    <div className={`${styles.slickSlide}`}>
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
        alt={"image#" + (index + 1)}
        src={imageSrc}
        width={76}
        height={63}
        onError={() => {
          setImageSrc(`${imagePlaceholder.src}`);
        }}
      />
      <div></div>
    </div>
  );
};

function ImageCarousel({ fetchedData }: any) {
  const [mainNav, setMainNav] = useState<any>(null);
  const [thumbnailNav, setThumbnailNav] = useState<any>(null);
  const [mainSlider, setMainSlider] = useState<any>(null);
  const [thumbnailSlider, setThumbnailSlider] = useState<any>(null);
  let [isOpen, setIsOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const imgLength: any = (fetchedData ? fetchedData : [null]).length;
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
      <div onClick={() => mainSlider.slickNext()} className="arrow bottom-arrow">
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
    slidesToShow: (fetchedData ? fetchedData : []).filter((item: any) => item !== "nil").length,
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
          slidesToShow: (fetchedData ? fetchedData : []).filter((item: any) => item !== "nil").length,
          slidesToScroll: 1,
          vertical: false,
        },
      },
    ],
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => {
      setActiveSlideIndex(index);
    },
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
      <div onClick={() => mainSlider.slickNext()} className="arrow bottom-arrow">
        <Image src={SliderRight} alt="chevronRight" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 575,
        settings: {
          dots: true,
          vertical: true,
          fade: true,
        },
      },
    ],
  };
  return (
    <div>
      <SlideshowLightbox
        images={(fetchedData ? fetchedData : [null])
          .filter((item: any) => item !== "nil")
          .map((slide: any, index: number) => {
            return {
              src: slide,
              alt: "image#" + (index + 1),
            };
          })}
        showThumbnails={true}
        open={isOpen}
        lightboxIdentifier="lbox1"
        startingSlideIndex={activeSlideIndex}
        onClose={() => {
          setIsOpen(false);
        }}
      ></SlideshowLightbox>
      <Row className={`${styles?.sliderWrapper} flex-lg-row flex-column-reverse`}>
        <Col xs="12" sm="12" md="12" lg="2" className="mt-4 mt-lg-0 d-none d-md-block">
          <div className={`${styles.specsThumbnailSliderWrap}`}>
            <Slider {...thumbnailSettings} asNavFor={mainNav} ref={setThumbnailSlider}>
              {(fetchedData ? fetchedData : [null])
                .filter((item: any) => item !== "nil")
                .map((slide: any, index: number) => (
                  <SliderThumbnail image={slide} key={index} index={index} />
                ))}
            </Slider>
          </div>
        </Col>
        <Col xs="12" sm="12" md="12" lg="10" className={`px-0 mb-4 mb-md-0 ${styles.specsMainImage}`}>
          <Slider {...settings} asNavFor={thumbnailNav} ref={setMainSlider}>
            {(fetchedData ? fetchedData : [null])
              .filter((item: any) => item !== "nil")
              .map((slide: any, index: number) => (
                <SliderThumbnail2 image={slide} key={index} index={index} setIsOpen={setIsOpen} />
              ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
}

export default ImageCarousel;
