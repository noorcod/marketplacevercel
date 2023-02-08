import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { LoadingCard } from ".";
import { location } from "../../public/icons/index";
import ContactSellerModal from "./ContactSellerModal";
import ReserveDetails from "./ReserveDetails";
import { motion } from "framer-motion";
const ProductCard = ({ recomended, loading }) => {
  const [reserveModal, setReserveModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
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
          <LoadingCard />
        ) : (
          <Card
            className={`ms-2 ${recomended ? "" : "w-100 "}`}
            style={
              recomended
                ? { width: "17rem", border: " 1px solid #D8E4F8" }
                : { border: " 1px solid #D8E4F8" }
            }
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={
                ({ height: { delay: 0, duration: 0.4 } },
                { opacity: { delay: 0.3, duration: 0.4 } })
              }
              className=""
              height={211}
              width={recomended ? 271 : "100%"}
              src="https://www.bolnews.com/wp-content/uploads/2021/12/FotoJet-27-2.jpg"
              alt="productImg"
            />
            <Card.Body>
              <Card.Title className="mb-0">
                <p className="fs-18 fw-700 mb-0">Samsung Galaxy A72</p>
              </Card.Title>
              <div className="mb-4">
                <p className="mb-0">Condition :Used</p>
                <strong> $1300</strong>
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
