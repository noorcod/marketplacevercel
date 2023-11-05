'use client'
import { Row, Col } from "react-bootstrap";
import { Layout } from "../../../components";
import { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumb";
import { usePathname, useRouter } from "next/navigation";
import nProgress from "nprogress";
import ImageCarousel from "../../../sections/ProductDetails/ImageCarousel";
import ProductDetailSection from "../../../sections/ProductDetails/ProductDetailSection";
import RelatedProducts from "../../../sections/ProductDetails/RelatedProducts";
import ViewList from "../../../sections/ProductDetails/ViewList";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useNavigationEvent } from "../../hooks/useNavigationEvent";
import { useQuery,useQueryClient } from "@tanstack/react-query";
import { fetchItemDetails, fetchRelatedItems } from "../../apis/getApis";
import { sanitize, isSupported } from "isomorphic-dompurify";
import loadStyle from "../../../styles/LoadingCard.module.css"

// or the entire module:
// import DOMPurify from "isomorphic-dompurify";
import React from "react";
import { useViewListStore } from "../../../store/viewList";
import Error from "next/error";

function ProductDetails() {
    const [isMounted, setIsMounted] = useState(false);
    const viewList =useViewListStore(state=>state?.viewList)
    const setViewList=useViewListStore(state=>state?.setViewList)
    const [discriptionText, setDiscriptionText] = useState<string>("");
  const queryClient = useQueryClient();
    const description = useRef<any>()
    const pathname = usePathname()
    console.log(pathname.split("/"))
    let paramArray=pathname.split("-")
    let paramId=paramArray[paramArray.length-1]
    const router = useRouter()
    const [isDescriptionCollapsed,setIsDescriptionCollapsed]=useState(true)
    useNavigationEvent()
    
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
            queryKey: ["itemDetails", paramId], queryFn: () => fetchItemDetails(paramId),enabled: !!paramId?.toString(),
            onSuccess: (data:any) => {
                setIsMounted(true);
                const fetchedData = data?.data?.body?.data;
                const text = fetchedData[
                    typeObject[fetchedData?.item?.["categoriesTable"].label]
                  ]?.description;
                  setDiscriptionText(text)
                  setViewList(fetchedData)
           

            }
        });
        
        const fetchedData=FetchItemDetails?.data?.data?.body?.data
        const title= `product/${fetchedData?.listing_title?.replace(/\s|\//g, "-")}-${fetchedData?.listing_id}`

        const FetchRelatedProducts = useQuery({
            queryKey: ["relatedProducts", paramId], queryFn: () => fetchRelatedItems(paramId),enabled: !!paramId?.toString(), 
        });
        const relatedProducts = FetchRelatedProducts?.data?.data?.body?.data
        
    // const sanitizedHTML = DOMPurify.sanitize(discriptionText);
    
    

    // if (!isMounted) {
    // return null;
    // }
    // setViewList(fetchedData)

    // useEffect(() => {
    //     setIsMounted(true);
    //   }, []);
    //   if (!isMounted) {
    //     return null;
    //   }
    
    console.log(title===decodeURIComponent( pathname.replace('/', '')),"nn")
    return (<>
    {  !FetchItemDetails?.isLoading && title!==decodeURIComponent( pathname.replace('/', ''))?
        <Error statusCode={404} />:
       <Layout>
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>

            <main className="main ">
                <Breadcrumbs />
                <Row className="my-4">
                    <Col xs="12" sm="12" md="6" lg="7">
                   
                        <ImageCarousel fetchedData={fetchedData} />
                        <Row className="">
                            <Col xs="12" sm="12" md="12" lg="2" className='mt-4 mt-lg-0 d-none d-md-block'>
                            </Col>

                            <Col xs="12" sm="12" md="12" lg="10" className={`px-0 pe-4 mb-4 mb-md-0  mt-3`} ref={description}>
                                {/* <div style={isDescriptionCollapsed ? { maxHeight:"400px",overflow:"hidden" } : { height:"auto" }} dangerouslySetInnerHTML={{ __html: sanitizedHTML }} ></div>
                                {discriptionText?.length > 0?<div className="w-100 text-center p-3"><span className="link cursor-pointer" onClick={() => {
                                    if(isDescriptionCollapsed){
                                        setIsDescriptionCollapsed(false)
                                    }else{
                                        if(description.current){
                                            description.current.scrollIntoView({ behavior: "smooth" });
                                        }
                                        setIsDescriptionCollapsed(true)
                                    }
                                }}>{isDescriptionCollapsed ? "Read More >>" : "<< Read Less"}</span></div>:<></>} */}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="5">
                        <ProductDetailSection isLoading={FetchItemDetails.isLoading} fetchedData={fetchedData} />
                    </Col>
                </Row>
            </main>
            {relatedProducts?.length > 0 && <RelatedProducts relatedProducts={relatedProducts} />}
            {viewList?.length>1&&<ViewList paramId={paramId} relatedProducts={viewList} />}
    </GoogleReCaptchaProvider>

        </Layout>}
    </>);
}

export default ProductDetails;
