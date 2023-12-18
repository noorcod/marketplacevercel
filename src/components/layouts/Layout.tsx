"use client";
import React, { useState, useEffect } from "react";
import { Sidebar } from "..";
import Topbar from "../Topbar";
import Footer from "../Footer";
import Header from "../Header";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getNavMenuData } from "../../app/apis/getApis";
import ReservationOffcanvas from "../ReservationOffcanvas";
import { usePathname } from "next/navigation";
import WishlistOffcanvas from "../WishlistOffcanvas";

const Layout = ({ children }: any) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isReservationOffcanvasOpen, setIsReservationOffcanvasOpen] =
    useState(false);
  const [isWishlistOffcanvasOpen, setIsWishlistOffcanvasOpen] = useState(false);

  const pathname = usePathname();

  const [showHomeNavbar, setShowHomeNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroBanner = document.getElementById("heroBanner");
      if (heroBanner) {
        const offset = heroBanner.offsetHeight;
        setShowHomeNavbar(window.scrollY <= offset);
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenReservationOffcanvas = () => {
    setIsReservationOffcanvasOpen((prev) => !prev);
  };
  const handleCloseOffcanvas = () => {
    setIsReservationOffcanvasOpen(false);
  };

  const [isSandwichOpen, setisSandwichOpen] = useState(false);

  const navDataQuery = useQuery({
    queryKey: ["navMenuData"],
    queryFn: getNavMenuData,
  });

  const sandwichTriger = () => {
    setisSandwichOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  const handleOpenWishlistOffcanvas = () => {
    setIsWishlistOffcanvasOpen((prev) => !prev);
  };
  const handleCloseWishlistOffcanvas = () => {
    setIsWishlistOffcanvasOpen(false);
  };
  return (
    <>
      {pathname.includes("login") || pathname.includes("signup") ? (
        <></>
      ) : (
        <>
          <Sidebar
            setisSandwichOpen={setisSandwichOpen}
            isSandwichOpen={isSandwichOpen}
            navData={navDataQuery?.data?.data.body.data}
          />
          <Topbar
            handleOpenReservationOffcanvas={handleOpenReservationOffcanvas}
            handleOpenWishlistOffcanvas={handleOpenWishlistOffcanvas}
          />
          <Header
            sandwichTriger={sandwichTriger}
            navData={navDataQuery?.data?.data.body.data}
            handleOpenReservationOffcanvas={handleOpenReservationOffcanvas}
            showClassicNav={showHomeNavbar}
            handleOpenWishlistOffcanvas={handleOpenWishlistOffcanvas}
          />
        </>
      )}
      <>{children}</>
      {pathname.includes("login") || pathname.includes("signup") ? (
        <></>
      ) : (
        <>
          <Footer />
          <ReservationOffcanvas
            show={isReservationOffcanvasOpen}
            handleClose={handleCloseOffcanvas}
          />{" "}
          <WishlistOffcanvas
            show={isWishlistOffcanvasOpen}
            handleClose={handleCloseWishlistOffcanvas}
          />
        </>
      )}
    </>
  );
};

export default Layout;
