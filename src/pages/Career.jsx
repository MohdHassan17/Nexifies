import React from 'react'
import { Helmet } from 'react-helmet';

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

<Helmet>
        <title>Careers at Nexifies | Join Our Innovative Team</title>
        <meta name="description" content="Explore exciting career opportunities at Nexifies. Join our team of innovators and contribute to building critical software solutions for global organizations." />
        <meta name="keywords" content="Nexifies careers, software development jobs, join Nexifies, software engineer opportunities" />
        <meta name="author" content="Nexifies" />
        <link rel="canonical" href="https://www.nexifies.com/careers" />
      </Helmet>
    <PageBanner pageHeading="Careers"/>

    <section className="section py-24">
        <div className="career-card-container">
          <div className="career-card rounded-lg bg-indigo-100">
            <div className="career-heading-container">
              <h1 className='career-card-heading'>Senior Full-Stack Developer</h1>
              <div className="career-location-timing">
                <h5 className="career-location text-with-icon"> <FaLocationDot style={{color:"var(--primary-color)"}} /> Karachi </h5>
                <h5 className="career-timing text-with-icon"> <FaCalendarAlt style={{color:"var(--primary-color)"}}/>  Full Time </h5>
              </div>
            </div>
            <div className="career-qualification-container">
              <h1 className="career-heading">Qualification:</h1>
              <ul className="career-qualification-list">
                <li className="career-qualification-item">Bachelor's degreed in Computer Science/IT</li>
                <li className="career-qualification-item">At least 3-4 years of experience in the field</li>
                <li className="career-qualification-item">Able to operate various development tools (Git, Cloud Tools etc.)</li>
                <li className="career-qualification-item">Excellent communication and time management</li>
               
              </ul>
            </div>
            <div className="career-skills-container">
              <h1 className='career-heading'>Job Skills:</h1>
              <p className="career-skills-description">Proficiency in PHP, javascript, Bootstrap, MERN, JQuery, Python, with Restful APIs, with SQL and No SQL Database experience</p>
            </div>

            <div className="career-btn-container">
              <a href="mailto:careers@nexifies.com" className='btn primary-btn'>Apply Now</a>

            </div>

          </div>
        </div>
    </section>
    
    </>
  )
}

export default Career