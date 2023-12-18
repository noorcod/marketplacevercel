import React, { useState } from "react";
import { Card, Col, OverlayTrigger, Placeholder, Tooltip } from "react-bootstrap";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import LoadingCard from "./LoadingCard";
import WishlistIcon from "./WishlistIcon";
import imagePlaceholder from "../../public/images/imagePlaceholder.png";
import styles from "../styles/CatalogueProductCard.module.css";
import Link from "next/link";


interface productProp {
  recomended?: boolean;
  loading?: Boolean;
  title: String;
  price: number;
  condition: string;
  discount: number;
  item: {
    item_id: number;
    itemImages: any;
  };
  listingId: number;
}

interface heightType {
  height: {
    delay: number;
    duration: number;
  };
}
const CatalogueProductCard: React.FC<productProp> = ({
  recomended,
  item,
  loading,
  title,
  price,
  discount,
  condition,
  listingId,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  const image = item?.itemImages?.img0;
  const router = useRouter();
  return (
    <>
      <Col className="mt-4 " lg="3" md="3" sm="6" xs="6">
        {loading ? (
          <LoadingCard />
        ) : (
       
          <Card
            className={` ${recomended ? "" : " "} cursor-pointer `}
            style={
              recomended
                ? { width: "16rem", border: " 1px solid #D8E4F8",maxHeight:'300px', minHeight:'300px',margin:'10px'}
                : { border: " 1px solid #D8E4F8" }
            }
          >
          
              <div
                style={{
                  position: "relative",
                  maxHeight: "200px",
                  minHeight: "200px",
                  height: "50%",
                }}
              >
                     <Link href={ `/products/${title
            .replaceAll(" ", "-")
            .replaceAll("/", "--")}-${listingId}`}>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    maxHeight:'200px'
                  }}
                  src={image}
                  alt="productImg"
                  onError={(e) => (e.target.src = `${imagePlaceholder.src}`)}
                 
                />
                </Link>

              
               
                <span
                  className="position-absolute bottom-0 end-0 rounded-circle"
                  onClick={e=>e.stopPropagation}
                  style={{
                    background: "#F8F6FF",
                    paddingLeft: "10px",
                    marginRight: "5px",
                    paddingBottom: "5px",
                    marginBottom: "5px",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >

                  <WishlistIcon listingId={listingId} title={title} />
                </span>
              </div>
              <Link href={ `/products/${title
            .replaceAll(" ", "-")
            .replaceAll("/", "--")}-${listingId}`}>
            <Card.Body style={{paddingTop:'0px'}}>
            <Card.Title className={`mb-2 w-100 ${styles.title}`}>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip">{title}</Tooltip>}
                  >
                    <p
                      className={`fs-18 fw-700 mb-0   ${styles.title_content}`}
                    >
                      {title}
                    </p>
                  </OverlayTrigger>
                </Card.Title>
              <div
                className="mb-2"
                
              >
                <strong
                  className={`d-flex align-items-baseline ${
                    Number(discount) > 0 ? "has-discount" : ""
                  }`}
                >
                  Rs. {price?.toLocaleString("en-IN")}
                  {Number(discount) > 0 && (
                    <span className={`ms-1 discount`}>Rs {discount}</span>
                  )}
                </strong>
              </div>
            </Card.Body>
            </Link>
          </Card>
          
        )}
      </Col>
    </>
  );
};

export default CatalogueProductCard;
