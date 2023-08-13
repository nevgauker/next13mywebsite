import { Col, Row } from "react-bootstrap";
import ImageCard from "../image_card/ImageCard";

import link from "../../../public/images/link.png";
import store from "../../../public/images/store.png";
import github from "../../../public/images/github.png";

import styles from "./ProjectRow.module.css";

// import { useState, useEffect } from "react";

import Image from "next/image";

import ImageSlider from "../image_slider/ImageSlider";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ProjectRow(props) {
  const { project, leftToRight, width } = props;
  // const [width, setWidth] = useState(0);

  const slides = [
    { url: "../../images/projects/blog/1.png", title: "1" },
    { url: "../../images/projects/blog/2.png", title: "2" },
    { url: "../../images/projects/chat/1.png", title: "1" },
    { url: "../../images/projects/willer/1.png", title: "1" },
    { url: "../../images/projects/willer/2.png", title: "2" },
  ];

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  //   window.addEventListener("resize", updateDimensions);
  // }, []);

  function updateDimensions() {
    setWidth(window.innerWidth);
  }

  function renderTech(t) {
    return (
      <div className={styles.techImageContainer}>
        <ImageCard title={t.name} img={t.image} key={t.name} width={width} />
      </div>
    );
  }

  function renderSlider(project) {
    if (project.projectName !== "Store" && project.projectName !== "Blog") {
      return (
        <Carousel>
          <div>
            <Image
              src={project.image1}
              alt="project image 1"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src={project.image2}
              alt="project image 2"
              layout="responsive"
            />
          </div>
        </Carousel>
      );
    } else {
      return (
        <Carousel>
          <div>
            <Image
              src={project.image1}
              alt="project image 1"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src={project.image2}
              alt="project image 2"
              layout="responsive"
            />
          </div>
        </Carousel>
      );
    }
  }

  function renderLinksRow(project, left) {
    if (left) {
      return (
        <Row>
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
      );
    } else {
      return (
        <Row className={styles.techPadding}>
          {project.github != null ? (
            <a href={project.github}>
              <Image
                height={40}
                width={40}
                className={styles.linkImage}
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
      );
    }
  }

  function renderRow() {
    if (width <= 500) {
      return (
        <Col sm={12}>
          <h2 className={styles.prjoectName}>{project.projectName}</h2>
          <p className={styles.description}>{project.descriptionText}</p>
          <Row className={styles.techsRrow}>
            {project.technologies.map((t) => renderTech(t))}
          </Row>
          <Row className={styles.gallery}>{renderSlider(project)}</Row>
        </Col>
      );
    } else {
      if (leftToRight) {
        return (
          <Row className={styles.projectRow}>
            <Col md={6}>
              <h2 className={styles.prjoectName}>{project.projectName}</h2>
              <p className={[styles.description, styles.feftToRight].join(" ")}>
                {project.descriptionText}
              </p>
              <Row className={styles.techsRow}>
                {project.technologies.map((t) => renderTech(t))}
              </Row>
              <Row>
                <h6 className={styles.linkTitle}>View on</h6>
              </Row>
              {renderLinksRow(project, true)}
            </Col>
            <Col md={6}>
              <Row className={styles.projectImages}>
                <Col md={6}>
                  <Image
                    className="img-fluid"
                    src={project.image1}
                    alt="iphone"
                  ></Image>
                </Col>
                <Col md={6}>
                  <Image
                    className="img-fluid"
                    src={project.image2}
                    alt="iphone"
                  ></Image>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      } else {
        return (
          <Row className={styles.projectRow}>
            <Col className={styles.iphnesCol} md={6}>
              <Row className={styles.projectImages}>
                <Col md={6}>
                  <Image
                    className="img-fluid"
                    src={project.image1}
                    alt="iphone"
                  ></Image>
                </Col>
                <Col md={6}>
                  <Image
                    className="img-fluid"
                    src={project.image2}
                    alt="iphone"
                  ></Image>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <h2 className={styles.prjoectName}>{project.projectName}</h2>
              <p className={[styles.description, styles.rightToLeft].join(" ")}>
                {project.descriptionText}
              </p>
              <Row className={[styles.techsRow, styles.techPadding]}>
                {project.technologies.map((t) => renderTech(t))}
              </Row>
              <Row>
                <h6
                  className={[styles.linkTitle, styles.techPadding].join(" ")}
                >
                  View on
                </h6>
              </Row>
              {renderLinksRow(project, false)}
            </Col>
          </Row>
        );
      }
    }
  }

  //render() {
  return renderRow();
  // };
}

export default ProjectRow;
