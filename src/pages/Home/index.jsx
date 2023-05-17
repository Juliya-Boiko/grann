import { Hero } from "components/Hero";
import { Offers } from "components/Offers";
import { Benefits } from "components/Benefits";
import { About } from "components/About";
import { Feedback } from "components/Feedback";
import { Faq } from "components/FAQ";



const Home = () => {
  return (
    <>
      <Hero />
      <Offers />
      <Benefits />
      <About />
      <Feedback />
      <Faq />
    </>
  );
};

export default Home;