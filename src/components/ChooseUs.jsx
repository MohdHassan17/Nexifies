import React from 'react'

// Import Components
import SectionHeading from './SectionHeading';

// Icon Imports
import { BsBoxFill } from "react-icons/bs";
import { GiProcessor, GiStack } from "react-icons/gi";
import { SiKnowledgebase } from "react-icons/si";

function ChooseUs() {


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
  return (
    <>

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
                width: "300px",
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
    
    
    </>
  )
}

export default ChooseUs