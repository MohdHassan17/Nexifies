import React from 'react'

//Component Import
import PageBanner from '../components/PageBanner'


//Icon Imports
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

// CSS Import
import '../css/Career.css'

function Career() {
  return (
    <>
    <PageBanner pageHeading="Careers"/>

    <section className="section py-24">
        <div className="career-card-container">
          <div className="career-card">
            <div className="career-heading-container">
              <h1>Senior Full-Stack Developer</h1>
              <div className="career-location-timing">
                <h5 className="career-location"> <FaLocationDot/> $nbsp; Karachi </h5>
                <h5 className="career-timing"> <FaCalendarAlt/> $nbsp; Full Time </h5>
              </div>
            </div>
          </div>
        </div>
    </section>
    
    </>
  )
}

export default Career