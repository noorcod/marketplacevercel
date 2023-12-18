"use client";
import React, { useEffect, useState } from "react";
import Filters from "../../sections/ProductListing/Filters";
import Listing from "../../sections/ProductListing/Listing";
import MobileSortFilter from "../../components/MobileSortFilter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useNavigationEvent } from "../hooks/useNavigationEvent";
import { useQuery } from "@tanstack/react-query";
import { fetchdependentFilterListing, fetchIndependentFilterListing, fetchPLPListing } from "../apis/getApis";
import { useQueryState } from "next-usequerystate";

interface filters {
  [key: string]: any;
}
function ProductsListing() {
  // states
  const [mobileFilter, setMobileFilter] = useState<any>();
  const [isSandwichOpen, setisSandwichOpen] = useState(false);
  const [filters, setFilters] = useState<filters>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState<null | number>(1);
  const [sizeOfPages, setSizeOfPages] = useState(24);
  const [orderBy, setOrderBy] = useState({});
  const [filtersData, setFiltersData] = useState<any>([]);
  const [dependentFilters, setdependentFilters] = useState();
  //query params states
  const [orderByq, setOrderByq] = useQueryState("orderBys");
  const searchParams = useSearchParams();
  const [dParams, setDPrams] = useQueryState<any>("params", []);
  const [catCahnge, setCatCahnge] = useState(false);
  const [paramOBJ, setParamOBJ] = useState<any>();
  const [search, setSearch] = useState<string>("");
  const [priceRange, setPriceRange] = useState<any>();
  const [filterINDFilters, setfilterINDFilters] = useState({});
  const [catId, setCatId] = useState();
  const router = useRouter();
  const pathname = usePathname();
  useNavigationEvent();

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
    if (catCahnge) {
      return request.params;
    } else {
      return new URLSearchParams(searchParams.get("params"));
    }
  };
  const queryParamsAsObject = () => {
    // parse query value
    const queryParams: any = {};

    for (const [key, value] of new URLSearchParams(searchParams.get("params"))?.entries()) {
      queryParams[key] = value.includes("[") ? JSON.parse(value) : value;
    }
    setParamOBJ(queryParams);
  };

  let fParam = getParams();
  const getItems = useQuery({
    queryKey: ["items", [currentPage, sizeOfPages, filterINDFilters, filters]],
    queryFn: () => fetchPLPListing(currentPage, sizeOfPages, fParam),
    enabled: !!filters,
    refetchOnWindowFocus: false,
  });

  const getFilters = useQuery({
    queryKey: ["filtersListing", filterINDFilters],
    queryFn: () => fetchIndependentFilterListing(fParam),
    refetchOnWindowFocus: false,
    cacheTime: 0,
    onSuccess: (data) => {},
  });

  //dependent filters call
  const getdependentFilters = useQuery({
    queryKey: ["Dependentfilters", catId, filters, filterINDFilters],
    queryFn: () => fetchdependentFilterListing(catId, catId ? fParam : ""),
    enabled: !!catId,
    refetchOnWindowFocus: false,
    cacheTime: 0,
    onSuccess: (data) => {
      setdependentFilters(data?.data?.body?.data);
    },
  });

  // get params on mount
  useEffect(() => {
    queryParamsAsObject(new URLSearchParams(dParams));
  }, []);

  // let sideeffects of independent filters
  useEffect(() => {
    setCatId(filterINDFilters?.category_id?.length > 0 ? filterINDFilters.category_id[0].id : Number(paramOBJ?.category_id));
    if (getFilters.data?.data?.body?.data) {
      let res = getFilters.data?.data?.body?.data;
      setFiltersData(res);
    }
    setSearch(!catCahnge && paramOBJ ? paramOBJ?.search : "");
  }, [getFilters.data, paramOBJ]);

  //  page change effects and filters effects
  useEffect(() => {
    setNoOfPages(getItems?.data?.data.body?.paginationInfo?.totalPages);
    if (getItems?.data?.data?.body?.data?.length < 1) {
      setCurrentPage(1);
    }
    setDPrams(getParams(filters));
  }, [getItems?.data?.data?.body?.data, filters, sizeOfPages, filterINDFilters]);

  const changePage = (page: any) => {
    setCurrentPage(page);
    window.scrollTo(0, 500);
  };

  //  filter independent filters

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
  }, [filtersData, priceRange, orderBy]);

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
  return (
    <>
      {/* <Meta title="Mobile, Laptop, Tab, Desktop, Accessories, LED's" /> */}
      <div className="lg-none md-block sm-block d-block">
        <MobileSortFilter
          search={search}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          setMobileFilter={setMobileFilter}
          mobileFilter={mobileFilter}
          Labels={[
            { label: "High to Low", value: "desc", key: "price" },
            { label: "Low to High", value: "asc", key: "price" },
          ]}
        />
      </div>

      <main>
        {/* <Filters /> */}
        <Listing
          setisSandwichOpen={setisSandwichOpen}
          filterINDFilters={filterINDFilters}
          isSandwichOpen={isSandwichOpen}
          dependentFilters={dependentFilters}
          setCatCahnge={setCatCahnge}
          setOrderBy={setOrderBy}
          orderBy={orderBy}
          setFilters={setFilters}
          getItems={getItems}
          filtersData={filtersData}
          setfiltersData={setFiltersData}
          noOfPages={noOfPages}
          currentPage={currentPage}
          changePage={changePage}
          shopItems={getItems?.data?.data?.body?.data}
          setMobileFilter={setMobileFilter}
          getFilters={getFilters}
          setdependentFilters={setdependentFilters}
          totalItems={getItems?.data?.data?.body?.paginationInfo?.totalItems}
          sizeOfPages={sizeOfPages}
          setSizeOfPages={setSizeOfPages}
          setPriceRange={setPriceRange}
          setSearch={setSearch}
          search={search}
          priceRange={priceRange}
          filters={filters}
          removeDependentFiltersParam={removeDependentFiltersParam}
        />
      </main>
    </>
  );
}

export default ProductsListing;
