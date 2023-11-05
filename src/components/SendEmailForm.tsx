import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import InputMask from "react-input-mask";
import { useUserStore } from "../store/User";

import { useMutation } from "@tanstack/react-query";
import { SendEmail } from "../app/apis/postApis";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const SendEmailForm = ({ shopData, store }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [isValidate, setIsValidate] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const nameFormat = /^[a-zA-Z\s]+$/;
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailValidate = !emailFormat.test(formData.email) ? false : true;

  console.log(shopData);
  const sendEmailMutation = useMutation(SendEmail, {
    onSuccess: () => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsValidate(false);
      Swal.fire({
        title: "Thank you for sending your query.",
        text: store
          ? `We have sent your message to ${shopData?.shop_name}. They will be getting in touch with you at the earliest.`
          : `We have sent your message to ${shopData.item.shopTable.shop_name}. They will be getting in touch with you at the earliest.`,
        icon: "success",
        showConfirmButton: false,
        timer: 5000,
      }).then(() => {
        setIsDisabled(false);
      });
      setIsDisabled(true);
    },
    onError: (error) => {
      // setIsValidate(true);
      Swal.fire({
        title: "Sorry",
        text: "Unfortunately, there was a problem in sending your email.",
        icon: "error",
        showConfirmButton: false,
        timer: 5000,
      }).then(() => {
        setIsDisabled(false);
      });
      setIsDisabled(true);
      console.error(error);
    },
    retry: 0,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsValidate(true);

    if (isDisabled) {
      return;
    }

    const reCaptchaToken = await executeRecaptcha("enquiryFormSubmit");

    if (!reCaptchaToken) {
      console.error("reCAPTCHA token not available.");
      return;
    }
  console.log("running")
    const Obj = {
      formData: {
        ...formData,
        phone: formData.phone.replace(/[+-]/g, ""),
        token: reCaptchaToken,
      },
      storeUsername: shopData?.username || shopData?.item?.shopTable?.username,
      listingId: shopData?.listing_id,
    };
    setIsDisabled(true);
    if (
      nameFormat.test(formData.name) &&
      emailValidate &&
      formData.message.length > 4 &&
      formData.message.length < 250 &&
      formData.phone.replace(/\D/g, "").length === 12
    ) {
      sendEmailMutation.mutate(Obj);
    }
    setIsDisabled(false);
    return;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Form
      className={`p-3 border-top border-2 mb-3`}
      onSubmit={handleSubmit}
      noValidate
      validated={isValidate}
    >
      <Form.Group className="mb-3">
        <Form.Label className="mb-1">
          Name <span className="text-danger ">*</span>{" "}
        </Form.Label>
        <Form.Control
          className="ps-3 py-2"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your name here"
          pattern="^^[A-Za-z ]+$"
          type="text"
          minLength={3}
          maxLength={70}
          required
        />
        <Form.Control.Feedback type="invalid">
          Invalid Name
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="mb-1">
          Email <span className="text-danger ">*</span>{" "}
        </Form.Label>
        <Form.Control
          className="ps-3 py-2"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="example@mail.com"
          type="email"
          isInvalid={isValidate && !emailValidate}
          required
        />
        <Form.Control.Feedback type="invalid">
          Invalid Email
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="mb-1">
          Phone Number <span className="text-danger ">*</span>{" "}
        </Form.Label>
        <InputMask
          className="w-100"
          mask="+\92-999-9999999"
          value={formData.phone}
          onChange={handleInputChange}
          name="phone"
        >
          <Form.Control
            className="ps-3 py-2"
            placeholder="xxxxxxxxxxx"
            type="tel"
            required={true}
            isInvalid={
              isValidate && formData.phone.replace(/\D/g, "").length !== 12
            }
          />
        </InputMask>
        <Form.Control.Feedback type="invalid">
          Invalid Phone Number
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="mb-1">
          Message <span className="text-danger ">*</span>{" "}
        </Form.Label>
        <Form.Control
          className="ps-3 py-2"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          as="textarea"
          minLength={5}
          maxLength={250}
          rows={3}
          placeholder="Write message..."
          isInvalid={
            isValidate &&
            (formData.message.length < 4 || formData.message.length > 250)
          }
          required
        />
        <Form.Control.Feedback type="invalid">
          Message must be 5 to 250 characters long.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group id="reCaptcha"></Form.Group>
      <Row className="mt-4">
        <Col>
          <Button
            type="submit"
            className="btn-primary w-100 py-2"
            disabled={isDisabled}
          >
            Send
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SendEmailForm;
