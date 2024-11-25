import React from 'react'
import PageBanner from '../components/PageBanner'

function ContactPage() {
  return (
    <>
    <PageBanner pageHeading="Contact Us"/>

    <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl mb-4 heading-1">We Respond Within Minutes</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Do mention what service what you are interested in learning more about</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <form>
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
          <input value="Send Message" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center primary-btn"/>
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