import { faFaceFrown, faFrownOpen, faSadCry } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from "../styles/NoItemsFound.module.css"
function NoItemsFound({clearFilters}:any) {
  return (
    <div><div className={`${styles.empty_state} mt-md-5 mt-5 mt-lg-0`}>
   <FontAwesomeIcon  color='#ccc' fontSize={"4rem"} icon={faFaceFrown} />
    <h3 className="">No Items</h3>
    <p>No items are currently available   </p>
    {/* <button onClick={()=>{
      clearFilters("categories")
      
      }} className='btn btn-primary w-75'>Clear Filters</button> */}
  </div></div>
  )
}

export default NoItemsFound