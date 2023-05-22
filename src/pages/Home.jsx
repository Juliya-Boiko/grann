import { Hero } from "components/Hero";
import { Offers } from "components/Offers";
import { Bestsellers } from "components/Bestsellers";
import { BgiWrapper } from "styles/common/BgiWrapper";
import { Benefits } from "components/Benefits";
import { Delivery } from "components/Delivery";
import { About } from "components/About";
import { Feedback } from "components/Feedback";
import { Faq } from "components/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <Offers />
      <Bestsellers />
      <BgiWrapper>
        <Benefits />
        <Delivery />
      </BgiWrapper>
      <About />
      <Feedback />
      <Faq />
    </>
  );
};

export default Home;