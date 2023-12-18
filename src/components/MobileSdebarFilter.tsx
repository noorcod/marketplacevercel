import bstyles from "../styles/Sidebar.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { search, searchLight } from "../../public/icons";
import styles from "../styles/MobileSideFilter.module.css";
import MultiRangeSlider from "./MultiRangeSlider";
import { Accordion, Button, Dropdown, Form, Offcanvas } from "react-bootstrap";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const MobileSidebarFilter = ({
  isSandwichOpen,
  setisSandwichOpen,
  filtersData,
  isLoading,
  setMobileFilter,
  dependentFilters,
  setFilters,
  setCategory,
  setLocation,
  orderBy,
  setOrderBy,
}: any) => {
  const [searchf, setSearchf] = useState<string>("");
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
  useEffect(() => {
    if(dependentFilters){
      setUpdatedData({
        ...updatedData,brands: dependentFilters?.map((brand: Object) => ({ brand_id:brand?.brand_id,brand:brand?.brand, isChecked: false })),
      })
    }

  },[dependentFilters])
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
    const filteredBrands = updatedData.brands?.filter(
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
      title: searchf,
      ...(priceRange && { price: priceRange }),
      ...(orderBy && { orderBy: orderBy }),
    };
    if (
      filteredCategories?.length > 0
    ) {
      setCategory(filteredCategories[0]?.label)
    }
     if(filteredLocations?.length > 0){
      setLocation(`${filteredLocations.map((item: any) => item.id).join("-")}`)
    }

    setFilters(newFilter);
  }, [updatedData, searchf, priceRange, orderBy]);
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
    } else {
      newValues[e.target.name][e.target.id].isChecked = e.target.checked;
    }
    setUpdatedData(newValues);
  };
  const clearAllFilters = () => {
    setSearchf("");
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
      brands: updatedData?.brands?.map((brand: Object) => ({
        ...brand,
        isChecked: false,
      })),
      locations: updatedData?.locations?.map((location:any ) => ({...location, isChecked: false })),
      title: "",
      priceRange: updatedData?.priceRange,
    });
    setPriceRange("");
    setOrderBy({});
  };
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ from: min, to: max });
  };
  const clearSingleFilter = (filter: any) => {
    setUpdatedData({
      ...updatedData,
      [filter]: updatedData?.[filter]?.map((item: Object) => ({
        ...item,
        isChecked: false,
      })),
    });
  };

  console.log("first",updatedData)
  return (
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
                <input
                  type="search"
                  value={searchf}
                  onChange={(e) => {
                    setSearchf(e.target.value);
                  }}
                  className=" rounded-0 fs-14 rounded-start   w-100"
                  placeholder="Search by keyword(s)"
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
                  onClick={() => clearSingleFilter("categories")}
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
            <Accordion.Item eventKey="4">
              <Accordion.Header className={`${styles.nav_header}`}>
                Locations{" "}
                <span
                  className="ms-2 secondary-link"
                  onClick={() => clearSingleFilter("locations")}
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
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header className={`${styles.nav_header} `}>
                Brand{" "}
                <span
                  className="ms-2 secondary-link"
                  onClick={() => clearSingleFilter("brands")}
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
                      {updatedData.brands?.map((item: any, index: number) => (
                        <Form.Check
                          key={index}
                          className={`${styles.checkbox}`}
                          onChange={handleCheckboxChange}
                          name="brands"
                          checked={item.isChecked}
                          type="checkbox"
                          id={`${index}`}
                          label={`${item.brand}(200)`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className={`${styles.nav_header}`}>
                Colors{" "}
                <span
                  className="ms-2 secondary-link"
                  onClick={() => clearSingleFilter("colors")}
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
                  onClick={() => clearSingleFilter("conditions")}
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
                <div className="d-grid justify-content-center">
                  <div
                    className={` d-flex justify-content-between ${styles.nav_mb} mb-4 `}
                  >
                    <MultiRangeSlider
                      min={updatedData?.priceRange?.minPrice}
                      max={updatedData?.priceRange?.maxPrice}
                      minValue={updatedData?.priceRange?.minPrice}
                      maxValue={updatedData?.priceRange?.maxPrice}
                      onChange={({ min, max }: any) =>
                        // console.log(`min = ${min}, max = ${max}`)
                      }
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
  );
};

export default MobileSidebarFilter;
