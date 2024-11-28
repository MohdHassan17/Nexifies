import React from "react";
import {Helmet} from 'react-helmet'

// Component Import

import PageBanner from "../components/PageBanner";



// Image Imports
import Shakeel from "../images/shakeel-raza.png";

import TestimonialCarousel from "../components/TestimonialCarousel";


function AboutUs() {

  

  return (
    <>
     <Helmet>
        <title>About Nexifies - Pioneers in Software Development</title>
        <meta name="description" content="Learn more about Nexifies, our mission, vision, and expertise in delivering cutting-edge software solutions to global clients." />
        <meta name="keywords" content="Nexifies, software development firm, technology innovation, about us" />
        <link rel="canonical" href="https://www.nexifies.com/about-us" />
      </Helmet>
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
                  <h2 class=" mt-4 heading-2 ">Shakeel Abidi</h2>
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

      <TestimonialCarousel/>
    </>
  );
}

export default AboutUs;
