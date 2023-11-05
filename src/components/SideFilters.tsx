'use client';
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
const SideFilters = ({
  filtersData,
  isLoading,
  setFilters,
  dependentFilters,
  locaitons,
  setCategory,setBrand,setColor ,setCondition,setLocation,setdependentFilters,
  orderBy,
  setisSandwichOpen,
  isSandwichOpen,
  setOrderBy,
}: any) => {
  const [search, setSearch] = useState<string>("");
  const [priceRange, setPriceRange] = useState<any>();
  const [updatedData, setUpdatedData] = useState<any>([]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();




  useEffect(() => {
    if (filtersData) {
      setUpdatedData(filtersData);
    }
  }, [filtersData]);
  // useEffect(() => {
  //   if(dependentFilters){
  //     setUpdatedData({
  //       ...updatedData,brands: dependentFilters?.map((brand: Object) => ({ brand_id:brand?.brand_id,brand:brand?.brand, isChecked: false })),
  //     })
  //   }
  // },[dependentFilters])
  useEffect(() => {
    const filteredCategories = updatedData.categories?.filter(
      (category: any) => category.isChecked === true
    );
    const filteredColors = updatedData.colors?.filter(
      (color: any) => color.isChecked === true
    );
    const filteredConditions = updatedData.conditions?.filter(
      (condition: any) => condition.isChecked === true
    );
    const filteredBrands = dependentFilters?.filter(
      (brand: any) => brand.isChecked === true
    );
    const filteredLocations = updatedData.locations?.filter(
      (location: any) => location.isChecked === true
    );
    const newFilter: object = {
      ...(filteredCategories?.length > 0 && {
        category_ids: filteredCategories.map((item: any) => {
          return { id: item.id, Value: item.label };
        }),
      }),
      ...(filteredColors?.length > 0 && {
        color_ids: filteredColors.map((item: any) => item.color_id),
      }),
      ...(filteredConditions?.length > 0 && {
        condition_ids: filteredConditions.map((item: any) => item.condition_id),
      }),
      ...(filteredBrands?.length > 0 && {
        brand_ids: filteredBrands?.map((item: any) => item.brand_id),
      }),
      ...(filteredLocations?.length > 0 && {
        location_ids: filteredLocations.map((item: any) => item.id),
      }),
      title: search,
      ...(priceRange && { price: priceRange }),
      ...(orderBy && { orderBy: orderBy }),
    };
    if (
      filteredCategories?.length > 0
    ) {
      setCategory(filteredCategories[0]?.label+"-"+filteredCategories[0]?.id)
    }
     if(filteredLocations?.length > 0){
      setLocation(`${filteredLocations.map((item: any) => item.id).join("-")}`)
    }
    if(filteredBrands?.length > 0){
      setBrand(`${filteredBrands.map((item: any) => item.brand_id).join("-")}`)
    }
    if(filteredColors?.length > 0){
      setColor(`${filteredColors.map((item: any) => item.color_id).join("-")}`)
    }
   if(filteredConditions?.length > 0){
      setCondition(`${filteredConditions.map((item: any) => item.condition_id).join("-")}`)
    }
    setFilters(newFilter);
  }, [updatedData,dependentFilters, search, priceRange, orderBy]);
  // const data=await queryClient.getQueryData("todos")

  const handleCheckboxChange = (e: any,) => {
    let newValues = { ...updatedData };
    if (e.target.name === "categories") {
   
        newValues[e.target.name].map((item: any, index: number) => {
          if (Number(index) === Number(e.target.id)) {
            return { ...item, isChecked: e.target.checked };
          } else {
            return { ...item, isChecked: false };
          }
        })
        newValues[e.target.name]=  newValues[e.target.name].map((item: any, index: number) => {
          if (Number(index) === Number(e.target.id)) {
            return { ...item, isChecked: e.target.checked };
          } else {
            return { ...item, isChecked: false };
          }
        })
    } else if(e.target.name === "brands"){
      let val=[...dependentFilters]
      val[e.target.id].isChecked = e.target.checked;
      setdependentFilters(val)
    }
     else {
      newValues[e.target.name][e.target.id].isChecked = e.target.checked;
    }
    setUpdatedData(newValues);
  };
  const clearAllFilters = () => {
    router.replace(pathname);
    setSearch("");
    setUpdatedData({
      categories: updatedData?.categories?.map((category: Object) => ({
        ...category,
        isChecked: false,
      })),
      colors: updatedData?.colors?.map((color: Object) => ({
        ...color,
        isChecked: false,
      })),
      conditions: updatedData?.conditions?.map((condition: Object) => ({
        ...condition,
        isChecked: false,
      })),
      locations: updatedData?.locations?.map((location:any ) => ({...location, isChecked: false })),
      title: "",
      priceRange: updatedData?.priceRange,
    });
    setPriceRange("");
    setdependentFilters([])
    setOrderBy({});
  };
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ from: min, to: max });
  };
  const clearSingleFilter = (filter: any) => {
    if(filter==="brands"){
      setdependentFilters(dependentFilters?.map((brand: Object) => ({ brand_id:brand?.brand_id,brand:brand?.brand, isChecked: false })))
    }else{
    setUpdatedData({
      ...updatedData,
      [filter]: updatedData?.[filter]?.map((item: Object) => ({
        ...item,
        isChecked: false,
      })),
    });
  }
  };

  const debounce = (mainFunction: Function, delay: number) => {
    // Declare a variable called 'timer' to store the timer ID
    let timer: NodeJS.Timeout;
    // Return an anonymous function that takes in any number of arguments
    return function (min:number,max:number) {
      // Clear the previous timer to prevent the execution of 'mainFunction'
      clearTimeout(timer);
      // Set a new timer that will execute 'mainFunction' after the specified delay
      timer = setTimeout(() => {
        mainFunction(min,max);
      }, delay);
    };
  };
  
  // Create a new debounced version of the 'searchData'
  const debouncedSearchData =debounce(handlePriceChange, 1000);
  // Call the debounced version of 'searchData'

  return (
    <div>
      {" "}
      {isLoading ? (
        <SideFiltersLoader />
      ) : (
        <div
          className={`${styles.sideFilters}  border rounded-2 d-lg-block d-md-none d-none me-4`}
        >
          <div className="search_filter p-4 pb-3 ">
            <div className="d-flex mb-1 ">
              <Form.Control
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className=" rounded-0 fs-14 rounded-start   w-100"
                placeholder="Search by keyword"
              />
              <Button className=" h-100 rounded-0 rounded-end py-2 ">
                <Image
                  src={searchLight}
                  alt="searchLight"
                  width={18}
                  height={18}
                />
              </Button>
            </div>

            <span
              onClick={clearAllFilters}
              className="secondary-link cursor-pointer text-decoration-underline "
            >
              {" "}
              clear all filters{" "}
            </span>
          </div>
          <Accordion
            alwaysOpen
            className={`${styles.accordian_main}`}
            defaultActiveKey={["0", "1", "2", "3"]}
          >
            <Accordion.Item eventKey="3">
              <Accordion.Header className={`${styles.nav_header}`}>
                Categories{" "}
                <span
                  className="ms-2 secondary-link"
                  onClick={() => {
                     setCategory(null) 
                     setBrand(null)
                    clearSingleFilter("categories")
                    setdependentFilters([])

                  }}
                >
                  Clear
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-grid">
                  <div
                    className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                  >
                    <div key={`default-1`} className="mb-3">
                      {updatedData.categories?.map(
                        (item: any, index: number) => (
                          <Form.Check
                            key={index}
                            className={`${styles.checkbox}`}
                            onChange={handleCheckboxChange}
                            name="categories"
                            checked={item.isChecked}
                            type="radio"
                            id={`${index}`}
                            label={`${item.label}`}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Accordion.Body>
             
            </Accordion.Item>
           {dependentFilters?.length>0&& <Accordion.Item eventKey="0">
              <Accordion.Header className={`${styles.nav_header} `}>
                Brand{" "}
                <span
                  className="ms-2 secondary-link"
                  onClick={() => {
                    setBrand(null)
                    clearSingleFilter("brands")}}
                >
                  Clear
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-grid">
                  <div
                    className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                  >
                    <div key={`default-1`} className="mb-3">
                      {dependentFilters?.map((item: any, index: number) => (
                        <Form.Check
                          key={index}
                          className={`${styles.checkbox}`}
                          onChange={handleCheckboxChange}
                          name="brands"
                          checked={item.isChecked}
                          type="checkbox"
                          id={`${index}`}
                          label={`${item.brand}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>}
          {updatedData.locations?.length>0&&  <Accordion.Item eventKey="7">
              <Accordion.Header className={`${styles.nav_header}`}>
                Locations{" "}
                <span
                  className="ms-2 secondary-link"
                  onClick={() => {
                    setLocation(null)
                    clearSingleFilter("locations")}}
                >
                  Clear
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-grid">
                  <div
                    className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                  >
                    <div key={`default-1`} className="mb-3">
                      {updatedData.locations?.map(
                        (item: any, index: number) => (
                          <Form.Check
                            key={index}
                            className={`${styles.checkbox}`}
                            onChange={handleCheckboxChange}
                            name="locations"
                            checked={item.isChecked}
                            type="checkbox"
                            id={`${index}`}
                            label={`${item.location_nick}`}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>}
           
            <Accordion.Item eventKey="1">
              <Accordion.Header className={`${styles.nav_header}`}>
                Colors{" "}
                <span
                  className="ms-2 secondary-link"
                  onClick={() => {
                    setColor(null)
                    clearSingleFilter("colors")}}
                >
                  Clear
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-grid">
                  <div
                    className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                  >
                    <div key={`default-1`} className="mb-3">
                      {updatedData.colors?.map((item: any, index: number) => (
                        <Form.Check
                          key={index}
                          className={`${styles.checkbox}`}
                          onChange={handleCheckboxChange}
                          name="colors"
                          checked={item.isChecked}
                          type="checkbox"
                          id={`${index}`}
                          label={`${item.color}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header className={`${styles.nav_header}`}>
                Condition{" "}
                <span
                  className="ms-2 secondary-link"
                  onClick={() => {
                    setCondition(null)
                    clearSingleFilter("conditions")}}
                >
                  Clear
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-grid">
                  <div
                    className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                  >
                    <div key={`default-1`} className="mb-3">
                      {updatedData.conditions?.map(
                        (item: any, index: number) => (
                          <Form.Check
                            key={index}
                            className={`${styles.checkbox}`}
                            onChange={handleCheckboxChange}
                            name="conditions"
                            checked={item.isChecked}
                            type="checkbox"
                            id={`${index}`}
                            label={`${item.condition_item}`}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header className={`${styles.nav_header}`}>
                Prices{" "}
                <span
                  className="ms-2 secondary-link"
                  onClick={() => clearSingleFilter("conditions")}
                >
                  Clear
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-grid">
                  <div
                    className={` d-flex justify-content-between ${styles.nav_mb} mb-4 `}
                  ></div>
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
                    min={updatedData?.priceRange?.minPrice}
                    max={updatedData?.priceRange?.maxPrice}
                    minValue={updatedData?.priceRange?.minPrice}
                    maxValue={updatedData?.priceRange?.maxPrice}
                    onChange={(min:any,max:any) =>{
                      debouncedSearchData(min.min,min.max)}}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      )}
      <div className="d-lg-none d-md-block d-sm-block d-block" >
      <div className="pos-f-t">
    
    <Offcanvas  backdrop={true} scroll={true} show={isSandwichOpen} onHide={()=>setisSandwichOpen(false)}>

      <div  className={`${styles.filter_div} pt-3 `}>
      <Offcanvas.Header closeButton>

          <h2 className={`${styles.h2}`}>Filter by:</h2>
         
          </Offcanvas.Header>
          <Offcanvas.Body   style={{height: '100vh'}} >

        <div className="search_filter p-4 pb-3 ">
          <div className="d-flex mb-1 ">
            <div
              className={`position-relative w-100 d-flex align-items-center ${styles.searchbar}`}
            >
              {/* <Image
            className={`position-absolute `}
            src={search}
            alt="searchIcon"
            width={18}
            height={18}
          /> */}
              <Form.Control
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className=" rounded-0 fs-14 rounded-start   w-100"
                placeholder="Search by keyword"
              />
            </div>
            <Button className=" h-100 px-4 rounded-0 rounded-end py-1 ">
              <Image
                src={searchLight}
                alt="searchLightIcon"
                width={18}
                height={27}
              />
            </Button>
          </div>
        </div>
        <Accordion
          alwaysOpen
          className={`${styles.accordian_main}`}
          defaultActiveKey={["0", "1", "2", "3"]}
        >
          <Accordion.Item eventKey="3">
            <Accordion.Header className={`${styles.nav_header}`}>
              Categories{" "}
              <span
                className="ms-2 secondary-link"
                onClick={() => {
                  setCategory(null) 
                  setBrand(null)
                 clearSingleFilter("categories")
                 setdependentFilters([])

               }}
              >
                Clear
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                    {updatedData.categories?.map(
                      (item: any, index: number) => (
                        <Form.Check
                          key={index}
                          className={`${styles.checkbox}`}
                          onChange={handleCheckboxChange}
                          name="categories"
                          checked={item.isChecked}
                          type="radio"
                          id={`${index}`}
                          label={`${item.label}`}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </Accordion.Body>
           {dependentFilters?.length>0&& <Accordion.Item eventKey="0">
            <Accordion.Header className={`${styles.nav_header} `}>
              Brand{" "}
              <span
                className="ms-2 secondary-link"
                onClick={() => {
                  setBrand(null)
                  clearSingleFilter("brands")}}
              >
                Clear
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                    {dependentFilters?.map((item: any, index: number) => (
                      <Form.Check
                        key={index}
                        className={`${styles.checkbox}`}
                        onChange={handleCheckboxChange}
                        name="brands"
                        checked={item.isChecked}
                        type="checkbox"
                        id={`${index}`}
                        label={`${item.brand}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>}
          </Accordion.Item>
         { updatedData.locations?.length>0&& <Accordion.Item eventKey="4">
            <Accordion.Header className={`${styles.nav_header}`}>
              Locations{" "}
              <span
                className="ms-2 secondary-link"
                onClick={() => {
                  setLocation(null)
                  clearSingleFilter("categories")}}
              >
                Clear
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                    {updatedData.locations?.map(
                      (item: any, index: number) => (
                        <Form.Check
                          key={index}
                          className={`${styles.checkbox}`}
                          onChange={handleCheckboxChange}
                          name="locations"
                          checked={item.isChecked}
                          type="checkbox"
                          id={`${index}`}
                          label={`${item.location_nick}`}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>}
          
          <Accordion.Item eventKey="1">
            <Accordion.Header className={`${styles.nav_header}`}>
              Colors{" "}
              <span
                className="ms-2 secondary-link"
                onClick={() => {
                  setColor(null)
                  clearSingleFilter("colors")}}
              >
                Clear
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                    {updatedData.colors?.map((item: any, index: number) => (
                      <Form.Check
                        key={index}
                        className={`${styles.checkbox}`}
                        onChange={handleCheckboxChange}
                        name="colors"
                        checked={item.isChecked}
                        type="checkbox"
                        id={`${index}`}
                        label={`${item.color}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header className={`${styles.nav_header}`}>
              Condition{" "}
              <span
                className="ms-2 secondary-link"
                onClick={() => {
                  setCondition(null)
                  clearSingleFilter("conditions")}}
              >
                Clear
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                    {updatedData.conditions?.map(
                      (item: any, index: number) => (
                        <Form.Check
                          key={index}
                          className={`${styles.checkbox}`}
                          onChange={handleCheckboxChange}
                          name="conditions"
                          checked={item.isChecked}
                          type="checkbox"
                          id={`${index}`}
                          label={`${item.condition_item}`}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header className={`${styles.nav_header}`}>
              Prices{" "}
              <span
                className="ms-2 secondary-link"
                onClick={() => clearSingleFilter("priceRange")}
              >
                Clear
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid justify-content-center">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb} mb-4 `}
                >
                  <MultiRangeSlider
                    min={updatedData?.priceRange?.minPrice}
                    max={updatedData?.priceRange?.maxPrice}
                    minValue={updatedData?.priceRange?.minPrice}
                    maxValue={updatedData?.priceRange?.maxPrice}
                    onChange={({ min, max }: any) => debouncedSearchData(min, max)}
                    
                  />
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
          </Accordion.Item>
        </Accordion>
      </Offcanvas.Body>

      </div>
      </Offcanvas>

    {isSandwichOpen && (
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
    )}
  </div>

      </div>
    </div>
  );
};

export default SideFilters;
