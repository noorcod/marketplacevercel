"use client";
import Image from "next/image";
import { InfoIcon, calender, email, location, phone, whatsapp } from "../../../public/icons";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/ProductDetail.module.css";
import { hp } from "../../../public/images";
import SendEmailForm from "../../components/SendEmailForm";
import Link from "next/link";
import useAuth from "../../components/auth/useAuth";
import { useRouter } from "next/navigation";
import ReserveDetails from "../../components/ReserveDetails";
import SignInModal from "../../components/SignInModal";
import { faCircleInfo, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UpdateListingViews } from "../../app/apis/postApis";
import { useMutation } from "@tanstack/react-query";
import loadStyle from "../../styles/LoadingCard.module.css";
import { useUserStore } from "../../store/User";
import { storeLogo } from "../../../public/images";
const ProductDetailSection = ({ fetchedData, isLoading }: any) => {
  const { getToken } = useAuth();

  const { user, token } = useUserStore((state: any) => state);

  const [emailForm, setEmailForm] = useState<boolean>(false);
  const [showWhatsapp, setShowWhatsapp] = useState<boolean>(false);
  const [showNumbers, setShowNumbers] = useState<boolean>(false);
  const [signInModal, setSignInModal] = useState(false);

  const [reserveModal, setReserveModal] = useState(false);
  const noPart=fetchedData?.item?.location?.location_number.split("-")
  const userId = user?.uuid;
  interface obj {
    fk_listing_id: number;
    fk_user_id?: string;
  }

  const mutation = useMutation({
    mutationFn: UpdateListingViews,
    onSuccess: (data, variables, context) => {},
  });
  useEffect(() => {
    if (fetchedData?.listing_id) {
      const object: obj = {
        fk_listing_id: fetchedData?.listing_id,
        fk_user_id: userId,
      };
      mutation.mutate(object);
    }
  }, [fetchedData]);

  const handleReserveModal = () => {
    if (user) {
      setReserveModal(true);
    } else {
      setSignInModal(true);
    }
  };
  const calculatePrice = (price: any, discount: any, discountUnit: any) => {
    if (discountUnit === "percentage") {
      return price - price * (discount / 100);
    } else if (discountUnit === "fixed") {
      return price - discount;
    }
  };

  const typeObject: {
    [key: string]: string;
  } = {
    Laptop: "laptopListings",
    Mobile: "mobileListings",
    Tablet: "tabletListings",
    "TV / Monitor": "tvMonitorListings",
    "Desktop Computer": "desktopListings",
    Accessories: "accessoryListings",
  };
  return (
    <>
      {isLoading ? (
        <h5
          style={{ width: "380px", height: "37px" }}
          className={` ${loadStyle.skeleton} fw-bold  fs-16 mb-3`}
        ></h5>
      ) : (
        <h4 className={`mb-4 ${styles.title}`}>{fetchedData?.listing_title}</h4>
      )}

      {fetchedData?.activation_date === null ||
      fetchedData?.archived_on !== null ||
      fetchedData?.is_deleted === true ? (
        <>
          {!isLoading ? (
            <Alert variant="danger">
              <Image src={InfoIcon} alt="" height={24} />{" "}
              <span className="ps-2 lead fw-lighter" style={{ verticalAlign: "middle" }}>
                {fetchedData?.status}!
              </span>
            </Alert>
          ) : (
            <div
              style={{ width: "288px", height: "50px" }}
              className={`${loadStyle.skeleton}  `}
            ></div>
          )}
        </>
      ) : (
        ""
      )}

      <div
        className={`d-flex justify-content-between align-items-baseline ${
          fetchedData?.activation_date === null ||
          fetchedData?.archived_on !== null ||
          fetchedData?.is_deleted === true
            ? "- -"
            : ""
        }`}
      >
        <h3 className={`mb-0 ${styles.title} align-items-baseline`}>
          {fetchedData?.activation_date === null ||
          fetchedData?.archived_on !== null ||
          fetchedData?.is_deleted === true
            ? "Rs - -"
            : ` Rs ${calculatePrice(
                fetchedData?.online_price,
                fetchedData?.online_discount,
                fetchedData?.online_discount_unit
              )?.toLocaleString("en-IN")}`}

         {fetchedData?.online_discount>0? <sub
            className={`text-secondary ms-1 text-decoration-line-through ${styles.originalPrice} `}
          >
            {fetchedData?.activation_date === null ||
            fetchedData?.archived_on !== null ||
            fetchedData?.is_deleted === true
              ? ""
              : ` Rs. ${fetchedData?.online_price}`}
          </sub>:""}
        </h3>
        <div
          style={{
            display:
              fetchedData?.activation_date === null ||
              fetchedData?.archived_on !== null ||
              fetchedData?.is_deleted === true
                ? "none"
                : "",
          }}
        >
          { fetchedData?.online_discount > 0 && <span className={`${styles.discount} text-success `}>
            {" "}
            {fetchedData?.online_discount_unit === "fixed"
              ? "Rs." + fetchedData?.online_discount + ` OFF`
              : fetchedData?.online_discount + `% OFF`}
          </span>}
        </div>
      </div>
      <hr className={`mb-1 ${styles.separator}`} />
      <Row>
        <Col xs="4" sm="4" md="4" lg="3">
          <p className={"mb-0"}>Model:</p>
        </Col>
        <Col xs="8" sm="8" md="8" lg="9">
          <p className={"mb-0"}>
            {fetchedData?.[typeObject[fetchedData?.item?.["categoriesTable"].label]]?.model
              ? fetchedData?.[typeObject[fetchedData?.item?.["categoriesTable"].label]]?.model
              : "- -"}
          </p>
        </Col>
        <Col xs="4" sm="4" md="4" lg="3">
          <p className={"mb-0"}>Brand:</p>
        </Col>
        <Col xs="8" sm="8" md="8" lg="9">
          <p className={"mb-0"}>
            {fetchedData?.[typeObject[fetchedData?.item?.["categoriesTable"].label]]?.brand
              ? fetchedData?.[typeObject[fetchedData?.item?.["categoriesTable"].label]]?.brand
              : "- -"}
          </p>
        </Col>
        <Col xs="4" sm="4" md="4" lg="3">
          <p className={"mb-0"}>Colors:</p>
        </Col>
        <Col xs="8" sm="8" md="8" lg="9">
          <p className={"mb-0"}>
            {fetchedData?.listingColorAssociations[0]?.color
              ? fetchedData?.listingColorAssociations[0]?.color
              : "- -"}
          </p>
        </Col>
        <Col xs="4" sm="4" md="4" lg="3">
          <p className={"mb-0 m-0 p-0"}> Condition:</p>
        </Col>
        <Col xs="8" sm="8" md="8" lg="7">
          <p className={"mb-0"}>{fetchedData?.item.condition_item}</p>
        </Col>
        <Col xs="4" sm="4" md="4" lg="3">
          <p className={"mb-0"}>Availability:</p>
        </Col>
        <Col xs="8" sm="8" md="8" lg="9">
          <div
            className={`${
              fetchedData?.activation_date === null ||
              fetchedData?.archived_on !== null ||
              fetchedData?.is_deleted === true
                ? "UnAvailable"
                : ""
            }`}
          >
            <span className="mb-0 text-success fw-bold">
              {fetchedData?.listed_quantity > 0 ? "In Stock" : "Unavailable"}
            </span>{" "}
            <span
              className={`${styles.quantity} `}
              style={{
                display:
                  fetchedData?.activation_date === null ||
                  fetchedData?.archived_on !== null ||
                  fetchedData?.is_deleted === true
                    ? "none"
                    : "",
              }}
            >
              (Only {fetchedData?.listed_quantity} left)
            </span>
          </div>
        </Col>
      </Row>
      <hr className={`mb-1 ${styles.separator}`} />

      {isLoading ? (
        <h5
          style={{ width: "380px", height: "37px" }}
          className={` ${loadStyle.skeleton} fw-bold  fs-16 mb-3`}
        ></h5>
      ) : (
        <Row className="pt-1">
          <Col col={12} md={8}>
            <div className="d-flex my-2 text-center">
              <Image className="mt-1" src={location} alt="location" width={15} height={15} />
              <span className="ms-1 text-capitalize">{fetchedData?.item?.location?.address}</span>
            </div>
          </Col>
          <Col col={12} sm={3} xs={5}  md={4}>
            <Button
              className="w-100  "
              variant="outline-secondary"
              onClick={() => handleReserveModal()}
              disabled={
                fetchedData?.activation_date === null ||
                fetchedData?.archived_on !== null ||
                fetchedData?.is_deleted === true
              }
            >
              <span className="fs-6">Reserve</span>
            </Button>
          </Col>
        </Row>
      )}
      <div
        className={`${
          fetchedData?.activation_date === null ||
          fetchedData?.archived_on !== null ||
          fetchedData?.is_deleted === true
            ? styles.blur
            : ""
        }`}
        style={{
          display:
            fetchedData?.activation_date === null ||
            fetchedData?.archived_on !== null ||
            fetchedData?.is_deleted === true
              ? "none"
              : "",
        }}
      >
        <div
          className={`d-flex align-items-center gap-3 py-2 px-3 mt-3 mb-2 rounded-1 ${styles.actionBtns}`}
        >
          <Image src={phone} alt="call" width={28} height={25} />
          <div className="ps-1">
            {showNumbers === false && (
              <h5 className={`fw-bold m-0 ${styles.number}`}>
                {fetchedData?.locationTable?.location_number}
              </h5>
            )}
            {showNumbers && (
              <>
                <h5 className={`fw-bold m-0 ${styles.number}`}>
                  {fetchedData?.item?.location?.location_number}
                </h5>
                <h5 className={`fw-bold m-0 ${styles.number}`}>
                  {fetchedData?.item?.location?.location_backup_number}
                </h5>
              </>
            )}
            {showNumbers === false && (
              <span className="link" onClick={() =>{
                if(user){
                  setShowNumbers(true)  
                }else {
                  setSignInModal(true)
                }
                }}>
                Show phone number
              </span>
            )}
          </div>
        </div>
        {isLoading ? (
          <h5
            style={{ width: "380px", height: "37px" }}
            className={` ${loadStyle.skeleton} fw-bold  fs-16 mb-3`}
          ></h5>
        ) : (
          <div
            className={`d-flex align-items-center gap-3 py-2 px-3 mb-2 rounded-1 ${styles.actionBtnWa}`}
            style={{ display: "none" }}
            // style={{display:fetchedData?.activation_date === null ||
            //   fetchedData?.archived_on !== null ||
            //   fetchedData?.is_deleted === true?'none':''}}
          >
            <Col md="1" lg="1" className="p-0">
              <Image src={whatsapp} alt="whatsapp" width={28} height={25} />
            </Col>
            <Col
              onClick={() =>
             {
              if(user){
              window.open(
                  `https://wa.me/${fetchedData?.item?.location?.location_number
                    .replace("+92", 0)
                    .replaceAll("-", "")}`
                )

              }
                else {
                  setSignInModal(true)
                }}
              }
              md="10"
              lg="8"
              className="p-0 cursor-pointer"
            >
              {showWhatsapp === false && (
                <h5 className="fw-bold m-0">{noPart?.slice(0, 2).join('-') + '-' + '-'.repeat(noPart[2]?.length)}</h5>
              )}
              {showWhatsapp && (
                <h5 className="fw-bold m-0">{fetchedData?.item?.location?.location_number}</h5>
              )}
              {showWhatsapp === false && (
                <span onClick={() => {
                  if(user){
                  setShowWhatsapp(true)
                }else{
                  setSignInModal(true)
                }
                 }}>Contact on Whatsapp number</span>
              )}
              {showWhatsapp && <span>With your valuable questions</span>}
            </Col>
            {showWhatsapp && (
              <Col md="1" lg="2" className="p-0 text-center d-md-none d-sm-none">
                <Button
                  onClick={(e) =>
                    window.open(
                      `https://wa.me/${fetchedData?.item?.location?.location_number
                        .replace("+92", 0)
                        .replaceAll("-", "")}`
                    )
                  }
                  className={`px-3 ${styles.waBtn}`}
                >
                  Call
                </Button>
              </Col>
            )}
          </div>
        )}
        <div className="d-flex align-items-center gap-2 my-3">
          <hr className={`${styles.separator}`} />
          <p className="text-center m-0">Or</p>
          <hr className={`${styles.separator}`} />
        </div>
        {isLoading ? (
          <h5
            style={{ width: "380px", height: "37px" }}
            className={` ${loadStyle.skeleton} fw-bold  fs-16 mb-3`}
          ></h5>
        ) : (
          <Row
            className={`d-flex align-items-center gap-3 py-2 px-3 rounded-1 w-100 mx-auto ${styles.actionBtns}`}
          >
            <Col xs="1" sm="1" md="1" lg="1" className="p-0">
              <Image src={email} alt="email" width={28} height={25} />
            </Col>
            <Col xs="8" sm="8" md="8" lg="8" className="p-0">
              <h5 className={`fw-bold m-0 ${styles.emailheader}`}>Send Email</h5>
              <span className={styles.mailTxt}>With your valuable questions</span>
            </Col>
            <Col xs="1" sm="1" md="1" lg="1" className="p-0 text-center">
              <Form.Check
                type="checkbox"
                className={styles.checkbox}
                checked={emailForm}
                onChange={(e) => setEmailForm(e.target.checked)}
              />
            </Col>
          </Row>
        )}
        {emailForm === true && (
          <div className={`rounded-bottom ${styles.emailForm}`}>
            <SendEmailForm shopData={fetchedData} />
          </div>
        )}
      </div>
      <div className={`mt-4`}>
        <span className={`mb-0 ps-1 pe-5 pt-1 ${styles.header}`}>Seller Info</span>
        <Row className={styles.infoSection}>
          <Col xs="2" sm="2" md="2" lg="2" className={`${styles.logo}`}>
            <Image
              src={fetchedData?.item.shopTable?.logo_path===null?storeLogo:fetchedData?.item.shopTable?.logo_path}
              className={styles.shopLogo}
              alt="Logo"
              width={68}
              height={68}
            />
          </Col>
          <Col xs="6" sm="7" md="6" lg="7">
            <h5 className="m-0 fw-bold">{fetchedData?.item.shopTable?.shop_name}</h5>
            <div className="d-flex align-items-center ">
              <Image src={location} alt="location" width={15} height={15} />
              <span className="ms-1">{fetchedData?.item.location?.location_nick}</span>
            </div>
            {/* <span className="ms-3 fs-14 text-center d-flex">
              ({fetchedData?.item.location?.address})
            </span> */}
          </Col>
          <Col xs="3" sm="3" md="3" lg="3" className="px-0 text-center">
            <Link href={`/store/${fetchedData?.item.shopTable?.username}`}>
              <Button variant="outline-secondary" className="py-1 px-2">
                More info
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
      <ReserveDetails
        show={reserveModal}
        onHide={() => setReserveModal(false)}
        reserveData={{
          shop_id: fetchedData?.item?.shopTable?.shop_id,
          locationId: fetchedData?.item?.location_id,
          listingId: fetchedData?.listing_id,
          itemId: fetchedData?.fk_item_id,
        }}
      />
      <SignInModal show={signInModal} onHide={() => setSignInModal(false)} />
    </>
  );
};

export default ProductDetailSection;
