"use client";

import React, { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";
import { FaRegPaperPlane } from "react-icons/fa";
import PrimaryBtn from "../UI/Buttons/PrimaryBtn";
import Button from "../UI/Buttons/Button";

const LINKS = ["About", "Services", "Portfolio", "Testimonials"];

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const ToggleNavHandler = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    <header className=" relative z-40">
      {/* Container */}
      <div className="container w-[90%] mx-auto max-w-screen-xl">
        <div className="flex justify-between items-center py-4 md:py-5 lg:py-7">
          {/* Logo */}
          <div className="flex items-center gap-x-1.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white text-xl font-heading font-bold">
              A
            </div>
            <p
              className="font-heading font-bold text-2xl text-headingText dark:text-white"
              aria-label="Adeel_Ch"
            >
              <span>Adeel_</span>
              <span className="text-primary">Ch</span>
            </p>
          </div>
          {/* Navigation Toggler */}
          <div className="text-gray-700 dark:text-white text-[1.75rem] md:hidden">
            <button
              className="hover:text-accent focus:text-accent"
              onClick={ToggleNavHandler}
              type="button"
            >
              {showNav ? <HiX /> : <HiMenu />}
            </button>
          </div>
          {/* Navigation */}
          <nav className="hidden md:block" aria-label="Primary Navigation">
            <ul className="flex gap-x-8 xl:gap-x-10 font-heading font-medium text-secondaryText">
              {LINKS.map((item) => (
                <li key={item}>
                  <a
                    className="hover:text-accent focus:text-accent"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Actions */}
          <div className="hidden md:block">
            <Button
              classes=" text-secondaryText border border-secondaryText rounded-xl focus:bg-accent focus:border-accent focus:text-white hover:bg-accent hover:border-accent hover:text-white transition-colors"
              link="#"
            >
              <span>
                <FaRegPaperPlane />
              </span>
              <span>Let&apos;s Talk</span>
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        className="md:hidden absolute top-full left-0 right-0 py-16 bg-slate-50 dark:bg-gray-800 shadow-sm dark:shadow-[#f8fafc11] origin-top transition-transform scale-y-0 aria-expanded:scale-y-100"
        aria-label="Mobile Navigation"
        aria-expanded={showNav}
      >
        <nav>
          <ul className="text-center space-y-6 text-secondaryText dark:text-gray-50 text-lg font-medium">
            {LINKS.map((item) => (
              <li key={item}>
                <a
                  className="hover:text-accent focus:text-accent"
                  onClick={ToggleNavHandler}
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
