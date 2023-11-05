'use client';
import React, { useEffect, useState } from "react";
import Filters from "../../../sections/ProductListing/Filters";
import Listing from "../../../sections/ProductListing/Listing";
import { Layout, MobileSideFilter, SideFilters } from "../../../components";
import MobileSortFilter from "../../../components/MobileSortFilter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useNavigationEvent } from "../../hooks/useNavigationEvent";
import { useQuery } from "@tanstack/react-query";
import {
  fetchdependentFilterListing,
  fetchIndependentFilterListing,
  fetchPLPListing,
} from "../../apis/getApis";
import { useQueryState } from "next-usequerystate";

function ProductsListing() {
  // states
  const [mobileFilter, setMobileFilter] = useState<any>();
  const [isSandwichOpen, setisSandwichOpen] = useState(false);
  const [filters, setFilters] = useState<object>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState<null | number>(1);
  const [sizeOfPages, setSizeOfPages] = useState(10);
  const [orderBy, setOrderBy] = useState({});
  const [filtersData, setFiltersData] = useState<any>([]);
  const [dependentFilters, setdependentFilters] = useState();
  //query params states
  const [category, setCategory] = useQueryState("category");
  const [brand, setBrand] = useQueryState("brands");
  const [color, setColor] = useQueryState("colors");
  const [condition, setCondition] = useQueryState("conditions");
  const [location, setLocation] = useQueryState("locations", []);
  const [orderByq, setOrderByq] = useQueryState("orderBys");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useNavigationEvent();
  // router?.events?.on('routeChangeStart', (url) => {
  //     (`Loading: ${url}`)
  //     nProgress.start()
  // })
  // router?.events?.on('routeChangeComplete', () => nProgress.done())
  // router?.events?.on('routeChangeError', () => nProgress.done())
  const paramsFilters={
    brand_ids:searchParams.get("brands")?.split('-').map(id => parseInt(id)),
    color_ids:color?.split('-').map(id => parseInt(id)),
    condition_ids:condition?.split('-').map(id => parseInt(id)),
    location_ids:location?.split('-').map(id => parseInt(id)),
    orderBys:searchParams.getAll("orderBys")
  }
  const getItems = useQuery({
    queryKey: ["items", [filters, currentPage, sizeOfPages]],
    queryFn: () => fetchPLPListing(filters, currentPage, sizeOfPages),
    enabled: !!filters,
    refetchOnWindowFocus: false,
  });

  const getFilters = useQuery({
    queryKey: ["filtersListing"],
    queryFn: () => fetchIndependentFilterListing(),
    refetchOnWindowFocus: false,
  });
  const catId =
    filters?.category_ids?.length > 0 ? filters.category_ids[0].id : "";

  const getdependentFilters = useQuery({
    //dependent filters call
    queryKey: ["Dependentfilters", catId],
    queryFn: () => fetchdependentFilterListing(catId),
    enabled: !!catId,
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

  useEffect(() => {
    setNoOfPages(getItems?.data?.data.body?.paginationInfo?.totalPages);
    if (getItems?.data?.data?.body?.data?.length < 1) {
      setCurrentPage(1);
    }
  }, [getItems?.data?.data?.body?.data, filters, sizeOfPages]);
  const changePage = (page: any) => {
    setCurrentPage(page);
    window.scrollTo(0, 500);
  };
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
         
          priceRange: data.priceRange,
          orderBy: orderBy,
        });
  
      }
}, [getFilters?.data]);



  return (
    <>
      {/* <Meta title="Mobile, Laptop, Tab, Desktop, Accessories, LED's" /> */}
      <div className="lg-none md-block sm-block d-block" >

             <MobileSortFilter orderBy={orderBy} setOrderBy={setOrderBy} setMobileFilter={setMobileFilter} mobileFilter={mobileFilter} />
      </div>
        <Layout>
          <main>
            <Filters />
            <Listing
             setisSandwichOpen={setisSandwichOpen}
             isSandwichOpen={isSandwichOpen}
              dependentFilters={dependentFilters}
              setCategory={setCategory}
              setOrderBy={setOrderBy}
              orderBy={orderBy}
              setFilters={setFilters}
              getItems={getItems}
              filtersData={filtersData}
              setBrand={setBrand}
              setColor={setColor}
              setCondition={setCondition}
              setLocation={setLocation}
              noOfPages={noOfPages}
              currentPage={currentPage}
              changePage={changePage}
              shopItems={getItems?.data?.data?.body?.data}
              setMobileFilter={setMobileFilter}
              getFilters={getFilters}
              setdependentFilters={setdependentFilters}
              totalItems={
                getItems?.data?.data?.body?.paginationInfo?.totalItems
              }
              setSizeOfPages={setSizeOfPages}
            />
          </main>
        </Layout>
    
    </>
  );
}

export default ProductsListing;
