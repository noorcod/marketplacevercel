"use client";
import React, { useState, useEffect } from "react";
import SellerBanner from "../../../sections/Seller/SellerBanner";
import { Row } from "react-bootstrap";
import styles from "../../../styles/Seller.module.css";
import ContactSection from "../../../sections/Seller/ContactSection";
import MobileSortFilter from "../../../components/MobileSortFilter";
import { useParams, useRouter, usePathname, useSearchParams } from "next/navigation";
import Listing from "../../../sections/Seller/Listing";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigationEvent } from "../../hooks/useNavigationEvent";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { fetchIndependentFilter, fetchItems, fetchShopByUser, fetchdependentFilter } from "../../apis/getApis";
import { useQueryState } from "next-usequerystate";
import { SideFilters } from "../../../components";

// }
interface filters {
  [key: string]: any;
}

const Seller = () => {
  const [mobileFilter, setMobileFilter] = useState();
  const [filtersData, setFiltersData] = useState<any>([]);
  const [filters, setFilters] = useState<filters>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState<null | number>(1);
  const [sizeOfPages, setSizeOfPages] = useState(10);
  const [isSandwichOpen, setisSandwichOpen] = useState(false);
  const [orderBy, setOrderBy] = useState({});
  const [dependentFilters, setdependentFilters] = useState();
  const [search, setSearch] = useState<string>("");
  const [priceRange, setPriceRange] = useState<any>();
  const [catCahnge, setCatCahnge] = useState(false);
  const [dParams, setDPrams] = useQueryState<any>("params", []);
  const [paramOBJ, setParamOBJ] = useState<any>();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [filterINDFilters, setfilterINDFilters] = useState({});
  const [catId, setCatId] = useState();

  // for getting params by passing filters in args
  const getParams = (filter: any) => {
    let paramss = new URLSearchParams();
    if (filters?.title) {
      paramss.append("search", filters?.title);
    }
    if (filters.filterDpendentFilters) {
      Object.keys(filters.filterDpendentFilters).map((val) => {
        if (val.includes("is_")) {
          paramss.append(
            `${val}`,
            `${filters.filterDpendentFilters[val].map((item: any) => {
              return item.label;
            })}`,
          );
        } else {
          paramss.append(`${val}_ids`, `[${filters.filterDpendentFilters[val].map((item: any) => item.id).join(",")}]`);
        }
      });
    }

    if (filterINDFilters?.color_ids?.length > 0) {
      paramss.append("color_ids", `[${filterINDFilters?.color_ids}]`);
    }
    if (filterINDFilters?.condition_ids?.length > 0) {
      paramss.append("condition_ids", `[${filterINDFilters?.condition_ids}]`);
    }
    if (filters?.location_ids?.length > 0) {
      paramss.append("location_ids", `[${filters?.location_ids}]`);
    }
    if (filters?.brand_ids?.length > 0) {
      paramss.append("brand_ids", `[${filters?.brand_ids}]`);
    }
    if (filters?.model_ids?.length > 0) {
      paramss.append("model_ids", `[${filters?.model_ids}]`);
    }
    if (filters?.orderBy?.price) {
      paramss.set("sort", `price:${filters?.orderBy?.price}`);
    }

    if (filters?.price && filters?.price?.from && filters?.price?.to) {
      paramss.append("priceFrom", `${filters?.price?.from}`);
      paramss.append("priceTo", `${filters?.price?.to}`);
    }
    if (filterINDFilters?.city_id?.length > 0) {
      paramss.append("city_id", filterINDFilters?.city_id[filterINDFilters?.city_id?.length - 1].id);
    }
    if (filterINDFilters?.category_id?.length > 0) {
      paramss.append("category_id", filterINDFilters?.category_id[filterINDFilters?.category_id?.length - 1].id);
    }
    let request = {
      params: paramss,
    };
    if (Object.keys(filters).length > 0 || Object.keys(filterINDFilters).length > 0) {
      return request.params;
    } else {
      return new URLSearchParams(searchParams.get("params"));
    }
  };

  // get query params as object

  const queryParamsAsObject = () => {
    // parse query value
    const queryParams: any = {};

    for (const [key, value] of new URLSearchParams(searchParams.get("params"))?.entries()) {
      queryParams[key] = value.includes("[") ? JSON.parse(value) : value;
    }
    setParamOBJ(queryParams);
  };

  // ------------------
  const sandwichTriger = () => {
    setisSandwichOpen((prev) => !prev);
  };
  // user name from param
  const params: Record<string, string | string[]> | null = useParams();

  // shopData
  const getShopData = useQuery({
    queryKey: ["Shop", params?.slug],
    queryFn: () => fetchShopByUser(params?.slug),
    enabled: !!params?.slug,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  });

  const shopId = getShopData?.data?.data?.body?.data?.shop_id;

  //category id
  // const catId = filters?.category_id?.length > 0 ? filters.category_id[0].id : "";
  let fParam = getParams();
  const getdependentFilters = useQuery({
    //dependent filters call
    queryKey: ["Dependentfilters", shopId, catId, filters,filterINDFilters],
    queryFn: () => fetchdependentFilter(shopId, catId, catId ? fParam : ""),
    enabled: !!shopId && !!catId,
    refetchOnWindowFocus: false,
    cacheTime: 0,
    onSuccess: (data) => {
      setdependentFilters(data?.data?.body?.data);
    },
    onError: (error) => {},
  });
  //  dependentent filters
  const getFilters = useQuery({
    queryKey: ["filters", shopId, filterINDFilters],
    queryFn: () => fetchIndependentFilter(shopId, fParam),
    enabled: !!shopId,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  });
  const getItems = useQuery({
    queryKey: ["items", [filters, currentPage, sizeOfPages, shopId, dParams, filterINDFilters]],
    queryFn: () => fetchItems(filters, currentPage, sizeOfPages, shopId, fParam),
    enabled: !!filters && !!shopId,
    refetchOnWindowFocus: false,
    cacheTime: 0,
  });

  useEffect(() => {
    queryParamsAsObject(new URLSearchParams(dParams));
  }, []);

  useEffect(() => {
    setCatId(filterINDFilters?.category_id?.length > 0 ? filterINDFilters.category_id[0].id : Number(paramOBJ?.category_id));
    if (getFilters.data?.data?.body?.data) {
      let res = getFilters.data?.data?.body?.data;
      setFiltersData(res);
    }
    setSearch(!catCahnge && paramOBJ ? paramOBJ?.search : "");
  }, [getFilters.data, paramOBJ]);
  useEffect(() => {
    setNoOfPages(getItems?.data?.data.body?.paginationInfo?.totalPages);
    if (getItems?.data?.data?.body?.data?.length < 1) {
      setCurrentPage(1);
    }

    setDPrams(new URLSearchParams(getParams(filters)));
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
    const filteredCategories = filtersData.categories?.filter((category: any) => category.isChecked === true);
    const filteredColors = filtersData.colors?.filter((color: any) => color.isChecked === true);
    const filteredConditions = filtersData.conditions?.filter((condition: any) => condition.isChecked === true);
    const filteredCities = filtersData.cities?.filter((city: any) => city.isChecked === true);
    const newFilter: object = {
      ...(filteredCategories?.length > 0 && {
        category_id: filteredCategories.map((item: any) => {
          return { id: item.id, Value: item.label };
        }),
      }),
      ...(filteredCities?.length > 0 && {
        city_id: filteredCities.map((item: any) => {
          return { id: item.id, Value: item.label };
        }),
      }),
      ...(filteredColors?.length > 0 && {
        color_ids: filteredColors.map((item: any) => item.id),
      }),
      ...(filteredConditions?.length > 0 && {
        condition_ids: filteredConditions.map((item: any) => item.id),
      }),
      ...(search && { title: search }),
      ...(priceRange && Object.keys(priceRange).length > 0 && { price: priceRange }),
      ...(Object.keys(orderBy).length > 0 && { orderBy: orderBy }),
    };
    setfilterINDFilters(newFilter);
  }, [filtersData, priceRange]);

  useEffect(() => {
    const filterDpendentFilters =
      dependentFilters &&
      Object.keys(dependentFilters).reduce((acc, category) => {
        const filteredCategory = dependentFilters[category].values.filter((item) => item.isChecked);
        if (filteredCategory.length > 0) {
          acc[category] = filteredCategory;
        }
        return acc;
      }, {});

    const filteredLocations = filtersData.locations?.filter((location: any) => location.isChecked === true);
    const newFilter: object = {
      ...(filteredLocations?.length > 0 && {
        location_ids: filteredLocations.map((item: any) => item.id),
      }),
      ...(search && { title: search }),
      ...(priceRange && Object.keys(priceRange).length > 0 && { price: priceRange }),
      ...(Object.keys(orderBy).length > 0 && { orderBy: orderBy }),
      ...(filterDpendentFilters && {
        filterDpendentFilters: filterDpendentFilters,
      }),
    };
    // setFiltersData(filtersData)
    setFilters(newFilter);
  }, [dependentFilters, priceRange, search, orderBy, filterINDFilters]);
  // }
  const removeDependentFiltersParam = (obj: any) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key].hasOwnProperty("values")) {
        obj[key].values.forEach((item) => {
          item.isChecked = false;
        });
      }
    }
    setdependentFilters(obj);
  };
  
  const clearFilters=(filter:any)=>{
    setCatCahnge(true)

    setFiltersData({
      ...filtersData,
      [filter]: filtersData?.[filter]?.map((item: Object) => ({
        ...item,
        isChecked: false,
      })),
    });
  }

  return (
    <>
      <div>
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
          <div className="lg-none md-block sm-block d-block">
            <MobileSortFilter search={search} orderBy={orderBy} setOrderBy={setOrderBy} setMobileFilter={setMobileFilter} mobileFilter={mobileFilter} Labels={[{ label:'High to Low',value:'desc',key:"price"},{label:'Low to High',value:'asc',key:"price"}]} />
          </div>

          <div>
            {/* <SellerBanner
              isLaoding={getShopData.isLoading}
              mainLocationData={mainLocationData}
              shopData={fetchedData}
              dependentFilters={dependentFilters}
              filtersData={filtersData}
              // filtersCheckedData={filtersCheckedData}
              setdependentFilters={setdependentFilters}
              setCatCahnge={setCatCahnge}
              setfiltersData={setFiltersData}
              filters={filters}
              setPriceRange={setPriceRange}
              priceRange={priceRange}
              filterINDFilters={filterINDFilters}
              catCahnge={catCahnge}
            /> */}
          </div>
          <div className={`${styles.seller_div}`}>
            <div className="main">
              <Row className={`${styles.wrapper}  `}>
                <div className={`  ${styles.sidefilter_div}`}>
                  <SideFilters
                    setisSandwichOpen={setisSandwichOpen}
                    setDPrams={setDPrams}
                    getParams={getParams}
                    isSandwichOpen={isSandwichOpen}
                    filterINDFilters={filterINDFilters}
                    dependentFilters={dependentFilters}
                    // filtersCheckedData={filtersCheckedData}
                    setOrderBy={setOrderBy}
                    setCatCahnge={setCatCahnge}
                    setdependentFilters={setdependentFilters}
                    orderBy={orderBy}
                    locaitons={fetchedData?.locations}
                    setFilters={setFilters}
                    isLoading={getFilters?.isLoading}
                    filtersData={filtersData}
                    setfiltersData={setFiltersData}
                    removeDependentFiltersParam={removeDependentFiltersParam}
                    filters={filters}
                    setPriceRange={setPriceRange}
                    setSearch={setSearch}
                    search={search}
                    priceRange={priceRange}
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
                    clearFilters={clearFilters}
                    search={search}
                  />
                </div>
                <div className={`d-lg-block d-md-none d-none ${styles.contact_div}`}>
                  <ContactSection isLaoding={getShopData.isLoading} mainLocationData={mainLocationData} shopData={getShopData.data?.data.body.data} />
                </div>
              </Row>
            </div>
          </div>
        </GoogleReCaptchaProvider>
      </div>
    </>
  );
};

export default Seller;
