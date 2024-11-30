import React from 'react'

// Importing Components
import SectionHeading from './SectionHeading'

// Image Imports

import SaudiPak from '../images/client-img/saudi-pak.webp'
import FinSys from '../images/client-img/finsys.webp'

function TestimonialCarousel() {

  const testimonials = [
    {id: 0, img:SaudiPak ,company:"Saudi-Pak Investment Bank", title:'CEO', message:"Working with Nexifies has been an absolute game-changer for our facility management operations. Their team developed a state-of-the-art software tailored to our specific requirements, enabling us to efficiently manage all aspects of our facilities. From tracking cleaning schedules to vendor management and stock inventory, the software has brought incredible efficiency and transparency to our processes."},
    {id: 1, img:FinSys , company:"FinSysCon", title:'Founder & CEO', message:"We approached Nexifies with a clear vision but high expectations—they didn’t just meet those expectations; they surpassed them. As a company serving banks and financial institutions, it was crucial for us to have a website that is both visually stunning and functionally robust. Nexifies delivered a website that is modern, professional, and perfectly aligned with our brand identity."} ,
    {id:2, img:"", company:"GaragePal", title:"CEO", message:"GaragePal was a dream concept for us, but Nexifies turned it into a reality beyond what we had imagined. Their team created an interactive and intuitive platform that has revolutionized how we manage garage operations. From process automation to ensuring the proper upkeep of tools, equipment, and facilities, every aspect of garage management is now handled with ease and precision. "}
  ]

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
            {testimonials.map((test) => (
              <div className="test-carousel-item bg-indigo-100 py-5 px-5 rounded-lg" key={test.id}>
                <p className="para-text test-text">
                 {test.message}
                </p>
                <div className="test-client">
                  <img src={test.img} alt="" className="test-client-img" />
                  <div className="test-client-text">
                    <h1 className="test-client-name heading-2">{test.company}</h1>
                    <small className="test-client-title">{test.title}</small>
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
  )
}

export default TestimonialCarousel