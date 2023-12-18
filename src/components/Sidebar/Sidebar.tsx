import { faRightFromBracket, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { profile, tblogo, tblogoName } from "../../../public/images";
import styles from "../../styles/Sidebar.module.css";
import Image from "next/image";
import { Accordion, Button, Dropdown, Offcanvas } from "react-bootstrap";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const Sidebar = ({ isSandwichOpen, setisSandwichOpen, navData }: any) => {
  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef, setIsSandwichOpen);
  const [domLoaded, setDomLoaded] = useState(false);
  const router = useRouter();
  const handleCanvasClose = () => {
    setisSandwichOpen(false);
  };
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const pathname = usePathname();
  const createParams = (filters: any[]) => {
    let paramss = new URLSearchParams();
    filters.forEach((filter: [string, any]) => {
      paramss.append(...filter);
    });
    return `params=${encodeURIComponent(paramss)}`;
  };
  const A = ({ children }: any) => {
    return <a>{children}</a>;
  };
  return (
    <>
      <Offcanvas show={isSandwichOpen} onHide={handleCanvasClose} className="d-block d-lg-none" backdropClassName="d-block d-lg-none">
        <Offcanvas.Header closeButton>
          <Link href="/">
            <Offcanvas.Title>
              <div className="d-flex  flex-nowrap ps-1">
                <Image className={`me-2 ${styles.tblogo} `} src={tblogo} alt={"Logo"} height="32" width={30} />
                <Image className={` d-lg-inline d-md-inline d-none d-sm-inline ${styles.tblogoName}`} src={tblogoName} alt={"Logo name"} height={30} width={135} />
              </div>
            </Offcanvas.Title>
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion>
            {navData &&
              navData.map((category: any) => (
                <Accordion.Item className={styles.acor_item} eventKey={category.id}>
                  <Accordion.Header className={`${styles.nav_header}`}>
                    <div  >
                      {category.label}
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className={`${styles.accordianBodyContainer}`} style={{ height: "35vh", overflowY: "auto" }}>
                    <div className="d-grid">
                      {category.brands.slice(0, 10).map((brand: any, index: number) => (
                        <div className={` d-flex justify-content-between p-3 border-bottom ${brand.has_items === 0 ? "text-muted " : "cursor-pointer"}`} onClick={handleCanvasClose}>
                          {pathname !== "/products" ? (
                            <Link
                              href={
                                brand.has_items === 0
                                  ? "#"
                                  : `/products?${createParams([
                                      ["brand_ids", `[${brand.id}]`],
                                      ["category_id", category.id],
                                    ])}`
                              }
                              className="w-100"
                            >
                              {brand.label}
                            </Link>
                          ) : (
                            <Link
                              href={
                                brand.has_items === 0
                                  ? "#"
                                  : `/products?${createParams([
                                      ["brand_ids", `[${brand.id}]`],
                                      ["category_id", category.id],
                                    ])}`
                              }
                              className="w-100"
                            >
                              {brand.label}
                            </Link>
                          )}
                        </div>
                      ))}
                      <div className={` d-flex justify-content-between p-3 `} onClick={handleCanvasClose}>
                        <Link href={`/products?${createParams([["category_id", category.id]])}`} className="w-100 link">
                          View All
                        </Link>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            <div className={styles.specsCentralSidebar}>
              <h2>
                <button>
                  <Link href={`/specs`} onClick={handleCanvasClose}>
                    SPECS CENTRAL
                  </Link>
                </button>
              </h2>
            </div>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
