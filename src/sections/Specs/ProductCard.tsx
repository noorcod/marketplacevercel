import React, { useState } from "react";
import { Card, Col, OverlayTrigger, Placeholder, Tooltip } from "react-bootstrap";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import imagePlaceholder from "../../../public/images/imagePlaceholder.png";
import styles from "../../styles/CatalogueProductCard.module.css";
import { LoadingCard } from "../../components";
import Link from "next/link";

interface productProp {
  recomended?: boolean;
  loading?: Boolean;
  title: String;
  modelId?: number;
  imageUrl?: string;
  category?: string;
}

interface heightType {
  height: {
    delay: number;
    duration: number;
  };
}
const ProductCard: React.FC<productProp> = ({ recomended, loading, title, modelId, imageUrl, category }) => {
  const [imageSrc, setImageSrc] = useState<any>(imageUrl);

  const router = useRouter();
  return (
    <>
      <Col className="mt-3  d-flex justify-content-center flex-wrap p-0 " xl="3" lg="4" md="4" sm="6" xs="12">
        {loading ? (
          <LoadingCard />
        ) : (
          <Link href={`/specs/${category}/${title.replaceAll(" ", "-").replaceAll("/", "--").replaceAll('"', "")}-${modelId}`}>
            <Card className={` ${recomended ? "" : " "} cursor-pointer  `} style={{ width: "14rem", border: " 1px solid #D8E4F8", maxHeight: "250px", padding: "0.7rem" }}>
              <div
                style={{
                  position: "relative",

                  height: "160px",
                }}
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    aspectRatio:16/9
                  }}
                  src={imageSrc ? imageSrc : `${imagePlaceholder.src}`}
                  alt="productImg"
                  onError={(e) => {
                    setImageSrc( `${imagePlaceholder.src}`);
                  }}
                />
              </div>

              <Card.Body className="p-0" style={{ paddingTop: "0px" }}>
                <Card.Title className={`mb-2  pt-2 w-100 ${styles.title}`}>
                  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">{title}</Tooltip>}>
                    <p className={` mb-0    ${styles.title_content}`}>{title}</p>
                  </OverlayTrigger>
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        )}
      </Col>
    </>
  );
};

export default ProductCard;
