import { useState } from "react";
import { Carousel } from "react-responsive-carousel";

//Importing Components
import SectionHeading from "../components/SectionHeading";

// Import Styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/Landing.css";

// Image Imports
import ChatBotImg from "../images/ChatBot.jpg";
import CyberImg from "../images/Cyber.jpg";
import RPAImg from "../images/RPAImg.jpg";
import AboutUsImg from "../images/about-us-hero.jpg";
import FinanceImg from "../images/finance-service.jpg";
import SupplyImg from "../images/supply-chain-service.jpg";
import AIImg from "../images/AI-service.png";

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

  const services = [
    { id: 0, name: "Cyber Security", img: `${CyberImg}` },
    { id: 1, name: "Robotic Process Automation", img: `${RPAImg}` },
    { id: 2, name: "ChatBots", img: `${ChatBotImg}` },
    { id: 3, name: "Financial Services Software", img: `${FinanceImg}` },
    { id: 4, name: "Supply Chain Solutions", img: `${SupplyImg}` },
    { id: 5, name: "AI Solutions", img: `${AIImg}` },
  ];

  const chooseUsCards = [
    {
      id: 0,
      name: "Personalized Products",
      img: `${CyberImg}`,
      text: "Our services are distinguished by their bespoke nature, meticulously crafted to align with the unique.",
      color: "#2b8c21",
    },
    {
      id: 1,
      name: "Agile Development Methodology",
      img: `${RPAImg}`,
      text: "Our agile approach ensures flexibility and adaptability throughout the development process.",
      color: "#3063f4",
    },
    {
      id: 2,
      name: "Cutting-Edge Softwares",
      img: `${ChatBotImg}`,
      text: "Embrace the latest in technology with our services. We stay ahead of industry trends",
      color: "#de2b2e",
    },
    {
      id: 3,
      name: "Scalable Solutions",
      img: `${FinanceImg}`,
      text: "Quality and scalability are at the core of our services",
      color: "#f58d06",
    },
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
                alt={`Slide ${slide.id}`}
                className="carousel-image"
              />
              <div
                className={`slide-heading-container ${
                  currentSlide === slide.id ? "fade-in" : ""
                }`}
              >
                <h1 className="slide-heading-text"> {slide.heading}</h1>

                <div className="slider-btn-container">
                  <a href="#" className="btn primary-btn">
                    Learn More
                  </a>
                  <a href="#" className="btn secondary-btn">
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
                  <p className="para-text">
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
                  <p className="para-text">
                    Our resolute policy of quality and timely service delivery
                    adheres to all organizations irrespective of their scale.
                    Clientele satisfaction is our utmost priority.
                  </p>
                </div>
                <div className="landing-about-text mb-2">
                  <h1 className="landing-about-heading heading-2 mb-2">
                    How we drive?
                  </h1>
                  <p className="para-text">
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

      <section className="section py-24">
        <SectionHeading
          subHeading="What you need is our priority"
          mainHeading="Explore Our Services"
        />

        <div class="flex justify-center flex-wrap m-4">
          {services.map((service) => (
            <div
              class="p-4 rounded-lg"
              style={{ width: "350px", background: "#dddd" }}
              key={service.id}
            >
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src={service.img}
                alt="content"
              />

              <h2 class="text-lg text-gray-900 font-medium title-font mb-2 heading-2 text-center">
                {service.name}
              </h2>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}

      <section className="section py-24">
        <SectionHeading
          subHeading="Why Choose Us?"
          mainHeading="Our Solutions Bring Your Dreams to Reality"
        />
        <div class="flex justify-center flex-wrap m-4">

        {
            chooseUsCards.map(card => (
                <div
                class="p-3 md:w-1/3"
                style={{ width: "320px", background: "#dddd" }}
              >
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  />
                  <div class="p-6">
                   
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      The Catalyzer
                    </h1>
                    <p class="leading-relaxed mb-1">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
            ))
        }
      
        </div>
      </section>
    </>
  );
}
