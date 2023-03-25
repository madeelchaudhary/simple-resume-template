import React from "react";
import { BsWindowDock, BsPhone, BsCodeSlash } from "react-icons/bs";
import ServiceItem from "./ServiceItem";

const SERVICES_CONTENT = [
  {
    title: "Web Development",
    desc: "I love to design beautiful user interfaces. I have 4+ years of experiece in the web development and programming.",
    icon: BsWindowDock,
  },
  {
    title: "App Development",
    desc: "I love to design beautiful user interfaces. I have 4+ years of experiece in the web development and programming.",
    icon: BsPhone,
  },
  {
    title: "API Development",
    desc: "I love to design beautiful user interfaces. I have 4+ years of experiece in the web development and programming.",
    icon: BsCodeSlash,
  },
];
const Services = () => {
  return (
    <section className="py-20 lg:py-24" id="services">
      <div className="container w-[91%] max-w-screen-xl mx-auto">
        <h2>
          I&apos;m <span className="text-primary">Specialized</span> in:
        </h2>
        <div className="grid gap-7 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mt-12">
          {SERVICES_CONTENT.map((item, i) => (
            <ServiceItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
