"use client";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ReserveItem } from "../app/apis/postApis";
import InputMask from "react-input-mask";
import { useQueryClient } from "@tanstack/react-query";
import { fetchShopByUser } from "../app/apis/getApis"; // Import the function for fetching user data
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import withModalAuth from "./auth/withModalAuth";
import { useUserStore } from "../store/User";
const ReserveDetails = (props: any) => {
  const [validated, setValidated] = useState(false);

  const [initialValues, setInitialValues] = useState({
    quantity: undefined,
    note: "",
  });

  const onHide = (e: any) => {
    setValidated(false);
    setInitialValues({
      quantity: undefined,
      note: "",
    });
    props.onHide(e);
  };
  const { user, token } = useUserStore((state: any) => state);
  const MySwal = withReactContent(Swal);
  const mutation = useMutation({
    mutationFn: (data: any) => ReserveItem(data, token),
    onSuccess: (data, variables, context) => {
      setValidated(false);
      MySwal.fire({
        title: "Request Sent Successfully!",
        html: "Request for reserve product sent !",
        icon: "success",
        showConfirmButton: false,
        timer: 5000,
      });
      setTimeout(() => {
        MySwal.close();
      }, 5000);
      onHide(undefined);
    },
    onError: (error) => {
      // setIsValidate(true);
      switch (error.response.status) {
        case 500:
          error.message =
            "Unfortunately, there was a problem in sending your email";
          break;
        case 409:
          error.message = error.response.data.body.message;
      }
      setValidated(true);
      Swal.fire({
        title: "Sorry",
        text: error.message,
        icon: "error",
        showConfirmButton: false,
        timer: 5000,
      });
    },
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInitialValues({ ...initialValues, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const obj = {
      data: {
        customer_name: user?.first_name,
        customer_email: user?.email,
        fk_customer_id: user?.uuid,
        customer_number: user?.phone_number
          .replace("+92", "0")
          .replace(/-/g, ""),
        status: "Pending",
        quantity: Number(initialValues.quantity),
        shop_id: props?.reserveData?.shop_id,
        location_id: props?.reserveData?.locationId,
        item_id: props?.reserveData?.itemId,
        notes: initialValues.note,
        listing_id: props?.reserveData?.listingId,
      },
      token: token,
    };
    setValidated(true);
    if (
      initialValues.note.length > 4 &&
      initialValues.quantity !== undefined &&
      initialValues.quantity > 0 &&
      initialValues.quantity <= props.reserveData.listedQuantity
    ) {
      console.log("Hello");
      mutation.mutate(obj);
    }
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title className="py-2" id="contained-modal-title-vcenter">
          Send us reserve details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="p-3"
        >
          <Form.Group className="mb-3">
            <Form.Label className="mb-1">
              Quantity <span className="text-danger ">*</span>{" "}
            </Form.Label>
            <Form.Control
              name="quantity"
              onChange={handleChange}
              type="number"
              value={initialValues.quantity}
              required
              className="ps-3 py-2"
              placeholder="e.g. 1"
              min={1}
              max={props.reserveData.listedQuantity}
            />
            <Form.Control.Feedback type="invalid">
              {initialValues.quantity > props.reserveData.listedQuantity
                ? "* Not enough stock is available"
                : "* Invalid Quantity"}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="mb-1">
              Reserve request details <span className="text-danger ">*</span>{" "}
            </Form.Label>
            <Form.Control
              required
              value={initialValues.note}
              name="note"
              onChange={handleChange}
              className="ps-3 py-2"
              as="textarea"
              rows={3}
              minLength={5}
              maxLength={250}
              placeholder="Enter details..."
              isInvalid={
                validated &&
                (initialValues.note.length <= 4 ||
                  initialValues.note.length > 249)
              }
              isValid={
                validated &&
                initialValues.note.length > 4 &&
                initialValues.note.length < 249
              }
            />
            <Form.Control.Feedback type="invalid">
              * Message must be 5 to 250 characters long.
            </Form.Control.Feedback>
          </Form.Group>
          <Row className="mt-4">
            <Col>
              <Button type="submit" className="btn-primary w-100 py-2">
                Reserve
              </Button>
            </Col>
            <Col>
              <Button className="w-100 py-2 btn-outline-light" onClick={onHide}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default withModalAuth(ReserveDetails);
