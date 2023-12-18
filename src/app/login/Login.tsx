"use client";

import Image from "next/image";
import styles from "../../styles/Banner.module.css";
import { banner, tblogo, tblogoName, TechBazaarImage } from "../../../public/images";
import { Button, Col, Form, Row } from "react-bootstrap";
import Link from "next/link";
import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ButtonLoader from "../../components/ButtonLoader";
import useAuth from "../../components/auth/useAuth";
import { navHomeIcon } from "../../../public/icons";

function Login() {
  const { googleLogin, manualLoginMutation, fetchFacebookUserData } = useAuth();
  const [profile, setProfile] = useState([]);
  const [intialvalues, setintialvalues] = useState<any>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const searchParam = useSearchParams();
  const [validated, setValidated] = useState(false);
  const handleChange = (e: any) => {
    setintialvalues({ ...intialvalues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setValidated(true);
    manualLoginMutation.mutate(intialvalues);
  };

  const onLoginStart = useCallback(() => {}, []);

  const onLogoutSuccess = useCallback(() => {}, []);
  return (
    <div style={{ height: "100vh !important" }} className={`loginHeader d-flex justify-content-center`}>
      <Row className={`loginBanner`}>
        <Col lg={6} className=" h-100  d-none justify-content-center d-lg-grid align-items-center ">
          <div className="justify-content-center  d-grid ">
            <div className="text-center">
              <Image alt="banner" className="text-center" src={tblogo} width={150} height={150} />
            </div>
            <Image alt="banner" className="mb-0" src={tblogoName} width={250} height={50} />
          </div>
        </Col>

        <Col className={`justify-content-center d-grid align-items-center  bg-light h-100 position-relative`}>
          <div className={`position-absolute ${styles.backIcon} p-3`}>
            <Link href={"/"}>
              <Image alt="home" src={navHomeIcon} width={32} height={32} />{" "}
            </Link>
          </div>
          <div className={`loginform mb-5 `}>
            <h3 className={`${styles.bannerText}  text-center  `}>Sign In</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className={`mt-3 justify-content-center ${styles.dropdownItems}`}>
                <Col lg={8} className={`pe-0 mt-3 text-center d-flex justify-content-center ${styles.cities}`}>
                  <Form.Control onChange={handleChange} required name="email" type={"email"} value={intialvalues.email} className="border-dark w-100 w-75" placeholder="Email" />
                </Col>
                <Col lg={8} className={`pe-0 mt-3 text-center d-flex justify-content-center ${styles.cities}`}>
                  <Form.Control onChange={handleChange} name="password" type="password" required value={intialvalues.password} className="border-dark w-100 w-75" placeholder="password" />
                </Col>
              </Row>
              <p className="mt-1 text-danger text-center ms-2 ">{manualLoginMutation.error?.response?.data?.body?.message}</p>
              <div className={`${styles.ctaButton} text-center px-2 ms-3`}>
                <Button type="submit" className="w-75   mt-4">
                  {manualLoginMutation.isLoading ? <ButtonLoader /> : "Submit"}
                </Button>
              </div>
              <p className="my-3 text-secondary text-center">
                Or{" "}
                <Link className="text-decoration-underline link " href="/signup">
                  Signup
                </Link>
              </p>
              <div className="text-center mb-0">
                <div className="ending">
                  <p>Or Continue With</p>
                </div>
                <div className="socials d-flex justify-content-center">
                  <button type="button" onClick={googleLogin} className="  bg-light  mx-3">
                    <img height={43} width={43} src="https://www.svgrepo.com/download/448227/google.svg" />
                  </button>

                  {/* <LoginSocialFacebook
                    appId={`${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}`}
                    fieldsProfile={
                      "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                    }
                    onLoginStart={onLoginStart}
                    onLogoutSuccess={onLogoutSuccess}
                    //   redirect_uri={REDIRECT_URI}
                    onResolve={({ provider, data }: any) => {
                      fetchFacebookUserData(data.accessToken);
                    }}
                    onReject={(err) => {
                      console.log(err);
                    }}
                  >
                    <button type="button" className="bg-light mx-3" id="g-btn">
                      <img
                        height={43}
                        width={43}
                        src="https://www.svgrepo.com/download/448224/facebook.svg"
                      />
                    </button>
                  </LoginSocialFacebook> */}
                  {/* <a className="social-btn mx-3" href="" id="g-btn">
                    <img
                      height={43}
                      width={43}
                      src="https://www.svgrepo.com/download/494331/apple-round.svg"
                    />
                  </a> */}
                </div>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
