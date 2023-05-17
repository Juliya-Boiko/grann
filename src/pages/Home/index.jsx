import { Hero } from "components/Hero";
import { Offers } from "components/Offers";
import { Bestsellers } from "components/Bestsellers";
import { Benefits } from "components/Benefits";
import { About } from "components/About";
import { Feedback } from "components/Feedback";
import { Faq } from "components/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <Offers />
      <Bestsellers />
      <Benefits />
      <About />
      <Feedback />
      <Faq />
    </>
  );
};

export default Home;