import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}
