import React, { useState } from "react";
import { Link } from "react-router-dom";

// Component Import
import SectionHeading from "./SectionHeading";

// Image Imports
import ChatBotImg from "../images/ChatBot.webp";
import CyberImg from "../images/Cyber.webp";
import RPAImg from "../images/RPAImg.webp";
import FinanceImg from "../images/finance-service.webp";
import SupplyImg from "../images/supply-chain-service.webp";
import AIImg from "../images/AI-service.webp";
import CustomDev from '../images/custom-dev.webp'

function ExploreServices() {
  const services = [
    { id: 0, name: "Cyber Security", img: CyberImg, link: "/services/cyber-security" },
    { id: 1, name: "Robotic Process Automation", img: RPAImg, link: "/services/robotic-process-automation" },
    { id: 2, name: "ChatBots", img: ChatBotImg, link: "/services/chatbots" },
    { id: 3, name: "Financial Services Software", img: FinanceImg, link: "/services/financial-software" },
    { id: 4, name: "Supply Chain Solutions", img: SupplyImg, link: "/services/supplychain-solutions" },
    { id: 5, name: "AI Solutions", img: AIImg, link: "/services/ai-solutions" },
    {id:6, name:"Custom Software Development", img:CustomDev, link:'/services/custom-software-development'}
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section py-24">

      
       <SectionHeading subHeading="What You Need Is Our Priority" mainHeading="Explore Our Services" />

       <div className="carousel-container">
      <div className="carousel-wrapper">
        {services.map((service, index) => {
          let className = "carousel-item";
          if (index === activeIndex) {
            className += " active";
          } else if (index === (activeIndex + 1) % services.length) {
            className += " next";
          } else if (index === (activeIndex - 1 + services.length) % services.length) {
            className += " prev";
          } else {
            className += " hidden";
          }
          return (
            <div key={service.id} className={className}>
              <Link to={service.link}><img src={service.img} alt={service.name} /></Link>
              <h2 className="heading-2 mt-2">{service.name}</h2>
            </div>
          );
        })}
      </div>
      <button className="carousel-btn prev" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="carousel-btn next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
    </section>
   
  );
}

export default ExploreServices;
