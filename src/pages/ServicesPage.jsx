import React from "react";
import PageBanner from "../components/PageBanner";
import ExploreServices from "../components/ExploreServices";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { Helmet } from "react-helmet";

function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Nexifies</title>
        <meta
          name="description"
          content="Explore Nexifies' comprehensive range of services including RPA, AI solutions, chatbots, financial software, cybersecurity, and supply chain solutions."
        />
        <meta
          name="keywords"
          content="Nexifies services, RPA, chatbots, AI solutions, cybersecurity, financial software, supply chain solutions"
        />
        <link rel="canonical" href="https://www.nexifies.com/services" />
      </Helmet>
      <PageBanner pageHeading="Services" />

      <ExploreServices />

      <TestimonialCarousel />
    </>
  );
}

export default ServicesPage;
