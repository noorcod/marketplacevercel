"use-client";
import React, { useEffect, useState } from "react";
import { Badge, Form, Offcanvas, Row, Col } from "react-bootstrap";
import styles from "../styles/Offcanvas.module.css";
import { useQuery } from "@tanstack/react-query";
import { getReservations } from "../app/apis/getApis";
import { useUserStore } from "../store/User";
import PaginationBar from "./PaginationBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import imagePlaceholder from "../../public/images/imagePlaceholder.png";

const ReservationCard = ({
  listing_title,
  listing_id,
  img,
  condition_item,
  quantity,
  online_discount,
  online_price,
  online_discount_unit,
  handleClose,
}: any) => {
  const [imageSrc, setImageSrc] = useState<any>(img);
  const calculatePrice = (price: any, discount: any, discountUnit: any) => {
    if (discountUnit === "percentage") {
      return price - price * (discount / 100);
    } else if (discountUnit === "fixed") {
      return price - discount;
    }
  };

  return (
    <Link
      href={`/products/${listing_title
        .replaceAll(" ", "-")
        .replaceAll("/", "--")}-${listing_id}`}
      onClick={() => handleClose()}
    >
      <Row className="p-1">
        <Col xs={12} className="my-1">
          <div className={`row ${styles.custom_card} px-1 py-2 `}>
            <Col
              xs={4}
              className="img-container border rounded rounded-1 d-flex justify-content-center p-0"
            >
              <Image
                src={imageSrc}
                alt="productImage"
                height={100}
                width={120}
                sizes="100vw"
                style={{ objectFit: "contain" }}
                onError={(e) => {
                  setImageSrc(`${imagePlaceholder.src}`);
                }}
              />
            </Col>
            <Col xs={8} className={`${styles.custom_card_body}`}>
              <Row>
                <p className={`${styles.custom_card_title}`}>{listing_title}</p>
              </Row>
              <Col xs={12}>
                <div className={`d-flex justify-content-between`}>
                  <div>
                    <Badge
                      pill
                      text="dark"
                      bg="lavender"
                      style={{ background: "lavender" }}
                    >
                      {condition_item}
                    </Badge>
                  </div>
                  <p className={`m-0`}>Quantity: {quantity}</p>
                </div>
              </Col>
              <Row className="my-1">
                {online_discount > 0 ? (
                  <>
                    <Col
                      xs={6}
                      className="text-decoration-line-through text-muted"
                    >
                      <p className="m-0">Rs. {online_price}</p>
                    </Col>
                    <Col xs={6} className="fw-bold text-end">
                      <p className="m-0">
                        Rs.{" "}
                        {`${calculatePrice(
                          online_price,
                          online_discount,
                          online_discount_unit
                        )?.toLocaleString("en-IN")}`}
                      </p>
                    </Col>
                  </>
                ) : (
                  <Col xs={12} className="">
                    <p className="fw-bold m-0 text-end">Rs. {online_price}</p>
                  </Col>
                )}
              </Row>
            </Col>
          </div>
        </Col>
      </Row>
    </Link>
  );
};

function ReservationOffcanvas({ show, handleClose }: any) {
  const [status, setStatus] = useState("Pending");
  const [currentPage, setCurrentPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState<null | number>(1);
  const [reservationsData, setReservationsData] = useState<any>();
  const [noOfItems, setNoOfItems] = useState<null | number>();
  const [sizeOfPages, setSizeOfPages] = useState(10);
  const { user, token } = useUserStore((state: any) => state);
  const userId = user?.uuid;
  const router = useRouter();

  const getReservationsData = useQuery({
    queryKey: ["reservations", [userId, status, show]],
    queryFn: () => getReservations(token, status),
    enabled: !!userId,
    onSuccess: (data: any) => {
      setReservationsData(data?.data?.body?.data);
      setNoOfPages(data?.data.body?.paginationInfo?.totalPages);
      setNoOfItems(data?.data?.body?.paginationInfo?.totalItems);
    },
  });
  useEffect(() => {
    if (show === true) {
      setStatus("Pending");
      getReservationsData.refetch();
    }
  }, [show]);
  const changePage = (page: any) => {
    setCurrentPage(page);
    window.scrollTo(0, 500);
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reservation Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <>
            <Form.Select
              className="d-block w-50 ms-auto mb-3"
              aria-label="Default select example"
              value={status}
              defaultValue=""
              onChange={(e) => {
                console.log(e.target.value);
                let value = e.target.value;
                if (value === "Pending") {
                  setStatus("Pending");
                } else if (value === "Done") {
                  setStatus("Done");
                }
              }}
            >
              <option id="status" value="Pending">
                Pending
              </option>
              <option id="status" value="Done">
                Done
              </option>
            </Form.Select>
            {getReservationsData?.data?.data?.body?.data?.map(
              (data: any, index: number) => (
                <>
                  <ReservationCard
                    key={index}
                    listing_title={data?.listings?.listing_title}
                    listing_id={data.listing_id}
                    img={data?.items?.itemImages?.img0}
                    condition_item={data?.items?.condition_item}
                    quantity={data?.quantity}
                    online_discount={data?.listings?.online_discount}
                    online_price={data?.listings?.online_price}
                    online_discount_unit={data?.listings?.online_discount_unit}
                    handleClose={handleClose}
                  />
                </>
              )
            )}
            {getReservationsData?.data?.data?.body?.data?.length > 0 && (
              <PaginationBar
                noOfPages={noOfPages}
                currentPage={currentPage}
                changePage={changePage}
              />
            )}
          </>
          {getReservationsData?.data?.data?.body?.data?.length === 0 && (
            <h5 className="d-flex justify-content-center mt-5">
              No Result Found!
            </h5>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ReservationOffcanvas;
