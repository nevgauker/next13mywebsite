"use client";
import "bootstrap/dist/css/bootstrap.css";

import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

//technologgies
import flutter from "../public/images/technologies/flutter.png";
import objc from "../public/images/technologies/objc.png";
import react from "../public/images/technologies/react.png";
import reactNative from "../public/images/technologies/react-native.png";
import swift from "../public/images/technologies/swift.png";
import django from "../public/images/technologies/django.png";
import firebase from "../public/images/technologies/firebase.png";
import googleCloud from "../public/images/technologies/google-cloud.png";
import node from "../public/images/technologies/node.png";
import sql from "../public/images/technologies/sql.png";
import mongo from "../public/images/technologies/mongo.png";
import aws from "../public/images/technologies/aws.png";
import userImage from "../public/images/myPhoto.png";
import ImageCard from "./components/image_card/ImageCard";
import ProjectRow from "./components/project_row/ProjectRow";
import Social from "./components/social/Social";
import SectionTitle from "./components/section_title/SectionTitle";
import Midmenu from "./components/midmenu/Midmenu";
import ProjectCard from "./components/project_card/ProjectCard";
// import ContactSection from "./components/contact_section/ContactSection";

import { useState, useEffect } from "react";

import { NextSeo } from "next-seo";

import {
  thingsProject,
  expertxProject,
  duedoProject,
  willerProject,
  chatProject,
  bmiProject,
  storeProject,
  blogProject,
  airbnbProject,
} from "../data";

import left from "../public/images/left.png";
import right from "../public/images/right.png";

