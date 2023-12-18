import Image from "next/image";
import { battery, camera, display, microchip, processor, rectangle, screen, stroke, storeIcon, tv, desktoptype } from "../../../public/icons";
import { Badge, Col, Container, OverlayTrigger, Row, Table, Tooltip } from "react-bootstrap";
import styles from "../../styles/SpecDetail.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchIsListingAvailableForModel, fetchItem, fetchRecommendedModels } from "../../app/apis/getApis";
import React, { useState } from "react";
import DOMPurify from "isomorphic-dompurify";
import ImageCarousel from "../../components/ImageCarousel";
import ProductCard from "./ProductCard";
import ProductCardLoading from "./ProductCardLoading";
import { useRouter } from "next/navigation";
import imagePlaceholder from "../../../public/images/imagePlaceholder.png";

const featuredData = (categoryId: number) => {
  switch (categoryId) {
    case 1:
      return [
        {
          specialCondition: null,
          icon: rectangle,
          title: {
            sect: "display",
            key: "Size",
          },
          description: {
            sect: "display",
            key: "Resolution",
          },
        },
        {
          specialCondition: null,
          icon: microchip,
          title: {
            sect: "graphics",
            key: "Type",
          },
          description: {
            sect: "graphics",
            key: "Name",
          },
        },
        {
          specialCondition: null,
          icon: stroke,
          title: {
            sect: "storage",
            key: "RAM",
          },
          description: {
            sect: "storage",
            key: "RAM Type",
          },
        },
        {
          specialCondition: null,
          icon: processor,
          title: {
            sect: "processor",
            key: "Processor",
          },
          description: {
            sect: "processor",
            key: "Generation",
          },
        },
      ];
    case 2:
      return [
        {
          specialCondition: null,
          icon: rectangle,
          title: {
            sect: "display",
            key: "Size",
          },
          description: {
            sect: "display",
            key: "Resolution",
          },
        },
        {
          specialCondition: null,
          icon: camera,
          title: {
            sect: "general",
            key: "Camera Specs",
          },
        },
        {
          specialCondition: null,
          icon: stroke,
          title: {
            sect: "storage",
            key: "RAM",
          },
          description: {
            sect: "general",
            key: "Processor",
          },
        },
        {
          specialCondition: null,
          icon: battery,
          title: {
            sect: "battery",
            key: "Capacity",
          },
        },
      ];
    case 3:
      return [
        {
          specialCondition: null,
          icon: rectangle,
          title: {
            sect: "display",
            key: "Size",
          },
          description: {
            sect: "display",
            key: "Resolution",
          },
        },
        {
          specialCondition: null,
          icon: camera,
          title: {
            sect: "general",
            key: "Camera Specs",
          },
        },
        {
          specialCondition: null,
          icon: stroke,
          title: {
            sect: "storage",
            key: "RAM",
          },
          description: {
            sect: "general",
            key: "Processor",
          },
        },
        {
          specialCondition: null,
          icon: battery,
          title: {
            sect: "battery",
            key: "Capacity",
          },
        },
      ];
    case 4:
      return [
        {
          specialCondition: null,
          icon: rectangle,
          title: {
            sect: "display",
            key: "Size",
          },
        },
        {
          specialCondition: null,
          icon: display,
          title: {
            sect: "display",
            key: "Resolution",
          },
        },
        {
          specialCondition: null,
          icon: screen,
          title: {
            sect: "display",
            key: "Screen Type",
          },
        },
        {
          specialCondition: null,
          icon: tv,
          title: {
            sect: "sim_support",
            key: "Smart TV",
            keyTitle: "Smart TV:",
          },
          description: {
            sect: "sim_support",
            key: "TV Certification",
            keyTitle: "TV Certification: ",
          },
        },
      ];
    case 5:
      return [
        {
          specialCondition: null,
          icon: processor,
          title: {
            sect: "processor",
            key: "Processor",
          },
          description: {
            sect: "processor",
            key: "Generation",
            keyTitle: "Generation: ",
          },
        },
        {
          specialCondition: null,
          icon: microchip,
          title: {
            sect: "graphics",
            key: "Type",
          },
          description: {
            sect: "graphics",
            key: "Name",
          },
        },
        {
          specialCondition: null,
          icon: stroke,
          title: {
            sect: "storage",
            key: "RAM",
          },
          description: {
            sect: "storage",
            key: "RAM Type",
          },
        },
        {
          specialCondition: {
            condition: {
              sect: "general",
              key: "Desktop Type",
              value: "All in one",
            },
            icon: display,
            title: {
              sect: "display",
              key: "Size",
            },
            description: {
              sect: "display",
              key: "Resolution",
            },
          },
          icon: desktoptype,
          title: {
            sect: "general",
            key: "Desktop Type",
          },
        },
      ];

    default:
      return [];
  }
};

