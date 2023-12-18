"use client";

import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import styles from "../../styles/TopSeller.module.css";
import Slider from "react-slick";
import { apple, samsung, oneplus } from "../../../public/images";
import Image from "next/image";
import ScrollDown from "../../components/ScrollDown";
import Link from "next/link";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTopSeller } from "../../app/apis/getApis";
import { useState } from "react";

const TopSellers = () => {
  const [data, setData] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
    ],
  };

  const topSellerQuery = useQuery({
    queryKey: ["topSeller"],
    queryFn: () => fetchTopSeller(),
    cacheTime: 0,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setData(data.data.body.data);
    },
  })

  
 
  return (
    <div className={`${styles.topSellers}`}>
      <main className="main py-5">
        <Row className={`${styles.header}`}>
          <Col xs="4" sm="4" md="5" lg="5" className="px-0">
            <hr className={`${styles.separater}`} />
          </Col>
          <Col xs="4" sm="4" md="2" lg="2" className="px-0">
            <h2 className="text-center text-nowrap">Top Sellers</h2>
          </Col>
          <Col xs="4" sm="4" md="5" lg="5" className="px-0">
            <hr className={`${styles.separater}`} />
          </Col>
        </Row>
        <div className={`py-5 `}>
          <Slider className="" {...settings}>
            {data.map((seller, index) => (
              <Link href={`/store/${seller.username}`} key={index}>
                  <div className={`${styles.sellerSlider}`}>
                    {seller.logo_path ? (
                      <Image src={seller.logo_path} alt={seller.shop_name} width={150} height={100} className={`${styles.sellerImage}`} />
                    ) : (
                      <p className={`${styles.shopName}`} >{seller?.shop_name}</p>
                    )}
                  </div>
              </Link>
            ))}
          </Slider>
        </div>
      </main>
      <div className="d-flex justify-content-center" >

      <ScrollDown className="mb-5" />
      </div>

    </div>
  );
}


export default TopSellers;
