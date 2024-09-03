import React, { Fragment } from "react";

import { Helmet } from "react-helmet";

import Navbar8 from "../components/navbar8";
import Hero17 from "../components/hero17";
import Features24 from "../components/features24";
import Features25 from "../components/features25";
import Steps2 from "../components/steps2";
import Testimonial17 from "../components/testimonial17";
import Contact10 from "../components/contact10";
import Footer4 from "../components/footer4";
import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Optimistic Late Partridge</title>
        <meta property="og:title" content="Optimistic Late Partridge" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10 thq-link thq-body-small">home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11 thq-link thq-body-small">blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12 thq-link thq-body-small">
              community
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13 thq-link thq-body-small">
              Supplements
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15 thq-body-large">
              Plant Disease Detection
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16 thq-body-large">
              Plant Health Info
            </span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17 thq-body-large">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Upload Image</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Send Message</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text20 thq-body-small">
              Learn about plant health and diseases
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21 thq-body-small">
              Detect plant diseases using AI technology
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22 thq-body-small">
              Get information on plant health, prevention, and supplements
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23 thq-body-small">
              Contact us for inquiries or support
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text24 thq-body-small">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text25 thq-body-small">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text26 thq-body-large">
              Detect plant diseases quickly and accurately with our cutting-edge
              AI technology. Simply upload an image for analysis and receive
              detailed results in seconds.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text27 thq-heading-1">
              AI-Powered Plant Disease Detection
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text28 thq-heading-2">
              AI-powered Image Analysis
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text29 thq-heading-2">Prevention Tips</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text30 thq-heading-2">
              Disease Information
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text31 thq-body-small">
              Upload plant images for disease detection
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text32 thq-body-small">
              Receive prevention tips
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text33 thq-body-small">
              Get detailed disease information
            </span>
          </Fragment>
        }
      ></Features24>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text34 thq-heading-2">
              Image Upload for Analysis
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text35 thq-heading-2">AI-Driven Results</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text36 thq-heading-2">
              Interactive AI Chatbot
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text37 thq-body-small">
              Easily upload images of plant leaves for AI-powered disease
              detection.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text38 thq-body-small">
              Receive detailed disease information, prevention tips, and
              supplement suggestions based on AI analysis.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text39 thq-body-small">
              Engage with an AI chatbot for instant answers to plant health
              queries.
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text40 thq-heading-2">Upload Image</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text41 thq-heading-2">AI Analysis</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text42 thq-heading-2">View Results</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text43 thq-heading-2">Chat with AI Bot</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text44 thq-body-small">
              Select an image of the plant you want to analyze for disease.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text45 thq-body-small">
              Our AI technology will examine the image to detect any signs of
              plant disease.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text46 thq-body-small">
              Get detailed information on the detected disease, prevention tips,
              and suggested supplements.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text47 thq-body-small">
              Ask our AI-powered chatbot any questions related to plant health
              and receive instant answers.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text48 thq-body-small">
              Highly recommend this app to all plant lovers out there!
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text49 thq-body-small">
              As a professional botanist, I am impressed by the accuracy of the
              disease detection results generated by this app. It has become an
              essential tool in my daily work.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text50 thq-body-small">
              I love how easy it is to use this app. The chatbot feature is
              particularly helpful for getting quick answers to my plant health
              queries.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text51 thq-body-small">
              This app has revolutionized the way I approach plant care. The
              supplement suggestions provided have significantly improved the
              health of my plants.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text52 thq-body-small">
              I have been using this AI-powered plant disease detection app for
              a while now, and it has been a game-changer for me. The detailed
              analysis provided has helped me save several of my plants from
              potential diseases.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text53 thq-heading-2">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text54 thq-body-large">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text55 thq-body-large">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text56 thq-body-large">David Green</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text57 thq-body-large">Sarah Lee</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text58 thq-body-small">Plant Enthusiast</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text59 thq-body-small">Botanist</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text60 thq-body-small">
              Gardening Enthusiast
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text61 thq-body-small">Horticulturist</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text62 thq-body-large">
              Have a question or feedback? Reach out to us!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text63 thq-heading-2">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text64 thq-heading-3">Email</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text65 thq-heading-3">Phone</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text66 thq-body-large">
              support@plantdiseaseapp.com
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text67 thq-body-large">
              +1 (123) 456-7890
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text68 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text69 thq-body-small">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text70 thq-body-small">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text71 thq-body-small">FAQ</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text72 thq-body-small">Blog</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text73 thq-body-small">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text74 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text75 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  );
};

export default Home;
