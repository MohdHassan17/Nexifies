import React from 'react'

// Importing Components
import SectionHeading from './SectionHeading'

// Icon Imports

import { GrSelect } from "react-icons/gr";
import { FaCalendarDays, FaSitemap } from "react-icons/fa6";
import { IoIosCloudDone } from "react-icons/io";


function ProcessFlow() {
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
  return (
    <>
    
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
    
    </>
  )
}

export default ProcessFlow