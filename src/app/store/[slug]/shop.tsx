"use client";
import React, { useState,useEffect } from "react";
import { Layout, MobileSideFilter, SideFilters } from "../../../components";
import SellerBanner from "../../../sections/Seller/SellerBanner";
import { Row } from "react-bootstrap";
import styles from "../../../styles/Seller.module.css";
import ContactSection from "../../../sections/Seller/ContactSection";
import MobileSortFilter from "../../../components/MobileSortFilter";
import PaginationBar from "../../../components/PaginationBar";
import { useParams, useRouter } from "next/navigation";
// import Meta from "../../../components/Meta/Meta";
import Breadcrumbs from "../../../components/Breadcrumb";
import nProgress from "nprogress";
import Listing from "../../../sections/Seller/Listing";
import { useQuery } from "@tanstack/react-query";
import { useNavigationEvent } from "../../hooks/useNavigationEvent";
import { marketplaceUrl } from "../../../utility/env";
import MobileSidebarFilter from "../../../components/MobileSdebarFilter";
import { fetchFilter, fetchItems, fetchShopByUser } from "../../apis/getApis";


const Seller = () => {
  const [mobileFilter, setMobileFilter] = useState();
  const [filtersData, setFiltersData] = useState<any>([]);
  const [filters, setFilters] = useState<object>({})
  const [currentPage, setCurrentPage] = useState(1)
  const [noOfPages, setNoOfPages] = useState<null|number>(1)
  const [sizeOfPages, setSizeOfPages] = useState(10)
  const [isSandwichOpen, setisSandwichOpen] = useState(false);
  const [orderBy, setOrderBy] = useState({});

  const sandwichTriger = () => {
    setisSandwichOpen((prev) => !prev);
  };
  const params: Record<string, string | string[]> | null = useParams();
 

  const getShopData = useQuery({
    queryKey: ["Shop", params?.slug], queryFn: () => fetchShopByUser(params?.slug),enabled: !!params?.slug,
  });
 
  const shopId=getShopData?.data?.data?.body?.data[0].shop_id
 
 const getFilters = useQuery({
    queryKey: ["filters", shopId], queryFn: () => fetchFilter(shopId),enabled: !!shopId,
  });
 
  const getItems = useQuery({
    queryKey: ["items", [filters,currentPage,sizeOfPages]], queryFn: () => fetchItems(filters,currentPage,sizeOfPages),enabled: !!filters,
  });

  useEffect(() => {
    setNoOfPages(getItems?.data?.data.body?.paginationInfo?.totalPages)
    if(getItems?.data?.data?.body?.data?.data?.length<1){
        setCurrentPage(1)
      }


  }, [getItems?.data?.data?.body?.data,filters])
  
  
  const router = useRouter();
 
  useNavigationEvent();
 
  let mainLocationData = null;



const changePage = (page:any) => {
    setCurrentPage(page);
    window.scrollTo(0, 500)

  };
  const fetchedData = getShopData?.data?.data?.body?.data[0];
  
  if(fetchedData?.locations){

    for (const location of fetchedData?.locations) {
        if (location.is_main === 1) {
            mainLocationData = location;
                break; // Exit the loop if a main location is found
                                 }
}}
  useEffect(() => {
 
 if(getFilters?.data?.data?.body?.data){
    let data=getFilters?.data?.data?.body?.data
    setFiltersData({ 
       categories : data?.categories?.map((category: Object) => ({ ...category, isChecked: false })),
        colors: data?.colors?.map((color:Object) => ({ ...color, isChecked: false })),
        conditions: data?.conditions?.map((condition: Object) => ({ ...condition, isChecked: false })),
        brands: data?.brands?.map((brand: Object) => ({ ...brand, isChecked: false })),
        locations: fetchedData?.locations?.map((location:any ) => ({id:location?.location_id,location_nick:location?.location_nick, isChecked: false })),
        priceRange:data.priceRange,
        orderBy:orderBy
      })
 }
}, [getFilters?.data])



  return (
    <>
      {/* <Meta
      title={router.query.slug}
      /> */}
      <div>
      <MobileSidebarFilter setFilters={setFilters} isLoading={getFilters?.isLoading} filtersData={filtersData}  setisSandwichOpen={setisSandwichOpen}
            isSandwichOpen={isSandwichOpen}/>
      { mobileFilter === "sort" ? (
          <MobileSortFilter setMobileFilter={setMobileFilter} />
        ) : (
          <Layout>
            <div>
              <SellerBanner  isLaoding={getShopData.isLoading} mainLocationData={mainLocationData} shopData={fetchedData} />
            </div>
            <div className={`${styles.seller_div}`}>
              <div className="main">
                <Row className={`${styles.wrapper}  `}>
                  <div className={`  ${styles.sidefilter_div}`}>
                    <SideFilters setOrderBy={setOrderBy} orderBy={orderBy} locaitons={fetchedData?.locations} setFilters={setFilters} isLoading={getFilters?.isLoading} filtersData={filtersData} />
                  </div>
                  <div>
                    <Listing orderBy={orderBy} setFilters={setFilters} filters={filters} setOrderBy={setOrderBy} noOfPages={noOfPages} currentPage={currentPage} changePage={changePage} sandwichTriger={sandwichTriger} totalItems={getItems?.data?.data?.body?.paginationInfo?.totalItems} setSizeOfPages={setSizeOfPages} isLoading={getItems?.isLoading} shopItems={getItems?.data?.data?.body?.data} setMobileFilter={setMobileFilter} />
                  </div>
                  <div
                    className={`d-lg-block d-md-none d-none ${styles.contact_div}`}
                  >
                    <ContactSection isLaoding={getShopData.isLoading} mainLocationData={mainLocationData} />
                  </div>
                </Row>
               
              </div>
            </div>
          </Layout>
        )}
      </div>
    </>
  );
};

export default Seller;
