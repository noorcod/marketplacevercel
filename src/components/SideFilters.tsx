"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Accordion, Button, Col, Form, Offcanvas, Row } from "react-bootstrap";
import { search, searchLight } from "../../public/icons";
import styles from "../styles/SideFilters.module.css";
import loadStyle from "../styles/LoadingCard.module.css";
import MultiRangeSlider from "./MultiRangeSlider";
import SideFiltersLoader from "./SideFiltersLoader";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FeaturedCategories from "../sections/Home/FeaturedCategories";
import { useQueryState } from "next-usequerystate";
const SideFilters = ({ filtersData, isLoading, dependentFilters, setdependentFilters, orderBy, setCatCahnge, setisSandwichOpen, isSandwichOpen, setOrderBy, filters, setfiltersData, removeDependentFiltersParam, search, setSearch, priceRange, setPriceRange, filterINDFilters, Dparams }: any) => {
  // const [search, setSearch] = useState<string>("");
  // const [priceRange, setPriceRange] = useState<any>();
  // const [filtersData, setfiltersData] = useState<any>([]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // filtersCheckedData(filtersData,dependentFilters,search,priceRange)
  }, [filtersData, dependentFilters, search, priceRange, orderBy]);
  // const data=await queryClient.getQueryData("todos")
  const handleCheckboxChange = (e: any) => {
    let newValues = { ...filtersData };
    setCatCahnge(true);
    if (e.target.name === "categories" || e.target.name === "cities") {
      removeDependentFiltersParam(dependentFilters);
      newValues[e.target.name].map((item: any, index: number) => {
        if (Number(index) === Number(e.target.id)) {
          return { ...item, isChecked: e.target.checked };
        } else {
          return { ...item, isChecked: false };
        }
      });
      newValues[e.target.name] = newValues[e.target.name].map((item: any, index: number) => {
        if (Number(index) === Number(e.target.id)) {
          return { ...item, isChecked: e.target.checked };
        } else {
          return { ...item, isChecked: false };
        }
      });
    } else {
      newValues[e.target.name][e.target.id].isChecked = e.target.checked;
    }
    setfiltersData(newValues);
  };
  const handleChangeDependentFilter = (e: any, val: any, id: any) => {
    setCatCahnge(true);
    setdependentFilters((prev) => {
      const updated = prev[val]?.values?.map((item: any, i: any) => {
        if (i === id && prev[val].inputType === "checkbox") {
          return { ...item, isChecked: e.target.checked };
        } else if (prev[val].inputType === "radio") {
          if (i === id) {
            return { ...item, isChecked: e.target.checked };
          } else {
            return { ...item, isChecked: false };
          }
        }
        return item;
      });
      return { ...prev, [val]: { ...prev[val], values: updated } };
    });

    // let val={...dependentFilters}
    // val[e.target.name][e.target.id].isChecked = e.target.checked;
    // setdependentFilters(val)
  };
  const clearAllFilters = () => {
    // router.replace(pathname);
    setCatCahnge(true);
    setSearch("");

    if (filtersData) {
      setfiltersData({
        categories: filtersData?.categories?.map((category: Object) => ({
          ...category,
          isChecked: false,
        })),
        colors: filtersData?.colors?.map((color: Object) => ({
          ...color,
          isChecked: false,
        })),
        conditions: filtersData?.conditions?.map((condition: Object) => ({
          ...condition,
          isChecked: false,
        })),
        locations: filtersData?.locations?.map((location: any) => ({
          ...location,
          isChecked: false,
        })),
        title: "",
        priceRange: filtersData?.priceRange,
      });
    }
    if (priceRange) {
      setPriceRange("");
    }
    if (dependentFilters) {
      setdependentFilters((prev: any) => {
        return Object.entries(prev).reduce((oldFilters: any, [fKey, fValue]: any) => {
          return {
            ...oldFilters,
            [fKey]: {
              ...fValue,
              values: fValue.values.reduce((oldValue: any, value: any) => {
                return [...oldValue, { ...value, isChecked: false }];
              }, []),
            },
          };
        }, {});
      });
    }
    setOrderBy({ price: "" });
  };
  const handlePriceChange = (min: number, max: number) => {
    setCatCahnge(true);
    setPriceRange(min && max ? { from: min, to: max } : {});
  };
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
  const clearDependentFilter = (filter: any) => {
    setCatCahnge(true);

    setdependentFilters((prevState: any) => {
      const updatedState: any = {};
      for (const category in prevState) {
        if (prevState.hasOwnProperty(category)) {
          updatedState[category] = prevState[category].values.map((item: any) => ({ ...item, isChecked: false }));
        }
      }
      return {
        ...prevState,
        [filter]: { ...prevState[filter], values: updatedState[filter] },
      };
    });
  };
  const debounce = (mainFunction: Function, delay: number) => {
    // Declare a variable called 'timer' to store the timer ID
    let timer: NodeJS.Timeout;
    // Return an anonymous function that takes in any number of arguments
    return function (min: number, max: number) {
      // Clear the previous timer to prevent the execution of 'mainFunction'
      clearTimeout(timer);
      // Set a new timer that will execute 'mainFunction' after the specified delay
      timer = setTimeout(() => {
        mainFunction(min, max);
      }, delay);
    };
  };

  // Create a new debounced version of the 'searchData'
  const debouncedSearchData = debounce(handlePriceChange, 1000);
  // Call the debounced version of 'searchData'
  return (
    <div>
      {" "}
      {isLoading ? (
        <SideFiltersLoader />
      ) : (
        <>
          <div className={`${styles.sideFilters}  border rounded-2 d-lg-block d-md-none d-none me-4`}>
            <div className="search_filter p-2 pb-3 ">
              <div className="d-flex mb-1 ">
                <input
                  type="search"
                  value={search}
                  onChange={(e) => {
                    setCatCahnge(true);
                    setSearch(e.target.value);
                  }}
                  className=" rounded-0 fs-14 rounded-start border-0  w-100"
                  placeholder="Search by keyword(s)"
                />
                <Button className=" h-100 rounded-0 rounded-end py-2 ">
                  <Image src={searchLight} alt="searchLight" width={18} height={18} />
                </Button>
              </div>

              <span onClick={clearAllFilters} className="secondary-link cursor-pointer text-decoration-underline ">
                {" "}
                Clear All Filters{" "}
              </span>
            </div>
            <Accordion alwaysOpen className={`${styles.accordian_main}`} defaultActiveKey={["0", "4", "3", "1", "2", "7"]}>
              {filtersData?.categories?.length > 0 && (
                <Accordion.Item eventKey="3">
                  <Accordion.Header className={`${styles.nav_header} `}>
                    Categories{" "}
                    <span
                      className="ms-2 text-capitalize secondary-link text-decoration-underline"
                      onClick={() => {
                        clearSingleFilter("categories");
                        setdependentFilters([]);
                      }}
                    >
                      Clear
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="d-grid">
                      <div className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}>
                        <div key={`default-1`} className="mb-3">
                          {filtersData?.categories?.map((item: any, index: number) => (
                            <Form.Check key={index} className={`${styles.checkbox}`} onChange={handleCheckboxChange} name="categories" checked={item.isChecked} type="radio" id={`${index}`} label={`${item.label}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              )}

              {filtersData?.locations?.length > 0 && (
                <Accordion.Item eventKey={filtersData.locations?.length > 0 ? "7" : ""}>
                  <Accordion.Header className={`${styles.nav_header}`}>
                    Locations{" "}
                    <span
                      className="ms-2 text-capitalize secondary-link text-decoration-underline"
                      onClick={() => {
                        clearSingleFilter("locations");
                      }}
                    >
                      Clear
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="d-grid">
                      <div className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}>
                        <div key={`default-1`} className="mb-3">
                          {filtersData?.locations?.map((item: any, index: number) => (
                            <Form.Check key={index} className={`${styles.checkbox}`} onChange={handleCheckboxChange} name="locations" checked={item.isChecked} type="checkbox" id={`${index}`} label={`${item.location_nick}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              )}
              {!(filtersData?.colors?.length > 0) ? (
                ""
              ) : (
                <Accordion.Item eventKey={filtersData.colors.length > 0 ? "1" : ""}>
                  <Accordion.Header className={`${styles.nav_header}`}>
                    Colors{" "}
                    <span
                      className="ms-2 text-capitalize secondary-link text-decoration-underline"
                      onClick={() => {
                        clearSingleFilter("colors");
                      }}
                    >
                      Clear
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="d-grid">
                      <div className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}>
                        <div key={`default-1`} className="mb-3">
                          {filtersData.colors?.map((item: any, index: number) => (
                            <Form.Check key={index} className={`${styles.checkbox}`} onChange={handleCheckboxChange} name="colors" checked={item.isChecked} type="checkbox" id={`${index}`} label={`${item.label}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              )}
              {filtersData?.conditions?.length > 0 && (
                <Accordion.Item eventKey={filtersData?.conditions?.length > 0 ? "2" : ""}>
                  <Accordion.Header className={`${styles.nav_header}`}>
                    Condition{" "}
                    <span
                      className="ms-2 text-capitalize secondary-link text-decoration-underline"
                      onClick={() => {
                        clearSingleFilter("conditions");
                      }}
                    >
                      Clear
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="d-grid">
                      <div className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}>
                        <div key={`default-1`} className="mb-3">
                          {filtersData?.conditions?.map((item: any, index: number) => (
                            <Form.Check key={item.id} className={`${styles.checkbox}`} onChange={handleCheckboxChange} name="conditions" checked={item.isChecked} type="checkbox" id={`${index}`} label={<label htmlFor={`${index}`}>{item.label}</label>} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              )}
              {filtersData?.cities?.length > 0 && (
                <Accordion.Item eventKey="6">
                  <Accordion.Header className={`${styles.nav_header}`}>
                    Cities{" "}
                    <span
                      className="ms-2 text-capitalize secondary-link text-decoration-underline"
                      onClick={() => {
                        clearSingleFilter("cities");
                        setdependentFilters([]);
                      }}
                    >
                      Clear
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="d-grid">
                      <div className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}>
                        <div key={`default-1`} className="mb-3">
                          {filtersData?.cities?.map((item: any, index: number) => (
                            <Form.Check key={index} className={`${styles.checkbox}`} onChange={handleCheckboxChange} name="cities" checked={item.isChecked} type="radio" id={`${index}`} label={`${item.label}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              )}
              {filtersData?.priceRange?.maxPrice>0 && (
                <Accordion.Item eventKey={filtersData?.priceRange ? "4" : ""}>
                  <Accordion.Header className={`${styles.nav_header}`}>
                    Prices{" "}
                    <span className="ms-2 secondary-link text-capitalize text-decoration-underline" onClick={() => clearSingleFilter("conditions")}>
                      Clear
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="d-grid position-relative justify-content-center">
                      <div className={` d-flex justify-content-between ${styles.nav_mb} mb-4 `}></div>
                      <Button
                        onClick={() => {
                          handlePriceChange(10000, 20000);
                        }}
                        variant="outline-secondary "
                        className="mt-2"
                      >
                        Rs. 10,000 to Rs. 20,000
                      </Button>
                      <Button
                        onClick={() => {
                          handlePriceChange(20000, 30000);
                        }}
                        variant="outline-secondary mt-2"
                      >
                        Rs. 20,000 to Rs. 30,000
                      </Button>
                      <Button
                        onClick={() => {
                          handlePriceChange(30000, 40000);
                        }}
                        variant="outline-secondary mt-2"
                      >
                        Rs. 30,000 to Rs. 40,000
                      </Button>
                      <Button
                        onClick={() => {
                          handlePriceChange(40000, 50000);
                        }}
                        variant="outline-secondary mt-2"
                      >
                        Rs. 40,000 to Rs. 50,000
                      </Button>

                      <MultiRangeSlider
                        min={filtersData?.priceRange?.minPrice}
                        max={filtersData?.priceRange?.maxPrice}
                        minValue={filtersData?.priceRange?.minPrice}
                        maxValue={filtersData?.priceRange?.maxPrice}
                        onChange={(min: any, max: any) => {
                          if (filtersData?.priceRange?.minPrice !== min.min && filtersData?.priceRange?.maxPrice !== min.max) {
                            debouncedSearchData(min.min, min.max);
                          }
                        }}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              )}
            </Accordion>
          </div>
          {dependentFilters && Object.keys(dependentFilters).length > 0 && (
            <div className={` ${styles.sideFilters}  border rounded-2 d-lg-block d-md-none d-none me-4 mt-3 `}>
              <Accordion alwaysOpen className={`${styles.accordian_main} `} defaultActiveKey={["0", "1", "2", "3"]}>
                {dependentFilters &&
                  Object.keys(dependentFilters).map((val: any, i: any) => (
                    <>
                      {dependentFilters[val].values.length > 0 && (filterINDFilters?.category_id || Dparams) && (
                        <Accordion.Item key={i} eventKey={dependentFilters[val].values.filter((item) => item.isChecked === true).length > 0 ? "0" : i}>
                          <Accordion.Header className={`${styles.nav_header} `}>
                            {dependentFilters[val].label
                              .toString()
                              .replaceAll("_", " ")
                              .replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
                            <span
                              className="ms-2 text-capitalize secondary-link text-decoration-underline"
                              onClick={() => {
                                clearDependentFilter(val);
                              }}
                            >
                              Clear
                            </span>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="d-grid">
                              <div className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}>
                                <div key={`default-1`} className="mb-3">
                                  {dependentFilters[val].values.map((item: any, index: any) => (
                                    <Form.Check
                                      key={index}
                                      className={`${styles.checkbox}`}
                                      onChange={(e) => handleChangeDependentFilter(e, val, index)}
                                      name={val}
                                      checked={item.isChecked}
                                      type={dependentFilters[val].inputType}
                                      id={`${index}`}
                                      label={`${item.label === 0 ? "No" : item.label === 1 ? "Yes" : item.label}${dependentFilters[val].unit !== null ? ` ${dependentFilters[val].unit}` : ""}(${item.count})`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      )}
                    </>
                  ))}
              </Accordion>
            </div>
          )}
        </>
      )}
      <div className="d-lg-none d-md-block d-sm-block d-block">
        <div className="pos-f-t">
          <Offcanvas backdrop={true} scroll={true} show={isSandwichOpen} onHide={() => setisSandwichOpen(false)}>
            <div className={`${styles.filter_div} pt-3 `}>
              <Offcanvas.Header closeButton>
                <h2 className={`${styles.h2}`}>Filter by:</h2>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ height: "90vh" }}>
                <div className="search_filter p-4 pb-3 ">
                  <div className="d-flex mb-1 ">
                    <div className={`position-relative w-100 d-flex align-items-center ${styles.searchbar}`}>
                      {/* <Image
            className={`position-absolute `}
            src={search}
            alt="searchIcon"
            width={18}
            height={18}
          /> */}
                      <input
                        type="search"
                        value={search}
                        onChange={(e) => {
                          setCatCahnge(true);
                          setSearch(e.target.value);
                        }}
                        className=" rounded-0 fs-14 rounded-start w-100 h-100"
                        placeholder="Search by keyword(s)"
                      />
                    </div>
                    <Button className=" h-100 px-4 rounded-0 rounded-end py-1" onClick={() => setisSandwichOpen(false)}>
                      <Image src={searchLight} alt="searchLightIcon" width={18} height={27} />
                    </Button>
                  </div>
                </div>
                <div>
                  <p onClick={() => clearAllFilters()} className="text-decoration-underline link  mb-2">
                    Clear all Filters
                  </p>
                </div>
                <Accordion alwaysOpen className={`${styles.accordian_main}`} defaultActiveKey={["0", "3"]}>
                 {filtersData?.categories?.length>0 && <Accordion.Item eventKey="3" style={filtersData?.categories ? null : { display: "none" }}>
                    <Accordion.Header className={`${styles.nav_header}`}>
                      Categories{" "}
                      <span
                        className="ms-2 secondary-link"
                        onClick={() => {
                          clearSingleFilter("categories");
                          setdependentFilters([]);
                        }}
                      >
                        Clear
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="d-grid">
                        <div className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}>
                          <div key={`default-1`} className="mb-3">
                            {filtersData?.categories?.map((item: any, index: number) => (
                              <Form.Check key={index} className={`${styles.checkbox}`} onChange={handleCheckboxChange} name="categories" checked={item.isChecked} type="radio" id={`${index}`} label={`${item.label}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>}
                  {filtersData?.locations?.length > 0 && (
                    <Accordion.Item eventKey="4" style={filtersData?.locations ? null : { display: "none" }}>
                      <Accordion.Header className={`${styles.nav_header}`}>
                        Locations{" "}
                        <span
                          className="ms-2 text-capitalize secondary-link text-decoration-underline"
                          onClick={() => {
                            clearSingleFilter("categories");
                          }}
                        >
                          Clear
                        </span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="d-grid">
                          <div className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}>
                            <div key={`default-1`} className="mb-3">
                              {filtersData?.locations?.map((item: any, index: number) => (
                                <Form.Check key={index} className={`${styles.checkbox}`} onChange={handleCheckboxChange} name="locations" checked={item.isChecked} type="checkbox" id={`${index}`} label={`${item.location_nick}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  )}

                  { filtersData?.colors?.length > 0 && <Accordion.Item eventKey="1" style={filtersData?.colors ? null : { display: "none" }}>
                    <Accordion.Header className={`${styles.nav_header}`}>
                      Colors{" "}
                      <span
                        className="ms-2 text-capitalize secondary-link text-decoration-underline"
                        onClick={() => {
                          clearSingleFilter("colors");
                        }}
                      >
                        Clear
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="d-grid">
                        <div className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}>
                          <div key={`default-1`} className="mb-3">
                            {filtersData?.colors?.map((item: any, index: number) => (
                              <Form.Check key={index} className={`${styles.checkbox}`} onChange={handleCheckboxChange} name="colors" checked={item.isChecked} type="checkbox" id={`${index}`} label={`${item.label}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
}
                {filtersData?.conditions?.length > 0 &&  <Accordion.Item eventKey="2" style={filtersData?.conditions ? null : { display: "none" }}>
                    <Accordion.Header className={`${styles.nav_header}`}>
                      Condition{" "}
                      <span
                        className="ms-2 text-capitalize secondary-link text-decoration-underline"
                        onClick={() => {
                          clearSingleFilter("conditions");
                        }}
                      >
                        Clear
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="d-grid">
                        <div className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}>
                          <div key={`default-1`} className="mb-3">
                            {filtersData?.conditions?.map((item: any, index: number) => (
                              <Form.Check key={index} className={`${styles.checkbox}`} onChange={handleCheckboxChange} name="conditions" checked={item.isChecked} type="checkbox" id={`${index}`} label={`${item.label}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>}
                  {filtersData?.cities?.length > 0 && (
                    <Accordion.Item eventKey="6">
                      <Accordion.Header className={`${styles.nav_header}`}>
                        Cities{" "}
                        <span
                          className="ms-2 text-capitalize secondary-link text-decoration-underline"
                          onClick={() => {
                            clearSingleFilter("cities");
                            setdependentFilters([]);
                          }}
                        >
                          Clear
                        </span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="d-grid">
                          <div className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}>
                            <div key={`default-1`} className="mb-3">
                              {filtersData?.cities?.map((item: any, index: number) => (
                                <Form.Check key={index} className={`${styles.checkbox}`} onChange={handleCheckboxChange} name="cities" checked={item.isChecked} type="radio" id={`${index}`} label={`${item.label}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  )}
                 {filtersData?.priceRange?.minPrice ? <Accordion.Item eventKey="7" style={filtersData?.priceRange ? null : { display: "none" }}>
                    <Accordion.Header className={`${styles.nav_header}`}>
                      Prices{" "}
                      <span className="ms-2 secondary-link text-decoration-underline" onClick={() => clearSingleFilter("priceRange")}>
                        Clear
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="d-grid justify-content-center">
                        <div className={` d-flex justify-content-between position-relative ${styles.nav_mb} mb-4 `}>
                          <MultiRangeSlider min={filtersData?.priceRange?.minPrice} max={filtersData?.priceRange?.maxPrice} minValue={filtersData?.priceRange?.minPrice} maxValue={filtersData?.priceRange?.maxPrice} onChange={({ min, max }: any) => debouncedSearchData(min, max)} />
                        </div>
                        <Button
                          onClick={() => {
                            // setMinValue(100);
                            // setMaxValue(1500);
                          }}
                          variant="outline-secondary "
                          className="mt-4"
                        >
                          Rs. 100 to Rs. 1500
                        </Button>
                        <Button
                          onClick={() => {
                            // setMinValue(100);
                            // setMaxValue(700);
                          }}
                          variant="outline-secondary mt-2"
                        >
                          Rs. 100 to Rs. 700
                        </Button>
                        <Button
                          onClick={() => {
                            // setMinValue(100);
                            // setMaxValue(3000);
                          }}
                          variant="outline-secondary mt-2"
                        >
                          Rs. 100 to Rs. 3000
                        </Button>
                        <Button
                          onClick={() => {
                            // setMinValue(600);
                            // setMaxValue(4000);
                          }}
                          variant="outline-secondary mt-2"
                        >
                          Rs. 600 to Rs. 4000
                        </Button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>:""}
                </Accordion>
                <div className="mt-3">
                  <Accordion>
                    {dependentFilters &&
                      Object.keys(dependentFilters).map((val: any, i: any) => (
                        <>
                          {dependentFilters[val].values.length > 0 && (
                            <Accordion.Item eventKey={i}>
                              <Accordion.Header className={`${styles.nav_header} `}>
                                {dependentFilters[val].label}{" "}
                                <span
                                  className="ms-2 text-capitalize secondary-link text-decoration-underline"
                                  onClick={() => {
                                    clearDependentFilter(val);
                                  }}
                                >
                                  Clear
                                </span>
                              </Accordion.Header>
                              <Accordion.Body>
                                <div className="d-grid">
                                  <div className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}>
                                    <div key={`default-1`} className="mb-3">
                                      {dependentFilters[val].values.map((item: any, index: any) => (
                                        <Form.Check
                                          key={index}
                                          className={`${styles.checkbox}`}
                                          onChange={(e) => handleChangeDependentFilter(e, val, index)}
                                          name={val}
                                          checked={item.isChecked}
                                          type={dependentFilters[val].inputType}
                                          id={`${index}`}
                                          label={`${item.label}${dependentFilters[val].unit !== null ? ` ${dependentFilters[val].unit}` : ""}(${item.count})`}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          )}
                        </>
                      ))}
                  </Accordion>
                </div>
              </Offcanvas.Body>
            </div>
          </Offcanvas>

          {/* {isSandwichOpen && (
      <div
        className={`${styles.bottom_div} justify-content-center align-items-center d-flex`}
      >
        <Button
          onClick={clearAllFilters}
          className={`${styles.clearfilter} ms-5 me-3 `}
          variant="outline-secondary w-100 "
        >
          {" "}
          Clear filter{" "}
        </Button>
        <Button
          onClick={() => setisSandwichOpen(false)}
          className={`${styles.apply} w-100  me-5`}
          variant="secondary  "
        >
          {" "}
          Apply{" "}
        </Button>
      </div>
    )} */}
        </div>
      </div>
    </div>
  );
};

export default SideFilters;
