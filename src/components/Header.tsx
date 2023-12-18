"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Button, Dropdown, Form, Nav, NavDropdown, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "../styles/Header.module.css";
import { tblogo, tblogoName } from "../../public/images/index";
import { openNavButton, closeNavButton, navHomeIcon, navLaptopIcon, navTriangleShape, navAccessoryIcon, navLEDIcon, navTabletIcon, navDesktopIcon, navMobileIcon, box, location } from "../../public/icons/index";
import { hanburger, favourite, userIcon, reserveIcon, search } from "../../public/icons/index";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import useAuth from "./auth/useAuth";
import { useUserStore } from "../store/User";
import { useWishlistStore } from "../store/wishList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCity, getCondition, getSearchSuggestions } from "../app/apis/getApis";

const navImageMap: { [key: string]: any } = {
  LAPTOP: navLaptopIcon,
  ACCESSORY: navAccessoryIcon,
  "TV MONITOR": navLEDIcon,
  TABLET: navTabletIcon,
  DESKTOP: navDesktopIcon,
  MOBILE: navMobileIcon,
};

const capitalizeText = (text: string) => {
  const words = text.split(" ");
  const newWords = words.map((value: string) => {
    return value.slice(0, 1).toUpperCase() + value.slice(1, value.length).toLowerCase();
  });
  return newWords.join(" ");
};

