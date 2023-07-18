import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Accordion, Button, Col, Form, Row } from "react-bootstrap";
import { search, searchLight } from "../../public/icons";
import styles from "../styles/SideFilters.module.css";
import loadStyle from "../styles/LoadingCard.module.css"
import MultiRangeSlider from "./MultiRangeSlider";
import SideFiltersLoader from "./SideFiltersLoader";
const SideFilters = ({ filtersData,isLoading,setFilters,locaitons }: any) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  const [search, setSearch] = useState<string>("")
  const [priceRange, setPriceRange] = useState<any>()
  const [updatedData, setUpdatedData] = useState<any>([])
  useEffect(() => {
    setUpdatedData(filtersData)
  }, [filtersData])
  useEffect(() => {
    
    const filteredCategories = updatedData.categories?.filter((category: any) => category.isChecked === true);
    const filteredColors = updatedData.colors?.filter((color: any) => color.isChecked === true);
    const filteredConditions = updatedData.conditions?.filter((condition: any) => condition.isChecked === true);
    const filteredBrands = updatedData.brands?.filter((brand:any) => brand.isChecked === true);
    const filteredLocations = updatedData.locations?.filter((brand:any) => brand.isChecked === true);
    const newFilter:object={
    ...(filteredCategories?.length>0&& { category_ids: filteredCategories.map((item:any)=>item.id)}),
      ...(filteredColors?.length>0&& {color_ids: filteredColors.map((item:any)=>item.color_id)}),
      ...(filteredConditions?.length>0&&{condition_ids: filteredConditions.map((item:any)=>item.condition_id)}),
     ...(filteredBrands?.length>0 &&{ brand_ids: filteredBrands?.map((item:any)=>item.brand_id)}),
     ...( filteredLocations?.length>0 && { location_ids:filteredLocations.map((item:any)=>item.id)}),
      title:search,
      ...(priceRange&& {price:priceRange})
    }

    setFilters(newFilter)
  }, [updatedData,search,priceRange])
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
    
    title:"",
    priceRange:updatedData?.priceRange

  })
  setPriceRange("")
  }
console.log("price----->",updatedData.locations)
const handlePriceChange=(min:number,max:number)=>{
setPriceRange({from: min,to:max})
}
  const clearSingleFilter = (filter:any) => {
    setUpdatedData({...updatedData,
      [filter]: updatedData?.[filter]?.map((item: Object) => ({ ...item, isChecked: false })),
    })
  }
  return (
    <div>
      {" "}
      {isLoading?<SideFiltersLoader/>:(
        
     
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

          <a onClick={clearAllFilters} className="secondary-link text-decoration-underline " href="#">
            {" "}
            clear all filters{" "}
          </a>
        </div>
        <Accordion alwaysOpen className={`${styles.accordian_main}`} defaultActiveKey={['0','1','2','3']}>
        <Accordion.Item eventKey="3">
            <Accordion.Header className={`${styles.nav_header}`}>
              Categories{" "}
              <span className="ms-2 secondary-link" onClick={()=>clearSingleFilter("categories")} >
                  Clear
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                  {updatedData.categories?.map((item: any, index: number) => (<Form.Check key={index}
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
          <Accordion.Item eventKey="4">
            <Accordion.Header className={`${styles.nav_header}`}>
              Locations{" "}
              <span className="ms-2 secondary-link" onClick={()=>clearSingleFilter("categories")} >
                  Clear
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                  {updatedData.locations?.map((item: any, index: number) => (<Form.Check key={index}
                      className={`${styles.checkbox}`}
                      onChange={handleCheckboxChange}
                      name="locations"
                      checked={item.isChecked}
                      type="checkbox"
                      id={`${index}`}
                      label={`${item.location_nick}`}
                    />))}
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0">
            <Accordion.Header className={`${styles.nav_header} `}>
              Brand{" "}
              <span className="ms-2 secondary-link" onClick={()=>clearSingleFilter("brands")} >
                  Clear
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                    {updatedData.brands?.map((item: any, index: number) => (<Form.Check key={index}
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
              <span className="ms-2 secondary-link" onClick={()=>clearSingleFilter("colors")} >
                  Clear
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                  {updatedData.colors?.map((item: any, index: number) => (<Form.Check key={index}
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
              <span className="ms-2 secondary-link" onClick={()=>clearSingleFilter("conditions")} >
                  Clear
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb}  px-2`}
                >
                  <div key={`default-1`} className="mb-3">
                  {updatedData.conditions?.map((item: any, index: number) => (<Form.Check key={index}
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
              <span className="ms-2 secondary-link" onClick={()=>clearSingleFilter("conditions")} >
                  Clear
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-grid">
                <div
                  className={` d-flex justify-content-between ${styles.nav_mb} mb-4 `}
                >
               
                </div>
                <Button
                  onClick={() => {
                   handlePriceChange(10000,20000)
                  }}
                  variant="outline-secondary "
                  className="mt-2"
                >
                  Rs. 10,000 to Rs. 20,000
                </Button>
                <Button
                  onClick={() => {
                    handlePriceChange(20000,30000)

                  }}
                  variant="outline-secondary mt-2"
                >
                  Rs. 20,000 to Rs. 30,000
                </Button>
                <Button
                  onClick={() => {
                    handlePriceChange(30000,40000)

                  }}
                  variant="outline-secondary mt-2"
                >
                  Rs. 30,000 to Rs. 40,000
                </Button>
                <Button
                  onClick={() => {
                    handlePriceChange(40000,90000)

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
                    onChange={({ min, max }: any) =>{
                      // setPriceRange({from:min,to:max})
                      // handlePriceChange(min,max),
                      console.log(`min = ${min}, max = ${max}`)
                    }
                    }
                  />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      )}
    </div>
  );
};

export default SideFilters;


