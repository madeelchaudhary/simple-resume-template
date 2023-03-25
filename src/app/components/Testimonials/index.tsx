"use client";

import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import TestimonialItem from "./testimonial-item";

const DUMMY_REVIEW = {
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis maxime dolor atque nisi dolore beatae blanditiis incidunt, quisquam illum molestiae doloremque nesciunt reiciendis lorem impsusm dolor.",
  name: "John Doe",
  avatar: "/imgs/review.jpg",
  role: "CEO",
  company: "Dribble",
};

const Testimonials = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <section className="py-20 xl:py-24" id="testimonials">
      <div className="container w-[91%] max-w-screen-xl mx-auto">
        <h2 className="text-center">
          What People Talk <span className="block text-primary">About Me</span>
        </h2>
        <div className="mt-16 max-w-3xl mx-auto overflow-hidden">
          <div
            id="reviews"
            className="grid grid-cols-[100%_100%_100%] transition-transform duration-200"
            style={{ transform: `translateX(-${selectedItem * 100}%)` }}
          >
            <TestimonialItem review={DUMMY_REVIEW} />
            <TestimonialItem review={DUMMY_REVIEW} />
            <TestimonialItem review={DUMMY_REVIEW} />
          </div>
          {/* Control */}
          <div
            className="flex justify-center items-center gap-4 text-2xl mt-12 "
            aria-controls="#reviews"
          >
            <button
              disabled={selectedItem === 0}
              onClick={() => setSelectedItem(selectedItem - 1)}
              className={`hover:text-accent focus:text-accent ${
                selectedItem > 0 && "text-4xl text-headingText dark:text-white"
              }`}
            >
              <BsArrowLeft />
            </button>
            <button
              disabled={selectedItem === 2}
              onClick={() => setSelectedItem(selectedItem + 1)}
              className={`hover:text-accent focus:text-accent ${
                selectedItem < 2 && "text-4xl text-headingText dark:text-white"
              }`}
            >
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