function MainScreen() {
  const [width, setWidth] = useState(0);
  const [client, setClient] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [selected, setSelected] = useState(0);

  const clients = [
    {
      name: "Richard Demb",
      feedback:
        "Rotem built the iOS version of our new concept and has been fantastic to work with. He's constantly thinking of smart ways to improve the experience while coding quickly and efficiently.",
    },
    {
      name: "Uri Globus",
      feedback:
        "Rotem developed the Duedo iOS app. Working with Rotem was a great experience. He is a fast and reliable developer that can work independently with almost no guidance. At the same time he is a self starter and knows to collaborate with other team members in order to deliver on time.",
    },
    {
      name: "Shay Alice, CEO,InterMatch Ltd",
      feedback:
        "I had the pleasure of working with Rotem as a freelance iOS developer on our dating app project Alpha. Rotem's expertise and dedication were instrumental in bringing our vision to life. His strong technical skills and deep understanding of iOS development allowed him to deliver high-quality code that ensured our app functioned smoothly. Rotem was responsive, receptive to feedback, and consistently met deadlines. I highly recommend Rotem for any iOS development project. His professionalism, skills, and dedication make him a reliable and valuable developer to work with.",
    },
  ];

  function renderProjects() {
    return (
      <>
        <ProjectRow project={thingsProject} leftToRight={false} width={width} />

        <ProjectRow project={duedoProject} leftToRight={true} width={width} />
        <ProjectRow
          project={expertxProject}
          leftToRight={false}
          width={width}
        />
        <ProjectRow project={willerProject} leftToRight={true} width={width} />
      </>
    );
  }

  function renderUsecases() {
    return (
      <Row>
        <ProjectCard project={chatProject} />
        <ProjectCard project={bmiProject} />
        <ProjectCard project={storeProject} />
        <ProjectCard project={blogProject} />
        <ProjectCard project={airbnbProject} />

        {/* <ProjectRow project={chatProject} leftToRight={false} width={width} />
        <ProjectRow project={bmiProject} leftToRight={true} width={width} />
        <ProjectRow project={storeProject} leftToRight={false} width={width} />
        <ProjectRow project={blogProject} leftToRight={true} width={width} />
        <ProjectRow project={airbnbProject} leftToRight={false} width={width} /> */}
      </Row>
    );
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
  }, []);

  function updateDimensions() {
    setWidth(window.innerWidth);
  }

  return (
    <main className={styles.bg}>
      <NextSeo
        title="Full Stack Developer"
        description="Rotem Nevgauker - Experienced IOS and Full  Stack Developer. Here you find  all the information about me and how to reach me."
      />
      <Container>
        <Col className={styles.mobilePadding}>
          <Row>
            <Col md={12}>
              <Row className={styles.myRow}>
                <Col sm={12} md={6} lg={6}>
                  <Row>
                    <h1 className={styles.header}>Rotem Nevgauker</h1>
                  </Row>
                  <Row>
                    <h2 className={styles.header2}>
                      Full Stack and iOS Developer
                    </h2>
                  </Row>
                  <Row>
                    <p className={styles.topTexts}>
                      My name is Rotem and I am a Full Stack and iOS Developer.{" "}
                    </p>
                    <p className={styles.topTexts}>
                      I have a very strong track record in iOS as well as
                      experience in other Web applications such as Flutter,
                      React, React Native and Node.JS.
                      <br />
                      <br /> Because of my vast knowledge in mobile and web
                      development I am able to help clients choose the right
                      technology stack for their needs.
                    </p>
                  </Row>
                </Col>
                <Col sm={12} md={6} lg={6} className={styles.avatarCol}>
                  <Image
                    className={styles.avatar}
                    width={353}
                    height={350}
                    alt="My avatar"
                    src={userImage}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={styles.socialRow}>
            <Social />
          </Row>
          <SectionTitle title={"What clients are saying..."} />
          <Row className={styles.feedbackRow}>
            <Col className={styles.changeCol}>
              <Image
                className={styles.changeFeedbackImg}
                src={left}
                height={50}
                width={50}
                alt="left arrowhead"
                onClick={() => {
                  if (client === 0) {
                    setClient(2);
                  } else {
                    setClient(client - 1);
                  }
                  setShowModal(!showModal);
                }}
              />
            </Col>
            <Col xs={7} md={10}>
              <p className={styles.refText}>
                <q>{clients[client].feedback}</q>
              </p>
              <h3 className={styles.refName}>{clients[client].name}</h3>
            </Col>

            <Col className={styles.changeCol}>
              <Image
                className={styles.changeFeedbackImg}
                src={right}
                height={50}
                width={50}
                alt="righ arrowhead"
                onClick={() => {
                  if (client === 2) {
                    setClient(0);
                  } else {
                    setClient(client + 1);
                  }
                  setShowModal(!showModal);
                }}
              />
            </Col>
          </Row>

          <SectionTitle title={"My Skills"} />
          <Row>
            <Col md={6} sm={12}>
              <Row>
                <h2 className={styles.header}>Mobile Development</h2>
              </Row>
              <Row>
                <p className={styles.mainText}>
                  I build mobile apps with the most suited technology for the
                  project. From native iOS apps to cross platform one and
                  responsive websites using Flutter, React and React Native.
                </p>
              </Row>
            </Col>
            <Col md={6} sm={12}>
              <Row className={styles.techRow}>
                <Col className={styles.techCol}>
                  <ImageCard img={flutter} width={width} />
                </Col>

                <Col className={styles.techCol}>
                  <ImageCard img={swift} width={width} />
                </Col>
                <Col className={styles.techCol}>
                  <ImageCard img={objc} width={width} />
                </Col>
                <Col className={styles.techCol}>
                  <ImageCard img={react} width={width} />
                </Col>
              </Row>
              <Row className={styles.techRow}>
                <Col className={styles.techCol}>
                  <ImageCard img={reactNative} width={width} />
                </Col>
                <Col className={styles.techCol}>
                  <ImageCard img={objc} width={width} />
                </Col>
                <Col className={styles.techCol}></Col>
                <Col className={styles.techCol}></Col>
              </Row>
            </Col>
          </Row>
          <Row className={styles.backendRow}>
            <Col md={6} sm={12}>
              <Row>
                <h2 className={styles.header}>Backend Development</h2>
              </Row>
              <Row>
                <p className={styles.mainText}>
                  According to the project specifications, I can either set up
                  serverless services such as firebase. I can also set up a
                  custom server from scratch. I usually use Node.js and mongo.DB
                  for the backend, but I have some Python and SQL past
                  experience.
                </p>
              </Row>
            </Col>
            <Col md={6} sm={12}>
              <Row className={styles.techRow}>
                <Col className={styles.techCol}>
                  <ImageCard img={node} width={width} />
                </Col>
                <Col className={styles.techCol}>
                  <ImageCard img={mongo} width={width} />
                </Col>
                <Col className={styles.techCol}>
                  <ImageCard img={firebase} width={width} />
                </Col>
                <Col className={styles.techCol}>
                  <ImageCard img={googleCloud} width={width} />
                </Col>
              </Row>
              <Row className={styles.techRow}>
                <Col className={styles.techCol}>
                  <ImageCard img={aws} width={width} />
                </Col>
                <Col className={styles.techCol}>
                  <ImageCard img={django} width={width} />
                </Col>
                <Col className={styles.techCol}>
                  <ImageCard img={sql} width={width} />
                </Col>
                <Col className={styles.techCol}></Col>
              </Row>
            </Col>
          </Row>

          <Midmenu
            titles={["Projects", "Use Cases"]}
            selected={selected}
            setSelected={setSelected}
          />
          {selected == 0 ? renderProjects() : renderUsecases()}
        </Col>

        <footer>
          <Row>
            <Col md={12}>
              <h8 className={styles.copywrites}>
                All Rights Reserved © Rotem Nevgauker
              </h8>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h8 className={styles.copywrites}>Designed by Neimer Design</h8>
            </Col>
          </Row>
        </footer>
      </Container>
    </main>
  );
}

export default MainScreen;
