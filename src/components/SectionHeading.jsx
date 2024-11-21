import React from 'react'
import '../css/SectionHeading.css'

function SectionHeading(props) {
  return (
    <div className="heading-container mb-12">
        <h1 className="sub-heading heading-2">
            {props.subHeading}
        </h1>
        <h1 className="main-heading heading-1">
            {props.mainHeading}
        </h1>

        <span className="heading-underline"></span>
    </div>
  )
}

export default SectionHeading