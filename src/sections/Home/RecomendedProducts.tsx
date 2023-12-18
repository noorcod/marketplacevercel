"use client";

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
import ScrollDown from "../../components/ScrollDown";
const RecomendedProducts = () => {
  const [sliderRef, setSliderRef] = useState<any>(null);
  const [data, setData] = useState([]);
  
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
    cacheTime:0,
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
        <div className="text-center ">
        <h1 className={`${styles.re_h1}`}>Recommended Products</h1>

          <div className={`${styles.re_paragraph_div}`}>
            
          
              <Link
                href="products"
                className={` text-end mb-2 d-sm-block d-block d-lg-block d-md-block  ${styles.re_link} ` } 
              >
                {" "}
                See All Products{" "}
              </Link>
             
            
          
           
          </div>
        </div>
  
          <Row  className="m-4 ">
            {data?.map((item: any, index: number) => (
                <ProductCard
                
                key={index}
                  listingId={item.listingId}
                  price={item.sale_price}
                  recomended={true}
                  item={item?.item}
                  title={item.title}
                  condition={item?.item?.condition_item}
                  discount={item?.discount}
                  isRecommendationCards={true}
                />
            ))}
            </Row>
          
     
        <div className="text-center mt-5 d-lg-none ">
      
        </div>
      </div>
<div className="d-flex justify-content-center">

      <ScrollDown className="mb-5 mt-5" />
</div>

    </div>
  );
};

export default RecomendedProducts;
