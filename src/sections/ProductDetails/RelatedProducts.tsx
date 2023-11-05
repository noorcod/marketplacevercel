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
const RelatedProducts = ({relatedProducts}:any) => {

  const [sliderRef, setSliderRef] = useState<any>(null);
  const settings = {
    className: "center",
    infinite: true,
    // centerMode: true,
    arrows: false,
    centerPadding: "10px",
    slidesToShow: relatedProducts?.length > 3 ? 4 : relatedProducts?.length,
    swipeToSlide: true,
    variableWidth: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1824,
        settings: {
          slidesToShow: relatedProducts?.length > 3 ? 3 : relatedProducts?.length,
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
          slidesToShow: relatedProducts?.length > 3 ? 3 : relatedProducts?.length,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: relatedProducts?.length > 2 ? 2 : relatedProducts?.length,
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
      (
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  
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
    {/* background-color: #EDF2FA;; */}
        <div style={{background:"#EDF2FA",paddingRight:"20px",paddingLeft:"20px",paddingBottom:"20px"}}>
          <Slider ref={setSliderRef} {...settings}>
            {relatedProducts?.map((item:any,)=>(
            <div  >
              <RelatedProductCard id={item.listing_id} item={item} discount={item.online_discount} discountUnit={item.online_discount_unit}   price= {item.online_price}image={item.item.itemImages.img0} title={item.listing_title}  />
            </div>))}
           
          </Slider>
        </div>
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
  discount:number,
  discountUnit:string,
  id:number
}

interface heightType{
  height: {
    delay: number;
    duration: number;
}
}
const RelatedProductCard:React.FC<productProp> = ({ recomended,price,item, loading,image,title,discount,discountUnit,id }) => {
  const [reserveModal, setReserveModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const router = useRouter();
  const shopDetails = item?.item?.shopTable;
  const locations = item?.item?.location;
  const city = item?.item?.location?.city?.city_name;
  const handleReserveModal = () => {
    setReserveModal(true);
  };

  const handleContactModal = () => {
    setContactModal(true);
  };

  const calculatePrice=(price:any,discount:any,discountUnit:any)=>{
    if(discountUnit==="percentage"){
      return price-(price*(discount/100))
    }
    else if(discountUnit==="fixed"){
      return price-discount
    }
    }
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
            onClick={() => router.push(
                `/product/${title.replace(/\s|\//g, "-")}-${id}`
              )}

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
               onClick={() => router.push(
                `/product/${title.replace(/\s|\//g, "-")}-${id}`
              )}   >
                <p className="fs-18 fw-700 mb-0">{title.replace(/\s|\//g, " ")}</p>
              </Card.Title>
              <div className="mb-4"
               onClick={() => router.push(
                `/product/${title.replace(/\s|\//g, "-")}-${id}`
              )} >
                <p className="mb-0">Condition :{item?.item?.condition_item}</p>
                <strong className="d-flex align-items-baseline ">
                  {" "}
                  Rs. {calculatePrice(price,discount,discountUnit)?.toLocaleString("en-IN")} {discount > 0 && <p className={`ms-1 discount`}>Rs. {price}</p>}
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
                <p>{city}</p>
              </div>
              <Button
                className="w-100 mb-2"
                variant="secondary"
                onClick={() => handleContactModal()}
              >
                Contact seller
              </Button>

            </Card.Body>
          </Card>
        )}
      </Col>
      <ContactSellerModal
         shopDetails={shopDetails}
         locations={locations}
         city={city}
        show={contactModal}
        onHide={() => setContactModal(false)}
      />
    </>
  );
};

