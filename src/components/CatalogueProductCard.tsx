import React from "react";
import { Card, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import LoadingCard from "./LoadingCard";

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
  const image = item?.itemImages?.img0;
  const router = useRouter();
  return (
    <>
      <Col className="mt-4" lg="4" md="4" sm="6" xs="6">
        {loading ? (
          <LoadingCard />
        ) : (
          <Card
            className={` ${recomended ? "" : " "} cursor-pointer`}
            style={
              recomended
                ? { width: "17.7rem", border: " 1px solid #D8E4F8" }
                : { border: " 1px solid #D8E4F8" }
            }
          >
            <motion.img
              onClick={() =>
                router.push(
                  `/product/${title.replace(/\s|\//g, "")}-${listingId}`
                )
              }
              style={{ padding: "10px", objectFit: "scale-down" }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={
                ({ height: { delay: 0, duration: 0.4 } } as heightType,
                { opacity: { delay: 0.3, duration: 0.4 } })
              }
              className="object-fit-cover  rounded-top "
              height={211}
              width={recomended ? 281 : "100%"}
              src={image}
              alt="productImg"
            />
            <Card.Body>
              <Card.Title
                style={{ height: "100px" }}
                className="mb-0"
                onClick={() =>
                  router.push(
                    `/product/${title.replace(/\s|\//g, "")}-${listingId}`
                  )
                }
              >
                <p className="fs-18 fw-700 mb-0">{title}</p>
              </Card.Title>
              <div
                className="mb-2"
                onClick={() =>
                  router.push(
                    `/product/${title.replace(/\s|\//g, "")}-${listingId}`
                  )
                }
              >
                <p className="mb-0">Condition : {condition}</p>
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
          </Card>
        )}
      </Col>
    </>
  );
};

export default CatalogueProductCard;
