import React, {useRef} from 'react'
import PageBanner from '../components/PageBanner'
import SectionHeading from '../components/SectionHeading'
import { sendEmail } from '../utils/sendEmail'
import toast from 'react-hot-toast'

function ContactPage() {


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


  
  return (
    <>
    <PageBanner pageHeading="Contact Us" />

    <section class="text-gray-600 body-font relative">
     
  <div class="container px-5 py-24 mx-auto">
  <SectionHeading subHeading="Get in Touch" mainHeading="We Respond Within Minutes"/>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <form ref={form} onSubmit={handleSubmit}>
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-full">
          <div class="relative">
            
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Name' />
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
           
            <input type="email" id="email" name="email" placeholder='Email' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
       
            <input type="tel" id="phone" name="phone" placeholder='Phone' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
       
            <textarea id="message" name="message" placeholder='Message' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <input value="Send Message" type="submit" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center primary-btn"/>
        </div>
       
      </div>
      </form>
     
    </div>
  </div>
</section>

    
    </>
  )
}

export default ContactPage