import React from 'react'

// Importing Components
import SectionHeading from './SectionHeading'

// Image Imports

import SaudiPak from '../images/client-img/saudi-pak.png'

function TestimonialCarousel() {

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
  )
}

export default TestimonialCarousel