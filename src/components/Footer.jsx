import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

//Image Import
import Nexifies from '../images/Nexifies-Logo.png'
import FooterImg from '../images/contact-form-img.svg'
import { sendEmail } from '../utils/sendEmail';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaPhoneVolume, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';



function Footer() {

    const location = useLocation();

    // Determine if the extra component should be hidden based on the current path
    const hideExtraComponent = location.pathname === "/contact-us";


    const form = useRef()

    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Get form values
      const formData = new FormData(form.current);
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone')
      const message = formData.get('message');
  
      // Validation logic
      if (!name || !email || !message || !phone) {
        toast.error('Please fill in all the fields before submitting.');
        return;
      }
  
      // Proceed with sending the email
      sendEmail(form);
    };


    const navigation = [
      { name: "Home", href: "/", },
      { name: "About Us", href: "/about-us",  },
      {
        name: "Services",
        href: "/services",
     
      
      },
      { name: "Testimonials", href: "/testimonials", },
      { name: "Careers", href: "/careers",  },
    ];

    const services = [
      { name: "CyberSecurity", href: "/services/cyber-security" },
        { name: "RPA", href: "/services/robotic-process-automation" },
        { name: "Chat Bots", href: "/services/chatbots" },
        { name: "Financial Software", href: "/services/financial-software" },
        { name: "Supplychain Solutions", href: "/services/supplychain-solutions" },
        { name: "AI Solutions", href: "/services/ai-solutions" },
    ]
  return (
    <>

    <div className="footer-container mt-10">

    
    {!hideExtraComponent && <div className="footer-contact-form-container bg-primary rounded-lg">
        <div className="footer-contact-form-wrapper bg-white ">

            <div className="contact-img-container">
                <img src={FooterImg} alt="" className="contact-img" />
            </div>

            <div className="contact-form-container">
                <h1 className="heading-1 text-center">Get In Touch Now</h1>
                <form action="" class="footer-contact-form" ref={form} onSubmit={handleSubmit}>
                    <div className="input-field-container">
                        <input type="text" placeholder='Name' name="name"className="input-field" />
                        <input type="email" placeholder='Email' name='email' className="input-field" />
                        <input type="tel" placeholder='Phone' name='phone' className="input-field" />
                    </div>
                    <textarea name="message" id="" className="form-msg" placeholder="Message"></textarea>
                    <input type="submit" className="submit-btn"  />

                </form>
            </div>

        </div>

    </div>}

    


    <footer class="text-gray-600 body-font bg-secondary pt-10">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src={Nexifies} class="w-20 h-20 text-white p-2 bg-white-500 rounded-full" alt="" />
        <span class="ml-3 text-xl heading-2">Nexifies</span>
      </a>
      <p class="mt-2 text-sm text-white">We Bring Your Dreams to Reality</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-primary tracking-widest text-sm mb-3">QUICK LINKS</h2>
        <nav class="list-none mb-10">

          {
            navigation.map((page) =>(
              <li key={page.name}>
            <a class="text-gray-600 hover:text-white" href={page.href}>{page.name}</a>
          </li>
            ))
          }
          
          
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-primary tracking-widest text-sm mb-3">SERVICES</h2>
        <nav class="list-none mb-10">

          {services.map((service) => (
               <li key={service.name}>
               <a class="text-gray-600 hover:text-white" href={service.href}>{service.name}</a>
             </li>
          ))}
         
         
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-primary tracking-widest text-sm mb-3">CONTACT</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-white text-with-icon" href='tel:+923008241447'><FaPhoneVolume style={{color:"var(--primary-color)"}} />+92 300 8241447</a>
            <a class="text-gray-600 hover:text-white text-with-icon" href='mailto:info@nexifies.com'><MdEmail style={{color:"var(--primary-color)"}} />info@nexifies.com</a>
          </li>
         
        </nav>
      </div>
      
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2024 Nexifies
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
        <FaLinkedin />
        </a>
        <a class="ml-3 text-gray-500">
          <FaInstagram/>
        </a>
        <a class="ml-3 text-gray-500">
          <FaWhatsapp/>
        </a>
        <a class="ml-3 text-gray-500">
          <FaFacebook/>
        </a>
      </span>
    </div>
  </div>
</footer>
    </div>
        
    </>
  )
}

export default Footer