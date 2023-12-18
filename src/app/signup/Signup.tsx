"use client";

import Image from "next/image";
import styles from "../../styles/Banner.module.css";
import { banner, tblogo, tblogoName } from "../../../public/images";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import InputMask from "react-input-mask";
import { useRouter } from "next/navigation";
import useAuth from "../../components/auth/useAuth";
import { navHomeIcon } from "../../../public/icons";
import Link from "next/link";
import Swal from "sweetalert2";

type Props = {
  mask: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  children: React.ReactNode; // Use ReactNode type for children.
};

function Signup() {
  const { signupMutation } = useAuth();

  const [intialvalues, setintialvalues] = useState<any>({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    auth_type: "m",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const router = useRouter();

  const handleChange = (e: any) => {
    if (e.target.name === "first_name" || e.target.name === "last_name") {
      let isValidInput = /^[a-zA-Z\s]*$/.test(e.target.value);
      if (isValidInput) {
        setintialvalues({ ...intialvalues, [e.target.name]: e.target.value });
        signupMutation.reset();
      }
    } else {
      setintialvalues({ ...intialvalues, [e.target.name]: e.target.value });
      signupMutation.reset();
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setValidated(true);

    const obj = {
      first_name: intialvalues.first_name,
      last_name: intialvalues.last_name,
      phone_number: intialvalues.phone_number,
      email: intialvalues.email,
      password: intialvalues.password,
      url: "https://github.com/vercel/next.js/discussions/48110",
    };

    if (!Object.values(obj).includes("") && intialvalues.password === confirmPassword && intialvalues.phone_number.length === 15  ) {
      signupMutation.mutate(obj,{
        onSuccess: (data) => {

          Swal.fire({
            title: "Success",
            text: "Account created successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 2000
            
          })
          
        },
        onError: (error) => {
          switch (error.response.data.status) {
            case 409:
              error.response.data.message=error.response.data.body.message
              break;
            case 500:
              error.response.data.message=error.response.data.body.message

            
              

          }
          

          Swal.fire({
            title: "Error",
            text: error.response.data.message,
            icon: "error",
            showConfirmButton: false,
            timer: 2000
          })
          
        }
      });
    }
  };

  const token = localStorage.getItem("accessToken");
  //   useEffect(() => {
  //     if(token){
  // router.push("/")
  //     }
  //   }, [token])
  return (
    <div style={{ height: "100vh !important" }} className={`loginHeader d-flex justify-content-center`}>
      <Row className={`loginBanner`}>
        <Col lg={6} className=" h-100 d-none justify-content-center d-lg-grid align-items-center">
          <div className="justify-content-center d-flex ">
            <Image alt="banner" className="mb-0" src={tblogoName} width={200} height={50} />
          </div>
          <div className="justify-content-center d-flex ">
            <Image className={`${styles.bannerImg}`} alt="banner" src={banner} width={500} height={500} />
          </div>
        </Col>
        <Col className={`justify-content-center d-grid align-items-center  bg-light h-100 position-relative`}>
          <div className={`position-absolute ${styles.backIcon} p-3`}>
            <Link href={"/"}>
              <Image alt="home" src={navHomeIcon} width={32} height={32} />{" "}
            </Link>
          </div>
          <div className={`loginform mb-5 `}>
            <h3 className={`${styles.bannerText}  text-center  `}>Sign Up</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className={`mt-3 justify-content-center  ${styles.dropdownItems}`}>
                <Row lg={8} className={`pe-0 mt-3 text-center d-flex justify-content-center ${styles.cities}`}>
                  <Form.Control onChange={handleChange} minLength={3} maxLength={50} type="text" name="first_name" required value={intialvalues.first_name} className="border-dark w-75" placeholder="Enter First Name" />
                  <Form.Control.Feedback type="invalid">{intialvalues.first_name.length < 3 || intialvalues.first_name.length > 50 ? "length of input must be between 3 and 50" : "Please provide a valid  name."}</Form.Control.Feedback>
                </Row>
                <Row lg={8} className={`pe-0 mt-3 text-center d-flex justify-content-center ${styles.cities}`}>
                  <Form.Control onChange={handleChange} type={"text"} name="last_name" required maxLength={50} value={intialvalues.last_name} className="border-dark w-75" placeholder="Enter Last Name" />
                  <Form.Control.Feedback type="invalid">{ intialvalues.last_name.length > 50 ? "length of input must be between 3 and 50" : "Please provide a valid  name."}</Form.Control.Feedback>
                </Row>

                <Row lg={8} className={`pe-0 mt-3 text-center d-flex justify-content-center ${styles.cities}`}>
                  <InputMask className="border-dark w-75" mask="+\92-399-9999999" value={intialvalues.phone_number} minLength={15} onChange={handleChange} name="phone_number" required>
                    <Form.Control isValid={validated && intialvalues.phone_number.length === 14} isInvalid={validated && intialvalues.phone_number.length < 14} minLength={14} className="border-dark w-75" placeholder="xxxxxxxxxxx" type="tel" required={true} />
                  </InputMask>
                  <Form.Control.Feedback type="invalid">{validated && intialvalues.phone_number.length < 14 ? "Please provide a phone number." : "Enter a Valid Phone Number"}</Form.Control.Feedback>
                </Row>

                <Row lg={8} className={`pe-0 mt-3 text-center d-flex justify-content-center ${styles.cities}`}>
                  <Form.Control onChange={handleChange} required name="email" type="email"  value={intialvalues.email} className="border-dark w-75" placeholder="Email" />
                  <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
                </Row>

                <Row lg={8} className={`pe-0 mt-3 text-center d-flex justify-content-center ${styles.cities}`}>
                  <Form.Control onChange={handleChange} name="password" type="password" required value={intialvalues.password} className="border-dark w-75" placeholder="Password" />
                  <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                </Row>

                <Row lg={8} className={`pe-0 mt-3 text-center d-flex justify-content-center ${styles.cities}`}>
                  <Form.Control
                    onChange={(e: any) => {
                      setConfirmPassword(e.target.value);
                      if (intialvalues.password === e.target.value) {
                      }
                    }}
                    value={confirmPassword}
                    className="border-dark w-75"
                    type="password"
                    required
                    placeholder="Confirm Password"
                    isValid={validated&&intialvalues.password === confirmPassword}
                    isInvalid={validated&&intialvalues.password !== confirmPassword}
                  />
                </Row>

                {intialvalues.password !== confirmPassword ? <p className="text-danger text-center mb-0 mt-1">Passwords must match.</p> : ""}
              </Row>

              <div className={`${styles.ctaButton} text-center ms-3`}>
                <Button type="submit" className="w-50 mt-4">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
