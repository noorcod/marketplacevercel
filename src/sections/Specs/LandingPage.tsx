import PaginationBar from "../../components/PaginationBar";
import Image from "next/image";
import { filterIcon } from "../../../public/icons";
import { MobileImage } from "../../../public/images";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/SpecsListing.module.css";
import LoadingStyles from "../../styles/LoadingCard.module.css";
import { useRouter, usePathname } from "next/navigation";

import { fetchAccessoriesType, fetchModelFilter } from "../../app/apis/getApis";
import { useQuery } from "@tanstack/react-query";
import { getDefaultImage } from "../../utility/Images/utils";
import Link from "next/link";

const LandingPage = () => {
  const AccessoriesTypes = useQuery({
    queryKey: ["accessoryType"],
    queryFn: () => fetchAccessoriesType(),
    cacheTime: 0,
  });

  const categories = [
    {
      id: "mobile",
      name: "Mobile",
    },
    { id: "tablet", name: "Tablet" },
    { id: "tv-monitor", name: "TV / Monitor" },

    { id: "laptop", name: "Laptop" },
    { id: "desktop-computer", name: "Desktop Computer" },
  ];

  const createParams = (filters: any[]) => {
    let paramss = new URLSearchParams();
    filters.forEach((filter: [string, any]) => {
      paramss.append(...filter);
    });
    return `params=${encodeURIComponent(paramss)}`;
  };

  return (
    <div>
      <div className={`w-100 border-lg-bottom ${styles.listin_div} mb-3 pb-3 justify-content-between d-block d-lg-flex d-md-flex`}>
        <h1 className={`${styles.h1}`}>Explore Categories</h1>
      </div>

      <Row className="mb-5">
        {categories.map((data) => (
          <Col lg="3" md="3" sm="3" xs="12" key={data.id}>
            {/* <Loader /> */}
            {AccessoriesTypes?.isLoading ? (
              <Loader />
            ) : (
              <Link href={`specs/${data.id}`}>
                <div>
                  <div className={`${styles.image_div} text-center cursor-pointer`}>
                    <Image style={{ objectFit: "scale-down" }} height={122} width={100} src={`${getDefaultImage(data.name)}`} alt="specs image" />
                  </div>
                  <p className="mt-3 text-center">{data?.name}</p>
                </div>
              </Link>
            )}
          </Col>
        ))}
      </Row>
      <div className={`w-100 border-lg-bottom mt-3 ${styles.listin_div} mb-3 pb-3 justify-content-between d-block d-lg-flex d-md-flex`}>
        <h1 className={`${styles.h1}`}>Explore Other Accessories</h1>
      </div>
      <Row className="mb-5">
        {AccessoriesTypes?.data?.data?.body?.data &&
          AccessoriesTypes?.data?.data?.body?.data.map((data: any, index: number) => (
            <Col lg="3" md="2" sm="3" xs="12" className="" key={data.at_id}>
              {/* <Loader /> */}
              {AccessoriesTypes?.isLoading ? (
                <Loader />
              ) : (
                <Link href={`specs/accessories?${createParams([["at_id", `[${data.at_id}]`]])}`}>
                  <div>
                    <div className={`${styles.image_div} text-center cursor-pointer`}>
                      <Image style={{ objectFit: "scale-down" }} height={122} width={100} src={`${getDefaultImage(data.accessory_type)}`} alt="specs image" />
                    </div>
                    <p className="mt-3 text-center">{data.accessory_type}</p>
                  </div>
                </Link>
              )}
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default LandingPage;

const Loader = () => {
  return (
    <div>
      <div>
        <div className={`${styles.image_div} ${LoadingStyles.skeleton}  ${LoadingStyles.secondcover}  text-center`}></div>
        <p className={`mt-3 text-center ${LoadingStyles.skeleton} `}></p>
      </div>
    </div>
  );
};
