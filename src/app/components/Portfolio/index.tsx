import React from "react";
import PrimaryBtn from "../UI/Buttons/PrimaryBtn";
import PortfolioItem from "./PortfolioItem";

const PORTFOLIOS = [
  {
    id: "prj1",
    img: "/imgs/portfolio/prj_1.png",
    title: "Panaverse Dao",
    category: "Web Development",
  },
  {
    id: "prj2",
    img: "/imgs/portfolio/prj_2.png",
    title: "Typing Game",
    category: "Web Development",
  },
  {
    id: "prj3",
    img: "/imgs/portfolio/prj_3.png",
    title: "Running Tracker",
    category: "Web Development",
  },
];

const DUMMY_PORTFOLIO = {
  img: "/imgs/portfolio/prj.jpg",
  title: "React Dashboard",
  category: "Web Devlopment",
};

const Portfolio = () => {
  return (
    <section className="py-16" id="portfolio">
      <div className="max-xl:px-5 xl:max-2xl:px-3 max-w-screen-xl mx-auto">
        <h2 className="text-center">
          My Recent <span className="text-primary">Works</span>
        </h2>
        <div className="my-10 w-fit mx-auto">
          <ul className="flex gap-6">
            <li>
              <a href="#">Web</a>
            </li>
            <li>
              <a href="#">App</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
          </ul>
        </div>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(270px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(310px,1fr))]">
          {PORTFOLIOS.map((portfolio) => (
            <PortfolioItem key={portfolio.id} item={portfolio} />
          ))}
          {Array.from({ length: 3 }).map((el, i) => (
            <PortfolioItem key={i} item={DUMMY_PORTFOLIO} />
          ))}
        </div>

        <div className="mt-10 mx-auto w-fit">
          <PrimaryBtn classes="bg-transparent border border-primary after:content-none !text-primary">
            <span className="inline-flex skew-x-6">View All</span>
          </PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
