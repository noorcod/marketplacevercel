import { Button, Col, Form, Row } from "react-bootstrap";

const SendEmailForm = () => {
    return (
        <Form className={`p-3 border-top border-2 mb-3`}>
            <Form.Group className="mb-3">
                <Form.Label className="mb-1">Name</Form.Label>
                <Form.Control className="ps-3 py-2" placeholder="Your name here" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="mb-1">Email</Form.Label>
                <Form.Control className="ps-3 py-2" placeholder="example@mail.com" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="mb-1">Phone Number</Form.Label>
                <Form.Control className="ps-3 py-2" placeholder="Your phone number" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="mb-1">Details</Form.Label>
                <Form.Control className="ps-3 py-2" as="textarea" rows={3} placeholder="Write details..." />
            </Form.Group>
            <Row className="mt-4">
                <Col>
                    <Button className="btn-primary w-100 py-2">Send</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default SendEmailForm;