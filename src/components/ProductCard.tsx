"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { Badge, Button, Card, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ColorIcon, location, shopIcon } from "../../public/icons/index";
import ReserveDetails from "./ReserveDetails";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import LoadingCard from "./LoadingCard";
import ContactSellerModal from "./ContactSellerModal";
import SignInModal from "./SignInModal";
import Link from "next/link";
import WishlistIcon from "./WishlistIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/ProductCard.module.css";
import imagePlaceholder from "../../public/images/imagePlaceholder.png";
import { log } from "console";
interface shopDetails {
  shop_name: string;
  owner_whatsapp_number: string;
}
interface productProp {
  recomended?: boolean;
  loading?: Boolean;
  title: String;
  price: number;
  condition: string;
  discount?: number | undefined;
  item: {
    item_id: number;
    shopTable: any;
    location: any;
    itemImages: any;
    location_id: number;
  };
  listingId: number;
  isRecommendationCards:boolean,
}

interface heightType {
  height: {
    delay: number;
    duration: number;
  };
}

const ProductCard: React.FC<productProp> = ({ isRecommendationCards, item, loading, title, price, condition, discount, listingId,  discount_unit, color }) => {
  // const [color,setColor]=useState()
  const shopDetails = item?.shopTable;
  const locations = item?.location;
  const image = item?.itemImages?.img0;
  const locationId = item?.location_id;
  const city = item?.location?.city?.city_name;
  const shopUsername = item.shopTable.username;
  console.log(discount,discount_unit,'discount')


  const [reserveModal, setReserveModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

  const router = useRouter();
  const handleReserveModal = () => {
    setReserveModal(true);
  };

  const handleContactModal = () => {
    setContactModal(true);
  };

  const calculateDiscountedPrice = () => {
    if (price < 0 || discount < 0) {
      // Handle invalid input
      return null;
    }
    if (discount_unit == "percentage") {
      let discountAmount = (price * discount) / 100;
      let discountedPrice = price - discountAmount;
      return discountedPrice;
    } else if (discount_unit == "fixed") {
      let discountedPrice = price - discount;
      return discountedPrice;
    }
  };


  const discountedPrice = calculateDiscountedPrice();
  return (
    <Col className="mt-4 gx-3 gy-2" lg="4" xl="3" md="4" sm="6" xs="12">
      {loading ? (
        <LoadingCard />
      ) : (
        <Card className="h-100 rounded-3 shadow-sm" style={{maxHeight:'300px'}}>
    
            <div className="card-container position-relative  ">
              <div className="row p-0 mx-0 ">
                <div className="position-relative" id="card-img-container" style={{ height: "164px",maxHeight:'200px' }}>
                <Link href={`/products/${title.replaceAll(" ", "-").replaceAll("/", "--")}-${listingId}`}>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      aspectRatio: "16/9",
                    }}
                    className="p-0"
                    src={image}
                    alt="productImg"
                    onError={(e) => (e.target.src = `${imagePlaceholder.src}`)}
                    // onClick={() => router.push(`/products/${title.replaceAll(" ", "-").replaceAll("/", "--")}-${listingId}`)}
                  />
                  </Link>
                  <div className="d-flex justify-content-between align-items-center"></div>
                </div>
              </div>
              <div className="  rounded-circle text-center position-absolute top-0 end-0 m-0 p-0">
                <WishlistIcon listingId={listingId} title={title} />
              </div>
              <div className={`text-center position-absolute top-0 start-0 d-flex justify-content-center align-items-center`} style={{ border: "1px 1px 1px 0 solid #D8E4F8", borderTopLeftRadius: "7px", borderBottomLeftRadius: "0", borderBottomRightRadius: "7px", background: "#D957F9B3" }}>
                <p className="m-0 fs-9 py-1 fw-bold p-2 text-white" style={{ fontSize: "0.7rem" }}>
                  {condition}
                </p>
              </div>
              <Link href={`/products/${title.replaceAll(" ", "-").replaceAll("/", "--")}-${listingId}`}>

              <Card.Body className="px-2 py-1 mt-0">
                <div className="row align-items-start product-title-row" style={{ height: "3rem" }}>
                  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">{title}</Tooltip>}>
                    <p className={`${styles.product_title} `}>{title}</p>
                  </OverlayTrigger>
                </div>
                <div className="d-flex flex-row m-0 p-0 flex-wrap" style={{height:'1.5rem'}}>
                  <p className="fw-bold m-0 me-2 fw-700 fs-16">
                    <span className="">Rs. </span>
                    {discountedPrice ? discountedPrice.toLocaleString() : price.toLocaleString()}
                  </p>
                  <div className="text-decoration-line-through text-muted fw-500 fs-16">{discountedPrice && discount!==0  ? `Rs. ${price.toLocaleString()}` : null}</div>
                </div>
              </Card.Body>
                        </Link>

            </div>
            {isRecommendationCards?null:(
            <div  style={{height:'3rem'}} className="mx-2 align-items-center d-flex justify-content-between  fs-9 ">
              <Link className="d-flex text-end align-middle gap-1  " href={`/store/${shopUsername}`}>
                <img src={shopIcon.src} />{" "}
                <span className={`${styles.store} text-decoration-none`} >
                  Visit Store
                </span>
              </Link>

            <div className="col text-end align-middle">
              <img src={location.src} /> <span>{city}</span>
            </div>
          </div>)}
          
        </Card>
      )}
    </Col>
  );
};

export default ProductCard;
