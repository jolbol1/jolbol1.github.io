import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar({ uri }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showOnScroll, setShowOnScroll] = useState(true);
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: false },
    { name: "More Info", href: "/about", current: false },
    {
      name: "LinkedIn",
      href: "https://uk.linkedin.com/in/james-shopland-b48543153",
      current: false,
      icon: true,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/jollyshopland",
      current: false,
      icon: true,
    },
  ]);

  useEffect(() => {
    let updatedNav = navigation.map((page, index) => {
      if (uri == null && page.href === "/") {
        return { ...page, current: true };
      } else if (page.href === uri) {
        return { ...page, current: true };
      } else {
        return { ...page, current: false };
      }
    });

    setNavigation(updatedNav);
  }, [uri]);

  useEffect(() => {
    if (uri == null || uri === "/") {
      setShowOnScroll(true);
    } else {
      setShowOnScroll(false);
      setIsVisible(true);
    }
  }, [uri]);

  // navigation[pageNumber].current = true;

  useEffect(() => {
    if (!showOnScroll) {
      return;
    }
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [showOnScroll]);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      !isVisible && // to limit setting state only the first time
        setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    isVisible && (
      <Disclosure as="nav" className="theme-color">
        {({ open }) => (
          <>
            <div className="w-5/6 xl:w-3/4 sm:mx-auto px-3 sm:px-0 ">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) =>
                        item.icon ? (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            className={
                              "hover:bg-gray-700 hover:text-white px-6 bg-cyan-500 rounded-md text-sm font-bold text-slate-900 flex justify-center items-center"
                            }
                          >
                            {item.name === "LinkedIn" && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="bi bi-linkedin w-6 h-6"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                              </svg>
                            )}
                            {item.name === "Twitter" && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="bi bi-twitter w-6 h-6"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                              </svg>
                            )}
                          </a>
                        ) : (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-cyan-300 "
                                : " hover:bg-gray-700 hover:text-white bg-cyan-500",
                              "px-6 py-2 rounded-md text-sm font-bold text-slate-900"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
  );
}
