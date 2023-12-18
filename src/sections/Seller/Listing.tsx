"use client";
import Image from "next/image";
import { filterIcon, location, search, sortIcon } from "../../../public/icons";
import React, { useEffect, useState } from "react";
import styles from "../../styles/SellerListing.module.css";
import { Button, Card, Form } from "react-bootstrap";
import ReserveDetails from "../../components/ReserveDetails";
import { useRouter } from "next/navigation";
import ListingLoader from "../../components/ListingLoader";
import PaginationBar from "../../components/PaginationBar";
import Link from "next/link";
import SignInModal from "../../components/SignInModal";
import WishlistIcon from "../../components/WishlistIcon";
import { useUserStore } from "../../store/User";
import shop from "../../app/store/[slug]/page";
import PhoneNumberModal from "../../components/PhoneNumberModal";
import NoItemsFound from "../../components/NoItemsFound";
import imagePlaceholder from "../../../public/images/imagePlaceholder.png";

const Listing = ({ setOrderBy, search, orderBy, filters, setFilters, totalItems, sandwichTriger, setMobileFilter, shopItems, isLoading, sizeOfPages, setSizeOfPages, currentPage, changePage, noOfPages, clearFilters }: any) => {
  const [reserveModal, setReserveModal] = useState(false);
  const [reserveData, setReserveData] = useState({});
  const { user } = useUserStore((state: any) => state);
  const [signInModal, setSignInModal] = useState(false);
  const [PNModal, setPNModal] = useState(false);


  return (
    <div className="mx-1">
      <div className="d-flex justify-content-between align-items-baseline">
        <p className="w-100">{shopItems?.length > 0 && `${10 * (currentPage - 1) + 1}-${(10 * (currentPage - 1) + shopItems.length, totalItems)} of ${totalItems} Results`}</p>

        <div className="d-flex w-100">
          <Form.Select
            onChange={(e) => {
              setSizeOfPages(e.target.value);
            }}
            className="ms-3"
            aria-label="Default select example"
          >
            <option value={10}>
              Showing {10 * (currentPage - 1) + 1}-{10 * (currentPage - 1) + 10}
            </option>
            <option value={20}>
              Showing {20 * (currentPage - 1) + 1}-{10 * (currentPage - 1) + 20}
            </option>
            <option value={30}>
              Showing {30 * (currentPage - 1) + 1}-{10 * (currentPage - 1) + 30}
            </option>
          </Form.Select>
          <Form.Select
            className="d-none d-lg-block ms-3"
            aria-label="Default select example"
            disabled={search ? true : false}
            value={orderBy?.price}
            defaultValue=""
            onChange={(e) => {
              console.log(e.target.value);
              let value = e.target.value;
              if (value === "asc") {
                setOrderBy({
                  price: "asc",
                });
              } else if (value === "desc") {
                setOrderBy({ price: "desc" });
              }
            }}
          >
            <option key="blankChoice" hidden value="">
              {" "}
              Sort by{" "}
            </option>
            <option id="price" value="asc">
              Price low to high
            </option>
            <option id="price" value="desc">
              Price high to low
            </option>
            {/* <option  id="title" value="ASC">Top sold</option> */}
            {/* <option value="ASC">Top reviewed</option> */}
          </Form.Select>
        </div>
      </div>
      <div className="w-100 d-block  d-md-flex mt-3 d-lg-none ">
        <Button
          onClick={() => {
            sandwichTriger();
          }}
          className={`w-100 me-3 mb-2 rounded-2 ${styles.filter_btn} `}
        >
          <Image className="me-1" src={filterIcon} alt="filterIcon" /> Filter by
        </Button>
        <Button onClick={() => setMobileFilter("sort")} className={`w-100 rounded-2 mb-2  ${styles.filter_btn}`}>
          {" "}
          <Image src={sortIcon} alt="sort icon" /> Sort by
        </Button>
      </div>
      {isLoading ? (
        <ListingLoader />
      ) : (
        <div>
          {shopItems?.map((data: any) => (
            <SellerItemsCard
              data={data}
              setReserveModal={setReserveModal}
              user={user}
              setSignInModal={setSignInModal}
              setReserveData={setReserveData}
              setPNModel={setPNModal}

              // id={data.listing_id}
              // item={data.item}
              // discount={data.online_discount}
              // discountUnit={data.online_discount_unit}
              // price={data?.online_price}
              // image={data?.item.itemImages?.img0}
              // title={data.listing_title}
            />
          ))}
          {shopItems?.length < 1 && (
            <div className="text-center align-items-center justify-content-center mt-5 ">
              <NoItemsFound clearFilters={clearFilters} />
            </div>
          )}
        </div>
      )}
      <ReserveDetails
        show={reserveModal}
        reserveData={reserveData}
        onHide={() => {
          setReserveModal(false);
        }}
      />
      <SignInModal title="Please create an account." show={signInModal} onHide={() => setSignInModal(false)} />
      <PhoneNumberModal show={PNModal} onHide={() => setPNModal(false)} />
      {shopItems?.length > 0 && (
        <div className="text-center d-flex justify-content-center">
          <PaginationBar noOfPages={noOfPages} currentPage={currentPage} changePage={changePage} />
        </div>
      )}
    </div>
  );
};

