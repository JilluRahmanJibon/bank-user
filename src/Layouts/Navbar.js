import React, { useRef } from "react";
import logo from "../Assets/genzam.svg";
import { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  const windowWidth = useRef(window.innerWidth);
  const [isOpen, setIsOpen] = useState();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (windowWidth.current && windowWidth.current > 667) {
      setIsOpen(true);
    }
  }, [windowWidth]);
  const user_info = localStorage.getItem("user_info")
  const user = JSON.parse(user_info)
  return (
    <div className={`fixed inset-0 overflow-auto ${isOpen ? "z-40" : ""}`}>
      {/* Off-canvas menu */}
      <div
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"
          } transform absolute top-0 left-0 w-80 h-full bg-primary transition ease-in-out duration-500`}
      >
        <div className="text-white mt-14">
          <Sidebar />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed transition-opacity"
          aria-hidden="true"
          onClick={toggleMenu}
        >
          <div className="absolute  bg-primary text-white opacity-75"></div>
        </div>
      )}

      {/* Menu button */}
      <section className="bg-secondary/30 sticky top-0 backdrop-blur-2xl">
        <div className="flex items-center justify-between w-11/12 mx-auto md:py-0 py-2">
          <img className="md:w-24 w-12" src={logo} alt="" />
          <button>
            <h1 className="text-xl uppercase">{user?.username}</h1>
          </button>
          <button
            className="z-50 px-4 py-2 mt-1 text-white bg-primary rounded-md focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen ? "M4 6h16M4 12h16M4 18h16" : "M4 6h16M4 12h16M4 18h16"
                }
              // "M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </section>
      <section
        className={
          isOpen
            ? "md:ml-[320px] opacity-100 duration-500 ease-out"
            : "md:ml-[0px] opacity-100  duration-500 ease-out"
        }
      >
        <div className="w-[95%] mx-auto mt-5">
          <Outlet></Outlet>
        </div>
      </section>

    </div>
  );
};

export default Navbar;
