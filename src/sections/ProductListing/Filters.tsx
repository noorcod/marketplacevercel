import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/ProductListing.module.css";
import { search, searchLight, location, box } from "../../../public/icons";
function Filters() {
  return (
    <main>
      <div
        className={`${styles.products_listing_div} my-2 d-lg-block d-md-block d-none `}
      >
        <div className="main">
          <div>
            <Form>
              <div className="d-flex p-4 justify-content-center">
                <div
                  className={`position-relative d-flex align-items-center ${styles.searchbar}`}
                >
                  <Image
                  alt=""
                    className={`position-absolute `}
                    src={search}
                    width={18}
                    height={18}
                  />
                  <input
                    type="search"
                    className="ps-5  rounded-0 rounded-start  py-2 w-100"
                    placeholder="Search by name"
                  />
                </div>
                <div
                  className={`position-relative d-flex align-items-center ${styles.dropdowns}`}
                >
                  <Image
                  alt=""
                    className={`position-absolute`}
                    src={location}
                    width={20}
                    height={20}
                  />
                  <Form.Select className=" border-end-0  py-2 px-5  rounded-0 ">
                    <option value="All" className="border-0 ps-0">
                      All Cities
                    </option>
                    <option value="" className="border-0">
                      Lahore
                    </option>
                    <option value="">Islamabad</option>
                    <option value="">Karachi</option>
                  </Form.Select>
                </div>
                <div
                  className={`position-relative d-flex align-items-center ${styles.dropdowns}`}
                >
                  <Image
                  alt=""
                    className={`position-absolute`}
                    src={box}
                    width={20}
                    height={20}
                  />
                  <Form.Select className=" ps-5 py-2 px-5 rounded-0 ">
                    <option value="All" className="border-0 ps-0">
                      All products
                    </option>
                    <option value="">Used</option>
                    <option value="">New</option>
                    <option value="">Refurbished</option>
                  </Form.Select>
                </div>
                <div>
                  <Button className="w-100 px-4 h-100 rounded-0 rounded-end py-2 ">
                    <Image
                    alt="" src={searchLight} width={18} height={18} />
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Filters;
