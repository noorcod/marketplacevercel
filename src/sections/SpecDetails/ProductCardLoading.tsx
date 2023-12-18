import React from "react";
import styles from "../../styles/LoadingCard.module.css";
interface Prop {}
const ProductCardLoading: React.FC<Prop> = ({}) => {
  return (
    <div style={{ width: "128px", height: "192px", border: "1px solid #dee2e6", borderRadius: "10px", overflow: "hidden" }}>
      <div style={{ width: "128px", height: "128px" }} className={`${styles.skeleton} border-bottom`}></div>
      <h6
        style={{
          padding: "5px 5px",
        }}
      >
        <p className={`${styles.skeleton}`} style={{ height: "20px" }}></p>
      </h6>
    </div>
  );
};
export default ProductCardLoading;
