"use client";
import { send } from "emailjs-com";
import { useState } from "react";
import { Col, Row, Modal, Button, Container } from "react-bootstrap/";

import { NextSeo } from "next-seo";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "next/image";

import avatar from "../../public/images/avatar.png";
import styles from "./contact.module.css";
import "bootstrap/dist/css/bootstrap.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your message was successfully send
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Thank you for messgae</h4>
        <p>I will contact you shortly</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ContactFormScreen() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Rotem",
    message: "",
    reply_to: "",
  });

  const [modalShow, setModalShow] = useState(false);

  function handleChange(e) {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    send(
      "service_oqhw6aq",
      "template_snlp62m",
      toSend,
      "user_M4rEbgKyd10sx3ov6BLUQ",
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        console.log(" email send ");
        setModalShow(true);
        resetForm();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }

  function resetForm() {
    document.getElementById("messageForm").reset();
    setToSend({ from_name: "", to_name: "Rotem", message: "", reply_to: "" });
  }

  return (
    <Container fluid className={styles.background}>
      <NextSeo title="Contact Page" description="Here you can contact me" />

      <Row className={styles.centeredRow}>
        <div className={styles.formContainer}>
          <Form id="messageForm" onSubmit={onSubmit}>
            <h4 className={styles.formTitle}>Contact Me</h4>
            <div className="form-group form-group-lg">
              <InputGroup className="mb-3 inputGroup">
                <InputGroup.Text id="basic-addon1">
                  <Image
                    width={20}
                    height={20}
                    src={avatar}
                    alt="avatar"
                  ></Image>
                </InputGroup.Text>

                <Form.Control
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  value={toSend.from_name}
                  onChange={handleChange}
                />
              </InputGroup>
            </div>
            <div
              className={["form-group form-group-lg", styles.emailInput].join(
                " ",
              )}
            >
              <InputGroup className="mb-3 inputGroup">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  name="reply_to"
                  placeholder="Email"
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
              </InputGroup>
            </div>
            <div
              className={["form-group form-group-lg", styles.mainText].join(
                " ",
              )}
            >
              <textarea
                className={styles.theText}
                type="text"
                name="message"
                placeholder="Write Here"
                value={toSend.message}
                onChange={handleChange}
              />
            </div>

            <Row className={styles.centeredRow}>
              <button
                className={styles.submitBtn}
                type="submit"
                onClick={onSubmit}
              >
                <h5 className={styles.btnTitle}>Send</h5>
              </button>
            </Row>
          </Form>
        </div>
      </Row>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Container>
     
  );
}

export default ContactFormScreen;
