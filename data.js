//technologgies
import flutter from "./public/images/technologies/flutter.png";
import objc from "./public/images/technologies/objc.png";
import react from "./public/images/technologies/react.png";
import reactNative from "./public/images/technologies/react-native.png";
import swift from "./public/images/technologies/swift.png";
//import django from "./images/technologies/django.png";
import firebase from "./public/images/technologies/firebase.png";
import googleCloud from "./public/images/technologies/google-cloud.png";
import node from "./public/images/technologies/node.png";
//import python from "./images/technologies/python.png";
//import sql from "./images/technologies/sql.png";
//import js from "./images/technologies/js.png";
import mongo from "./public/images/technologies/mongo.png";
import aws from "./public/images/technologies/aws.png";

//projects
import expertx1 from "./public/images/projects/expertx/1.png";
import expertx2 from "./public/images/projects/expertx/2.png";
import duedo1 from "./public/images/projects/duedo/1.png";
import duedo2 from "./public/images/projects/duedo/2.png";
import willer1 from "./public/images/projects/willer/1.png";
import willer2 from "./public/images/projects/willer/2.png";
import chat1 from "./public/images/projects/chat/1.png";
import chat2 from "./public/images/projects/chat/2.png";
import bmi1 from "./public/images/projects/bmi/1.png";
import bmi2 from "./public/images/projects/bmi/2.png";
import store1 from "./public/images/projects/store/1.png";
import store2 from "./public/images/projects/store/2.png";
import blog1 from "./public/images/projects/blog/1.png";
import blog2 from "./public/images/projects/blog/2.png";
import airbnb1 from "./public/images/projects/airbnb/1.png";
import airbnb2 from "./public/images/projects/airbnb/2.png";

import things1 from "./public/images/projects/things/1.png";
import things2 from "./public/images/projects/things/2.png";

import huli1 from "./public/images/projects/huliPizza/1.png";
import huli2 from "./public/images/projects/huliPizza/2.png";


import Technology from "./app/model/Techology";
import Project from "./app/model/Project";

const willerText =
  "Willer is a marketplace platform that allows people to take initiative  and ask what they are looking for and how much they are willing to pay for . This is a constantly changing system .  From payment  to free stuff  (favors), from crypto  based payment to normal / fiat payment .";
const expertxText =
  "This App allows  trainers  and sport experts   to send feedback to their clients .They get videos from their clients and send them back a video with audio  and visual feedback about how they exercise  and how they can  improve.The app is part  of  a platform that includes a firebase  backend, and a React front end App.";
const duedoText =
  "Duedo is a productivity network designed to help reduce the stress and “noise” associated with other modern collaboration systems.of managing as well as gamification to enhance well being.";
const chatText =
  "Another personal project of  mine with the purpose of integrating beautiful  chat ui  and some suficticate functionality .";
const bmiText =
  "This is a very basic  project  in flutter  as  part of  my early work with flutter";
const storeText =
  "This is a  personal project for me in order to experiment  with the ecommerce world.  this is a functioning store including paypal payment integration ";
const blogText =
  "This is another personal project.  this is a blog based on node, mongo and express. This is my first node.js project which is not an api and i used mongodb atlas to store my db.";
const airbnbText =
  "This is an airbnb clone based on React Native and AWS Amplify.";
const huliText =
  "Pizza ordering app mockup based on swiftui";
const thingsText =
  "This is a platfom for 2-hand buying and selling in your close vacinity. Apps are avalible both google play and the app store. I maintain both dev and prodoction servers using heroku for the code, mongo atlas for the data and cloudinery for the storage.";

const swiftTechnology = new Technology("1","Swift", swift);
const objcTechnology = new Technology("2","Objective-c", objc);
const flutterTechnology = new Technology("3","Flutter", flutter);
const reactTechnology = new Technology("4","React", react);
const nodeTechnology = new Technology("5","Node.js", node);
const mongoTechnology = new Technology("6","Mongo.DB", mongo);

const reactnativeTechnology = new Technology("7","React Native", reactNative);
const firebaseTechnology = new Technology("8","Firebase", firebase);

const googleTechnology = new Technology("9","Google Cloud", googleCloud);
const awsTechnology = new Technology("10","AWS", aws);

export const expertxProject = new Project(
  "ExpertX",
  "Swift,Repplaykit,firebase,google-cloud",
  expertxText,
  expertx1,
  expertx2,
  [swiftTechnology, firebaseTechnology, googleTechnology],
  null,
  null,
  "https://apps.apple.com/us/app/expertx/id1504334527",
);

export const willerProject = new Project(
  "Willer",
  "Swift,Objective-c,Parse,Firebase",
  willerText,
  willer1,
  willer2,
  [objcTechnology, swiftTechnology],
  null,
  null,
  null,
);
export const duedoProject = new Project(
  "DueDo",
  "Swift",
  duedoText,
  duedo1,
  duedo2,
  [objcTechnology, swiftTechnology, firebaseTechnology],
  null,
  null,
  "https://apps.apple.com/us/app/duedo/id1061979346",
);
export const chatProject = new Project(
  "Chat UI",
  "Flutter,Firebase",
  chatText,
  chat1,
  chat2,
  [flutterTechnology, firebaseTechnology],
  "https://github.com/nevgauker/chat_ui",
  null,
  null,
);
export const bmiProject = new Project(
  "Bmi Calculator",
  "Flutter",
  bmiText,
  bmi1,
  bmi2,
  [flutterTechnology],
  "https://github.com/nevgauker/bmi_calculator",
  null,
  null,
);
export const storeProject = new Project(
  "Store",
  "React.js,Node.js,MongoDB",
  storeText,
  store1,
  store2,
  [reactTechnology, nodeTechnology, mongoTechnology],
  "https://github.com/nevgauker/my-store",
  null,
  null,
);

export const blogProject = new Project(
  "Blog",
  "Node.js,MongoDB",
  blogText,
  blog1,
  blog2,
  [nodeTechnology, mongoTechnology],
  "https://github.com/nevgauker/blog",
  null,
  null,
);
export const airbnbProject = new Project(
  "Airbnb",
  "React Native,Amplify",
  airbnbText,
  airbnb1,
  airbnb2,
  [awsTechnology, reactnativeTechnology],
  null,
  null,
  null,
);

export const thingsProject = new Project(
  "Things",
  "Flutter,Node.js",
  thingsText,
  things1,
  things2,
  [flutterTechnology, nodeTechnology],
  null,
  null,
  "https://apps.apple.com/il/app/thingss/id1634926379",
);

export const huliProject = new Project(
  "HuliPizza",
  "Swift",
  huliText,
  huli1,
  huli2,
  [swiftTechnology],
  "https://github.com/nevgauker/HuliPizza",
  null,
  null,
);