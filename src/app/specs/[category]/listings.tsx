"use client";
import React, { useEffect, useState } from "react";
import { Layout, MobileSideFilter, SideFilters } from "../../../components";
import { Row, Col, Button, Image, Badge, Form } from "react-bootstrap";
import styles from "../../../styles/Specs.module.css";
import ProductCard from "../../../sections/Specs/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { fetchModelFilter, fetchModels } from "../../apis/getApis";
import { useParams, useSearchParams } from "next/navigation";
import { filterIcon, search as searchIcon } from "../../../../public/icons";
import Breadcrumbs from "../../../components/Breadcrumb";
import PaginationBar from "../../../components/PaginationBar";
import { useQueryState } from "next-usequerystate";
import Filters from "../../../sections/ProductListing/Filters";
import category from "./page";
import MobileSortFilter from "../../../components/MobileSortFilter";
import NoItemsFound from "../../../components/NoItemsFound";

const Listings = () => {
  const [mobileFilter, setMobileFilter] = useState();
  const [data, setData] = useState();
  const [noOfPages, setNoOfPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [dParams, setDPrams] = useQueryState<any>("params", []);
  const [Dfilters, setDFilters] = useState();
  const [filters, setFilters] = useState();
  const [filtersData, setFiltersData] = useState<any>([]);
  const [search, setSearch] = useState<string>("");
  const [isSandwichOpen, setisSandwichOpen] = useState(false);
  const [catChange, setCatChange] = useState();
  const [orderBy, setOrderBy] = useState({});
  const [paramOBJ, setParamOBJ] = useState<any>();

  const searchParams = useSearchParams();

  const params = useParams();

  const categories: { [key: string]: number } = {
    mobile: 2,
    tablet: 3,
    "tv-monitor": 4,
    laptop: 1,
    "desktop-computer": 5,
    accessories: 6,
  };

  const getParams = (filter: any) => {
    let paramss = new URLSearchParams();

    if (filters?.title) {
      paramss.append("search", filters?.title);
    }

    if (filters?.filterDpendentFilters) {
      Object.keys(filters.filterDpendentFilters).map((val) => {
        paramss.append(`${val}`, `[${filters.filterDpendentFilters[val].map((item: any) => item.id).join(",")}]`);
      });
    }

    if (filters?.orderBy?.model_title) {
      paramss.append("sort", `model_title:${orderBy?.model_title}`);
    }

    let request = {
      params: paramss,
    };
    if (catChange) {
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

  useEffect(() => {
    setDPrams(decodeURI(getParams()) === "null=" ? "" : getParams());
  }, [filters, orderBy, search]);

  useEffect(() => {
    const filterDpendentFilters =
      Dfilters &&
      Object.keys(Dfilters).reduce((acc, category) => {
        const filteredCategory = Dfilters[category]?.values?.filter((item) => item.isChecked);
        if (filteredCategory?.length > 0) {
          acc[category] = filteredCategory;
        }
        return acc;
      }, {});

    const newFilter: object = {
      ...(search && { title: search }),
      // ...(priceRange &&
      // Object.keys(priceRange).length > 0 && { price: priceRange }),
      ...(Object.keys(orderBy).length > 0 && { orderBy: orderBy }),
      ...(search && { title: search }),
      ...(filterDpendentFilters && {
        filterDpendentFilters: filterDpendentFilters,
      }),
    };
    // setFiltersData(filtersData)

    setFilters(newFilter);
  }, [Dfilters, search, orderBy]);
  const fParam = decodeURI(getParams()) === "null=" ? "" : getParams();
  const { refetch } = useQuery({
    queryKey: ["models", currentPage, categories[params.category], filters, fParam],
    queryFn: () => fetchModels(currentPage, 30, categories[params.category], fParam),
    cacheTime: 0,
    refetchOnWindowFocus: true,
    onSuccess: (data) => {
      setData(data.data.body.data);
      setNoOfPages(data.data.body.paginationInfo.totalPages);
      setCurrentPage(data.data.body.paginationInfo.currentPage);
    },
  });

  const Modelfilters = useQuery({
    queryKey: ["specsFilters", [categories[params.category], filters, fParam]],
    queryFn: () => fetchModelFilter(categories[params.category], fParam),
    cacheTime: 0,
    refetchOnWindowFocus: true,
    enabled: !!categories[params.category],
    onSuccess: (data) => {
      setDFilters(data.data.body.data);
    },
  });

  useEffect(() => {
    refetch();
  }, [currentPage, categories[params.category], refetch]);

  useEffect(() => {
    queryParamsAsObject(new URLSearchParams(dParams));
  }, []);

  useEffect(() => {
    setSearch(!catChange && paramOBJ ? paramOBJ?.search : "");
  }, [paramOBJ]);

  const changePage = (page) => {
    setCurrentPage(page);
  };
  const removeDependentFiltersParam = (obj: any) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key].hasOwnProperty("values")) {
        obj[key].values.forEach((item) => {
          item.isChecked = false;
        });
      }
    }
    setDFilters(obj);
  };
  const handleChangeDependentFilter = (val: any, id: any) => {
    setCatChange(true);
    setDFilters((prev) => {
      const updated = prev[val]?.values?.map((item: any, i: any) => {
        if (i === id && prev[val].inputType === "checkbox") {
          return { ...item, isChecked: false };
        } else if (prev[val].inputType === "radio") {
          if (i === id) {
            return { ...item, isChecked: false };
          } else {
            return { ...item, isChecked: false };
          }
        }
        return item;
      });
      return { ...prev, [val]: { ...prev[val], values: updated } };
    });
  };
  const clearSingleFilter = (filter: any) => {
    setCatChange(true);
    setSearch("");
    setFiltersData({
      ...filtersData,
      [filter]: filtersData?.[filter]?.map((item: Object) => ({
        ...item,
        isChecked: false,
      })),
    });
  };
  return (
    <>
      {mobileFilter === "filter" ? (
        <MobileSideFilter setMobileFilter={setMobileFilter} />
      ) : (
        <>
          <div className={`${styles.specs_div}`}>
            <div className="main">
              {/* Breadcrumbs */}
              <Breadcrumbs />
              {filters?.filterDpendentFilters !== undefined
                ? Object.keys(filters?.filterDpendentFilters).map((val: any, i: any) => (
                    <>
                      {Dfilters &&
                        Dfilters[val]?.values.map(
                          (item: any, index: any) =>
                            item.isChecked === true && (
                              <Badge className="py-2 px-3 border me-1 cursor-pointer mb-3 mt-0" pill bg="light" text="dark">
                                <span className="me-2">{item?.label?.toString()?.replaceAll(/_/g, " ")}</span>
                                <span
                                  onClick={() => {
                                    handleChangeDependentFilter(val, index);
                                  }}
                                >
                                  X
                                </span>
                              </Badge>
                            ),
                        )}
                    </>
                  ))
                : ""}

              {/* Product Listing */}
              <Row className="borderBottom">
                <Col lg={3} md={3} sm={12} xs={12}>
                  <SideFilters
                    removeDependentFiltersParam={removeDependentFiltersParam}
                    dependentFilters={Dfilters}
                    setdependentFilters={setDFilters}
                    Dparams={categories[params.category]}
                    setCatCahnge={setCatChange}
                    setSearch={setSearch}
                    search={search}
                    isSandwichOpen={isSandwichOpen}
                    setisSandwichOpen={setisSandwichOpen}
                  />{" "}
                </Col>

                {/* Product Cards */}
                <Col lg={9} md={12} sm={12} xs={12}>
                  <div className="d-flex justify-content-between">
                    <h1 className={`${styles.h1}`}>Specs Central</h1>
                    <div>
                      <Form.Select
                        className="d-none d-lg-block ms-3"
                        aria-label="Default select example"
                        value={orderBy?.model_title}
                        defaultValue=""
                        disabled={search ? true : false}
                        onChange={(e) => {
                          let value = e.target.value;
                          setCatChange(true);
                          if (value === "asc") {
                            setOrderBy({
                              model_title: "asc",
                            });
                          } else if (value === "desc") {
                            setOrderBy({ model_title: "desc" });
                          }
                        }}
                      >
                        <option key="blankChoice" hidden value="">
                          {" "}
                          Sort by{" "}
                        </option>
                        <option id="price" value="asc">
                          A-Z
                        </option>
                        <option id="price" value="desc">
                          Z-A
                        </option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="w-100 d-block  d-md-flex  mt-3 d-lg-none ">
                    <Button
                      onClick={() => {
                        setisSandwichOpen(true);
                      }}
                      className={`w-100 me-3 mb-2 rounded-2 d-flex justify-content-center ${styles.filter_btn} `}
                    >
                      <Image alt="" className="me-1" src={filterIcon} /> Filter by
                    </Button>
                    <Button onClick={() => setMobileFilter("sort")} className={`w-100 rounded-2 mb-2  ${styles.filter_btn}`}>
                      {" "}
                      <Image /> Sort by
                    </Button>
                  </div>
                  <Row>
                    {data ? (
                      data.length > 0 ? (
                        data.map((model, index) => <ProductCard title={model.model_title} imageUrl={model.images[0]?.img0} modelId={model.model_id} category={params.category} key={index} />)
                      ) : (
                        <div style={{ height: "50vh" }} className="d-flex mt-5 justify-content-center align-items-center">
                          {" "}
                          <NoItemsFound clearFilters={clearSingleFilter} />
                        </div>
                      )
                    ) : null}
                  </Row>

                  {/* Pagination */}
                  {data?.length > 0 && <PaginationBar noOfPages={noOfPages} currentPage={currentPage} changePage={changePage} />}
                </Col>
              </Row>

              {/* Additional elements, if any */}
              <div className="text-center d-flex justify-content-center">{/* Additional elements can be added here */}</div>
            </div>
            <MobileSortFilter
              orderBy={orderBy}
              setOrderBy={setOrderBy}
              setMobileFilter={setMobileFilter}
              mobileFilter={mobileFilter}
              catChange={catChange}
              setCatChange={setCatChange}
              search={search}
              Labels={[
                { label: "A-Z", value: "asc", key: "model_title" },
                { label: "Z-A", value: "desc", key: "model_title" },
              ]}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Listings;
