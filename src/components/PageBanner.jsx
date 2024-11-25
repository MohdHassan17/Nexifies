import React from 'react'
import '../css/PageBanner.css'

function PageBanner({pageHeading}) {
  return (
    <>
    
    <div className="page-banner  ">
        <h1 className='banner-heading'>{pageHeading}</h1>
    </div>
    
    
    </>
  )
}

export default PageBanner