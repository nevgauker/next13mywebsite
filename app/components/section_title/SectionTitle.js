import { Col, Row } from "react-bootstrap/";

import styles from "./SectionTitle.module.css";

function SectionTitle(props) {
  const { title, subTitle } = props;
  return (
    <Row className={styles.sectionRow}>
      <Col md={12}>
        <h2 className={styles.mainTitle}>{title} </h2>
        <h5>{subTitle}</h5>
      </Col>
    </Row>
  );
}

export default SectionTitle;
