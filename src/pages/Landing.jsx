import { useState } from "react";
import { Carousel } from "react-responsive-carousel";

//Importing Components

import ClientCarousel from "../components/ClientCarousel";
import ExploreServices from "../components/ExploreServices";
import ChooseUs from "../components/ChooseUs";
import ProcessFlow from "../components/ProcessFlow";

// Import Styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/Landing.css";

// Image Imports
import ChatBotImg from "../images/ChatBot.jpg";
import CyberImg from "../images/Cyber.jpg";
import RPAImg from "../images/RPAImg.jpg";
import AboutUsImg from "../images/about-us-hero.jpg";


// Client Images

import TestimonialCarousel from "../components/TestimonialCarousel";


//Icon Imports




export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the active slide

  const slides = [
    {
      id: 0,
      img: `${ChatBotImg}`,
      heading: "Our Chatbots and Virtual Assistants",
    },
    { id: 1, img: `${CyberImg}`, heading: "Robotic Process Automation" },
    { id: 2, img: `${RPAImg}`, heading: "Cyber Security" },
  ];




  



 
  return (
    <>
      {/* Landing Carousel */}
      <div className="landing-carousel-container">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={5000}
          onChange={(index) => setCurrentSlide(index)} // Update current slide index
        >
          {slides.map((slide) => (
            <div key={slide.id} className="carousel-slide">
              <img
                src={slide.img}
                alt={`Slide ${slide.heading}`}
                className="carousel-image"
              />
              <div
                className={`slide-heading-container ${
                  currentSlide === slide.id ? "fade-in" : ""
                }`}
              >
                <h1 className="slide-heading-text"> {slide.heading}</h1>

                <div className="slider-btn-container">
                  <a href="#" className="btn primary-btn landing-carousel-btn">
                    Learn More
                  </a>
                  <a href="#" className="btn secondary-btn landing-carousel-btn">
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Landing About Us Section */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={AboutUsImg}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class=" sm:text-4xl text-3xl mb-4 heading-1 ">About Us </h1>
            <div class="mb-6 leading-relaxed">
              <div className="landing-about-us">
                <div className="landing-about-text mb-3">
                  <h1 className="landing-about-heading heading-2 mb-2">
                    Who we are?
                  </h1>
                  <p className="para-text text-justify">
                    In a world of continuous innovation and change, an era of
                    technological marvel, We drive to pave a path independent of
                    our predecessor through our latest tools, talents and
                    exceptional experience.
                  </p>
                </div>
                <div className="landing-about-text mb-3">
                  <h1 className="landing-about-heading heading-2 mb-2">
                    What makes us different?
                  </h1>
                  <p className="para-text text-justify">
                    Our resolute policy of quality and timely service delivery
                    adheres to all organizations irrespective of their scale.
                    Clientele satisfaction is our utmost priority.
                  </p>
                </div>
                <div className="landing-about-text mb-2">
                  <h1 className="landing-about-heading heading-2 mb-2">
                    How we drive?
                  </h1>
                  <p className="para-text text-justify">
                    We reimagine tech-solutions with innovative approach for
                    higher business efficiency. We aim for robust business
                    transformation of our client through cutting edge technology
                    to upscale their revenues and future spread.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <button class="btn primary-btn">View Our Services</button>
              <button class="btn secondary-btn">Contact Us Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Landing Explore Serivices Section */}

      <ExploreServices/>

      {/* Why Choose Us Section */}

      <ChooseUs/>

      {/* Our Process Section */}
      <ProcessFlow/>

      {/* Our Clients */}
      <ClientCarousel/>
    
      {/* Testimonial Section */}

      <TestimonialCarousel/>


            
    </>
  );
}
