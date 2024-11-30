import React from "react";
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




function ExploreServices() {
  const services = [
    {
      id: 0,
      name: "Cyber Security",
      img: `${CyberImg}`,
      link: "/services/cyber-security",
    },
    {
      id: 1,
      name: "Robotic Process Automation",
      img: `${RPAImg}`,
      link: "/services/robotic-process-automation",
    },
    {
      id: 2,
      name: "ChatBots",
      img: `${ChatBotImg}`,
      link: "/services/chatbots",
    },
    {
      id: 3,
      name: "Financial Services Software",
      img: `${FinanceImg}`,
      link: "/services/financial-software",
    },
    {
      id: 4,
      name: "Supply Chain Solutions",
      img: `${SupplyImg}`,
      link: "/services/supplychain-solutions",
    },
    {
      id: 5,
      name: "AI Solutions",
      img: `${AIImg}`,
      link: "/services/ai-solutions",
    },
  ];
  return (
    <>
      <section className="section py-24">
        <SectionHeading
          subHeading="What you need is our priority"
          mainHeading="Explore Our Services"
        />

        <div class="flex justify-center flex-wrap m-4">
          {services.map((service) => (
            <Link to={service.link}>
              <div
                class="p-4 rounded-lg explore-service-card"
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
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default ExploreServices;
