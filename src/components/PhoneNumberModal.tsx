import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import InputMask from "react-input-mask";
import useAuth from "./auth/useAuth";
import { useUserStore } from "../store/User";
function PhoneNumberModal(props: any) {
  const {token,user} = useUserStore((state:any)=>state)
  const {getSetPhoneNumber} = useAuth();
  const [number, setNumber] = useState<number>();
  
 

  const handleSubmit =async (e:any) => {
    e.preventDefault();
    let obj={
      customer_number:number,
      customer_id:user?.uuid,
    }
    if(number){
      getSetPhoneNumber().mutate(obj,{
        onSuccess: () => {
          props.onHide()
        }
      })
    }
  };
  const handleChange = (e: any) => {
    
    setNumber(e.target.value);
  };
  
  return (
    <div>
      {" "}
      <Modal
        {...props}
        size="sm"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="p-3 ">
            <Form.Group className="mb-3">
              <Form.Label className="mb-1  ">Phone</Form.Label>
              <InputMask
                className=" w-100 "
                mask="+\92-399-9999999"
                value={number}
                onChange={handleChange}
                name="customer_number"
              >
                <Form.Control
                  className="border-dark w-75"
                  placeholder="+92-3XX-XXXXXXX"
                  type="tel"
                  required={true}         

                />
              </InputMask>
              <Form.Control.Feedback type="invalid">
          * Please Select Phone Number
        </Form.Control.Feedback>
            </Form.Group>
            <Row className="mt-4 d-flex justify-content-center" >
              <Col className="d-flex justify-content-center" >
                <Button type="submit" variant="dark" className="btn w-75 py-2">
                  Submit
                </Button>
              </Col>
             
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PhoneNumberModal;
