import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";

import { location } from "../../public/icons/index";
import ReserveDetails from "./ReserveDetails";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import LoadingCard from "./LoadingCard";
import ContactSellerModal from "./ContactSellerModal";

interface productProp {
  recomended?: boolean;
  loading?: Boolean;
  image:any
  title:String
  price:number
}

interface heightType{
  height: {
    delay: number;
    duration: number;
}
}
const ProductCard:React.FC<productProp> = ({ recomended, loading,image,title,price }) => {
  const [reserveModal, setReserveModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const router = useRouter();
  const handleReserveModal = () => {
    setReserveModal(true);
  };

  const handleContactModal = () => {
    setContactModal(true);
  };
  
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
                : {  border: " 1px solid #D8E4F8" }
            }
            // onClick={() => router.push("/productDetails/Samsung")}
          >
            <motion.img
            onClick={() => router.push("/product/Samsung")}

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
               onClick={() => router.push("/product/Samsung")}   >
                <p className="fs-18 fw-700 mb-0">{title}</p>
              </Card.Title>
              <div className="mb-2"
               onClick={() => router.push("/product/Samsung")} >
                <p className="mb-0">Condition :Used</p>
                <strong className="d-flex align-items-baseline ">
                  {" "}
                  Rs. {price?.toLocaleString("en-IN")} <p className={`ms-1 discount`}>Rs 200</p>
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
                <p>Lahore</p>
              </div>
              <Button
                className="w-100 mb-2"
                variant="secondary"
                onClick={() => handleContactModal()}
              >
                Contact seller
              </Button>
              <Button
                className="w-100"
                variant="outline-secondary"
                onClick={() => handleReserveModal()}
              >
                Reserve
              </Button>
            </Card.Body>
          </Card>
        )}
      </Col>
      <ReserveDetails
        show={reserveModal}
        onHide={() => setReserveModal(false)}
      />
      <ContactSellerModal
        show={contactModal}
        onHide={() => setContactModal(false)}
      />
    </>
  );
};

export default ProductCard;
