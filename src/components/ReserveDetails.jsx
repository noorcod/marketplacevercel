import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const ReserveDetails = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="py-2" id="contained-modal-title-vcenter">
                Send us reserve details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="p-3">
                    <Form.Group className="mb-3">
                        <Form.Label className="mb-1">Name</Form.Label>
                        <Form.Control className="ps-3 py-2" placeholder="Your name here" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="mb-1">Phone</Form.Label>
                        <Form.Control className="ps-3 py-2" placeholder="Your phone number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="mb-1">Email</Form.Label>
                        <Form.Control className="ps-3 py-2" placeholder="Your email address" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="mb-1">Reserve request details</Form.Label>
                        <Form.Control className="ps-3 py-2" as="textarea" rows={3} placeholder="Enter details..." />
                    </Form.Group>
                    <div className="d-flex align-items-start gap-2">
                        <Form.Check className="m-0" />
                        <span className="fst-italic reserveDetailPolicy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                    <Row className="mt-4">
                        <Col>
                            <Button className="btn-primary w-100 py-2">Reserve</Button>
                        </Col>
                        <Col>
                            <Button className="w-100 py-2 btn-outline-light" onClick={props.onHide}>Cancel</Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ReserveDetails;