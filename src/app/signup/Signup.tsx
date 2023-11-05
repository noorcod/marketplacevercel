'use client'

import Image from "next/image";
import styles from "../../styles/Banner.module.css";
import { banner, tblogo, tblogoName } from "../../../public/images";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import InputMask from 'react-input-mask'
import { useRouter } from "next/navigation";
import useAuth from "../../components/auth/useAuth";

type Props = {
  mask: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  children: React.ReactNode; // Use ReactNode type for children.
};


function Signup() {
  const {getSignup} = useAuth();

  const [intialvalues, setintialvalues] = useState<any>({
    full_name: "",
    phone_number: "",
    email: "",
    password: "",
    auth_type: "m"

  })

  const [confirmPassword, setConfirmPassword] = useState("")
  const [validated, setValidated] = useState(false)
  const router =useRouter()

  const handleChange = (e: any) => {
    setintialvalues({ ...intialvalues, [e.target.name]: e.target.value })
  }
  
  
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setValidated(true);
    
    const obj={
      first_name:intialvalues.full_name.split(" ")[0],
      last_name:intialvalues.full_name.split(" ")[1],
      phone_number:intialvalues.phone_number,
      email:intialvalues.email,
      password:intialvalues.password,
      url:"https://github.com/vercel/next.js/discussions/48110"
    }
    if (!Object.values(obj).includes('')) {
      getSignup().mutate(obj)
    }
  }
  const token = localStorage.getItem("accessToken");
//   useEffect(() => {
//     if(token){
// router.push("/")
//     }
//   }, [token])
  return (
    <div style={{ height: "100vh !important" }} className={`loginHeader`}>
      <Row className={`loginBanner`}>
        <Col lg={6} className=" h-100   justify-content-center d-grid align-items-center">
          <div className="justify-content-center d-flex " >

            <Image
              alt="banner"
              className="mb-0"
              src={tblogoName}
              width={200}
              height={50}
            />
          </div>
          <div className="justify-content-center d-flex " >

            <Image
              className={`${styles.bannerImg}`}
              alt="banner"
              src={banner}
              width={500}
              height={500}
            />
          </div>

        </Col>
        <Col className={`justify-content-center d-grid align-items-center  bg-light h-100`}>

          <div className={`loginform mb-5 `}>

            <h3
              className={`${styles.bannerText}  text-center  `}
            >
              Sign Up
            </h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >

              <Row className={`mt-3 justify-content-center ${styles.dropdownItems}`}>
                <Col lg={8} className={`pe-0 mt-3  text-center d-flex justify-content-center ${styles.cities}`}>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="full_name"
                    required
                    value={intialvalues.full_name}
                    className="border-dark w-75"
                    placeholder="Enter Full Name"
                  />

                </Col>
                {/* <Col lg={8} className={`pe-0 mt-3  text-center d-flex justify-content-center ${styles.cities}`}>

                  <Form.Control
                    onChange={handleChange}
                    type={"text"}
                    name="last_name"
                    required

                    value={intialvalues.last_name}
                    className="border-dark w-75"
                    placeholder="Enter Last Name"
                  />
                </Col> */}
                <Col lg={8} className={`pe-0 mt-3 text-center d-flex justify-content-center ${styles.cities}`}>
                  <InputMask
                    className="border-dark w-75 "
                    mask="+\92-399-9999999"
                    value={intialvalues.phone_number}
                    onChange={handleChange}
                    name="phone_number"
                  >
                    <Form.Control className="border-dark w-75" placeholder="xxxxxxxxxxx" type="tel" required={true} />
                  </InputMask>

                </Col>
                <Col lg={8} className={`pe-0 mt-3 text-center d-flex justify-content-center ${styles.cities}`}>

                  <Form.Control
                    onChange={handleChange}
                    required
                    name="email"
                    type={"email"}
                    value={intialvalues.email}
                    className="border-dark w-75"
                    placeholder="Email"
                  />
                </Col>
                <Col lg={8} className={`pe-0 mt-3 text-center d-flex justify-content-center ${styles.cities}`}>

                  <Form.Control
                    onChange={handleChange}
                    name="password"
                    type="password"
                    required
                    value={intialvalues.password}
                    className="border-dark w-75"
                    placeholder="password"
                  />
                </Col>
                <Col lg={8} className={`pe-0 mt-3 text-center d-flex justify-content-center ${styles.cities}`}>

                  <Form.Control
                    onChange={(e: any) => {
                      setConfirmPassword(e.target.value)
                      if (intialvalues.password === e.target.value) {

                      }
                    }}
                    value={confirmPassword}
                    className="border-dark w-75"
                    type="password"
                    required
                    placeholder="Confirm Password"
                  />
                </Col>
                {intialvalues.password !== confirmPassword ? <p className="text-danger text-center mb-0 mt-1" >password must be same</p> : ""}
              </Row>
              <div className={`${styles.ctaButton} text-center ms-3`}>
                <Button type="submit" className="w-50  mt-4">
                  Submit
                </Button>
              </div>
              {/* <p className="my-3 text-secondary text-center">Or</p>
              <div className="text-center mb-0">
                <div className="ending">
                  <p>Or Continue With</p>
                </div>
                <div className="socials d-flex justify-content-center">
                  <a className="social-btn mx-3" href="" id="g-btn"><img height={43} width={43} src="https://www.svgrepo.com/download/448227/google.svg" /></a>
                  <a className="social-btn" href="" id="g-btn"><img height={43} width={43} src="https://www.svgrepo.com/download/448224/facebook.svg" /></a>

                  <a className="social-btn mx-3" href="" id="g-btn"><img height={43} width={43} src="https://www.svgrepo.com/download/494331/apple-round.svg" /></a>

                </div>
              </div> */}
            </Form>
          </div>
        </Col>
      </Row>
    </div>

  )
}

export default Signup