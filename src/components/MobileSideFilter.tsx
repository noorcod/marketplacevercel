import Image from "next/image";
import React, { useState,useEffect } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import { search, searchLight } from "../../public/icons";

import styles from "../styles/MobileSideFilter.module.css";
import MultiRangeSlider from "./MultiRangeSlider";
const MobileSideFilter = ({ filtersData,isLoading, setMobileFilter,setFilters }:any) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  const [search, setSearch] = useState<string>("")
  const [updatedData, setUpdatedData] = useState<any>([])
  useEffect(() => {
    setUpdatedData(filtersData)
  }, [filtersData])
  useEffect(() => {
    const filteredCategories = updatedData.categories?.filter((category: any) => category.isChecked === true);
    const filteredColors = updatedData.colors?.filter((color: any) => color.isChecked === true);
    const filteredConditions = updatedData.conditions?.filter((condition: any) => condition.isChecked === true);
    const filteredBrands = updatedData.brands?.filter((brand:any) => brand.isChecked === true);
    setFilters({
      categories: filteredCategories,
      colors: filteredColors,
      conditions: filteredConditions,
      brands: filteredBrands,
      title:search
    })
  }, [updatedData,search])
  
  // const data=await queryClient.getQueryData("todos")
  const handleCheckboxChange = (e: any) => {
    let newValues={...updatedData}
    console.log(e.target.checked,"name", updatedData[e.target.name],newValues)
   newValues[e.target.name][e.target.id].isChecked = e.target.checked;
    setUpdatedData(newValues)
  }
  const clearAllFilters = () => {
    setSearch("")
  setUpdatedData({
    categories : updatedData?.categories?.map((category: Object) => ({ ...category, isChecked: false })),
    colors: updatedData?.colors?.map((color:Object) => ({ ...color, isChecked: false })),
    conditions: updatedData?.conditions?.map((condition: Object) => ({ ...condition, isChecked: false })),
    brands: updatedData?.brands?.map((brand: Object) => ({ ...brand, isChecked: false })),
    title:""
  })
  }
  return (
    <div className={`${styles.filter_div} pt-3 `}>
      <div className="d-flex  mx-4 justify-content-between align-items-centrer">
        <h2 className={`${styles.h2}`}>Filter by:</h2>
        <span onClick={() => setMobileFilter("")}>Close X</span>
      </div>
      <div className="search_filter p-4 pb-3 ">
        <div className="d-flex mb-1 ">
          <div
            className={`position-relative w-100 d-flex align-items-center ${styles.searchbar}`}
          >
            <Image
              className={`position-absolute `}
              src={search}
              alt="searchIcon"
              width={18}
              height={18}
            />
            <Form.Control
              className="ps-5  rounded-0 rounded-start  py-2 w-100"
              placeholder="Search by name"
            />
          </div>
          <Button className=" h-100 px-4 rounded-0 rounded-end py-2 ">
            <Image src={searchLight} alt="searchLightIcon" width={18} height={26} />
          </Button>
        </div>
      </div>
      <Accordion alwaysOpen className={`${styles.accordian_main}`} defaultActiveKey="0">
        <Accordion.Item eventKey="3">
            <Accordion.Header className={`${styles.nav_header}`}>
              Categories{" "}
              <a href="#" className="ms-2 secondary-link">
                {" "}
                Clear
              </a>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                  {updatedData.categories?.map((item: any, index: number) => (<Form.Check
                      className={`${styles.checkbox}`}
                      onChange={handleCheckboxChange}
                      name="categories"
                      checked={item.isChecked}
                      type="checkbox"
                      id={`${index}`}
                      label={`${item.label}`}
                    />))}
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header className={`${styles.nav_header} `}>
              Brand{" "}
              <a href="#" className="ms-2 secondary-link">
                {" "}
                Clear
              </a>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                    {updatedData.brands?.map((item: any, index: number) => (<Form.Check
                      className={`${styles.checkbox}`}
                      onChange={handleCheckboxChange}
                      name="brands"
                      checked={item.isChecked}
                      type="checkbox"
                      id={`${index}`}
                      label={`${item.brand}(200)`}
                    />))}
                
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className={`${styles.nav_header}`}>
              Colors{" "}
              <a href="#" className="ms-2 secondary-link">
                {" "}
                Clear
              </a>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                  {updatedData.colors?.map((item: any, index: number) => (<Form.Check
                      className={`${styles.checkbox}`}
                      onChange={handleCheckboxChange}
                      name="colors"
                      checked={item.isChecked}
                      type="checkbox"
                      id={`${index}`}
                      label={`${item.color}`}
                    />))}
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header className={`${styles.nav_header}`}>
              Condition{" "}
              <a href="#" className="ms-2 secondary-link">
                {" "}
                Clear
              </a>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                  {updatedData.conditions?.map((item: any, index: number) => (<Form.Check
                      className={`${styles.checkbox}`}
                      onChange={handleCheckboxChange}
                      name="conditions"
                      checked={item.isChecked}
                      type="checkbox"
                      id={`${index}`}
                      label={`${item.condition_item}`}
                    />))}
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        
          <Accordion.Item eventKey="4">
            <Accordion.Header className={`${styles.nav_header}`}>
              Prices{" "}
              <a href="#" className="ms-2 secondary-link">
                {" "}
                Clear
              </a>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb} mb-4 `}
                >
                  <MultiRangeSlider
                    min={updatedData?.priceRange?.minPrice}
                    max={updatedData?.priceRange?.maxPrice}
                    minValue={updatedData?.priceRange?.minPrice}
                    maxValue={updatedData?.priceRange?.maxPrice}
                    onChange={({ min, max }: any) =>
                      console.log(`min = ${min}, max = ${max}`)
                    }
                  />
                </div>
                {/* <Button
                  onClick={() => {
                    setMinValue(100);
                    setMaxValue(1500);
                  }}
                  variant="outline-secondary "
                  className="mt-4"
                >
                  Rs. 100 to Rs. 1500
                </Button>
                <Button
                  onClick={() => {
                    setMinValue(100);
                    setMaxValue(700);
                  }}
                  variant="outline-secondary mt-2"
                >
                  Rs. 100 to Rs. 700
                </Button>
                <Button
                  onClick={() => {
                    setMinValue(100);
                    setMaxValue(3000);
                  }}
                  variant="outline-secondary mt-2"
                >
                  Rs. 100 to Rs. 3000
                </Button>
                <Button
                  onClick={() => {
                    setMinValue(600);
                    setMaxValue(4000);
                  }}
                  variant="outline-secondary mt-2"
                >
                  Rs. 600 to Rs. 4000
                </Button> */}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      <div
        className={`${styles.bottom_div} justify-content-center align-items-center d-flex`}
      >
        <Button
          className={`${styles.clearfilter} ms-5 me-3 `}
          variant="outline-secondary w-100 "
        >
          {" "}
          Clear filter{" "}
        </Button>
        <Button className={`${styles.apply} w-100  me-5`} variant="secondary  ">
          {" "}
          Apply{" "}
        </Button>
      </div>
    </div>
  );
};

export default MobileSideFilter;
