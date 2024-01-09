import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { sellerLogo, storeLogo } from "../../../public/images";
import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
import { Badge, Button, Row } from "react-bootstrap";
import styles from "../../styles/SellerBanner.module.css";
import Breadcrumbs from "../../components/Breadcrumb";
import loadStyles from "../../styles/LoadingCard.module.css";
import Loading from "../../app/loading";
import ContactSellerModal from "../../components/ContactSellerModal";

// const ContactSellerModal = dynamic(() => import("../../components/ContactSellerModal"), {
//   loading: () => <Loading/>,
// } as any);
// import ContactSellerModal from "../../components/ContactSellerModal";
const SellerBanner = ({
  shopData,
  mainLocationData,
  isLaoding,
  dependentFilters,
  filtersData,
  filtersCheckedData,
  setdependentFilters,
  setCatCahnge,
  setfiltersData,
  filters,
  setPriceRange,
  priceRange,
  filterINDFilters
}: any) => {
  const [contactModal, setContactModal] = useState(false);
  // const [filtersData, setfiltersData] = useState<any>([]);

  const handleContactModal = () => {
    setContactModal(true);
  };
  // useEffect(() => {
  //   if (filtersData) {
  //     setfiltersData(filtersData);
  //   }
  // }, []);
  useEffect(() => {
    // filtersCheckedData(filtersData, dependentFilters);
  }, [filtersData, dependentFilters]);
  const clearSingleFilter = (filter: any) => {

      setfiltersData({
        ...filtersData,
        [filter]: filtersData?.[filter]?.map((item: Object) => ({
          ...item,
          isChecked: false,
        })),
      });
    
  };
  const handleCheckboxChange = (id,name) => {
    let newValues = { ...filtersData };
    setCatCahnge(true)
    if (name === "categories") {
        newValues[name].map((item: any, index: number) => {
          if (Number(index) === Number(id)) {
            return { ...item, isChecked: false };
          } else {
            return { ...item, isChecked: false };
          }
        })
        newValues[name]=  newValues[name].map((item: any, index: number) => {
          if (Number(index) === Number(id)) {
            return { ...item, isChecked: false };
          } else {
            return { ...item, isChecked: false };
          }
        })
    }

     else {
      newValues[name][id].isChecked = false;
    }
    setfiltersData(prev=>({...prev,newValues}));
  };
  // if (mainLocationData?.shop_working_days)
  // ("locations", JSON.parse(mainLocationData?.shop_working_days));
  const handleChangeDependentFilter = (val:any,id:any) => {
    setCatCahnge(true)
    setdependentFilters(prev=>{
      const updated=prev[val]?.values?.map((item:any,i:any)=>{
        if(i===id && prev[val].inputType==="checkbox"){
          return {...item,isChecked:false}
        }else if(prev[val].inputType==="radio"){
          if(i===id){

            return {...item,isChecked:false}
          }else{
            return {...item,isChecked:false}

          }
           
        } 
          return item
      })
      return {...prev, [val]:{...prev[val],values:updated}}
    })

    // let val={...dependentFilters}
    // val[e.target.name][e.target.id].isChecked = e.target.checked;
    // setdependentFilters(val)
  }
  return (
    <div>
      <div className={`${styles.breadcrumbs}`}>
        <Breadcrumbs />
      </div>
      <div className="d-flex justify-content-center">
        <div className={`${styles.sellerBanner_div} d-flex`}>
          <div className={`${styles.imgcontainer} d-flex `}>
          <h1
            className={`d-flex justify-content-center align-items-center p-3  ${styles.shop_name}`}
            style={{  margin: "3em auto", }}
          >
            {shopData?.shop_name.toString().toUpperCase()}
          </h1>

          <div
            className={`${styles.logo_div} d-lg-flex d-md-flex d-sm-flex d-xs-flex d-block align-items-end`}
          >
            {isLaoding ? (
              <div className={`${styles.logo}`}>
                <div
                  style={{
                    borderRadius: "999px",
                  }}
                  className={loadStyles.skeleton}
                ></div>
              </div>
            ) : (
              <div className={`${styles.logo}`}>
                <Image
                  height={220}
                  width={220}
                  alt="cover photo"
                  src={shopData?.logo_path === null ? storeLogo : shopData?.logo_path}
                />
              </div>
            )}
            <div className={`${styles.description}`}>
              <Button
                onClick={() => handleContactModal()}
                className="fs-16 d-lg-none px-5 rounded-1"
                variant="secondary"
              >
                Contact seller
              </Button>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className={`${styles.second_div} main  `}>
        <div className="mb-3 ">
          {filtersData.categories?.map(
            (item: any, index: number) =>
              item.isChecked === true && (
                <Badge className="py-2 px-3 border me-1 my-2 cursor-pointer" pill bg="light" text="dark">
                  <span className="me-2"> {item.label}</span>
                  <span
                    onClick={() => {
                      setdependentFilters([])
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
                        locations: filtersData?.locations?.map((location:any ) => ({...location, isChecked: false })),
                        title: "",
                        priceRange: filtersData?.priceRange,
                      });
                    }}
                  >
                    X
                  </span>
                </Badge>
              )
          )}
            {filtersData.locations?.map(
            (item: any, index: number) =>
              item.isChecked === true && (
                <Badge className="py-2 px-3 border" pill bg="light" text="dark">
                  <span className="me-2"> {item.location_nick}</span>
                  <span
                    onClick={() => {
                      handleCheckboxChange(index,"locations")
                    }}
                  >
                    X
                  </span>
                </Badge>
              )
          )}
           {filtersData.colors?.map(
            (item: any, index: number) =>
              item.isChecked === true && (
                <Badge className="py-2 px-3 border me-1 cursor-pointer" pill bg="light" text="dark">
                  <span className="me-2"> {item.label}</span>
                  <span
                    onClick={() => {
                      handleCheckboxChange(index,"colors")
                    }}
                  >
                    X
                  </span>
                </Badge>
              )
          )}
           {filtersData.conditions?.map(
            (item: any, index: number) =>
              item.isChecked === true && (
                <Badge className="py-2 px-3 border me-1 cursor-pointer" pill bg="light" text="dark">
                  <span className="me-2"> {item.label}</span>
                  <span
                    onClick={() => {
                      handleCheckboxChange(index,"conditions")
                    }}
                  >
                    X
                  </span>
                </Badge>
              )
          )}
            {(filterINDFilters?.category_id && filters.filterDpendentFilters!==undefined)?  Object.keys(filters.filterDpendentFilters).map((val:any,i:any)=>(
              <>
             {dependentFilters[val]?.values.map((item:any,index:any)=>(
              item.isChecked===true &&
            <Badge className="py-2 px-3 border me-1 cursor-pointer" pill bg="light" text="dark">
                  <span className="me-2"> {val?.replaceAll(/_/g, " ")}: ({item?.label?.toString()?.replaceAll(/_/g, " ")})</span>
                  <span
                    onClick={() => {
                      handleChangeDependentFilter(val,index)
                    }}
                  >
                    X
                  </span>
                </Badge>))}
            </>
            )):""}
               {(priceRange?.to)?  
                <Badge className="py-2 px-3 border me-1 cursor-pointer" pill bg="light" text="dark">
                  <span className="me-2"> PKR {priceRange.from}-{priceRange.to}</span>
                  <span
                    onClick={() => {
                      setPriceRange()
                    }}
                  >
                    X
                  </span>
                </Badge>
              :""
          }
        </div>
      </div>
      <ContactSellerModal
        shopDetails={shopData}
        locations={mainLocationData}
        city={mainLocationData?.city?.city_name}
        show={contactModal}
        onHide={() => setContactModal(false)}
      />
    </div>
  );
};

export default SellerBanner;
