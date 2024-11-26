import React from 'react'
import SectionHeading from './SectionHeading';

//Image Import
import SaudiPak from '../images/client-img/saudi-pak.png'
import FinSys from '../images/client-img/finsys.png'



function ClientCarousel() {


    const clientList = [

      {id:0, name: "Saudi-Pak Investment Bank", img: SaudiPak},
      {id:1, name: "FinSysCon", img: FinSys},
    ]

    const scrollClientCarousel = (direction) => {
        const container = document.getElementById("client-carousel-container");
        const scrollAmount = 440; // Adjust this value as needed for the scroll step
        if (direction === "left") {
          container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else if (direction === "right") {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      };
  return (
    <>
    
    <section className="section py-24">
        <SectionHeading subHeading="Our Pride" mainHeading="Our Clients" />
        <div className="client-carousel">
          {/* Left Button */}
          <span
            className="client-carousel-action left-action"
            onClick={() => scrollClientCarousel("left")}
          >
            {"<"}
          </span>

          {/* Scrollable Content */}
          <div
            className="client-carousel-container"
            id="client-carousel-container"
          >
            {clientList.map((client) => (
              <div className="client-carousel-item" key={client.id}>
                <div className="client-carousel-wrapper">
                  
                <img src={client.img} alt="" className="client-carousel-img" />
                <h1 className="heading-2 client-carousel-name">{client.name}</h1>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <span
            className="client-carousel-action right-action"
            onClick={() => scrollClientCarousel("right")}
          >
            {">"}
          </span>
        </div>
      </section>
    </>
  )
}

export default ClientCarousel