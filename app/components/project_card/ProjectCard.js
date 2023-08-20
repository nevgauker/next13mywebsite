import styles from "./ProjectCard.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "next/image";
import ImageCard from "../image_card/ImageCard";

function ProjectCard({ project }) {
  const { projectName, descriptionText, image1, image2 } = project;
  function renderTech(t) {
    return (
      <div className={styles.techImageContainer}>
        <ImageCard title={t.name} img={t.image} key={t.name} width={20} />
      </div>
    );
  }

  return (
    <Card style={{ width: "18rem" }} className={styles.projectCard}>
      <Image
        src={image1}
        alt="project image 1"
        layout="responsive"
        className={styles.cardTopImage}
      />

      <Row>
        <Col xs={2}>
          <Image
            className={styles.selectorImg}
            height={40}
            src={image1}
            alt="project image 1"
          />
          <hr />
        </Col>
        <Col xs={2}>
          <Image
            className={styles.selectorImg}
            height={40}
            src={image2}
            alt="project image 2"
          />
        </Col>
      </Row>

      <Card.Body>
        <Card.Title className={styles.cardTitle}>{projectName}</Card.Title>
        <Card.Text className={styles.cardText}>{descriptionText}</Card.Text>
        <Row className={styles.techRow}>
          <Col>
            {project.technologies.map((t) => (
              <Image
                className={styles.techImg}
                width={50}
                height={50}
                src={t.image}
                alt={t.name}
                layout="cover"
                key={projectName}
              />
            ))}
          </Col>
        </Row>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
