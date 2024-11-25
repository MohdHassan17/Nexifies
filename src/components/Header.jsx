import React, { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Nexifies from "../images/Nexifies-Logo.png";
import "../css/HeadFooter.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const location = useLocation(); // For detecting current route
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  // Navigation array with a submenu for "Services"
  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "About Us", href: "/about-us", current: false },
    {
      name: "Services",
      href: "#",
      current: false,
      submenu: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Graphic Design", href: "/services/graphic-design" },
        { name: "SEO Services", href: "/services/seo" },
      ],
    },
    { name: "Testimonials", href: "/testimonials", current: false },
    { name: "Careers", href: "/careers", current: false },
  ];

  // Function to dynamically update the "current" status
  const updateActiveStatus = () => {
    navigation.forEach((item) => {
      if (item.submenu) {
        const activeSubmenu = item.submenu.some(
          (subitem) => subitem.href === location.pathname
        );
        item.current = activeSubmenu;
      } else {
        item.current = item.href === location.pathname;
      }
    });
  };

  useEffect(() => {
    updateActiveStatus();
  }, [location]);

  const toggleSubMenu = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  return (
    <>
      {/* Logo and social media section */}
      <div className="logo-banner-wrapper">
        <span>
          <div className="flex sm:justify-center align-center sm:mt-0">
            <a href="#" className="text-gray-500 dark:hover:text-white">
              <FaFacebook />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="https://wa.me/923314550893" className="text-gray-500 ms-5">
              <FaWhatsapp />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a href="#" className="text-gray-500 ms-5">
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-500 ms-5">
              <FaInstagram />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-500 ms-5">
              <FaLinkedin />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </span>

        <span className="logo-banner-phone">
          <a href="mailto:webwarp@gmail.com">info@nexifies.com</a>
        </span>
      </div>

      {/* Navbar Section */}
      <Disclosure as="nav" className="custom-navbar relative group">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-11 w-auto logo-img m-0.5"
                      src={Nexifies}
                      alt="Nexifies"
                    />
                    <h1 className="nexifies-logo-text px-2">NEXIFIES</h1>
                  </div>
                  <div className="hidden sm:ml-6 md:block">
                    <div className="flex space-x-4 items-center">
                      {navigation.map((item, index) =>
                        item.submenu ? (
                          <div
                            key={item.name}
                            className="relative"
                            onMouseEnter={() => setOpenSubMenuIndex(index)}
                            onMouseLeave={() => setOpenSubMenuIndex(null)}
                          >
                            <button
                              className={classNames(
                                item.current
                                  ? "bg-white font-medium"
                                  : "hover:bg-gray-300",
                                "rounded-md px-3 py-2 text-sm font-medium"
                              )}
                            >
                              {item.name}
                            </button>
                            {openSubMenuIndex === index && (
                              <div className="absolute z-10 bg-white shadow-lg rounded-md">
                                {item.submenu.map((subitem) => (
                                  <a
                                    key={subitem.name}
                                    href={subitem.href}
                                    className={classNames(
                                      subitem.href === location.pathname
                                        ? "text-blue-600"
                                        : "text-gray-800 hover:text-blue-400",
                                      "block px-4 py-2"
                                    )}
                                  >
                                    {subitem.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-white font-medium"
                                : "hover:bg-gray-300",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                          >
                            {item.name}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <a
                    className="text-white text-sm py-2 px-4 rounded secondary-btn"
                    href="/contact-us"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item, index) =>
                  item.submenu ? (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleSubMenu(index)}
                        className={`block w-full text-left px-3 py-2 text-base font-medium ${
                          item.current
                            ? "text-white bg-gray-900"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </button>
                      {openSubMenuIndex === index && (
                        <div className="pl-5 space-y-1">
                          {item.submenu.map((subitem) => (
                            <a
                              key={subitem.name}
                              href={subitem.href}
                              className={`block px-3 py-2 text-base ${
                                subitem.href === location.pathname
                                  ? "text-white bg-gray-800"
                                  : "text-gray-400 hover:bg-gray-600 hover:text-white"
                              }`}
                            >
                              {subitem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
