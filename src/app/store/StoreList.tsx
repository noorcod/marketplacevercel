"use client";
import React, { useState } from "react";
import styles from "../../styles/StoreList.module.css";
// import Listing from "../../../sections/Seller/Listing";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAllStores } from "../apis/getApis";
import PaginationBar from "../../components/PaginationBar";
import loadingStyle from "../../styles/LoadingCard.module.css";
import { location } from "../../../public/icons";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumb";

const StoreCard = ({ shop_name, cities, username }: any) => {
  return (
    <div className="col-12 col-xxl-3 col-xl-3 col-sm-6 col-md-4 col-lg-3">
      <Link href={`/store/${username}`}>
        <div className={`${styles.card} h-100 rounded-3 shadow-sm`}>
          <div className={`card-body px-2 py-1 mt-0`}>
            <div
              className={`row align-items-center justify-content-center ${styles.shopnamerow}`}
            >
              <p
                className={` ${styles.shopname} text-center text-uppercase fs-6 m-0 align-middle`}
              >
                {shop_name}
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-between mx-0 mt-2 mb-1 p-0 fs-9">
            <div className="col d-flex text-end align-middle w-100 flex-nowrap align-items-center justify-content-end">
              <Image
                src={location.src}
                alt="location icon"
                width={16}
                height={16}
                className="me-1"
              />
              <span className="text-nowrap">
                {cities.length > 1 ? `${cities[0]} and more` : cities[0]}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
const LoadingStoreCard = () => {
  return (
    <div className="col-12 col-xxl-3 col-xl-3 col-sm-6 col-md-4 col-lg-3">
      <div
        className={`${styles.card} ${loadingStyle.skeleton} h-100 rounded-3 shadow-sm`}
      >
        <div className={`card-body px-2 py-1 mt-0`}>
          <div
            className={`row align-items-center justify-content-center ${styles.shopnamerow}`}
          >
            <p
              className={` ${styles.shopname} text-center text-uppercase fs-6 m-0 align-middle`}
            >
              {}
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-between mx-0 mt-2 mb-1 p-0 fs-9">
          <div className="col text-end align-middle">
            <i className="bx bx-map-pin align-middle me-1"></i>
            {/* Icon have to place here */}
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

const StoreList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sizeOfPages, setSizeOfPages] = useState(40);

  // stores Data
  const getStoresData = useQuery({
    queryKey: ["storesList", currentPage, sizeOfPages],
    queryFn: () => fetchAllStores(currentPage, sizeOfPages),
    enabled: true,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  });

  const changePage = (page: any) => {
    setCurrentPage(page);
    window.scrollTo(0, 500);
  };

  return (
    <>
      <Breadcrumbs />
      <div className="col-12">
        <h1 className="display-6 text-center">
          Tech<strong>Bazaar</strong> Stores
        </h1>
      </div>
      <div className={`${styles.containerDiv}  row p-2 g-3`}>
        {getStoresData?.isLoading ? (
          <>
            {Array.from(Array(sizeOfPages)).map(() => (
              <LoadingStoreCard />
            ))}
          </>
        ) : (
          <>
            {getStoresData?.data?.data?.body?.data &&
              getStoresData?.data?.data?.body?.data.map((item: any) => (
                <StoreCard
                  shop_name={item.shop_name}
                  cities={item.cities}
                  username={item.username}
                />
              ))}
          </>
        )}
      </div>
      {getStoresData?.data?.data?.body?.paginationInfo?.totalPages > 1 ? (
        <div className="text-center d-flex justify-content-center w-100">
          <PaginationBar
            noOfPages={
              getStoresData?.data?.data?.body?.paginationInfo?.totalPages ?? 1
            }
            currentPage={currentPage}
            changePage={changePage}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default StoreList;
