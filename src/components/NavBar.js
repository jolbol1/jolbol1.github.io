import React, { useState, useEffect, useCallback } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "gatsby";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const linkedin = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class="bi bi-linkedin"
    viewBox="0 0 16 16"
  >
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
  </svg>
);

const twitter = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-twitter"
    viewBox="0 0 16 16"
  >
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
  </svg>
);

const github = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-github"
    viewBox="0 0 16 16"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const email = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-envelope-fill"
    viewBox="0 0 16 16"
  >
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
  </svg>
);

export default function NavBar({ uri }) {
  const [isVisible, setIsVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [showOnScroll, setShowOnScroll] = useState(true);
  const [redirect, setRedirect] = useState(uri);
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: false },
    { name: "More Info", href: "/about", current: false },
    {
      name: "LinkedIn",
      href: "https://uk.linkedin.com/in/james-shopland-b48543153",
      current: false,
      icon: linkedin,
      externalLink: true,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/jollyshopland",
      current: false,
      icon: twitter,
      externalLink: true,
    },
    {
      name: "GitHub",
      href: "https://github.com/jolbol1",
      current: false,
      icon: github,
      externalLink: true,
    },
    {
      name: "Email Me",
      href: "mailto:enquiries@jamesshopland.com",
      current: false,
      icon: email,
      externalLink: true,
    },
  ]);

  const listenToScroll = useCallback(() => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      !isVisible && setIsVisible(true);
    } else {
      isVisible && setIsVisible(false);
    }
  }, [isVisible]);

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
  }, [uri, navigation]);

  useEffect(() => {
    if (uri == null || uri === "/") {
      setShowOnScroll(true);
      setIsVisible(false);
      setRedirect(uri)
    } else {
      setShowOnScroll(false);
      setIsVisible(true);
      setRedirect(uri)
    }
  }, [uri]);

  useEffect(() => {
    if (!showOnScroll) {
      window.removeEventListener("scroll", listenToScroll);
      !isVisible && setIsVisible(true);
      return;
    }
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [showOnScroll, listenToScroll]);

  useEffect(() => {
    fetch(`/.auth/me`)
      .then((response) => response.json())
      .then((resultData) => {
        if (resultData.clientPrincipal) {
          setUserName(resultData.clientPrincipal.userDetails);
        }
      });
  }, []);

  return (
    <Disclosure as="nav" className={`theme-color ${!isVisible && "hidden"}`}>
      {({ open }) => (
        <>
          <div className="w-5/6 px-3 sm:mx-auto sm:px-0 xl:w-3/4 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) =>
                      item.externalLink ? (
                        <a
                          key={item.name}
                          href={item.href}
                          rel="noreferrer"
                          target="_blank"
                          className={
                            "flex items-center justify-center rounded-md bg-cyan-500 px-6 text-sm font-bold text-slate-900 hover:bg-gray-700 hover:text-white"
                          }
                        >
                          {item.icon ? (
                            <div className="nav-icons h-6 w-6">{item.icon}</div>
                          ) : (
                            item.name
                          )}
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-cyan-300 "
                              : " bg-cyan-500 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-6 py-2 text-sm font-bold text-slate-900"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.icon ? (
                            <div className="nav-icons h-6 w-6">{item.icon}</div>
                          ) : (
                            item.name
                          )}
                        </Link>
                      )
                    )}
                  </div>
                </div>
                <div className="flex hidden flex-row items-center space-x-4 sm:flex">
                  <div class="font-bold text-white">{userName}</div>
                  <a
                    key={userName ? "Log Out" : "Log In"}
                    href={
                      userName
                        ? `/logout?post_logout_redirect_uri=${redirect}`
                        : `/login?post_login_redirect_uri=${redirect}`
                    }
                    className={
                      "flex items-center justify-center rounded-md bg-cyan-500 px-6 text-sm font-bold text-slate-900 hover:bg-gray-700 hover:text-white"
                    }
                  >
                    {userName ? "Log Out" : "Log In"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {({ close }) => (
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) =>
                  item.externalLink ? (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                      onClick={close}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
