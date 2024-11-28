import React from 'react'
import PageBanner from '../components/PageBanner'
import ExploreServices from '../components/ExploreServices'
import TestimonialCarousel from '../components/TestimonialCarousel'

function ServicesPage() {
    return (
        <>
            <PageBanner pageHeading="Services" />

            <ExploreServices />


            <TestimonialCarousel />


        </>
    )
}

export default ServicesPage