import { Fragment } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaInstagram , FaWhatsapp, FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'

import Nexifies from '../images/Nexifies-Logo.png'
import '../css/HeadFooter.css'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: '/about-us', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Testimonials', href: '/services', current: false },
  { name: 'Careers', href: '/services', current: false },

  


]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <>
      <div className="logo-banner-wrapper">
        
        <span>
        <div class="flex  sm:justify-center align-center sm:mt-0">
              <a href="" class="text-gray-500  dark:hover:text-white">
                    <FaFacebook/>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="https://wa.me/923314550893" class="text-gray-500  dark:hover:text-white ms-5">
                    <FaWhatsapp/>
                  <span class="sr-only">Whatsapp</span>
              </a>
              <a href="#" class="text-gray-500  ms-5">
                  <FaTwitter/>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500   ms-5">
                  <FaInstagram />
                  <span class="sr-only">Instagram</span>
              </a>
              <a href="#" class="text-gray-500   ms-5">
                  <FaLinkedin/>
                  <span class="sr-only">LinkedIn</span>
              </a>
             
          </div>
        </span>

        <span className='logo-banner-phone'><a href="mailto:webwarp@gmail.com">info@nexifies.com</a></span>
      </div>
      <Disclosure as="nav" className="custom-navbar relative group" >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" >
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center  sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-11 w-auto logo-img m-0.5"
                      src={Nexifies}
                      alt="Nexifies"
                    
                    />
                    <h1 className="nexifies-logo-text px-2">
                      NEXIFIES
                    </h1>
                  </div>
                  <div className="hidden sm:ml-6 md:block">
                    <div className="flex space-x-4 items-center" >
                    {navigation.map((item) =>
                  item.name === 'Services' ? (
                    <div className="" key={item.name}>
                      <button
                        className={classNames(
                          'hover:bg-gray-300',
                          'rounded-md px-3 py-2 text-sm font-medium dropdown-button'
                        )}
                      >
                        {item.name}
                      </button>

                      <div className="dropdown-menu">
                        <a href="" className="dropdown-links">Something</a>
                        <a href="" className="dropdown-links">Something</a>
                        <a href="" className="dropdown-links">Something</a>
                        <a href="" className="dropdown-links">Something</a>
                      </div>
                     
                  
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-white font-medium' : 'hover:bg-gray-300',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  )
                )}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <a class=" text-white text-sm  py-2 px-4 rounded secondary-btn" href='/contact-us'>
                    Get in Touch
                  </a>
                  {/* Profile dropdown */}

                </div>
              </div>
            </div>

            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 font-bold ' : 'text-gray-300 hover:bg-gray-700  font-bold ',
                      'block rounded-md px-3 py-2 text-base '
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

    </>
  )
}