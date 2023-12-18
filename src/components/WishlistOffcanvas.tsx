"use-client";
import React, { useEffect, useState } from "react";
import { Badge, Offcanvas, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import styles from "../styles/Offcanvas.module.css";
import { useQuery } from "@tanstack/react-query";
import { getUserWishlist } from "../app/apis/getApis";
import { useUserStore } from "../store/User";
import PaginationBar from "./PaginationBar";
import Image from "next/image";
import Link from "next/link";
import { useWishlistStore } from "../store/wishList";
import { ellipsis, location } from "../../public/icons";
import WishlistIcon from "./WishlistIcon";
import ReserveDetails from "./ReserveDetails";
import SignInModal from "./SignInModal";
import imagePlaceholder from "../../public/images/imagePlaceholder.png";

function WishlistOffcanvas({ show, handleClose }: any) {
  const { user, token } = useUserStore((state: any) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState<null | number>(1);
  const [noOfItems, setNoOfItems] = useState<null | number>();
  const [sizeOfPages, setSizeOfPages] = useState(10);
  const { count } = useWishlistStore((store: any) => store);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<any>();
  const [actionOverlay, setActionOverlay] = useState(null);

  const getItems = useQuery({
    queryKey: ["wishlistItems", { user, currentPage, count, show }],
    queryFn: () => getUserWishlist(token, user?.uuid, currentPage, 10),
    enabled: !!user,
    refetchOnWindowFocus: true,
    keepPreviousData: true,
    onSuccess: (data: any) => {
      setItems(data.data.body.data);
      setNoOfPages(data?.data.body?.paginationInfo?.totalPages);
      setNoOfItems(data?.data?.body?.paginationInfo?.totalItems);
    },
  });
  const changePage = (page: any) => {
    setCurrentPage(page);
    window.scrollTo(0, 500);
  };

  const onHide = () => {
    setActionOverlay(null);
    handleClose();
  };

  return (
    <>
      <Offcanvas show={show} onHide={onHide} placement="end" onClick={() => setActionOverlay(null)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Saved Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <>
            <p className="d-block text-align-left">{noOfItems} Saved Items</p>{" "}
            <div className="container" onClick={(e) => e.stopPropagation()}>
              {getItems?.data?.data?.body?.data?.map((data: any, index: number) => (
                <Wishlist
                  index={index}
                  listingId={data?.fk_listing_id}
                  item={data?.listings.item}
                  img={data?.listings.item.itemImages.img0}
                  title={data?.listings.listing_title}
                  condition={data?.listings?.item.condition_item}
                  loading={getItems?.isLoading}
                  key={data?.fk_listing_id}
                  discount={parseInt(data?.listings?.online_discount)}
                  discountUnit={data?.listings?.online_discount_unit}
                  activationDate={data?.listings?.activation_date}
                  isDeleted={data?.listings?.is_deleted}
                  archivedOn={data?.listings?.archived_on}
                  price={data?.listings?.online_price}
                  listedQuantity={data?.listings?.listed_quantity}
                  closeOffcanvas={handleClose}
                  actionOverlay={actionOverlay}
                  setActionOverlay={setActionOverlay}
                />
              ))}
            </div>
            {getItems?.data?.data?.body?.data?.length > 0 && <PaginationBar noOfPages={noOfPages} currentPage={currentPage} changePage={changePage} />}
          </>
          {getItems?.data?.data?.body?.data?.length === 0 && <h5 className="d-flex justify-content-center mt-5">No Result Found!</h5>}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default WishlistOffcanvas;

interface heightType {
  height: {
    delay: number;
    duration: number;
  };
}
interface productProp {
  index: number;
  loading?: Boolean;
  title: String;
  price: number;
  condition: string;
  discount?: number | undefined;
  discountUnit?: string;
  activationDate: any;
  archivedOn: any;
  isDeleted: any;
  item: {
    item_id: number;
    shopTable: any;
    location: any;
    itemImages: any;
    location_id: number;
  };
  img: any;
  listingId: number;
  listedQuantity: number;
  closeOffcanvas: any;
  actionOverlay: number | null;
  setActionOverlay: any;
}
const Wishlist: React.FC<productProp> = ({ index, item, loading, img, title, price, condition, discount, listingId, discountUnit, activationDate, archivedOn, isDeleted, listedQuantity, closeOffcanvas, actionOverlay, setActionOverlay }) => {
  const [reserveModal, setReserveModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [imageSrc, setImageSrc] = useState<any>(img);
  const calculatePrice = (price: any, discount: any, discountUnit: any) => {
    if (discountUnit === "percentage") {
      return price - price * (discount / 100);
    } else if (discountUnit === "fixed") {
      return price - discount;
    }
  };
  const handleReserveModal = () => {
    setReserveModal(true);
  };
  const handleActionOverlay = (id: number | null) => {
    setActionOverlay(id);
  };

  return (
    <>
      <div className={`${styles.custom_card} position-relative px-1 py-1 mb-3`}>
        {actionOverlay === index ? (
          <div className="position-absolute w-100 h-100 d-flex justify-content-center border-rounded top-0 start-0 align-items-center" style={{ borderRadius: "5px", background: "#0000007F" }}>
            <div className="position-relative d-flex justify-content-between gap-2" style={{ color: "white", height: "35px" }}>
              {activationDate === null || archivedOn !== null || isDeleted === true ? (
                ""
              ) : (
                <Button variant="primary" onClick={handleReserveModal}>
                  Reserve
                </Button>
              )}
              <Link href={`/store/${item?.shopTable?.username.replaceAll(" ", "-").replaceAll("/", "--")}`}>
                <Button onClick={closeOffcanvas}>Visit Stop</Button>
              </Link>
              <WishlistIcon top="0px" right="0px" listingId={listingId} title={title} savedPage={true} />
            </div>
          </div>
        ) : (
          ""
        )}
        <Link href={`/products/${title.replaceAll(" ", "-").replaceAll("/", "--")}-${listingId}`} className={styles.linktag} onClick={closeOffcanvas}>
          <div className="d-flex justify-content-start w-100">
            <div style={{ maxWidth: "120px" }}>
              <div className="img-container border rounded rounded-1 d-flex justify-content-center p-0 w-100">
                <Image
                  src={imageSrc}
                  alt="productImage"
                  height={100}
                  width={120}
                  style={{ objectFit: "contain" }}
                  onError={(e) => {
                    setImageSrc(`${imagePlaceholder.src}`);
                  }}
                />
              </div>
            </div>
            <div className={`ps-1 ${styles.wishlist_card_body}`}>
              <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">{title}</Tooltip>}>
                <div className={`${styles.wishlist_card_title}`}>{title}</div>
              </OverlayTrigger>
              <div>
                <div className={`d-flex justify-content-between mt-2`}>
                  <div>
                    <Badge pill text="dark" bg="lavender" style={{ background: "lavender" }}>
                      {condition}
                    </Badge>
                  </div>
                  <div className="d-flex align-items-center">
                    <Image className="me-1 rounded-2" src={location} alt="location" height="12" width="10" />
                    <p className={`m-0`}>{item?.location?.city?.city_name}</p>
                  </div>
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  <div>{Number(discount) > 0 && <span className={`ms-1 discount`}>Rs {price}</span>}</div>
                  <div className="fw-bold text-end">Rs. {activationDate === null || archivedOn !== null || isDeleted === true ? "--" : `${calculatePrice(price, discount, discountUnit)?.toLocaleString("en-IN")}`}</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div>
          <span className="position-absolute top-0 end-0 p-2 cursor-pointer bg-white  d-flex justify-content-center align-items-center" style={{ borderRadius: "0 5px", height: "40px", width: "37px" }} onClick={() => (actionOverlay === index ? handleActionOverlay(null) : handleActionOverlay(index))}>
            {actionOverlay === index ? <button type="button" className="btn-close"></button> : <Image src={ellipsis} alt="actions" />}
          </span>
        </div>
      </div>
      <ReserveDetails
        show={reserveModal}
        onHide={() => setReserveModal(false)}
        reserveData={{
          shop_id: item?.shopTable?.shop_id,
          locationId: item.location_id,
          listingId: listingId,
          itemId: item?.item_id,
          listedQuantity,
        }}
      />
      <SignInModal title=" To Reserve this item, please create an account." show={signInModal} onHide={() => setSignInModal(false)} />
    </>
  );
};
