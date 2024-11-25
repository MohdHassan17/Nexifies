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

// Client Images
import SaudiPak from '../images/client-img/saudi-pak.png'

//Icon Imports
import { BsBoxFill } from "react-icons/bs";
import { GiProcessor, GiStack } from "react-icons/gi";
import { SiKnowledgebase } from "react-icons/si";
import { GrSelect } from "react-icons/gr";
import { FaCalendarDays, FaSitemap } from "react-icons/fa6";
import { IoIosCloudDone } from "react-icons/io";

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
      img: BsBoxFill,
      text: "Our services are distinguished by their bespoke nature, meticulously crafted to align with the unique.",
      color: "#2b8c21",
    },
    {
      id: 1,
      name: "Agile Methodology",
      img: GiProcessor,
      text: "Our agile approach ensures flexibility and adaptability throughout the development process.",
      color: "#3063f4",
    },
    {
      id: 2,
      name: "Cutting-Edge Softwares",
      img: SiKnowledgebase,
      text: "Embrace the latest in technology with our services. We stay ahead of industry trends.",
      color: "#de2b2e",
    },
    {
      id: 3,
      name: "Scalable Solutions",
      img: GiStack,
      text: "Quality and scalability are at the core of our services.",
      color: "#f58d06",
    },
  ];

  const processFlow = [
    {
      id: 0,
      name: "Select Your Service",
      img: GrSelect,
      text: "Begin your journey with us by choosing the service that best fits your needs. Our range of IT solutions is designed to cater to various aspects of business operations, ensuring you find exactly what you're looking for to propel your business forward.",
      color: "#2b8c21",
    },
    {
      id: 1,
      name: "Schedule a Consultation",
      img: FaCalendarDays,
      text: "Once you've identified the service you're interested in, the next step is to arrange a meeting with our team. This initial consultation allows us to understand your business requirements in detail and discuss how our solutions can be tailored to meet those needs.",
      color: "#3063f4",
    },
    {
      id: 2,
      name: "Receive Your Customized Plan",
      img: FaSitemap,
      text: "Based on our consultation, we'll craft a personalized plan tailored to your business's unique challenges and objectives. This plan will outline the proposed solution, including timelines, processes, and any specific customizations that will be implemented to ensure the success of your project",
      color: "#de2b2e",
    },
    {
      id: 3,
      name: "Implementation and Success",
      img: IoIosCloudDone,
      text: "With the plan in place, we're ready to bring it to life. Our team will work closely with you throughout the implementation process, ensuring everything runs smoothly and efficiently. We're not just about delivering solutions; we're about creating success stories.",
      color: "#f58d06",
    },
  ];

  const scrollClientCarousel = (direction) => {
    const container = document.getElementById("client-carousel-container");
    const scrollAmount = 300; // Adjust this value as needed for the scroll step
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollTestimonialCarousel = (direction) => {
    const container = document.getElementById("test-carousel-container");
    const scrollAmount = 300; // Adjust this value as needed for the scroll step
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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
          {chooseUsCards.map((card) => (
            <div
              class="p-3 md:w-1/3 rounded-lg"
              style={{
                width: "320px",
                background: `${card.color}`,
                textAlign: "center",
              }}
              key={card.id}
            >
              <div class="h-full  overflow-hidden">
                {
                  <card.img
                    className=" w-full object-cover object-center text-white"
                    style={{ height: "6rem" }}
                  />
                }

                <div class="p-6">
                  <h1
                    class="title-font text-lg mb-3 heading-2  "
                    style={{ color: "#fff", fontSize: "1rem" }}
                  >
                    {card.name}
                  </h1>
                  <p class="leading-relaxed mb-1 text-white">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section class="text-gray-600 body-font py-24">
        <SectionHeading
          subHeading="PROCESS"
          mainHeading="How we bring your vision to reality?"
        />
        <div class="container px-5 mx-auto flex flex-wrap">
          {processFlow.map((process) => (
            <div
              class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto"
              key={process.id}
            >
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10 title-font font-medium text-sm">
                {(process.id += 1)}
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div
                  class="flex-shrink-0 w-24 h-24 bg-indigo-100  rounded-full inline-flex items-center justify-center"
                  style={{ color: "var(--secondary-color)" }}
                >
                  {<process.img className="w-12 h-12" />}
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font  mb-1 heading-2 ">
                    {process.name}
                  </h2>
                  <p class="leading-relaxed para-text">{process.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Clients */}

      <section className="section py-24">
        <SectionHeading subHeading="Our Pride" mainHeading="Our Clients" />
        <div className="client-carousel">
          {/* Left Button */}
          <span
            className="client-carousel-action left-action"
            onClick={() => scrollClientCarousel("left")}
          >
            {"<"}
          </span>

          {/* Scrollable Content */}
          <div
            className="client-carousel-container"
            id="client-carousel-container"
          >
            {[...Array(8)].map((_, i) => (
              <div className="client-carousel-item" key={i}>
                Client {i + 1}
              </div>
            ))}
          </div>

          {/* Right Button */}
          <span
            className="client-carousel-action right-action"
            onClick={() => scrollClientCarousel("right")}
          >
            {">"}
          </span>
        </div>
      </section>

      {/* Testimonial Section */}

      <section className="section py-24">
      <SectionHeading subHeading="Testimonials" mainHeading="What Our Clients Say" />

      <div className="test-carousel">
          {/* Left Button */}
          <span
            className="test-carousel-action left-action"
            onClick={() => scrollTestimonialCarousel("left")}
          >
            {"<"}
          </span>

          {/* Scrollable Content */}
          <div
            className="test-carousel-container "
            id="test-carousel-container"
          >
            {[...Array(8)].map((_, i) => (
              <div className="test-carousel-item bg-indigo-100 py-5 px-5 rounded-lg" key={i}>
                <p className="para-text test-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi sed obcaecati labore tempore optio omnis aspernatur. Blanditiis illum velit quisquam odit laborum sed, odio aliquam aliquid ipsam? Tempore molestias doloribus explicabo fugit eveniet culpa, temporibus accusantium tempora quisquam optio fuga unde iste consequatur non, dicta cupiditate quia saepe esse assumenda ad, soluta aperiam? Suscipit ex, nostrum dicta perferendis quam quaerat temporibus similique, id culpa inventore magnam iusto commodi quo.
                </p>
                <div className="test-client">
                  <img src={SaudiPak} alt="" className="test-client-img" />
                  <div className="test-client-text">
                    <h1 className="test-client-name heading-2">SOS Global</h1>
                    <small className="test-client-title">SOS Global</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <span
            className="client-carousel-action right-action"
            onClick={() => scrollTestimonialCarousel("right")}
          >
            {">"}
          </span>
        </div>
      </section>


            
    </>
  );
}
