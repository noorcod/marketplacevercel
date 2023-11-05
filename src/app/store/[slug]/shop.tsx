'use client';
import React, { useState, useEffect } from "react";
import { Layout, MobileSideFilter, SideFilters } from "../../../components";
import SellerBanner from "../../../sections/Seller/SellerBanner";
import { Row } from "react-bootstrap";
import styles from "../../../styles/Seller.module.css";
import ContactSection from "../../../sections/Seller/ContactSection";
import MobileSortFilter from "../../../components/MobileSortFilter";
import PaginationBar from "../../../components/PaginationBar";
import { useParams, useRouter, usePathname, useSearchParams } from "next/navigation";
// import Meta from "../../../components/Meta/Meta";
import Breadcrumbs from "../../../components/Breadcrumb";
import nProgress from "nprogress";
import Listing from "../../../sections/Seller/Listing";
import { useQuery,useQueryClient } from "@tanstack/react-query";
import { useNavigationEvent } from "../../hooks/useNavigationEvent";
import { marketplaceUrl } from "../../../utility/env";
import MobileSidebarFilter from "../../../components/MobileSdebarFilter";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import {
  fetchIndependentFilter,
  fetchItems,
  fetchShopByUser,
  fetchdependentFilter,
} from "../../apis/getApis";
import path from "node:path/win32";
import { useQueryState } from "next-usequerystate";

// }
interface filters {
  [key: string]: any;
}

