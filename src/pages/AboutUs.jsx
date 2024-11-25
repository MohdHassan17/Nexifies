import React from "react";

// Component Import
import SectionHeading from "../components/SectionHeading";
import PageBanner from "../components/PageBanner";



// Image Imports
import Shakeel from "../images/shakeel-raza.png";
import SaudiPak from '../images/client-img/saudi-pak.png'


function AboutUs() {

  
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
      <PageBanner pageHeading="About Us" />
      <section class="text-gray-600 body-font section">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center flex flex-col justify-center sm:pr-8 sm:py-8">
                <div class="h-30 inline-flex items-center justify-center">
                  <img src={Shakeel} className="about-us-ceo" alt="" />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class=" mt-4 heading-2 ">Phoebe Caulfield</h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-2"></div>
                  <h5 class="text-secondary font-bold">CEO of Nexifies</h5>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4 para-text text-justify">
                  Shakeel is an Enterprise Technology Executive with 26 years of
                  diverse experience. He is a seasoned expert in implementing
                  Core Banking Systems and driving Digital Transformation
                  initiatives. Before joining SOS Global as CEO, Shakeel served
                  as the Head of ePMO for IT and Digital Transformation, as well
                  as the Head of IT-International, overseeing operations across
                  14 countries at the National Bank of Pakistan. He also has
                  extensive professional experience in the Middle East, where he
                  held several key positions, including Executive Director IT
                  Operations at Commercial International Bank-Egypt, Program
                  Manager at Finastra-Dubai, and Head of IT Infrastructure &
                  Applications at Bank AlBilad-KSA. Shakeel began his career
                  with Standard Chartered Bank, where he spent 10 years
                  achieving continuous career growth before transitioning to
                  Habib Bank Ltd. At Standard Chartered Bank, he held prominent
                  roles, including Head of IT Infrastructure and Applications,
                  as well as Country Senior for Pakistan under the Global
                  Technology & Operations division. At Habib Bank Pakistan,
                  Shakeel successfully led transformation and strategic projects
                  aligned with innovative IT roadmaps, positioning the bank as a
                  leader in technology-driven services. Throughout his career,
                  Shakeel has proven himself to be a visionary leader and a
                  catalyst for change. His expertise in crafting transformative
                  business strategies, underpinned by data-driven
                  decision-making, has consistently enabled organizations to
                  achieve their corporate objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default AboutUs;
