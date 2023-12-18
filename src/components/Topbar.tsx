"use client";
import Image from "next/image";
import Link from "next/link";
import { Col, Dropdown, Row } from "react-bootstrap";
import { announcement, favourite, userIcon } from "../../public/icons/index";
import style from "./../styles/Topbar.module.css";
import { useEffect, useState } from "react";
import useAuth from "./auth/useAuth";
import { useUserStore } from "../store/User";
import { useWishlistStore } from "../store/wishList";
import { usePathname, useRouter } from "next/navigation";
import ScrollDown from "./ScrollDown";
const Topbar = ({ handleOpenReservationOffcanvas, handleOpenWishlistOffcanvas }: any) => {
  const router = useRouter();
  const { user, token } = useUserStore((state: any) => state);
  const pathname = usePathname();
  const { wishlistItems, count } = useWishlistStore((list: any) => list);
  const { verifyToken, Logout } = useAuth();
  useEffect(() => {
    if (!token) {
      verifyToken();
    }
  }, [token]);
  return (
    <main className="main">
      <Row className={`py-2 ${style.banner} border-bottom`}>
        <Col className={`d-flex align-items-center px-0 gap-2 ${style.bannerText}`}>
          <Image className={style.announcement} src={announcement} alt={"announcement"} width={20} height={20} />
          <span>
            TechBazaar - Connecting Tech Retailers with Tech Lovers{" "}
            <Link className="link text-decoration-underline" href="https://techbazaar.io/">
              Know more
            </Link>
          </span>
        </Col>
        <Col className={` align-items-center justify-content-end pe-0 gap-3 ${style.rightBanner}`}>
          {token ? (
            // <Link href={"/wishlist"}>
            <div className="d-flex ms-3 align-items-center gap-2 cursor-pointer" onClick={handleOpenWishlistOffcanvas}>
              <span className="d-sm-inline d-none">Wishlist</span>
              <div className="position-relative" style={{ width: "20px", height: "20px" }}>
                <Image src={favourite} alt="favourite" style={{ width: "100%", height: "100%" }} />
                <div
                  className="position-absolute bg-white"
                  style={{
                    top: "0",
                    right: "-50%",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    boxShadow: "0 0 1px black",
                  }}
                >
                  <span
                    className="link"
                    style={{
                      fontSize: "11px",
                    }}
                  >
                    {wishlistItems.length}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            // </Link>
            <></>
          )}
          <div>
            {token ? (
              <>
                <Dropdown className="picon px-0">
                  <Dropdown.Toggle className="px-0 d-flex align-items-center gap-2" variant="" id="dropdown-basic">
                    <div style={{ width: "20px", height: "20px" }}>
                      <Image src={userIcon} alt="user" style={{ width: "100%", height: "100%" }} />
                    </div>
                    <span className="d-sm-inline">{user?.first_name}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as="span" className="cursor-pointer" onClick={handleOpenReservationOffcanvas}>
                      Reservations
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={() => {
                        Logout();
                      }}
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>{" "}
              </>
            ) : (
              <Link href={`/login?redirect=${pathname}`}>
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex align-items-center" style={{ width: "20px", height: "20px" }}>
                    <Image src={userIcon} alt="user" style={{ width: "100%", height: "100%" }} />
                  </div>
                  <span className="d-sm-inline">Sign In</span>
                </div>
              </Link>
            )}
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default Topbar;
