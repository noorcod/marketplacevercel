import Header from '@/components/Header'
import Meta from '@/components/Meta/Meta'
import Topbar from '@/components/Topbar'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const becomeSeller = (props) => {
    return (<>
        <Meta title="Become Seller | Techbazaar" />
        <div>
            <Topbar />
            <Header />
            <div style={{ minHeight: "90vh", background: "#EDF2FA" }} className={'d-flex   justify-content-center align-items-center'} >

                <div className='bg-white rounded-2   p-5'>
                    <div className='border-bottom mb-3 '  >
                        <h1 style={{ color: "#0E1724" }} className='fs-20 fw-700'>Become a Seller</h1>
                    </div>
                    <Form className="">

                        <Row>
                            <Col lg="6" md="6" xs="12" >
                                <Form.Group className="mb-3 ">
                                    <Form.Label className="mb-1">First name <span className='text-danger '>*</span> </Form.Label>
                                    <Form.Control className="ps-3 py-2" placeholder="First name" />
                                </Form.Group>
                            </Col>
                            <Col lg="6" md="6" xs="12">

                                <Form.Group className="mb-3">
                                    <Form.Label className="mb-1">Last name <span className='text-danger '>*</span></Form.Label>
                                    <Form.Control className="ps-3 py-2" placeholder="Last name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>

                            <Col lg="6" md="6" xs="12">
                                <Form.Group className="mb-3">
                                    <Form.Label className="mb-1">Phone number <span className='text-danger '>*</span></Form.Label>
                                    <Form.Control className="ps-3 py-2" placeholder="First name" />
                                </Form.Group>
                            </Col>
                            <Col lg="6" md="6" xs="12">

                                <Form.Group className="mb-3">
                                    <Form.Label className="mb-1">Email <span className='text-danger '>*</span></Form.Label>
                                    <Form.Control className="ps-3 py-2" placeholder="Last name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>

                            <Col lg="6" md="6" xs="12">
                                <Form.Group className="mb-3">
                                    <Form.Label className="mb-1">Shop/business name (if Any)</Form.Label>
                                    <Form.Control className="ps-3 py-2" placeholder="Your business or shop" />
                                </Form.Group>
                            </Col>
                            <Col lg="6" md="6" xs="12">
                                <Form.Group className="mb-3">

                                    <Form.Label className="mb-1">City <span className='text-danger '>*</span></Form.Label>

                                    <Form.Select
                                        className="py-2"
                                        aria-label="Default select example"
                                    >
                                        <option>City</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>

                            </Col>
                            <Col lg="12">
                                <Form.Group className="mb-3">
                                    <Form.Label className="mb-1">Street address <span className='text-danger '>*</span></Form.Label>
                                    <Form.Control className="ps-3 py-2" placeholder="buisness address" />
                                </Form.Group>
                                <Form.Label className="mb-1">Inquiry <span className='text-danger '>*</span></Form.Label>

                                <Form.Control
                                    as="textarea"
                                    placeholder=""
                                    style={{ height: '100px' }}
                                />
                            </Col>
                        </Row>


                        <Row className="mt-4">
                            <Col>
                                <Button className="btn-primary w-100 fs-18  py-2">Create Account</Button>
                            </Col>

                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    </>)
}

export default becomeSeller