interface paramsFilter {
    brand_ids: number[] | undefined;
    color_ids: number[] | undefined;
    condition_ids: number[] | undefined;
    location_ids: any;
    orderBys: string[];
}
const Seller = () => {
  const [mobileFilter, setMobileFilter] = useState();
  const [filtersData, setFiltersData] = useState<any>([]);
  const [filters, setFilters] = useState<filters>({});
  const [paramsFilter, setParamsFilter] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState<null | number>(1);
  const [sizeOfPages, setSizeOfPages] = useState(10);
  const [isSandwichOpen, setisSandwichOpen] = useState(false);
  const [orderBy, setOrderBy] = useState({});
  const [dependentFilters, setdependentFilters] = useState();
  const [category, setCategory] = useQueryState("category");
  const [brand, setBrand] = useQueryState("brands");
  const [color, setColor] = useQueryState("colors");
  const [condition, setCondition] = useQueryState("conditions");
  const [location, setLocation] = useQueryState<any>("locations", []);
  const [orderByq, setOrderByq] = useQueryState("orderBys");
  const [paramCheck, setParamCheck] = useState(true)
  // const { urlSearchParams, setQueryParams } = useQueryParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  //  let [categori,cat_id]=`${category}`?.split('-')
  //  let result = [
  //   {
  //     id: parseInt(cat_id),
  //     Value: categori
  //   }
  // ];
const paramsFilters:paramsFilter={
  brand_ids:searchParams.get("brands")?.split('-').map(id => parseInt(id)),
  color_ids:color?.split('-').map(id => parseInt(id)),
  condition_ids:condition?.split('-').map(id => parseInt(id)),
  location_ids:location?.split('-').map(id => parseInt(id)),
  orderBys:searchParams.getAll("orderBys")
}
  const sandwichTriger = () => {
    setisSandwichOpen((prev) => !prev);
  };
  const params: Record<string, string | string[]> | null = useParams();

  const getShopData = useQuery({
    queryKey: ["Shop",],
    queryFn: () => fetchShopByUser(params?.slug),
    enabled: !!params?.slug,
    refetchOnWindowFocus: false,
  });

  const shopId = getShopData?.data?.data?.body?.data?.shop_id;

  //category id
  const catId = filters?.category_ids?.length > 0 ? filters.category_ids[0].id : "";

  const getdependentFilters = useQuery({
    //dependent filters call
    queryKey: ["Dependentfilters", shopId, catId],
    queryFn: () => fetchdependentFilter(shopId, catId),
    enabled: !!shopId && !!catId,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setdependentFilters(data.data.body.data.map((item: Object) => {
            const isChecked = Array.isArray(paramsFilters.brand_ids) && paramsFilters.brand_ids.includes(item.brand_id);
            return {
                brand_id: item?.brand_id,
                brand: item?.brand,
                isChecked: isChecked || false
            };
        }),);
    },
  });
  //  dependentent filters
  // let dependentFilters=getdependentFilters?.data?.data?.body?.data

  const getFilters = useQuery({
    queryKey: ["filters", shopId],
    queryFn: () => fetchIndependentFilter(shopId),
    enabled: !!shopId,
    refetchOnWindowFocus: false,
  });
  const getItems = useQuery({
    queryKey: ["items", [filters, currentPage, sizeOfPages, shopId]],
    queryFn: () => fetchItems(filters, currentPage, sizeOfPages, shopId),
    enabled: !!filters && !!shopId,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    
    setNoOfPages(getItems?.data?.data.body?.paginationInfo?.totalPages);
    if (getItems?.data?.data?.body?.data?.length < 1) {
      setCurrentPage(1);
    }
  }, [getItems?.data?.data?.body?.data, filters, sizeOfPages]);

  const router = useRouter();
  useNavigationEvent();

  let mainLocationData = null;

  const changePage = (page: any) => {
    setCurrentPage(page);
    window.scrollTo(0, 500);
  };
  const fetchedData = getShopData?.data?.data?.body?.data;
  if (fetchedData?.locations) {
    for (const location of fetchedData?.locations) {
      if (location.is_main === 1) {
        mainLocationData = location;
        break; // Exit the loop if a main location is found
      }
    }
  }
  useEffect(() => {
        let [categori,cat_id]=`${category}`?.split('-')
    let result = [
     {
       id: parseInt(cat_id),
       Value: categori
     }
   ];
    if (getFilters?.data?.data?.body?.data) {
            let data = getFilters?.data?.data?.body?.data;
            setFiltersData({
              categories: data?.categories?.map((category: Object) => ({
                ...category,
                isChecked: category.id===Number(cat_id)?true:false,
              })),
              colors: data?.colors?.map((item: Object) => 
              {
                const isChecked = Array.isArray(paramsFilters.color_ids) && paramsFilters.color_ids.includes(item.color_id);
                return {
                  color_id: item?.color_id,
                  color: item?.color,
                  isChecked: isChecked || false
                };
              }
             ),
              conditions: data?.conditions?.map((item: Object) =>
              {
                const isChecked = Array.isArray(paramsFilters.condition_ids) && paramsFilters.condition_ids.includes(item.condition_id);
                return {
                  condition_id: item?.condition_id,
                  condition_item: item?.condition_item,
                  isChecked: isChecked || false
                };
              }
              ),
              locations: fetchedData?.locations?.map((item: any) =>   {
                const isChecked = Array.isArray(paramsFilters.location_ids) && paramsFilters.location_ids.includes(item.location_id);
                return {
                  id: item?.location_id,
                  location_nick: item?.location_nick,
                  isChecked: isChecked || false
                };
            }),
              priceRange: data.priceRange,
              orderBy: orderBy,
            });
      
          }
  }, [getFilters?.data]);

  

  return (
    <>
      {/* <Meta
      title={router.query.slug}
      /> */}
      <div>
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>

        <div className="lg-none md-block sm-block d-block" >

          <MobileSortFilter orderBy={orderBy} setOrderBy={setOrderBy} setMobileFilter={setMobileFilter} mobileFilter={mobileFilter} />
        </div>
          <Layout>
            <div>
              <SellerBanner
                isLaoding={getShopData.isLoading}
                mainLocationData={mainLocationData}
                shopData={fetchedData}
              />
            </div>
            <div className={`${styles.seller_div}`}>
              <div className="main">
                <Row className={`${styles.wrapper}  `}>
                  <div className={`  ${styles.sidefilter_div}`}>
                    <SideFilters
                      setisSandwichOpen={setisSandwichOpen}
                      isSandwichOpen={isSandwichOpen}
                      dependentFilters={dependentFilters}
                      setOrderBy={setOrderBy}
                      setCategory={setCategory}
                      setBrand={setBrand}
                      setColor={setColor}
                      setCondition={setCondition}
                      setdependentFilters={setdependentFilters}
                      setLocation={setLocation}
                      orderBy={orderBy}
                      locaitons={fetchedData?.locations}
                      setFilters={setFilters}
                      isLoading={getFilters?.isLoading}
                      filtersData={filtersData}
                    />
                  </div>
                  <div>
                    <Listing
                      orderBy={orderBy}
                      setFilters={setFilters}
                      filters={filters}
                      setOrderBy={setOrderBy}
                      noOfPages={noOfPages}
                      currentPage={currentPage}
                      changePage={changePage}
                      sandwichTriger={sandwichTriger}
                      totalItems={getItems?.data?.data?.body?.paginationInfo?.totalItems}
                      setSizeOfPages={setSizeOfPages}
                      isLoading={getItems?.isLoading}
                      shopItems={getItems?.data?.data?.body?.data}
                      setMobileFilter={setMobileFilter}
                    />
                  </div>
                  <div className={`d-lg-block d-md-none d-none ${styles.contact_div}`}>
                    <ContactSection
                      isLaoding={getShopData.isLoading}
                      mainLocationData={mainLocationData}
                      shopData={getShopData.data?.data.body.data}
                    />
                  </div>
                </Row>
              </div>
            </div>
          </Layout>

    </GoogleReCaptchaProvider>
      </div>

    </>
  );
};

export default Seller;
