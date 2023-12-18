import { LoadingCard, ProductCard, SideFilters } from "../../components";
import Breadcrumbs from "../../components/Breadcrumb";
import PaginationBar from "../../components/PaginationBar";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Badge, Button, Col, Form, Row } from "react-bootstrap";
import { filterIcon, search, searchLight, sortIcon } from "../../../public/icons";

interface prop {
  setMobileFilter: (string: string | undefined) => String | undefined;
}

import styles from "../../styles/ProductListing.module.css";
import NoItemsFound from "../../components/NoItemsFound";
const Listing = ({
  dependentFilters,
  isSandwichOpen,
  setisSandwichOpen,
  setCategory,
  setBrand,
  setColor,
  setCondition,
  setLocation,
  setOrderBy,
  orderBy,
  getFilters,
  setdependentFilters,
  filters,
  setFilters,
  totalItems,
  filtersData,
  sandwichTriger,
  setMobileFilter,
  shopItems,
  getItems,
  sizeOfPages,
  setSizeOfPages,
  currentPage,
  changePage,
  noOfPages,
  setCatCahnge,
  search,
  setSearch,
  priceRange,
  setPriceRange,
  removeDependentFiltersParam,
  filterINDFilters,
  setfiltersData,
}: any) => {
  // const [loading, setLoading] = useState(isLoading);

  // useEffect(() => {
  //     setLoading(isLoading);
  // }, [isLoading]);

  const clearSingleFilter = (filter: any) => {
    setCatCahnge(true);

    setfiltersData({
      ...filtersData,
      [filter]: filtersData?.[filter]?.map((item: Object) => ({
        ...item,
        isChecked: false,
      })),
    });
  };
  const handleCheckboxChange = (id, name) => {
    let newValues = { ...filtersData };
    setCatCahnge(true);
    if (name === "categories" || name === "cities") {
      newValues[name].map((item: any, index: number) => {
        if (Number(index) === Number(id)) {
          return { ...item, isChecked: false };
        } else {
          return { ...item, isChecked: false };
        }
      });
      newValues[name] = newValues[name].map((item: any, index: number) => {
        if (Number(index) === Number(id)) {
          return { ...item, isChecked: false };
        } else {
          return { ...item, isChecked: false };
        }
      });
    } else {
      newValues[name][id].isChecked = false;
    }
    setfiltersData(newValues);
  };
  // if (mainLocationData?.shop_working_days)
  // ("locations", JSON.parse(mainLocationData?.shop_working_days));
  const handleChangeDependentFilter = (val: any, id: any) => {
    setCatCahnge(true);
    setdependentFilters((prev) => {
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

  return (
    <div className={`${styles.listingdiv}`}>
      <div className="main">
        <div className="d-flex justify-content-between mb-4">
          {" "}
          <Breadcrumbs />
        </div>
        <div className="mb-3 ">
          {filtersData.categories?.map(
            (item: any, index: number) =>
              item.isChecked === true && (
                <Badge className="py-2 px-3 border me-1 my-2 cursor-pointer" pill bg="light" text="dark">
                  <span className="me-2"> {item.label}</span>
                  <span
                    onClick={() => {
                      setdependentFilters([]);
                      clearSingleFilter("categories");
                    }}
                  >
                    X
                  </span>
                </Badge>
              ),
          )}
          {filtersData.locations?.map(
            (item: any, index: number) =>
              item.isChecked === true && (
                <Badge className="py-2 px-3 border cursor-pointer" pill bg="light" text="dark">
                  <span className="me-2"> {item.location_nick}</span>
                  <span
                    onClick={() => {
                      handleCheckboxChange(index, "locations");
                    }}
                  >
                    X
                  </span>
                </Badge>
              ),
          )}
          {filtersData.colors?.map(
            (item: any, index: number) =>
              item.isChecked === true && (
                <Badge className="py-2 px-3 border me-1 cursor-pointer" pill bg="light" text="dark">
                  <span className="me-2"> {item.label}</span>
                  <span
                    onClick={() => {
                      handleCheckboxChange(index, "colors");
                    }}
                  >
                    X
                  </span>
                </Badge>
              ),
          )}
          {filtersData.cities?.map(
            (item: any, index: number) =>
              item.isChecked === true && (
                <Badge className="py-2 px-3 border me-1 cursor-pointer" pill bg="light" text="dark">
                  <span className="me-2"> {item.label}</span>
                  <span
                    onClick={() => {
                      clearSingleFilter("cities");
                    }}
                  >
                    X
                  </span>
                </Badge>
              ),
          )}
          {filtersData.conditions?.map(
            (item: any, index: number) =>
              item.isChecked === true && (
                <Badge className="py-2 px-3 border me-1 cursor-pointer" pill bg="light" text="dark">
                  <span className="me-2"> {item.label}</span>
                  <span
                    onClick={() => {
                      handleCheckboxChange(index, "conditions");
                    }}
                  >
                    X
                  </span>
                </Badge>
              ),
          )}
          {filterINDFilters?.category_id && filters.filterDpendentFilters !== undefined
            ? Object.keys(filters.filterDpendentFilters).map((val: any, i: any) => (
                <>
                  {dependentFilters[val]?.values.map(
                    (item: any, index: any) =>
                      item.isChecked === true && (
                        <Badge className="py-2 px-3 border me-1 cursor-pointer" pill bg="light" text="dark">
                          <span className="me-2">
                            {" "}
                            {val?.replaceAll(/_/g, " ")}: ({item?.label?.toString()?.replaceAll(/_/g, " ")})
                          </span>
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
          {priceRange?.to ? (
            <Badge className="py-2 px-3 border me-1 cursor-pointer" pill bg="light" text="dark">
              <span className="me-2">
                {" "}
                PKR {priceRange.from}-{priceRange.to}
              </span>
              <span
                onClick={() => {
                  setPriceRange();
                }}
              >
                X
              </span>
            </Badge>
          ) : (
            ""
          )}
        </div>
        <Row className="">
          <Col lg="3">
            <SideFilters
              dependentFilters={dependentFilters}
              setisSandwichOpen={setisSandwichOpen}
              isSandwichOpen={isSandwichOpen}
              setCategory={setCategory}
              setOrderBy={setOrderBy}
              orderBy={orderBy}
              setFilters={setFilters}
              isLoading={getFilters?.isLoading}
              setdependentFilters={setdependentFilters}
              setBrand={setBrand}
              setColor={setColor}
              setCondition={setCondition}
              setLocation={setLocation}
              filtersData={filtersData}
              setCatCahnge={setCatCahnge}
              setPriceRange={setPriceRange}
              setSearch={setSearch}
              search={search}
              priceRange={priceRange}
              filters={filters}
              removeDependentFiltersParam={removeDependentFiltersParam}
              setfiltersData={setfiltersData}
              filterINDFilters={filterINDFilters}
            />
          </Col>

          <Col lg="9">
            <h1 className={`${styles.h1}`}>Products</h1>
            <div className="w-100 border-lg-bottom borderBottom  pb-2 justify-content-between d-block d-lg-flex-end d-md-flex-end d-lg-flex-end">
              <div className="d-flex justify-content-between align-items-baseline">
                <p className="w-100">{shopItems?.length > 0 && `${(currentPage - 1) * sizeOfPages + 1}-${Math.min(currentPage * sizeOfPages, totalItems)} of ${totalItems} Results`}</p>
                <div className="d-flex w-100">
                  <Form.Select
                    onChange={(e) => {
                      setSizeOfPages(parseInt(e.target.value, 10));
                    }}
                    className="ms-3"
                    aria-label="Default select example"
                  >
                    <option value={24}>
                      Showing {1} - {Math.min(24, totalItems)}
                    </option>
                    <option value={48}>
                      Showing {1}- {Math.min(48, totalItems)}
                    </option>
                    <option value={72}>
                      Showing {1}- {Math.min(72, totalItems)}
                    </option>
                  </Form.Select>
                  <Form.Select
                    className="d-none d-lg-block ms-3"
                    aria-label="Default select example"
                    disabled={search ? true : false}
                    value={orderBy?.price}
                    defaultValue=""
                    onChange={(e) => {
                      let value = e.target.value;
                      if (value === "asc") {
                        setOrderBy({
                          price: "asc",
                        });
                      } else if (value === "desc") {
                        setOrderBy({ price: "desc" });
                      }
                    }}
                  >
                    <option key="blankChoice" hidden value="">
                      {" "}
                      Sort by{" "}
                    </option>
                    <option id="price" value="asc">
                      Price low to high
                    </option>
                    <option id="price" value="desc">
                      Price high to low
                    </option>
                    {/* <option  id="title" value="ASC">Top sold</option> */}
                    {/* <option value="ASC">Top reviewed</option> */}
                  </Form.Select>
                </div>
              </div>
            </div>

            <div className="w-100 d-block  d-md-flex mt-3 d-lg-none ">
              <Button
                onClick={() => {
                  setisSandwichOpen(true);
                }}
                className={`w-100 me-3 mb-2 rounded-2 ${styles.filter_btn} `}
              >
                <Image alt="" className="me-1" src={filterIcon} /> Filter by
              </Button>
              <Button onClick={() => setMobileFilter("sort")} className={`w-100 rounded-2 mb-2  ${styles.filter_btn}`}>
                {" "}
                <Image alt="" src={sortIcon} /> Sort by
              </Button>
            </div>

            <Row className="d-flex h-50 p-3">
              {shopItems?.map((data: any, index: number) => (
                <ProductCard
                  listingId={data?.listing_id}
                  item={data?.item}
                  title={data?.listing_title}
                  condition={data?.item.condition_item}
                  loading={getItems?.isLoading}
                  key={index}
                  discount={parseInt(data.online_discount)}
                  discount_unit={data?.online_discount_unit}
                  price={data.online_price}
                  color={data?.listingColorAssociations}
                  listedQuantity={data.listed_quantity}
                  isRecommendationCards={false}
                />
              ))}
              {shopItems?.length === 0 && (
                <div className="d-flex justify-content-center  align-items-center h-100">
                  <NoItemsFound clearFilters={clearSingleFilter} />
                </div>
              )}
              {shopItems?.length > 0 && <PaginationBar noOfPages={noOfPages} currentPage={currentPage} changePage={changePage} />}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Listing;
