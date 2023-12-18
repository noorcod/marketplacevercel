import SendEmailForm from "../../components/SendEmailForm";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const SendEmail = (props: any) => {
  // console.log("0-0-0-",props.shopData)
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="p-0"
    >
      <Modal.Header className="border-0 px-md-4 px-lg-4 px-3" closeButton>
        Send email
      </Modal.Header>
      <Modal.Body className=" px-md-4 px-lg-4 px-3">
        <SendEmailForm store={true} onhide={props.onHide} shopData={props.shopData} />
      </Modal.Body>
    </Modal>
  );
};

export default SendEmail;
