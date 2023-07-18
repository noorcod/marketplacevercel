import Image from "next/image";
import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "../styles/LoadingCard.module.css";
interface Prop{
  recomended?:Boolean |string |number
}
const LoadingCard:React.FC<Prop> = ({ recomended }) => {
  return (
    <div>
      <Card
        className={`ms-2 ${recomended ? "" : "w-100 "}`}
        style={{ width: "17rem", border: " 1px solid #D8E4F8" }}
      >
        <div
          className={`${styles.skeleton} ${styles.cover} `}
          >
          <Image 
            style={recomended?{ width: "271px"}:{ width: "100%"}}
          // width = {recomended ? 271 : "100%"}
          width={0}
          height={0}
          src="https://www.bolnews.com/wp-content/uploads/2021/12/FotoJet-27-2.jpg" alt=""   />
        </div>
        <Card.Body>
          <Card.Title className="mb-0 ">
            <p className={`fs-18 fw-700  mb-0 ${styles.skeleton}`}></p>
          </Card.Title>
          <div className="mb-4">
            <p className={`mb-0 ${styles.skeleton} mt-3 w-50 `}></p>
          </div>
          <div className="d-flex align-items-baseline  "></div>
          <Button
            className={`w-100 py-3 mb-2 ${styles.skeleton}`}
            variant="secondary"
            // onClick={() => handleContactModal()}
          ></Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoadingCard;
