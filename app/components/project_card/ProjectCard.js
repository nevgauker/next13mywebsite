import styles from "./ProjectCard.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import link from "../../../public/images/link.png";
import store from "../../../public/images/store.png";
import github from "../../../public/images/github.png";

import Image from "next/image";
import ImageCard from "../image_card/ImageCard";
import { useState } from "react";

import { motion, AnimatePresence } from 'framer-motion';

function ProjectCard({ project }) {
  const { projectName, descriptionText, image1, image2 } = project;
  const [selectedImage, setSelectedImage] = useState(1);



  const noLinks = project.stsore == null
    && project.github == null
    && project.link === null;


  function renderTech(t) {
    return (
      <div className={styles.techImageContainer}>
        <ImageCard title={t.name} img={t.image} key={t.name} width={20} />
      </div>
    );
  }

  return (
    <Card style={{ width: "18rem" }} className={styles.projectCard}>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >

           <Image
            src={selectedImage === 1 ? image1 : image2}
            alt="project image 1"
            layout="responsive"
            className={styles.cardTopImage}
          />
        </motion.div>
      </AnimatePresence>
     

      <Row>
        <Col xs={2}>
          <Image
            className={styles.selectorImg}
            height={40}
            src={image1}
            alt="project image 1"
            onClick={() => setSelectedImage(1)}
          />
          {selectedImage === 1 ?  <hr /> : null}
        </Col>
        <Col xs={2}>
          <Image
            className={styles.selectorImg}
            height={40}
            src={image2}
            alt="project image 2"
            onClick={() => setSelectedImage(2)}

          />
          {selectedImage === 2 ?  <hr /> : null}
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
        
        
        {noLinks ? <></> :
          <Row className="linksRow">
            <h7>Links: </h7>
            {project.github != null ? (
              <a href={project.github}>
                <Image
                  height={40}
                  width={40}
                  className={["img-fluid", styles.linkImage]}
                  src={github}
                  alt="github"
                ></Image>
              </a>
            ) : null}
            {project.link != null ? (
              <a href={project.link}>
                <Image
                  height={40}
                  width={40}
                  className={["img-fluid", styles.linkImage]}
                  src={link}
                  alt="link"
                ></Image>
              </a>
            ) : null}
            {project.store != null ? (
              <a href={project.store}>
                <Image
                  height={40}
                  width={40}
                  className={["img-fluid", styles.linkImage]}
                  src={store}
                  alt="store"
                ></Image>
              </a>
            ) : null}
          </Row>
        }
        
        
        
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
