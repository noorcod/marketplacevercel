import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteAccountRequest } from "../app/apis/postApis";
import { useUserStore } from "../store/User";
import withReactContent from "sweetalert2-react-content";
const DeactivateModal = ({ showModal, handleModalClose }: any) => {
  const [reason, setReason] = useState<string>("");
  const { user, token } = useUserStore((state: any) => state);
  const [validated, setValidated] = useState(false);
  const MySwal = withReactContent(Swal);
  const mutation = useMutation({
    mutationFn: (data: any) => deleteAccountRequest(data, token),
    onSuccess: (data, variables, context) => {
      setValidated(false);
      MySwal.fire({
        title: "Request Sent Successfully!",
        html: "Requests for delete account added successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 5000,
      });
      setReason("");
      handleModalClose();
      setTimeout(() => {
        MySwal.close();
      }, 5000);
    },
    onError: (error: any) => {
      setValidated(false);
      setReason("");
      switch (error.response.status) {
        case 500:
          error.message =
            "Unfortunately, there was a problem in sending your email";
          break;
        case 409:
          error.message = error.response.data.body.message;
      }
      setReason("");
      handleModalClose();
      Swal.fire({
        title: "Sorry",
        text: error.message,
        icon: "error",
        showConfirmButton: false,
        timer: 5000,
      });
    },
  });

  const handleChange = (e: any) => {
    setReason(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const obj = {
      deletion_reason: reason,
      token: token,
    };
    setValidated(true);
    if (reason.length > 4) {
      mutation.mutate(obj);
    }
  };
  return (
    <>
      <Modal show={showModal} onHide={handleModalClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Deletion Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 style={{ color: "gray" }}>
            You will not be able to log in to the account. Account deletion is
            permanent and will not be reversible.
          </h6>
          <Form noValidate validated={validated}>
            <Form.Group className="mb-3">
              <Form.Label className="mb-1">
                Reason for Deletion:<span className="text-danger ">*</span>{" "}
              </Form.Label>
              <Form.Control
                required
                value={reason}
                name="note"
                onChange={handleChange}
                className="ps-3 py-2"
                as="textarea"
                rows={3}
                minLength={5}
                maxLength={250}
                placeholder="Enter details..."
                isInvalid={
                  validated && (reason.length <= 4 || reason.length > 249)
                }
                isValid={validated && reason.length > 4 && reason.length < 249}
              />
              <Form.Control.Feedback type="invalid">
                * Reason message must be 5 to 250 characters long.
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit Deletion Request
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeactivateModal;
