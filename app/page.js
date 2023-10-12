"use client";
import "bootstrap/dist/css/bootstrap.css";

import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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

import ArticleCard from "./components/article_card/ArticleCard";
import { NextSeo } from "next-seo";
import { motion, AnimatePresence } from 'framer-motion';

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
  huliProject,
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
      <Row>
        <ProjectCard project={thingsProject} />
        <ProjectCard project={duedoProject} />
        <ProjectCard project={expertxProject} />
        <ProjectCard project={willerProject} />
      </Row>
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
        <ProjectCard project={huliProject} />

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

  //touch events
  const [touchStart, setTouchStart] = useState(null)
const [touchEnd, setTouchEnd] = useState(null)

// the required distance between touchStart and touchEnd to be detected as a swipe
const minSwipeDistance = 50 

const onTouchStart = (e) => {
  setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  setTouchStart(e.targetTouches[0].clientX)
}

const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance
  if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
  // add your conditional logic here
}


  return (
    <main className={styles.bg}>
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
                    <Button className={styles.cvbutton} onClick={() => {
                      const fileURL = '/cv/RotemNevgaukerCV.docx';
                      const link = document.createElement('a');
                      link.href = fileURL;
                      link.download = 'MyCV.docx';
                      link.click();

                    }}>Download my CV</Button>
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
            <Col>
              <div className={styles.arrowImageConatiner}>
                <Image
                className={styles.changeFeedbackImg}
                  src={left}
                  alt="left arrowhead"
                  layout="fill"
                onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
                onClick={() => {
                  if (client === 0) {
                    setClient(2);
                  } else {
                    setClient(client - 1);
                  }
                  setShowModal(!showModal);
                }}
              />
              </div>
            </Col>
            <Col md={8} sm={8} xs={8}>
            
             <AnimatePresence mode="wait">
                  <motion.div
                    key={clients[client].name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                  <p className={styles.refText}>
                    <q>{clients[client].feedback}</q>
                  </p>
                  <h3 className={styles.refName}>{clients[client].name}</h3>
                </motion.div>
              </AnimatePresence>
            
            
            </Col>
              
            <Col>

            
              <div className={styles.arrowImageConatiner}>
              

              <Image
                className={styles.changeFeedbackImg}
                src={right}
               layout="fill"
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




              </div>
              
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
              <Row >
                  <ImageCard img={flutter} width={width} />
                  <ImageCard img={swift} width={width} />
                  <ImageCard img={objc} width={width} />
                  <ImageCard img={react} width={width} />
                  <ImageCard img={reactNative} width={width} />
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
                  <ImageCard img={node} width={width} />
                  <ImageCard img={mongo} width={width} />
                  <ImageCard img={firebase} width={width} />
                  <ImageCard img={googleCloud} width={width} />
                  <ImageCard img={aws} width={width} />
                  <ImageCard img={django} width={width} />
                  <ImageCard img={sql} width={width} />
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
        <SectionTitle title={"Articles i wrote"} />

        <Row className={styles.artilesRow}>
          <Col xs={12} md={6} lg={4}>
            <ArticleCard title="Scalability & Maintenance" subTitle="A Deep Dive into Clean Architecture" link="https://medium.com/@rotemnevgauker/scalability-maintenance-in-ios-8404b49931f7" text=" In the ever-evolving and changing world of iOS app"/>
          </Col>
          <Col xs={12} md={6} lg={4}>
              <ArticleCard title="Flutter for an IOS developer" subTitle="" link="https://medium.com/@rotemnevgauker/how-flutter-feels-to-an-experienced-ios-developer-ec4c456ceb2e" text="Here are my 2 cents on the matter of switching between them "/>
          </Col>

        </Row>

        <footer className={ styles.footer }>
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
