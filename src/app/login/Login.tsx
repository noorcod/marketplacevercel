"use client"

import Image from "next/image";
import styles from "../../styles/Banner.module.css";
import { banner, tblogo, tblogoName, TechBazaarImage } from "../../../public/images";
import { search, searchLight, location, box } from "../../../public/icons";
import { Button, Col, Form, Row } from "react-bootstrap";
import Link from "next/link";
import ScrollDown from "../../components/ScrollDown";
import { useState } from "react";
import InputMask from 'react-input-mask'
import { SigninUser, SignupUser } from "../apis/postApis";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../ProtectedRoute";



function Login() {

    const [intialvalues, setintialvalues] = useState<any>({
        email: "",
        password: "",
    })
    const router = useRouter()

    const [validated, setValidated] = useState(false)
    const handleChange = (e: any) => {
        setintialvalues({ ...intialvalues, [e.target.name]: e.target.value })
    }
    const mutation = useMutation({
        mutationFn: SigninUser, onSuccess: (data, variables, context) => {
            localStorage.setItem("accessToken", data?.data?.body?.data?.accessToken)
            localStorage.setItem("user", JSON.stringify( data?.data?.body?.data?.user))
            router.push("/")
            // Boom baby!
        }
    })
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setValidated(true);
        mutation.mutate(intialvalues)

    }
    function openPopUp() {
        let url = "http://localhost:8000/api/auth/google";
        let height = 500;
        let width = 700;
        var left = (screen.width - width) / 2;
        var top = (screen.height - height) / 2;
        var newWindow = window.open(url, "center window", 'resizable = yes, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
    }

    return (
        <div style={{ height: "100vh !important" }} className={`loginHeader`}>
            <Row className={`loginBanner`}>
                <Col lg={6} className=" h-100   justify-content-center d-grid align-items-center">


                    <div className="justify-content-center  d-grid " >
                        <div className="text-center">

                            <Image
                                alt="banner"
                                className="text-center"
                                src={tblogo}
                                width={150}
                                height={150}
                            />
                        </div>
                        <Image
                            alt="banner"
                            className="mb-0"
                            src={tblogoName}
                            width={250}
                            height={50}
                        />
                    </div>

                </Col>

                <Col className={`justify-content-center d-grid align-items-center  bg-light h-100`}>

                    <div className={`loginform mb-5 `}>
                        <h3
                            className={`${styles.bannerText}  text-center  `}
                        >
                            Sign In
                        </h3>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} >

                            <Row className={`mt-3 justify-content-center ${styles.dropdownItems}`}>

                                <Col lg={8} className={`pe-0 mt-3 text-center d-flex justify-content-center ${styles.cities}`}>

                                    <Form.Control
                                        onChange={handleChange}
                                        required
                                        name="email"
                                        type={"email"}
                                        value={intialvalues.email}
                                        className="border-dark w-100 w-75"
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
                                        className="border-dark w-100 w-75"
                                        placeholder="password"
                                    />
                                </Col>


                            </Row>
                            <div className={`${styles.ctaButton} text-center px-2 ms-3`}>
                                <Button type="submit" className="w-75   mt-4">
                                    Submit
                                </Button>
                            </div>
                            <p className="my-3 text-secondary text-center">Or</p>
                            <div className="text-center mb-0">
                                <div className="ending">
                                    <p>Or Continue With</p>
                                </div>
                                <div className="socials d-flex justify-content-center">
                                    <Link className="social-btn mx-3" href="" onClick={openPopUp} id="g-btn"><img height={43} width={43} src="https://www.svgrepo.com/download/448227/google.svg" /></Link>
                                    <a className="social-btn" href="" id="g-btn"><img height={43} width={43} src="https://www.svgrepo.com/download/448224/facebook.svg" /></a>

                                    <a className="social-btn mx-3" href="" id="g-btn"><img height={43} width={43} src="https://www.svgrepo.com/download/494331/apple-round.svg" /></a>

                                </div>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default Login