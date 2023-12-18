"use client";
import Image from "next/image";
import { InfoIcon, calender, email, location, phone, whatsapp, shareIcon } from "../../../public/icons";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, Col, Form, Overlay, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import styles from "../../styles/ProductDetail.module.css";
import { hp } from "../../../public/images";
import SendEmailForm from "../../components/SendEmailForm";
import Link from "next/link";
import useAuth from "../../components/auth/useAuth";
import { useRouter } from "next/navigation";
import ReserveDetails from "../../components/ReserveDetails";
import SignInModal from "../../components/SignInModal";
// import { faCircleInfo, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UpdateListingViews } from "../../app/apis/postApis";
import { useMutation } from "@tanstack/react-query";
import loadStyle from "../../styles/LoadingCard.module.css";
import { useUserStore } from "../../store/User";
import withModalAuth from "../../components/auth/withModalAuth";
import { storeLogo } from "../../../public/images";
import PhoneNumberModal from "../../components/PhoneNumberModal";
import WishlistIcon from "../../components/WishlistIcon";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import SendEmail from "../ProductListing/SendEmail";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from "next-share";
import { marketplaceUrl, marketplaceWeb } from "../../utility/env";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ProductDetailSection = ({ fetchedData, isLoading }: any) => {
  const { getToken } = useAuth();

  const { user, token } = useUserStore((state: any) => state);
  const [title, setTitle] = useState("");
  const [emailForm, setEmailForm] = useState<boolean>(false);
  const [showWhatsapp, setShowWhatsapp] = useState<boolean>(false);
  const [showNumbers, setShowNumbers] = useState<boolean>(false);
  const [signInModal, setSignInModal] = useState(false);
  const [PNModal, setPNModal] = useState(false);
  const [emailModal, setEmailModal] = useState<any>(false);
  const [reserveModal, setReserveModal] = useState(false);
  const [OverlayShow, setOverlayShow] = useState(false);
  const shareTarget = useRef(null);
  const noPart = fetchedData?.item?.location?.location_number.split("-");
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
    setTitle(" To Reserve this item, please create an account.");
    if(user ){
      setReserveModal(true);
    }else{
      setSignInModal(true);
    } 

}
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

  const handleClickOutside = (event:any) => {
    if (
      shareTarget.current &&
      !shareTarget.current.contains(event.target) &&
      !event.target.classList.contains('overlay-content')
    ) {
      setOverlayShow(false);
    }
  };

  useEffect(() => {
    // Attach the click event to the document when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); 

  const renderTooltipEmail = (props:any) => (
    <Tooltip id="tooltip" {...props}>
    Send Email
    </Tooltip>
  );
  const renderTooltipWhatsapp = (props:any) => (
    <Tooltip id="tooltipWhatsapp" {...props}>
    Contact on Whatsapp
    </Tooltip>
  );
  const renderTooltipShare = (props:any) => (
    <Tooltip id="tooltipWhatsapp" {...props}>
    Share
    </Tooltip>
  );
  return (
    <>
      {isLoading ? <h1 style={{ width: "380px", height: "37px" }} className={` ${loadStyle.skeleton} fw-bold  fs-16 mb-3`}></h1> : <h1 className={`mb-4 ${styles.title}`}>{fetchedData?.listing_title}</h1>}

      {fetchedData?.activation_date === null || fetchedData?.archived_on !== null || fetchedData?.is_deleted === true ? (
        <>
          {!isLoading ? (
            <Alert variant="danger">
              <Image src={InfoIcon} alt="" height={24} />{" "}
              <span className="ps-2 lead fw-lighter" style={{ verticalAlign: "middle" }}>
                {fetchedData?.status}!
              </span>
            </Alert>
          ) : (
            <div style={{ width: "288px", height: "50px" }} className={`${loadStyle.skeleton}  `}></div>
          )}
        </>
      ) : (
        ""
      )}

      <div className={`d-flex justify-content-between align-items-baseline ${fetchedData?.activation_date === null || fetchedData?.archived_on !== null || fetchedData?.is_deleted === true ? "- -" : ""}`}>
        <h3 className={`mb-0 align-items-baseline ${styles.price} `}>
          {fetchedData?.activation_date === null || fetchedData?.archived_on !== null || fetchedData?.is_deleted === true ? "Rs - -" : ` Rs ${calculatePrice(fetchedData?.online_price, fetchedData?.online_discount, fetchedData?.online_discount_unit)?.toLocaleString("en-IN")}`}

          {fetchedData?.online_discount > 0 ? (
            <sub className={`text-secondary ms-1 text-decoration-line-through ${styles.originalPrice} `}>{fetchedData?.activation_date === null || fetchedData?.archived_on !== null || fetchedData?.is_deleted === true ? "" : ` Rs. ${fetchedData?.online_price}`}</sub>
          ) : (
            ""
          )}
        </h3>
        <div
          style={{
            display: fetchedData?.activation_date === null || fetchedData?.archived_on !== null || fetchedData?.is_deleted === true ? "none" : "",
          }}
        >
          {fetchedData?.online_discount > 0 && <span className={`${styles.discount} text-success `}> {fetchedData?.online_discount_unit === "fixed" ? "Rs." + fetchedData?.online_discount + ` OFF` : fetchedData?.online_discount + `% OFF`}</span>}
        </div>
      </div>
      <hr className={`mb-1 ${styles.separator}`} />
      <Row>
        <Col xs="4" sm="4" md="4" lg="3">
          <p className={`mb-0 ${styles.list}`}>Model:</p>
        </Col>
        <Col xs="8" sm="8" md="8" lg="9">
          <p className={`mb-0 ${styles.list}`}>{fetchedData?.[typeObject[fetchedData?.item?.["categoriesTable"].label]]?.model ? fetchedData?.[typeObject[fetchedData?.item?.["categoriesTable"].label]]?.model : "- -"}</p>
        </Col>
        <Col xs="4" sm="4" md="4" lg="3">
          <p className={`mb-0 ${styles.list}`}>Brand:</p>
        </Col>
        <Col xs="8" sm="8" md="8" lg="9">
          <p className={`mb-0 ${styles.list}`}>{fetchedData?.[typeObject[fetchedData?.item?.["categoriesTable"].label]]?.brand ? fetchedData?.[typeObject[fetchedData?.item?.["categoriesTable"].label]]?.brand : "- -"}</p>
        </Col>

        <Col xs="4" sm="4" md="4" lg="3">
          <p className={`mb-0 m-0 p-0 ${styles.list}`}> Condition:</p>
        </Col>
        <Col xs="8" sm="8" md="8" lg="7">
          <p className={`mb-0 ${styles.list} `}>{fetchedData?.item.condition_item}</p>
        </Col>
        <Col xs="4" sm="4" md="4" lg="3">
          <p className={`mb-0 ${styles.list}`}>Availability:</p>
        </Col>
        <Col xs="8" sm="8" md="8" lg="9">
          <div className={`${fetchedData?.activation_date === null || fetchedData?.archived_on !== null || fetchedData?.is_deleted === true ? "UnAvailable" : ""}`}>
            <span className={`mb-0 fw-bold ${styles.availability}`}>{fetchedData?.listed_quantity > 0 ? "In Stock" : "Unavailable"}</span>{" "}
            <span
              className={`${styles.quantity} `}
              style={{
                display: fetchedData?.activation_date === null || fetchedData?.archived_on !== null || fetchedData?.is_deleted === true ? "none" : "",
              }}
            >
              (Only {fetchedData?.listed_quantity} left)
            </span>
          </div>
        </Col>
      </Row>
      <hr className={`mb-1 ${styles.separator}`} />
      <div className="d-flex gap-3 my-3">
        <p className={`mb-0 ${styles.list}`}>Available colors:</p>
        <p className={"mb-0"}>{fetchedData?.listingColorAssociations[0]?.color ? fetchedData?.listingColorAssociations[0]?.color : "- -"}</p>
      </div>
      <hr className={`mb-1 ${styles.separator}`} />

      {isLoading ? (
        <h5 style={{ width: "380px", height: "37px" }} className={` ${loadStyle.skeleton} fw-bold  fs-16 mb-3`}></h5>
      ) : (
        <>
          <Row className="pt-1">
            <Col col={12} md={8}>
              <div className="d-flex my-2 text-center">
                <Image className="mt-1" src={location} alt="location" width={15} height={15} />
                <span className="ms-1 text-capitalize">{fetchedData?.item?.location?.address}</span>
              </div>
            </Col>
          </Row>
          <div>
            <div className="mt-3 d-flex">
              <Button className={` w-50 ${styles.reserve_btn} `} variant="primary" onClick={() => handleReserveModal()} disabled={fetchedData?.activation_date === null || fetchedData?.archived_on !== null || fetchedData?.is_deleted === true}>
                <span className="fs-6">Reserve</span>
              </Button>
              <div className={` ms-3 rounded-2 pb-1 justify-content-center d-flex align-items-center ${styles.wishlist}`}>
                <div className="ms-2   ">
                  <WishlistIcon page="pdp" listingId={fetchedData?.listing_id} title={fetchedData?.listing_title} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div
        className={`${fetchedData?.activation_date === null || fetchedData?.archived_on !== null || fetchedData?.is_deleted === true ? styles.blur : ""}`}
        style={{
          display: fetchedData?.activation_date === null || fetchedData?.archived_on !== null || fetchedData?.is_deleted === true ? "none" : "",
        }}
      >
        <Row className="d-flex ">
          <Col xs="12" xl="7" lg="7" md='8' sm="5"  className={`d-flex align-items-center gap-3 px-2 pt-1 mt-4 mb-2  rounded-1 ${styles.actionBtns}`}>
            <Image src={phone} alt="call" width={20} height={20} />
            <div className="ps-1">
              {showNumbers === true ? <h6 className={`fw-bol fs-5 d m-0  ${styles.number}`}>{fetchedData?.item?.location?.location_number}</h6> : <h5 className={`fw-bol fs-5 d m-0  ${styles.number}`}>0300....</h5>}

              <span
                className="link fs-14"
                onClick={() => {
                  setTitle("To get contact number first create account  ");
                  if (user) {
                    setShowNumbers(true);
                  } else {
                    setSignInModal(true);
                  }
                }}
              >
                Show phone number
              </span>
            </div>
            </Col>
            <OverlayTrigger
      placement="top"
      overlay={renderTooltipWhatsapp}
    >
            <Col xs="2" xl="1" lg="1" md="2" sm="2"
            onClick={() => {
              if (user) {
                window.open(`https://wa.me/${fetchedData?.item?.location?.location_number.replace("+92", 0).replaceAll("-", "")}`);
              } else {
                setSignInModal(true);
              }
            }}
            className={`d-flex align-items-center justify-content-center  px-4  mt-4 mb-2 ms-2 rounded-1 cursor-pointer ${styles.actionBtns}`}
           >
            <FontAwesomeIcon  className={`${styles.whatsappIcon} mx-2`} fontSize={20} icon={faWhatsapp} />
          </Col>
       </OverlayTrigger>
     <OverlayTrigger
      placement="top"
      overlay={renderTooltipEmail}
    >
          <Col xs="2" xl="1" lg="1" md="2" sm="2"
            onClick={() => {
              setEmailModal(true);
            }}

            className={`d-flex align-items-center py-md-3 py-sm-3 py-3 px-4 justify-content-center   mt-4 mb-2 ms-2 rounded-1 cursor-pointer ${styles.actionBtns}`}
          >
            <FontAwesomeIcon className={`${styles.emailIcon} `} fontSize={20} icon={faEnvelope} />
          </Col>
           </OverlayTrigger>
           <OverlayTrigger
      placement="top"
      overlay={OverlayShow?<></>:renderTooltipShare}
     
    >
          <Col xs="2" xl="1" lg="1" md="2" sm="2"
            ref={shareTarget}
            onClick={() => {
              setOverlayShow(!OverlayShow);
            }}
            className={`d-flex align-items-center cursor-pointer px-4 justify-content-center mt-4 mb-2 ms-2 rounded-1 ${styles.actionBtns}`}
          >
            <Image src={shareIcon} alt="share" width={35} height={30} />
          </Col>
          </OverlayTrigger>
          <Overlay target={shareTarget.current} show={OverlayShow} placement="top">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                <FacebookShareButton url={encodeURI(`${marketplaceWeb}/products/${fetchedData.listing_title.replaceAll(" ", "-").replaceAll("/", "--")}-${fetchedData.listing_id}`)} quote={"Our primary mission is to digitally transform the retail tech industry by bridging the gap between tech retailers and potential customers."} hashtag={"#TechTalk #techBazzar"}>
                  <FacebookIcon className="mx-2" size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={encodeURI(`${marketplaceWeb}/products/${fetchedData.listing_title.replaceAll(" ", "-").replaceAll("/", "--")}-${fetchedData.listing_id}`)} title={"Our primary mission is to digitally transform the retail tech industry by bridging the gap between tech retailers and potential customers."}>
                  <TwitterIcon className="mx-2" size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton url={encodeURI(`${marketplaceWeb}/products/${fetchedData.listing_title.replaceAll(" ", "-").replaceAll("/", "--")}-${fetchedData.listing_id}`)} title={"Our primary mission is to digitally transform the retail tech industry by bridging the gap between tech retailers and potential customers."} separator=":: ">
                  <WhatsappIcon className="mx-2" size={32} round />
                </WhatsappShareButton>
              </Tooltip>
            )}
          </Overlay>
        </Row>
        {isLoading ? (
          <h5 style={{ width: "380px", height: "37px" }} className={` ${loadStyle.skeleton} fw-bold  fs-16 mb-3`}></h5>
        ) : (
         <></>
        )}
      
      </div>
      <div className={`mt-2`}>
        <Row className={styles.infoSection}>
          <Col xs="1" sm="2" md="2" lg="2" xl="2" className={`${styles.logo}`}>
            <Image src={fetchedData?.item.shopTable?.logo_path === null ? storeLogo : fetchedData?.item.shopTable?.logo_path} className={styles.shopLogo} alt="Logo" width={68} height={68} />
          </Col> 
          <Col xs="5" sm="4" md="4" lg="4" xl="5">
            <h5 className="m-0 fw-bold">{fetchedData?.item.shopTable?.shop_name}</h5>
            <div className="d-flex align-items-center ">
              <Image src={location} alt="location" width={15} height={15} />
              <span className="ms-1">{fetchedData?.item.location?.location_nick}</span>
            </div>
            {/* <span className="ms-3 fs-14 text-center d-flex">
              ({fetchedData?.item.location?.address})
            </span> */}
          </Col>
          <Col xs="4" sm="5" md="5" lg="4" xl="4" className="px-0 text-center mt-2 mt-md-0 mt-lg-0">
            <Link className="d-flex align-items-center justify-content-end gap-1 " href={`/store/${fetchedData?.item.shopTable?.username}`}>
           <span className="link "> Visit seller</span>
            <FontAwesomeIcon color="#d957f9" icon={faArrowRight} />
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
          listedQuantity: fetchedData?.listed_quantity,
        }}
      />
      <SignInModal
        title={title}
        show={signInModal}
        onHide={() => setSignInModal(false)}
      />
        <PhoneNumberModal
        show={PNModal}
        onHide={() => setPNModal(false)}/>
        

      <SendEmail shopData={fetchedData} show={emailModal} onHide={() => setEmailModal(false)} />
    </>
  );
};

export default ProductDetailSection;