const ColorThumbnail = ({ name, isActive = false, setSelection, imageUrl, color }: any) => {
  const [imageSrc, setImageSrc] = useState<any>(imageUrl);
  return (
    <div
      className={`${styles.colorThumbnail} ${isActive ? styles.activeColor : ""}`}
      onClick={() => {
        setSelection(color);
      }}
    >
      <Image
        alt={name}
        src={imageSrc}
        width={100}
        height={100}
        style={{ width: "100%", height: "100%" }}
        onError={() => {
          setImageSrc(`${imagePlaceholder.src}`);
        }}
      />
    </div>
  );
};

const SpecDetail = ({ modelId, categoryId, category }: any) => {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState("description");
  const [selectedColor, setSelectedColor] = useState<any | null>(null);
  const getSpecsItem = useQuery({
    queryKey: ["specsCentralPdp", modelId],
    queryFn: () => fetchItem(modelId),
    refetchOnWindowFocus: false,
    cacheTime: 0,
    enabled: !!(modelId && categoryId),
    onSuccess: (data) => {
      setSelectedColor(data?.data?.body?.data?.colors[0]);
    },
  });

  const getRelatedModelQuery = useQuery({
    queryKey: ["specsCentralRecommendedProducts", categoryId, modelId],
    queryFn: () => fetchRecommendedModels(modelId),
    enabled: !!modelId,
    refetchOnWindowFocus: false,
    cacheTime: 0,
  });
  const isListingAvailableQuery = useQuery({
    queryKey: ["specsCentralAvailabilityListingAgainstModel", modelId],
    queryFn: () => fetchIsListingAvailableForModel(modelId),
    enabled: !!modelId,
    refetchOnWindowFocus: false,
    cacheTime: 0,
  });

  const sanitizedHTML = DOMPurify.sanitize(getSpecsItem?.data?.data?.body?.data?.basic?.Description);

  const capitalize = (data: any) => {
    return data.charAt(0).toUpperCase() + data.slice(1);
  };

  return (
    <div className="ps-2 ps-lg-3">
      <Row>
        <Col lg="6" md="6">
          {getSpecsItem?.data?.data?.body?.data?.colors && getSpecsItem?.data?.data?.body?.data?.colors?.length > 0 && selectedColor ? (
            <div className={`row`}>
              <div className={`col-12 col-sm-10 col-md-12`}>
                <ImageCarousel fetchedData={selectedColor.images} />
              </div>
              <div className="col-2 d-none d-sm-block d-md-none">
                {selectedColor ? (
                  <>
                    <h6 className={`pb-1 pt-2 ${styles.verticalColorsHeading}`}>
                      Color:
                      <br />
                      {selectedColor?.color_name}
                    </h6>
                    <div className={`d-flex gap-2 flex-column ${styles.verticalColorsDesign}`}>
                      {selectedColor ? (
                        getSpecsItem?.data?.data?.body?.data?.colors.map((color: any) => <ColorThumbnail color={color} key={color.color_id} name={color.color_name} isActive={selectedColor?.color_id === color.color_id} setSelection={setSelectedColor} imageUrl={color.images[0]} />)
                      ) : (
                        <></>
                      )}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
        </Col>
        <Col lg="6" md="6">
          <section className={`d-flex flex-column`}>
            <div>
              <div className={`p-0 mt-2`}>
                <div className={styles.specs}>
                  <span className="fw-bold fs-4">{getSpecsItem?.data?.data?.body?.data.basic?.Title}</span>
                </div>
              </div>
              <Container fluid>
                <Row className={`${styles.specBasic}`}>
                  {featuredData(categoryId)?.map((outerKey: any) => (
                    <Col xs="6" sm="6" md="6" lg="6">
                      {outerKey?.specialCondition && getSpecsItem?.data?.data?.body?.data[outerKey?.specialCondition.condition.sect][outerKey?.specialCondition.condition.key] === outerKey?.specialCondition.condition.value ? (
                        <OverlayTrigger
                          placement="auto"
                          overlay={
                            <Tooltip id="tooltip">
                              {" "}
                              {outerKey?.specialCondition.title.keyTitle}
                              {getSpecsItem?.data?.data?.body?.data[outerKey?.specialCondition.title.sect][outerKey?.specialCondition.title.key]}
                            </Tooltip>
                          }
                        >
                          <div className="d-flex align-items-center gap-3 mb-4 mt-4">
                            <div
                              style={{
                                width: "30px",
                                minWidth: "30px",
                                height: "30px",
                              }}
                            >
                              <Image src={outerKey?.specialCondition.icon} alt="" width={300} height={300} style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div>
                              <span className="m-0 fs-5  fw-bold d-inline-block text-truncate" style={{ maxWidth: "130px" }}>
                                {outerKey?.specialCondition.title.hasOwnProperty("keyTitle") ? outerKey?.specialCondition.title.keyTitle : ""}
                                {getSpecsItem?.data?.data?.body?.data[outerKey?.specialCondition.title.sect][outerKey?.specialCondition.title.key]}
                              </span>

                              {outerKey?.specialCondition?.description ? (
                                outerKey?.specialCondition?.description.hasOwnProperty("keyTitle") ? (
                                  <p className="m-0 fs-13">
                                    {outerKey?.specialCondition.description.keyTitle}
                                    {getSpecsItem?.data?.data?.body?.data[outerKey?.specialCondition.description.sect][outerKey?.specialCondition.description.key]}
                                    {outerKey?.specialCondition.description?.unit ? ` ${outerKey?.specialCondition.description?.unit}` : ""}
                                  </p>
                                ) : (
                                  <p className="m-0 fs-13">
                                    {getSpecsItem?.data?.data?.body?.data[outerKey?.specialCondition.description.sect][outerKey?.specialCondition.description.key]}
                                    {outerKey?.specialCondition.description?.unit ? ` ${outerKey?.specialCondition.description?.unit}` : ""}
                                  </p>
                                )
                              ) : (
                                <p></p>
                              )}
                            </div>
                          </div>
                        </OverlayTrigger>
                      ) : (
                        <OverlayTrigger
                          placement="auto"
                          overlay={
                            <Tooltip id="tooltip">
                              {" "}
                              {outerKey.title.keyTitle}
                              {getSpecsItem?.data?.data?.body?.data[outerKey.title.sect][outerKey.title.key]}
                            </Tooltip>
                          }
                        >
                          <div className="d-flex align-items-center gap-3 mb-4 mt-4">
                            <div
                              style={{
                                width: "30px",
                                minWidth: "30px",
                                height: "30px",
                              }}
                            >
                              <Image src={outerKey.icon} alt="" width={300} height={300} style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div>
                              <span className="m-0 fs-5  fw-bold d-inline-block text-truncate" style={{ maxWidth: "130px" }}>
                                {outerKey.title.hasOwnProperty("keyTitle") ? outerKey.title.keyTitle : ""}
                                {getSpecsItem?.data?.data?.body?.data[outerKey.title.sect][outerKey.title.key]}
                              </span>

                              {outerKey?.description ? (
                                outerKey?.description.hasOwnProperty("keyTitle") ? (
                                  <p className="m-0 fs-13">
                                    {outerKey.description.keyTitle}
                                    {getSpecsItem?.data?.data?.body?.data[outerKey.description.sect][outerKey.description.key]}
                                    {outerKey.description?.unit ? ` ${outerKey.description?.unit}` : ""}
                                  </p>
                                ) : (
                                  <p className="m-0 fs-13">
                                    {getSpecsItem?.data?.data?.body?.data[outerKey.description.sect][outerKey.description.key]}
                                    {outerKey.description?.unit ? ` ${outerKey.description?.unit}` : ""}
                                  </p>
                                )
                              ) : (
                                <p></p>
                              )}
                            </div>
                          </div>
                        </OverlayTrigger>
                      )}
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
            {getSpecsItem?.data?.data?.body?.data?.colors && getSpecsItem?.data?.data?.body?.data?.colors?.length > 0 ? (
              <div className={`${styles.colorDiv} d-block d-sm-none d-md-block`}>
                <h6 className={`pb-1 pt-2`}>Color: {selectedColor?.color_name}</h6>
                <div className={`d-flex gap-2 flex-sm-nowrap flex-md-wrap`}>
                  {getSpecsItem?.data?.data?.body?.data?.colors.map((color: any) => (
                    <ColorThumbnail color={color} key={color.color_id} name={color.color_name} isActive={selectedColor?.color_id === color.color_id} setSelection={setSelectedColor} imageUrl={color.images[0]} />
                  ))}
                </div>
                {isListingAvailableQuery.isSuccess && isListingAvailableQuery.data.data.body.data.matchCriteria !== "none" ? (
                  <div className="w-100 pt-2 d-flex gap-1 flex-nowrap">
                    <div
                      onClick={() => {
                        let param = new URLSearchParams();
                        if (isListingAvailableQuery.data.data.body.data.matchCriteria === "byModelId") {
                          param.append(`model_ids`, `[${isListingAvailableQuery.data.data.body.data.modelId}]`);
                          param.append(`category_id`, `${isListingAvailableQuery.data.data.body.data.categoryId}`);
                          router.push(`/products?params=${encodeURIComponent(param.toString())}`);
                        } else {
                          param.append(`search`, isListingAvailableQuery.data.data.body.data.modelName);
                          router.push(`/products?params=${param.toString()}`);
                        }
                      }}
                      className={`ms-auto rounded-2 border p-2 ${styles.wantToBuyButton}`}
                    >
                      <div className={` ${styles.wantToBuyDiv}`}>
                        <div className={` ${styles.wantToBuyButtonIcon}`}>
                          <Image alt="want to buy?" src={storeIcon} width={100} height={100} style={{ width: "100%", height: "100%" }} className={styles.wantToBuyButtonImage} />
                        </div>
                        <div className={` ${styles.wantToBuyButtonText}`}>{isListingAvailableQuery.data.data.body.data.matchCriteria === "byModelId" ? "Want to buy?" : "Find something similar?"}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </section>
        </Col>
        <>
          {isListingAvailableQuery.isSuccess && isListingAvailableQuery.data.data.body.data.matchCriteria !== "none" ? (
            <Col col="12" className="d-none d-sm-block d-md-none">
              <div className="w-100 pt-2 d-flex gap-1 flex-nowrap">
                <div
                  onClick={() => {
                    let param = new URLSearchParams();
                    if (isListingAvailableQuery.data.data.body.data.matchCriteria === "byModelId") {
                      param.append(`model_ids`, `[${isListingAvailableQuery.data.data.body.data.modelId}]`);
                      param.append(`category_id`, `${isListingAvailableQuery.data.data.body.data.categoryId}`);
                      router.push(`/products?params=${encodeURIComponent(param.toString())}`);
                    } else {
                      param.append(`search`, isListingAvailableQuery.data.data.body.data.modelName);
                      router.push(`/products?params=${param.toString()}`);
                    }
                  }}
                  className={` rounded-2 border p-2 ${styles.wantToBuyButton}`}
                >
                  <div className={` ${styles.wantToBuyDiv}`}>
                    <div className={` ${styles.wantToBuyButtonIcon}`}>
                      <Image alt="want to buy?" src={storeIcon} width={100} height={100} style={{ width: "100%", height: "100%" }} className={styles.wantToBuyButtonImage} />
                    </div>
                    <div className={` ${styles.wantToBuyButtonText}`}>{isListingAvailableQuery.data.data.body.data.matchCriteria === "byModelId" ? "Want to buy?" : "Find something similar?"}</div>
                  </div>
                </div>
              </div>
            </Col>
          ) : (
            <></>
          )}
        </>
      </Row>

      <Row className="mt-3 flex-column-reverse flex-lg-row">
        <Col xs="12" sm="12" md="12" lg="4">
          {getRelatedModelQuery?.isSuccess && getRelatedModelQuery?.data?.data?.body?.data?.length === 0 ? (
            <></>
          ) : (
            <>
              <h5 className={`mt-2 ${styles.recomendedProductsTitle} text-center`}>Related Models</h5>
              <div className={`d-flex flex-row flex-wrap p-1 gap-3 justify-content-start justify-content-lg-center`}>
                {getRelatedModelQuery.isLoading ? (
                  Array.from(Array(10)).map(() => <ProductCardLoading />)
                ) : getRelatedModelQuery?.data && getRelatedModelQuery?.data?.data?.body ? (
                  getRelatedModelQuery?.data?.data?.body?.data?.map((item: any) => <ProductCard title={item.model_title} imageUrl={item.images[0]?.img0} modelId={item.model_id} category={category} />)
                ) : (
                  <></>
                )}
              </div>
            </>
          )}
        </Col>
        <Col xs="12" sm="12" md="12" lg="8" className="px-1 m-0">
          <Row className={`${styles.tabOptionsContainer} rounded-top w-100 m-0 `}>
            <Col
              col={6}
              className={`${styles.tabOptions} ${selectedTab === "description" ? `${styles.activeTabOption} ${styles.endBorderImportant}` : ""}  rounded-top border-end-0`}
              onClick={() => {
                setSelectedTab("description");
              }}
            >
              Description
            </Col>
            <Col
              col={6}
              className={`${styles.tabOptions} ${selectedTab === "specification" ? `${styles.activeTabOption} ${styles.startBorderImportant}` : ""} rounded-top border-start-0`}
              onClick={() => {
                setSelectedTab("specification");
              }}
            >
              Specifications
            </Col>
          </Row>
          <div className={`w-100 bg-light border border-top-0 rounded-bottom`}>
            {selectedTab === "description" ? (
              <div className={`p-3`} dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></div>
            ) : (
              <Table className={`${styles.specsTable} m-0 border-0`}>
                {getSpecsItem?.data?.data?.body?.data &&
                  Object.keys(getSpecsItem?.data?.data?.body?.data).length > 0 &&
                  Object.entries(getSpecsItem?.data?.data?.body?.data)?.map(([key, value]: any, indexCat: number) => (
                    <>
                      {!(key === "basic" || key === "colors") ? (
                        <React.Fragment key={indexCat}>
                          <thead>
                            <tr className={styles.tablehead}>
                              <th colSpan={12}>{capitalize(key)}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(value)?.map(([val, data]: any, index: number) => (
                              <tr key={index}>
                                <td colSpan={1}>{val}</td>
                                <td colSpan={8}>{data === "nil" || data === "null" ? "--" : data}</td>
                              </tr>
                            ))}
                          </tbody>
                        </React.Fragment>
                      ) : (
                        <></>
                      )}
                      {key === "colors" ? (
                        <React.Fragment key={indexCat}>
                          <thead>
                            <tr className={styles.tablehead}>
                              <th colSpan={12}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan={12}>
                                {value?.map((color: any, index: number) => (
                                  <Badge
                                    pill
                                    bg=""
                                    style={{
                                      fontSize: "16px",
                                      backgroundColor: "#9f91a3",
                                      marginRight: "5px",
                                    }}
                                  >
                                    {color.color_name}
                                  </Badge>
                                ))}
                              </td>
                            </tr>
                          </tbody>
                        </React.Fragment>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
              </Table>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SpecDetail;
