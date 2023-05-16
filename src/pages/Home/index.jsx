import { Hero } from "components/Hero";
import { Offers } from "components/Offers";
import { Benefits } from "components/Benefits";
import { About } from "components/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Offers />
      <Benefits />
      <About />
    </>
  );
};

export default Home;