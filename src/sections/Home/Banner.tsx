"use client";

import Image from "next/image";
import styles from "../../styles/Banner.module.css";
import { banner, banner1, banner2, banner3, banner4, banner5, banner6 } from "../../../public/images";
import { search, searchLight, location, box } from "../../../public/icons";
import { Button, Col, Form, Row } from "react-bootstrap";
import Link from "next/link";
import ScrollDown from "../../components/ScrollDown";
import { useState } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { getCity, getCondition } from "../../app/apis/getApis";

const Banner = () => {
  const [selectedCondition, setSelectedCondition] = useState<any>(null);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [searchInput, setSearchInput] = useState("");
  const queryClient = useQueryClient();

  const citiesData = useQuery({
    queryKey: ["nabSearchCity"],
    queryFn: getCity,
  });
  const conditionsData = useQuery({
    queryKey: ["nabSearchCondition"],
    queryFn: getCondition,
  });

  //  const citiesData=queryClient.getQueryData(["nabSearchCity"])
  //  const conditionsData=queryClient.getQueryData(["nabSearchCondition"])
  const router = useRouter();
  const pathname = usePathname();
  const searchOnChangeHandle = (e: any) => {
    setSearchInput(e.target.value.replace(/\s+/g, " "));
  };

  const searchSubmitHandle = (e: any) => {
    e.preventDefault();
    let paramss = new URLSearchParams();
    if (searchInput.trim().length > 0) {
      paramss.append("search", searchInput.trim());
    }
    if (selectedCondition) {
      paramss.append("condition_ids", `[${selectedCondition}]`);
    }
    if (selectedLocation) {
      paramss.append("city_id", `${selectedLocation}`);
    }
    if (pathname === "/products") {
      window.location.href = `/products?params=${encodeURIComponent(paramss)}`;
    } else {
      router.push(`/products?params=${encodeURIComponent(paramss)}`);
    }
  };
  return (
    <>
      <div className={`${styles.bannerWrapper}  position-relative`} id="heroBanner">
        <Row className={`${styles.bannerInner} flex-lg-row flex-column-reverse`}>
          <Col className="p-0 text-md-center text-sm-center  text-center d-none d-md-block">
            <Image className={`${styles.bannerImg}`} alt="banner" src={banner} width={500} height={500} />
          </Col>
          <Col className={`mt-md-5 mt-0 my-5 p-0`}>
            <div className={`${styles.bannerTextWrapper}`}>
              <h1 className={`${styles.bannerText} text-md-start text-start  text-lg-start`}>Find your favourite products</h1>

              <div className={`position-relative d-flex align-items-center ${styles.searchbar}`}>
                <Image className={`position-absolute`} src={search} alt="search" width={18} height={18} />
                <input type="search" value={searchInput} placeholder="Search by Name" onChange={searchOnChangeHandle} className="ps-5 border-dark rounded w-100" />
              </div>
              <Row className={`mt-3 ${styles.dropdownItems}`}>
                <Col className={`pe-0  ${styles.cities}`}>
                  <div className={`position-relative d-flex align-items-center ${styles.dropdowns}`}>
                    <Image className={`position-absolute`} src={location} alt="location" width={18} height={18} />
                    <Form.Select
                      onChange={(e) => {
                        setSelectedLocation(e.target.value);
                      }}
                      defaultValue="default"
                      value={selectedLocation}
                      className="border-dark border-end-0 rounded-0 rounded-start"
                    >
                      <option disabled value="default" className="border-0 ps-0">
                        Select Cities
                      </option>

                      {citiesData?.data?.data?.body?.data?.map((city) => (
                        <option value={city.city_id}>{city.city_name}</option>
                      ))}
                    </Form.Select>
                  </div>
                </Col>
                <Col className={`ps-0  ${styles.condition}`}>
                  <div className={`position-relative d-flex align-items-center ${styles.dropdowns}`}>
                    <Image className={`position-absolute`} src={box} alt="condition" width={18} height={18} />
                    <Form.Select
                      onChange={(e) => {
                        setSelectedCondition(e.target.value);
                      }}
                      defaultValue="default"
                      value={selectedCondition}
                      className="border-dark rounded-0 rounded-end"
                    >
                      <option disabled value="default" className="border-0 ps-0 text-secondary">
                        Select condition
                      </option>
                      {conditionsData?.data?.data?.body?.data.map((con) => (
                        <option value={con.id}>{con.label}</option>
                      ))}
                    </Form.Select>
                  </div>
                </Col>
              </Row>
              <div className={styles.ctaButton}>
                <Button onClick={searchSubmitHandle} type="submit" className="w-100 mt-4">
                  <Image src={searchLight} alt="searchBox" width={18} height={18} />
                </Button>
              </div>
              <p className="my-3 text-secondary text-center">Or</p>
              <div className="text-center mb-0">
                <Link href="products" className="link text-center">
                  Find all filters {">"}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <ScrollDown className={styles.ScrollDown} />
        </div>
      </div>
    </>
  );
};

export default Banner;
