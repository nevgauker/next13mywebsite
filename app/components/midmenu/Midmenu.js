import { Col, Row } from "react-bootstrap/";
import styles from "./Midmenu.module.css";

function Midmenu(props) {
  const { titles, selected, setSelected } = props;
  return (
    <Row>
      {titles.map((title) => {
        const index = titles.indexOf(title);

        return (
          <Col md={3} key={index}>
            {index === selected ? (
              <h2
                className={styles.midmenuTitleSelectd}
                onClick={() => {
                  setSelected(index);
                }}
              >
                {title}
              </h2>
            ) : (
              <h2
                className={styles.midmenuTitle}
                onClick={() => {
                  setSelected(index);
                }}
              >
                {title}
              </h2>
            )}
          </Col>
        );
      })}
    </Row>
  );
}

export default Midmenu;
