"use client";

import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigationEvent } from "../hooks/useNavigationEvent";
import { Metadata } from "next";
import Select from "react-select";
import InputMask from "react-input-mask";
import axios from "axios";
import { useMutation, useQuery, QueryClient } from "@tanstack/react-query";
import { BeocmeSeller } from "../apis/postApis";
import { fetchShopByUser } from "../apis/getApis";
import Swal from "sweetalert2";
import { useUserStore } from "../../store/User";
import { useRouter } from "next/navigation";
import "../../styles/BecomeSeller.module.css";

export const metadata: Metadata = {
  title: 'About Us | TechBazaar"',
  description: "Buy & Sell Tech related products with ease.",
};


interface becomeSellerType {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  city: string;
  shop_name: string;
  address: string;
  inquiry: string;
}

const BecomeSeller = (props: any) => {
  const { user, token } = useUserStore((state: any) => state);
  const [error,setError]=useState<any>()
  useNavigationEvent();
  const router = useRouter();

  const [intialValues, setIntialValues] = useState<becomeSellerType>({
    first_name: user?.first_name ?? "",
    last_name: user?.last_name ?? "",
    phone_number: user?.phone_number?? "",
    email: user?.email??"",
    city: "",
    shop_name: "",
    address: "",
    inquiry: "",
  });
  const [validated, setValidated] = useState(false);
  const [citiesOption, setCitiesOption] = useState([]);
  const getCities = async () => {
    try {
      const data = await axios.post("https://countriesnow.space/api/v0.1/countries/cities", {
        country: "Pakistan",
      });
      setCitiesOption(
        data.data.data.map((item: any) => {
          return {
            label: item,
            value: item,
          };
        })
      );
    } catch (error) {}
  };
  useEffect(() => {
    getCities();
  }, []);

  const handleChange = (e: any) => {
    // Check if the input is valid based on the field name
    setError('')
    if (e.target.name === "first_name" || e.target.name === "last_name") {
      if(/^[a-zA-Z\s]*$/.test(e.target.value)){
        setIntialValues((prev:any)=>({ ...prev, [e.target.name]: e.target.value }));
      }
    }else{
      setIntialValues((prev:any)=>({ ...prev, [e.target.name]: e.target.value }));
    }
    // setValidated(false)
  };
  
  useEffect(()=>{
    console.log(intialValues,"const")
  },[intialValues])
    
  
  const muatation = useMutation({
    mutationFn: BeocmeSeller,

    // switch(res.status){
    //   case 400:

    // }
    onSuccess: (data, variables, context) => {
      setIntialValues({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        city: "",
        shop_name: "",
        address: "",
        inquiry: "",
      });
      // Boom baby!
      Swal.fire({
        title: "Request Sent Successfully!",
        html: "We Will reach you soon !",
        icon: "success",
        showConfirmButton: false,
      });
      setValidated(false)
      setTimeout(() => {
        Swal.close();
      }, 5000);
      
    },
    

    onError: (error) => {
      console.log(error);

      // setIsValidate(true);

      switch (error.response.status) {
        case 500:
          error.message =
            "Unfortunately, there was a problem in sending your email";
          break;
        case 409:
          error.message = error.response.data.body.message;
          break;
        case 400:

          setError('Please Enter a Valid Email')
          break
        default:
          break;
      }
      setValidated(true);
      
    },
  });

  const handleSubmit = async (e: any) => {
    const obj: becomeSellerType = {
      first_name: intialValues?.first_name,
      last_name: intialValues?.last_name,
      phone_number: intialValues?.phone_number,
      email: intialValues?.email,
      city: intialValues?.city?.label,
      shop_name: intialValues?.shop_name,
      address: intialValues?.address,
      inquiry: intialValues?.inquiry,
    };
    const areAllFieldsFilledExceptShopName = Object.entries(obj).every(([key, value]) => {
      if (key !== "shop_name") {
        return value !== "" && value !== null;
      }
      return true; // Allow null or empty shop_name
    });
    e.preventDefault();
    setValidated(true);
    if (areAllFieldsFilledExceptShopName && obj?.phone_number.replaceAll("_", "").length === 15) {
      muatation.mutate(obj);
    }
    // setValidated(false)
  };
  return (
    <div>
      <div style={{ minHeight: "90vh", background: "#EDF2FA" }} className={"d-flex p-2  justify-content-center align-items-center"}>
        <div className="bg-white rounded-2 viewport-width p-5" style={{ maxWidth: "650px" }}>
          <div className="border-bottom mb-3 ">
            <h1 style={{ color: "#0E1724" }} className="fs-20 fw-700">
              Become a Seller
            </h1>
          </div>
          <Container fluid>
            <Form noValidate onSubmit={handleSubmit} validated={validated} className="">
              <Row>
                <Col lg="6" md="6" xs="12">
                  <Form.Group className="mb-3 ">
                    <Form.Label className="mb-1">
                      First name <span className="text-danger ">*</span>{" "}
                    </Form.Label>
                    <Form.Control  value={intialValues.first_name} name="first_name" onChange={handleChange} minLength={3} maxLength={50} className="ps-3 py-2" required placeholder="First name" />
                    <Form.Control.Feedback type="invalid">{intialValues.first_name.length < 3 || intialValues.first_name.length > 50 ? "length of name must be between 3 and 50" : "Please provide a valid  name."}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg="6" md="6" xs="12">
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-1">
                      Last name <span className="text-danger ">*</span>
                    </Form.Label>
                    <Form.Control value={intialValues.last_name} name="last_name" maxLength={50} onChange={handleChange} className="ps-3 py-2" placeholder="Last name" required/>
                    <Form.Control.Feedback type="invalid">{ intialValues.last_name.length > 50 ? "length of name must be between 3 and 50" : "Please provide a valid  name."}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" xs="12">
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-1">
                      Phone number <span className="text-danger ">*</span>
                    </Form.Label>
                    <InputMask className=" w-100   " mask="+\92-399-9999999" value={intialValues.phone_number} onChange={handleChange} name="phone_number">
                      <Form.Control className="border-dark w-75" placeholder="xxxxxxxxxxx" type="tel" required={true} isInvalid={validated && !!intialValues.phone_number && intialValues.phone_number.replaceAll("_", "").length < 15} />
                    </InputMask>
                    <Form.Control.Feedback type="invalid">* Please Enter Valid Phone number</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg="6" md="6" xs="12">
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-1">
                      Email <span className="text-danger ">*</span>
                    </Form.Label>
                    <Form.Control value={intialValues.email}name="email"  onChange={handleChange} className="ps-3 py-2" placeholder="Email" type="email" required />
                    {error&& (<p className="text-danger" >* {error}</p>)}
                    <Form.Control.Feedback type="invalid">* Please Enter Valid Email</Form.Control.Feedback>

                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" xs="12">
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-1">Shop/business name (if Any)</Form.Label>
                    <Form.Control name="shop_name" onChange={handleChange} value={intialValues?.shop_name} className="ps-3 py-2" placeholder="Your business or shop" />
                  </Form.Group>
                </Col>
                <Col lg="6" md="6" xs="12">
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-1">
                      City <span className="text-danger ">*</span>
                    </Form.Label>

                    <Select
                      className=""
                      classNamePrefix={"Select"}
                      isSearchable
                      name="color"
                      onChange={(e) => {
                        if (e) {
                          setIntialValues({ ...intialValues, city: e as string });
                        }
                      }}
                      options={citiesOption}
                      // filterOption={createFilter(filterConfig)}
                    />
                    <Form.Control value={intialValues?.city} hidden name="city" required />

                    <Form.Control.Feedback type="invalid">Please Select city.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg="12">
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-1">
                      Street address <span className="text-danger ">*</span>
                    </Form.Label>
                    <Form.Control name="address" value={intialValues.address} onChange={handleChange} className="ps-3 py-2" placeholder="Business Address"  required />
                  </Form.Group>
                  <Form.Control.Feedback type="invalid">Please Enter Valid Address.</Form.Control.Feedback>
                  <Form.Label className="mb-1">
                    Inquiry <span className="text-danger ">*</span>
                  </Form.Label>

                  <Form.Control name="inquiry" onChange={handleChange} value={intialValues.inquiry} as="textarea" placeholder="" style={{ height: "100px" }} required />
                  <Form.Control.Feedback type="invalid">Please Enter Your Inquiry.</Form.Control.Feedback>
                </Col>
              </Row>

              <Row className="mt-4">
                <Col>
                  <Button type="submit" className="btn-primary w-100 fs-18  py-2">
                    Create Account
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default BecomeSeller;
