import React from "react";
import { BsCheckCircle, BsShieldCheck, BsPeople } from "react-icons/bs";
import StateItem from "./stat-item";

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary dark:bg-[#172334]">
      <div className="container w-[90%] max-w-screen-xl mx-auto">
        <div className="grid gap-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 justify-center justify-items-center">
          <StateItem count={320} label="Projects Done" Icon={BsCheckCircle} />
          <StateItem count={80} label="Satisfied Clients" Icon={BsPeople} />
          <StateItem count={17} label="Active Projects" Icon={BsShieldCheck} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
