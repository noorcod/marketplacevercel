import React from 'react'
import { Accordion } from 'react-bootstrap'
import styles from "../styles/SideFilters.module.css";
import loadStyle from "../styles/LoadingCard.module.css"
function SideFiltersLoader() {
    return (
        <div>   <div>
            <div>
                {" "}
                <div
                    className={`${styles.sideFilters}  border rounded-2 d-lg-block d-md-none d-none me-4`}
                >
                    <div className="search_filter p-4 pb-3 ">
                        <div className="d-flex mb-1 ">
                            <h5 style={{ width: "160px", height: "37px" }} className={` ${loadStyle.skeleton} fw-bold  fs-16 m-0`}></h5>

                            <div style={{ width: "28px", height: "37px" }} className={`${loadStyle.skeleton} ms-1 `}>
                            </div>
                        </div>

                        <h5 style={{ width: "100px", height: "15px" }} className={` ${loadStyle.skeleton} fw-bold  fs-16 m-0`}></h5>

                    </div>
                    <Accordion alwaysOpen className={`${styles.accordian_main}`} defaultActiveKey="0">
                        <h5 style={{ width: "230px", height: "45px" }} className={` ${loadStyle.skeleton} fw-bold mb-2 mx-2 fs-16 m-0`}></h5>
                        <h5 style={{ width: "230px", height: "45px" }} className={` ${loadStyle.skeleton} fw-bold mb-2 mx-2 fs-16 m-0`}></h5>


                        <h5 style={{ width: "230px", height: "45px" }} className={` ${loadStyle.skeleton} fw-bold mb-2 mx-2 fs-16 m-0`}></h5>

                        <h5 style={{ width: "230px", height: "45px" }} className={` ${loadStyle.skeleton} fw-bold mb-2 mx-2 fs-16 m-0`}></h5>

                        <h5 style={{ width: "230px", height: "45px" }} className={` ${loadStyle.skeleton} fw-bold mb-2 mx-2 fs-16 m-0`}></h5>

                    </Accordion>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SideFiltersLoader