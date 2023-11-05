'use client';

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
import { fetchRecommendedListing } from "../../app/apis/getApis";
import { useQuery } from "@tanstack/react-query";
import CatalogueProductCard from "../../components/CatalogueProductCard";
const RecomendedProducts = () => {
  const [sliderRef, setSliderRef] = useState<any>(null);
  const [data, setData] = useState([]);
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
    afterChange: function (index: any) {
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`;
    },
  };
  interface obj {
    listing_id: number;
    listing_title: string;
    listed_quantity: number;
    online_price: number;
    online_discount: number;
    created_at: string;
    updated_at: string | null;
    location_id: number;
    item: Object | any;
  }
  const getItems = useQuery({
    queryKey: ["catalogue"],
    queryFn: () => fetchRecommendedListing(),
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setData(
        data.data.body.data.map((item: obj) => {
          return {
            listingId: item.listing_id,
            title: item.listing_title,
            quantity: item.listed_quantity,
            sale_price: item.online_price,
            discount: item.online_discount,
            created_at: item.created_at,
            updated_at: null,
            location_id: item.location_id,
            item: item.item,
          };
        })
      );
    },
  });
  return (
    <div className={styles.recomended_div}>
      <div className="main">
        <div className="text-center mb-4">
          <h1 className={`pb-2 ${styles.re_h1}`}> Catalogue</h1>
          <div className={styles.re_paragraph_div}>
            <div className={styles.para}>
              Check out these awesome products we think you'll love—they're the
              best of the best!
              {/* These are some best products, We recomended for you. */}
            </div>
            <div
              className={` ${styles.arrows} d-lg-flex d-none me-4 d-flex align-items-center`}
            >
              <Link
                href="product/all"
                className={` text-end mb-2  ${styles.re_link}`}
              >
                {" "}
                See All Products{" "}
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
            {data?.map((item: any, index: number) => (
              <div key={index}>
                <CatalogueProductCard
                  listingId={item.listingId}
                  price={item.sale_price}
                  recomended={true}
                  item={item?.item}
                  title={item.title}
                  condition={item?.item?.condition_item}
                  discount={item?.discount}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-center mt-5 d-lg-none">
          <a className={` text-center mb-2   ${styles.re_link}`}>
            All products{"> "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecomendedProducts;