const Header = ({ sandwichTriger, navData, handleOpenReservationOffcanvas, showClassicNav = false, handleOpenWishlistOffcanvas }: any) => {
  // const [active, setActive] = useState<any>();
  // const [navActive, setNavActive] = useState<any>();
  const { Logout } = useAuth();
  const { user, token } = useUserStore((state: any) => state);
  const { wishlistItems, count } = useWishlistStore((list: any) => list);
  const [smallScreenSearchShow, setSmallScreenSearchShow] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={`${pathname === "/" ? styles.navContainer : ""} border-bottom  `}>
      <main className={`main`}>
        <div bg="white" className={` ${styles.nav_bar}`} expand="lg">
          <div className="d-flex  justify-content-between align-items-center w-100">
            <div className="d-flex align-items-center p-0">
              <div
                className={`ps-3 pt-2 pe-2 d-lg-none    pb-2 text-center ${styles.hamburger} border-end`}
                onClick={() => {
                  sandwichTriger();
                }}
              >
                <Image className="me-2" alt="hamburger" src={hanburger} height="15" width={18} />
              </div>
              <Link href="/">
                <div className="d-flex  flex-nowrap ps-3">
                  <Image className={`me-2 ${styles.tblogo} `} src={tblogo} alt={"Logo"} height="32" width={30} />
                  <Image className={` d-lg-inline d-md-inline d-none d-sm-inline ${styles.tblogoName}`} src={tblogoName} alt={"Logo name"} height={30} width={135} />
                </div>
              </Link>
            </div>

            {pathname === "/" ? (
              <Navbar as={motion.div} initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: "tween", duration: 0.5 }} className={`d-none ${showClassicNav ? "d-lg-flex" : ""} w-100 ps-3 d-flex justify-content-end`} id="classicNavbar">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className={`${styles.navrow}`} id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                    {navData &&
                      navData.map((category: any, index: number) => (
                        <NavDropdown as="span" title={capitalizeText(category.label)} className={`w-100 text-capitalize ${styles.homeNavitem} ${styles.navitemActive} `} id={`NavItemLink${index}`}>
                          {category.brands.map((brand: any, index: number) => (
                            <NavDropdown.Item
                              as={Link}
                              key={brand.id}
                              className={`d-grid  pb-3 ${styles.nav_content} ${(index + 1) % 7 === 0 ? "" : styles.nav_border} ${brand.has_items === 0 ? styles.disabledNavItem : ""}`}
                              href={
                                brand.has_items === 0
                                  ? "#"
                                  : `/products?${createParams([
                                      ["brand_ids", `[${brand.id}]`],
                                      ["category_id", category.id],
                                    ])}`
                              }
                            >
                              <motion.span
                                initial={{ y: "10px", opacity: 0 }}
                                whileInView={{ y: "0px", opacity: 1 }}
                                transition={{
                                  type: "tween",
                                  duration: 0.2,
                                }}
                                className={`${styles.navsubitems} `}
                              >
                                {" "}
                                {brand.label}
                              </motion.span>
                            </NavDropdown.Item>
                          ))}
                          <NavDropdown.Item className={`d-grid  pb-3 ${styles.nav_content}  ${(index + 1) % 7 === 0 ? "" : styles.nav_border}`} href={`/products?${createParams([["category_id", category.id]])}`}>
                            <motion.span
                              initial={{ y: "10px", opacity: 0 }}
                              whileInView={{ y: "0px", opacity: 1 }}
                              transition={{
                                type: "tween",
                                duration: 0.2,
                              }}
                              className={`${styles.navsubitems} ${styles.navViewAllOption}`}
                            >
                              View All
                            </motion.span>
                          </NavDropdown.Item>
                        </NavDropdown>
                      ))}

                    <NavDropdown
                      title=" Specs Central"
                      onClick={() => {
                        router.push("/specs");
                      }}
                      className={`me-3 w-100 mt-1 notArrow ${styles.homeNavitem} ${styles.navitemActivespecs} `}
                      id="#action3"
                    >
                      Specs Central
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            ) : (
              <></>
            )}

            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.5 }}
              className={`${pathname === "/" && showClassicNav ? "d-none" : "d-none d-lg-flex"} w-100 ps-3 py-2 d-flex justify-content-between align-items-baseline`}
              id="HeaderNavbar"
            >
              <div>
                <NavButton navData={navData} />
              </div>
              <div className="w-100 px-4">
                <SearchBar />
              </div>
              <div className="cursor-pointer">
                <div className="d-flex align-items-baseline gap-2 ">
                  <Link className={`d-sm-inline d-none text-nowrap pe-1  ${styles.specs_central}`} href={`/specs`}>
                    Specs Central
                  </Link>
                </div>
              </div>
            </motion.div>
            <div className="d-flex d-lg-none">
              {smallScreenSearchShow ? (
                ""
              ) : (
                <div
                  className="d-flex me-3 align-items-center gap-2"
                  onClick={() => {
                    setSmallScreenSearchShow(true);
                  }}
                >
                  <div style={{ width: "20px", height: "20px" }}>
                    <Image src={search} alt="search" style={{ width: "100%", height: "100%" }} />
                  </div>
                </div>
              )}
              {token ? (
                <div
                  className="d-flex me-3 align-items-center gap-2  cursor-pointer"
                  onClick={handleOpenWishlistOffcanvas}
                  // onClick={() => {
                  //   router.push("/wishlist");
                  // }}
                >
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
                <></>
              )}
              <div className="pe-3">
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
                        <Dropdown.Item onClick={handleOpenReservationOffcanvas} href="#">
                          Reservations
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                          onClick={() => {
                            Logout();
                          }}
                          href="#"
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
            </div>
          </div>
        </div>
      </main>
      {smallScreenSearchShow ? (
        <div
          className="d-block d-lg-none "
          style={{
            backgroundColor: "#EDF2FA",
          }}
        >
          <div className="main p-4 pe-0 d-flex flex-nowrap align-items-center ">
            <SearchBar />
            <FontAwesomeIcon
              icon={faClose}
              className="px-3"
              onClick={() => {
                setSmallScreenSearchShow(false);
              }}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const createParams = (filters: any[]) => {
  let paramss = new URLSearchParams();
  filters.forEach((filter: [string, any]) => {
    paramss.append(...filter);
  });
  return `params=${encodeURIComponent(paramss)}`;
};

const SearchBar = ({}) => {
  const [selectedCondition, setSelectedCondition] = useState<any>(null);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [searchInput, setSearchInput] = useState("");
  const [openSuggestions, setOpenSuggestions] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const suggestionDiv = useRef(null);
  const cityDataQuery = useQuery({
    queryKey: ["nabSearchCity"],
    queryFn: getCity,
  });
  const conditionDataQuery = useQuery({
    queryKey: ["nabSearchCondition"],
    queryFn: getCondition,
  });

  const searchOnChangeHandle = (e: any) => {
    setSearchInput(e.target.value.replace(/\s+/g, " "));
    if (e.target.value.replace(/\s+/g, " ").length > 0) {
      setOpenSuggestions(true);
    } else {
      setOpenSuggestions(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchKey(searchInput);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  const searchSuggestionQuery = useQuery({
    queryKey: ["searchSuggestion", searchKey],
    queryFn: () => {
      return getSearchSuggestions(searchKey);
    },
  });

  const searchSubmitHandle = (e: any) => {
    let paramss = new URLSearchParams();
    if (searchInput.trim().length > 0) {
      paramss.append("search", searchInput.trim());
    }
    if (selectedCondition) {
      paramss.append("condition_ids", `[${selectedCondition.id}]`);
    }
    if (selectedLocation) {
      paramss.append("city_id", `${selectedLocation.id}`);
    }
    if (pathname === "/products") {
      window.location.href = `/products?params=${encodeURIComponent(paramss)}`;
    } else {
      router.push(`/products?params=${encodeURIComponent(paramss)}`);
    }
  };

  return (
    <div className="position-relative w-100">
      <div className={`d-flex flex-nowrap rounded w-100 bg-white ${styles.searchBox}`} style={{ border: "1px solid rgba(201, 201, 201, 1)" }}>
        <div className={`position-absolute d-flex align-items-center ps-2 ${styles.searchIconDiv}`}>
          <Image alt="" className="" src={search} width={18} height={18} />
        </div>
        <input
          type="search"
          value={searchInput}
          onChange={searchOnChangeHandle}
          onFocus={(e) => {
            if (searchInput.length > 0) {
              setOpenSuggestions(true);
            }
          }}
          onBlur={(e: any) => {
            setTimeout(() => {
              setOpenSuggestions(false);
            }, 300);
          }}
          className={`border-0 w-100 ${styles.searcInput}`}
        />
        <IconDropdown
          icon={location}
          data={
            cityDataQuery?.data && cityDataQuery?.data?.data.body.data
              ? [
                  ...cityDataQuery?.data.data.body.data.map(({ city_id, city_name }: any) => ({
                    id: city_id,
                    label: city_name,
                  })),
                ]
              : []
          }
          selectedOption={selectedLocation}
          setSelectedOption={setSelectedLocation}
        />
        <IconDropdown icon={box} data={conditionDataQuery?.data && conditionDataQuery?.data?.data.body.data ? conditionDataQuery?.data.data.body.data : []} selectedOption={selectedCondition} setSelectedOption={setSelectedCondition} />
        <Button className={`border-0  ${styles.searchButton}`} onClick={searchSubmitHandle}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>
      {openSuggestions ? (
        <div className={` ${styles.suggestionMenue} position-absolute bg-white w-100 px-3 py-2 border rounded `} style={{ zIndex: "1000" }} ref={suggestionDiv}>
          {searchSuggestionQuery?.data?.data.body.data.length > 0 ? (
            searchSuggestionQuery?.data?.data.body.data.map((suggestion: any, index: number) => (
              <div
                className={`py-2 cursor-pointer ${styles.suggestionValues} ${searchSuggestionQuery?.data?.data.body.data.length - 1 === index ? "" : "border-bottom"}`}
                onClick={(e: any) => {
                  setSearchInput(suggestion.listing_title);
                  setTimeout(() => {
                    setOpenSuggestions(false);
                  }, 100);
                  e.stopPropagation();
                }}
              >
                {suggestion.listing_title}
              </div>
            ))
          ) : (
            <>No Suggestion Available</>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const IconDropdown = ({
  icon,
  data,
  setSelectedOption = (e: any) => {
    console.log("Selected", e);
  },
  selectedOption = null,
}: any) => {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown>
      <OverlayTrigger placement="top" overlay={!!selectedOption ? <Tooltip>{selectedOption?.label}</Tooltip> : <></>}>
        <Dropdown.Toggle className={`${styles.iconDropdown}`}>
          <>
            <Image width={40} height={20} alt="" className={``} src={icon} />
            {selectedOption ? <div className={styles.badge}></div> : <></>}
          </>
        </Dropdown.Toggle>
      </OverlayTrigger>
      <Dropdown.Menu>
        <Dropdown.Item
          className={`${styles.items} ${selectedOption === null ? styles.activeItem : ""}`}
          onClick={() => {
            setSelectedOption(null);
          }}
        >
          All
        </Dropdown.Item>
        {data.map((option: any, index: number) => (
          <>
            <Dropdown.Divider />
            <Dropdown.Item
              className={`${styles.items} ${option.id === selectedOption?.id ? styles.activeItem : ""}`}
              style={
                data.length - 1 === index
                  ? {
                      borderBottom: "0",
                    }
                  : {}
              }
              onClick={() => {
                setSelectedOption(option);
              }}
            >
              {option.label}
            </Dropdown.Item>
          </>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const A = ({ children }: any) => {
  return <a>{children}</a>;
};
const NavButton = ({ navData }: any) => {
  const [categoryHovered, setCategoryHovered] = useState<any | null>(null);
  const pathname = usePathname();

  return (
    <>
      <Dropdown style={{ position: "relative", cursor: "pointer" }}>
        <Dropdown.Toggle className={`border-0 p-0  ${styles.navButtonBootstrap}`}>
          <Image className={styles.openNavButton} src={openNavButton} alt="openNavButton" width={35} height={35} />
          <Image className={styles.closeNavButton} src={closeNavButton} alt="closeNavButton" width={35} height={35} />
        </Dropdown.Toggle>

        <Dropdown.Menu className={`${styles.navMenu}`}>
          {navData &&
            navData.map((category: any, index: number) => (
              <>
                <Dropdown.Item
                  href={`/products?${createParams([["category_id", category.id]])}`}
                  onMouseEnter={() => {
                    setCategoryHovered(index);
                  }}
                  key={index}
                >
                  <MainNavItem icon={navImageMap[category.label]} title={category.label} isArrowIcon={true} />
                  {categoryHovered === index ? (
                    <div className={`${styles.subNavContainer}`} style={{ position: "absolute" }}>
                      <div className={`me-3 w-100 ${styles.navitem} `}>
                        {category.brands.map((brand: any, index: number) => (
                          <>
                            {pathname !== "/products" ? (
                              <Link
                                key={index}
                                href={
                                  brand.has_items === 0
                                    ? "#"
                                    : `/products?${createParams([
                                        ["brand_ids", `[${brand.id}]`],
                                        ["category_id", category.id],
                                      ])}`
                                }
                                className={`${styles.nav_content} ${(index + 1) % 7 === 0 ? "" : styles.nav_border} ${brand.has_items === 0 ? styles.disabledItem : ""}`}
                              >
                                <motion.span initial={{ y: "10px", opacity: 0 }} whileInView={{ y: "0px", opacity: 1 }} transition={{ type: "tween", duration: 0.2 }} className={`${styles.navsubitems}`}>
                                  {brand.label}
                                </motion.span>
                              </Link>
                            ) : (
                              <a
                                key={index}
                                href={
                                  brand.has_items === 0
                                    ? "#"
                                    : `/products?${createParams([
                                        ["brand_ids", `[${brand.id}]`],
                                        ["category_id", category.id],
                                      ])}`
                                }
                                className={`${styles.nav_content} ${(index + 1) % 7 === 0 ? "" : styles.nav_border} ${brand.has_items === 0 ? styles.disabledItem : ""}`}
                              >
                                <motion.span initial={{ y: "10px", opacity: 0 }} whileInView={{ y: "0px", opacity: 1 }} transition={{ type: "tween", duration: 0.2 }} className={`${styles.navsubitems}`}>
                                  {brand.label}
                                </motion.span>
                              </a>
                            )}
                          </>
                        ))}
                        <Link href={`/products?${createParams([["category_id", category.id]])}`} className={`${styles.nav_content} ${styles.nav_border}`}>
                          <motion.span initial={{ y: "10px", opacity: 0 }} whileInView={{ y: "0px", opacity: 1 }} transition={{ type: "tween", duration: 0.2 }} className={`${styles.navsubitems} link`}>
                            View All
                          </motion.span>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </Dropdown.Item>
                {navData.length - 1 === index ? <></> : <Dropdown.Divider />}
              </>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const MainNavItem = ({ icon, title, isArrowIcon }: any) => {
  return (
    <div className={`d-flex justify-content-between ${styles.navMenuOption}`}>
      <div className="d-flex align-items-center gap-2">
        <div
          style={{
            width: "25px",
            height: "25px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image src={icon} alt={title + "icon"} style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="d-sm-inline">{title}</div>
      </div>
      {isArrowIcon ? (
        <div className="">
          <Image src={navTriangleShape} alt="triangle icon" width={10} height={10} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
