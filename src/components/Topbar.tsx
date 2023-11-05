'use client'
import Image from "next/image";
import Link from "next/link";
import { Col, Dropdown, Row } from "react-bootstrap";
import { announcement, favourite, userIcon } from "../../public/icons/index";
import style from "./../styles/Topbar.module.css";
import { useEffect, useState } from "react"
import useAuth from "./auth/useAuth";
import { useUserStore } from "../store/User";
const Topbar = () => {
  const { user,token } = useUserStore(
    (state: any) => state,
  );
  const {verifyToken,Logout}=useAuth();
  useEffect(()=>{
    if(!token){
      verifyToken()
    }
  },[token])

  return (
    <main className="main">
      <Row className={`py-2 ${style.banner}`}>
        <Col
          className={`d-flex align-items-center px-0 gap-2 ${style.bannerText}`}
        >
          <Image
            className={style.announcement}
            src={announcement}
            alt={"announcement"}
            width={20}
            height={20}
          />
          <span>
          TechBazaar - Connecting Tech Retailers with Tech Lovers {" "}
            <Link className="link text-decoration-underline" href="https://techbazaar.io/">
              Know more
            </Link>
          </span>
        </Col>
        <Col
          className={` align-items-center justify-content-end pe-0 gap-3 ${style.rightBanner}`}
        >
          <div className="d-flex align-items-center gap-2">
            {/* TODO: Check if a user is logged in then show the Saved items Text and Icon.*/}
            <Image style={{display: "none !important"}} src={favourite} alt="favourite" width={15} height={15} />
            <span style={{display: "none !important"}}>
              Saved items(<span className="link">0</span>)
            </span>
          </div>
          <div className="d-flex align-items-center ">
            {user && 
            <Dropdown className="picon px-0" >
              <Dropdown.Toggle className="px-0" variant="" id="dropdown-basic">
                <Image src={userIcon} alt="user" width={15} height={15} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={()=>{
                Logout()
                }} href="#">
                  Logout
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>}
            
            {!user ? <Link href="/login">Sign in</Link> : <span >{user?.first_name}</span>}
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default Topbar;
