"use client";

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaBusinessTime } from "react-icons/fa";
import PrimaryBtn from "./UI/Buttons/PrimaryBtn";

const About = () => {
  return (
    <section className="py-16 " id="about">
      <div className="container w-[91%] max-w-screen-xl mx-auto">
        <div className="md:flex gap-10">
          {/* Image */}
          <div className="basis-full self-center">
            <Player
              src="https://assets9.lottiefiles.com/packages/lf20_xvmprung.json"
              background="transparent"
              speed={1}
              loop
              autoplay
              className="min-w-80"
            />
          </div>
          {/* Content */}
          <div className="max-md:mt-12 self-center flex flex-col gap-y-4 max-w-xl">
            <h2>
              I&apos;m Here to Help Your Next{" "}
              <span className="text-primary">Project</span>
            </h2>
            <p className="text-lg">
              I have 2+ years of experience in Web & App Development. My passion
              is to solve complex programming problems through my abilities.
            </p>
            <div className="mt-5">
              <PrimaryBtn>
                <div className="inline-flex items-center gap-x-2">
                  <span>
                    <FaBusinessTime />
                  </span>
                  <span>Hire Me</span>
                </div>
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