export default Listing;

interface productProp {
  data: any;
  setReserveModal: any;
  user: any;
  setSignInModal: any;
  setReserveData: any;
  setPNModel: any;
}

interface heightType {
  height: {
    delay: number;
    duration: number;
  };
}
const SellerItemsCard: React.FC<productProp> = ({ data, setReserveModal, user, setSignInModal, setReserveData, setPNModel }) => {
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState<any>(data?.item.itemImages?.img0);


  const calculatePrice = (price: any, discount: any, discountUnit: any) => {
    if (discountUnit === "percentage") {
      return price - price * (discount / 100);
    } else if (discountUnit === "fixed") {
      return price - discount;
    }
  };

  return (
    <>
      <div className="mt-4">
        <Card className={`${styles.card_main} cursor-pointer d-flex rounded-1 position-relative overflow-hidden`}>
          <div className={`d-flex ${styles.Card_body}`}>
            <div style={{ maxWidth: "188px" }}>
              <Image
                onClick={() => {
                  router.push(`/products/${data?.listing_title.replaceAll(" ", "-").replaceAll("/", "--")}-${data.listing_id}`);
                }}
                className={`rounded-1 image_cover ${styles.card_image}`}
                height={0}
                width={0}
                sizes="100vw"
                src={imageSrc ? imageSrc : `${imagePlaceholder.src}`}
                alt="productImg"
                onError={(e) => {
                  setImageSrc( `${imagePlaceholder.src}`);
                }}                
              />
              <span className={`position-absolute ${styles.fav_icon}`} style={{ marginLeft: "-32px" }}>
                <WishlistIcon listingId={data.listing_id} title={data.listing_title} />
              </span>
            </div>
            <Card.Body
              onClick={() => {
                router.push(`/products/${data?.listing_title.replaceAll(" ", "-").replaceAll("/", "--")}-${data.listing_id}`);
              }}
              className="ms-3"
            >
              <div className="w-100 d-flex h-100">
                <div className="w-75 d-flex flex-column">
                  <Card.Title className="mb-0">
                    <p className="fs-20 fw-700 mb-0">{data.listing_title}</p>
                  </Card.Title>
                  <div className="d-flex mt-2">
                    <div style={{ minWidth: "30%" }} className="d-block d-lg-none d-md-none d-sm-none align-items-baseline mb-2 text-nowrap">
                      <h6
                        onClick={() => {
                          router.push(`/products/${data.title.replaceAll(" ", "-").replaceAll("/", "--")}-${data.listing_id}`);
                        }}
                        className={`${styles.h6} `}
                      >
                        Rs. {calculatePrice(data?.online_price, data?.online_discount, data?.online_discount_unit)?.toLocaleString("en-IN")}
                      </h6>
                      {data.online_discount > 0 ? (
                        <div className="d-flex mb-2 flex-wrap gap-1">
                          <div className={`${styles.price_cut} `}>Rs. {data?.online_price}</div>
                          <div className={`${styles.Off} me-2 px-2 rounded-2 `}>{data.online_discount_unit === "fixed" ? "Rs." + data.online_discount + " OFF" : data.online_discount + "% OFF"}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-4 d-lg-block d-md-block d-sm-block d-none  me-2 fs-14">{data?.listingColorAssociations[0].color}</div>
                    <div className={`d-lg-inline d-md-inline d-none fs-14`}>
                      <div className={`${styles.Off} px-2  rounded-2`}>{data?.item.condition_item}</div>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <div className="d-flex align-items-baseline   ">
                      <Image className="me-1  rounded-2 " src={location} alt="location" height="12" width="10" />
                      <p className={`${styles.location}`}>{data?.item?.location?.city?.city_name} Pakistan</p>
                    </div>
                  </div>
                </div>
                <div className="w-25 d-none d-lg-flex d-md-flex d-sm-flex flex-column fs-md-1 ">
                  <h6
                    onClick={() => {
                      router.push(`/products/${data.title.replaceAll(" ", "-").replaceAll("/", "--")}-${data.listing_id}`);
                    }}
                    className={`${styles.h6} `}
                  >
                    Rs. {calculatePrice(data?.online_price, data?.online_discount, data?.online_discount_unit)?.toLocaleString("en-IN")}
                  </h6>
                  {data.online_discount > 0 ? (
                    <div className="d-flex mb-2 gap-1 ">
                      <div className={`${styles.price_cut} `}>Rs. {data?.online_price}</div>
                      <div className={`${styles.Off} me-2 px-2 rounded-2 `}>{data.online_discount_unit === "fixed" ? "Rs." + data.online_discount + " OFF" : data.online_discount + "% OFF"}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="mt-auto w-100 mb-3 d-flex flex-row">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (user) {
                          
                          setReserveData({
                            listingId: data.listing_id,
                            itemId: data.item.item_id,
                            locationId: data.item.location_id,
                            shop_id: data.item.shop_id,
                            listedQuantity: data?.listed_quantity,
                          });
                          setReserveModal(true);
                        } else {
                          setReserveData(null);
                          setSignInModal(true);
                        }
                      }}
                      className="me-1 me-lg-3 me-md-5 me-xl-2"
                      variant="outline-secondary"
                      style={{ width: "103px" }}
                    >
                      Reserve
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
};
