import styles from "./ContactSection.module.css";

import phone from "../../../public/images/phone.png";
import email from "../../../public/images/email.png";

import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import Link from "next/link";

function ContactSection(props) {
  const { width } = props;

  function renderRow() {
    if (width <= 500) {
      return (
        <Container>
          <Row className={styles.contactRow}>
            <Col>
              <Link href="/contact">
                <Image
                  className={styles.icon}
                  width={34}
                  height={25}
                  src={email}
                  alt="email"
                ></Image>
              </Link>
              <Link href="/contact">
                <h4 className={styles.subText}>Send me a message</h4>
              </Link>
            </Col>
            <Col>
              <Link href="tel:+972-54-7646847">
                <Image
                  className={styles.icon}
                  width={34}
                  height={25}
                  src={phone}
                  alt="phone"
                ></Image>
              </Link>
              <Link href="tel:+972-54-7646847">
                <h4 className={styles.subText}>Call me</h4>
              </Link>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container>
          <Row className={styles.contactRow}>
            {/* <Col md={4}></Col> */}

            <Col className={styles.contactCol}>
              <Link href="/contact">
                <Image
                  className={styles.icon}
                  width={34}
                  height={25}
                  src={email}
                  alt="email"
                ></Image>
              </Link>
              <Link href="/contact">
                <h4 className={styles.subText}>Send me a message</h4>
              </Link>
            </Col>
            <Col>
              <Link href="tel:+972-54-7646847">
                <Image
                  className={styles.icon}
                  src={phone}
                  alt="phone"
                  width={34}
                  height={25}
                ></Image>
              </Link>
              <Link href="tel:+972-54-7646847">
                <h4 className={styles.subText}>Call me</h4>
              </Link>
            </Col>
            {/* <Col md={4}></Col> */}
          </Row>
        </Container>
      );
    }
  }

  return (
    <Row className={styles.contactRow}>
      <Col>
        <Row className={styles.contactRow}>
          <h3 className={styles.mainContactText}>
            Feel free to contact me if you have any doubts about the right
            solution for you.
          </h3>
        </Row>
        {renderRow()}
      </Col>
    </Row>
  );
}

export default ContactSection;
