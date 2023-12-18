"use client";

import { Button, Form } from "react-bootstrap";
import styles from "../../styles/Contact.module.css";
import { useNavigationEvent } from "../hooks/useNavigationEvent";
import Breadcrumbs from "../../components/Breadcrumb";

const Contact = () => {
  useNavigationEvent();

  return (
    <div className={`${styles.wrapper}`}>
      <main className="main h-100">
        <Breadcrumbs />
        <div className={`d-flex align-items-center justify-content-center ${styles.formWrapper}`}>
          <div className={`${styles.formCard} py-5 px-md-4 px-2 border-bottom`}>
            <h5>Get in touch</h5>
            <hr className={styles.separater} />
            <Form>
              <Form.Group className="mb-4">
                <Form.Label>
                  Full Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control className="py-2" placeholder="Your full name" type="text" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>
                  Phone Number <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control className="py-2" placeholder="xxxxx-xxxxxxx" type="number" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>
                  Email <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control className="py-2" placeholder="example@mail.com" type="email" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>
                  Inquiry <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control placeholder="Details" as={"textarea"} rows={3} />
              </Form.Group>
              <div>
                <Button className="w-100 rounded-1 fs-18">Submit</Button>
              </div>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
