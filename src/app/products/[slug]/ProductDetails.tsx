"use client";
import { Row, Col } from "react-bootstrap";
import { useRef, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumb";
import { usePathname, useRouter } from "next/navigation";
import ProductDetailSection from "../../../sections/ProductDetails/ProductDetailSection";
import ViewList from "../../../sections/ProductDetails/ViewList";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useNavigationEvent } from "../../hooks/useNavigationEvent";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchItemDetails, fetchRelatedItems } from "../../apis/getApis";
import styles from "../../../styles/ProductDetail.module.css";
// or the entire module:
import DOMPurify from "isomorphic-dompurify";
import React from "react";
import { useViewListStore } from "../../../store/viewList";
import Error from "next/error";
import ProductCardLoading from "../../../sections/SpecDetails/ProductCardLoading";
import Image from "next/image";
import Link from "next/link";
import Tabstyles from "../../../styles/SpecDetail.module.css";
import imagePlaceholder from "../../../../public/images/imagePlaceholder.png";
import ImageCarousel from "../../../components/ImageCarousel";

function ProductDetails() {
  const [isMounted, setIsMounted] = useState(false);
  const viewList = useViewListStore((state: any) => state?.viewList);
  const setViewList = useViewListStore((state: any) => state?.setViewList);
  const [discriptionText, setDiscriptionText] = useState<string>("");
  const queryClient = useQueryClient();
  const description = useRef<any>();
  const pathname = usePathname();
  let paramArray = pathname.split("-");
  let paramId = paramArray[paramArray.length - 1];
  const [isDescriptionCollapsed, setIsDescriptionCollapsed] = useState(true);
  useNavigationEvent();

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
  const FetchItemDetails = useQuery({
    queryKey: ["itemDetails", paramId],
    queryFn: () => fetchItemDetails(paramId),
    enabled: !!paramId?.toString(),
    onSuccess: (data: any) => {
      setIsMounted(true);
      const fetchedData = data?.data?.body?.data;
      const text = fetchedData[typeObject[fetchedData?.item?.["categoriesTable"].label]]?.description;
      setDiscriptionText(text);
      setViewList(fetchedData);
    },
  });

  const fetchedData = FetchItemDetails?.data?.data?.body?.data;
  const title = `products/${fetchedData?.listing_title?.replaceAll(" ", "-").replaceAll("/", "--")}-${fetchedData?.listing_id}`.replace(/\n/g, "");

  const FetchRelatedProducts = useQuery({
    queryKey: ["relatedProducts", paramId],
    queryFn: () => fetchRelatedItems(paramId),
    enabled: !!paramId?.toString(),
  });
  const relatedProducts = FetchRelatedProducts?.data?.data?.body?.data;

  const sanitizedHTML = DOMPurify.sanitize(discriptionText);

  return (
    <>
      {!FetchItemDetails?.isLoading && title.trim() !== decodeURIComponent(pathname.replace("/", "")).trim() ? (
        <Error statusCode={404} />
      ) : (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
          <div className={`${styles.productDetails}`}>
            <main className="main px-4">
              <Breadcrumbs />
              <Row className="my-4">
                <Col xs="12" sm="12" md="6" lg="7">
                  <ImageCarousel fetchedData={fetchedData?.item?.itemImages} />
                </Col>
                <Col xs="12" sm="12" md="6" lg="5">
                  <ProductDetailSection isLoading={FetchItemDetails.isLoading} fetchedData={fetchedData} />
                </Col>
              </Row>
              <Row className="w-100 ">
                <Col xs="12" sm="12" md="12" lg="4" className="mt-4 mt-lg-0  d-md-block">
                  {FetchRelatedProducts?.isSuccess && relatedProducts.length === 0 ? (
                    <></>
                  ) : (
                    <>
                      <h5 className={`mt-3 border-bottom text-center pb-1`}>Related Models</h5>
                      <div className={`d-flex flex-row flex-wrap p-1 gap-3 justify-content-start justify-content-lg-center`}>
                        {FetchRelatedProducts.isLoading
                          ? Array.from(Array(10)).map(() => <ProductCardLoading />)
                          : relatedProducts?.map((item: any) => (
                              <ProductCard
                                title={item.listing_title}
                                imageUrl={item.item.itemImages?.img0}
                                id={item.listing_id}
                                // category={category}
                              />
                            ))}
                      </div>
                    </>
                  )}
                </Col>

                <Col xs="12" sm="12" md="12" lg="8" className={`px-0 pe-4 mb-4 mb-md-0  mt-3`} ref={description}>
                  {discriptionText?.length > 0 ? (
                    <>
                      {" "}
                      <Row className={`${Tabstyles.tabOptionsContainer} rounded-top w-100 m-0 `}>
                        <Col
                          col={6}
                          className={`${Tabstyles.tabOptions} 
                ${Tabstyles.activeTabOption} rounded-top border-end-0`}
                        >
                          Description
                        </Col>
                      </Row>
                      
                      <div className={`w-100 bg-light border border-top-0 px-2 rounded-bottom`}>{discriptionText?.length > 0 ?  <>
                       <div style={isDescriptionCollapsed ? { maxHeight: "400px", overflow: "hidden" } : { height: "auto" }} dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></div>
                      <span
                            className="link cursor-pointer"
                            onClick={() => {
                              if (isDescriptionCollapsed) {
                                setIsDescriptionCollapsed(false);
                              } else {
                                if (description.current) {
                                  description.current.scrollIntoView({
                                    behavior: "smooth",
                                  });
                                }
                                setIsDescriptionCollapsed(true);
                              }
                            }}
                          >
                            {isDescriptionCollapsed ? "Read More >>" : "<< Read Less"}
                          </span></> : <></>}</div>
                    </>
                  ) : (
                    ""
                  )}{" "}
                </Col>
              </Row>
            </main>
            {/* {relatedProducts?.length > 0 && <RelatedProducts relatedProducts={relatedProducts} />} */}
            {viewList?.length > 1 && <ViewList paramId={paramId} relatedProducts={viewList} />}
          </div>
        </GoogleReCaptchaProvider>
      )}
    </>
  );
}

export default ProductDetails;

export const ProductCard = ({ title, id, imageUrl }: any) => {
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState<any>(imageUrl);
  return (
    <Link href={`/products/${title.replaceAll(" ", "-").replaceAll("/", "--")}-${id}`}>
      <div style={{ width: "128px", height: "192px", border: "1px solid #dee2e6", borderRadius: "10px", overflow: "hidden", cursor: "pointer" }}>
        <div style={{ width: "128px", height: "128px" }}>
          <Image
            alt="modelImage"
            src={imageSrc ? imageSrc : `${imagePlaceholder.src}`}
            width={300}
            height={300}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            onError={(e) => {
              setImageSrc(`${imagePlaceholder.src}`);
            }}
          />
        </div>
        <p
          style={{
            margin: "0",
            padding: "0 5px",
            height: "60px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3, // Number of lines before applying ellipsis
            textOverflow: "ellipsis",
            fontSize: "0.8rem",
            fontWeight: "500",
          }}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};
