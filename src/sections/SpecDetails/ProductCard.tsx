import React, { useState } from "react";
import { Card, Col, OverlayTrigger, Placeholder, Tooltip } from "react-bootstrap";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import imagePlaceholder from "../../../public/images/imagePlaceholder.png";

import LoadingCard from "./ProductCardLoading";
import Image from "next/image";
import Link from "next/link";

interface productProp {
  title: string;
  modelId: number;
  imageUrl: string;
  category: string;
}

interface heightType {
  height: {
    delay: number;
    duration: number;
  };
}
const ProductCard: React.FC<productProp> = ({ title, modelId, imageUrl, category }) => {
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState<any>(imageUrl);
  return (
    <Link href={`/specs/${category}/${title.replaceAll(" ", "-").replaceAll("/", "--").replaceAll('"', "")}-${modelId}`}>
      <div style={{ width: "128px", height: "192px", border: "1px solid #dee2e6", borderRadius: "10px", overflow: "hidden", cursor: "pointer" }}>
        <div style={{ width: "128px", height: "128px" }}>
          <Image
            alt="modelImage"
            src={imageSrc ? imageSrc : `${imagePlaceholder.src}`}
            width={300}
            height={300}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            onError={(e) => {
              setImageSrc(`${imagePlaceholder.src}`);
            }}
          />
        </div>
        <p
          style={{
            margin: "0",
            padding: "0 5px",
            height: "60px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3, // Number of lines before applying ellipsis
            textOverflow: "ellipsis",
            fontSize: "0.8rem",
            fontWeight: "500",
          }}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
