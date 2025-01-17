import About from "./About/About";
import Testimonials from "./ClientsThought/ClientsThought";
import Marquee from "../Marquee/Marquee";
import Marcury from "../Marquery/Marquery";
import OurClient from "../OurClient/OurClient";
import ServicesSection from "../OurService/OurService";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Video from "../Video/Video";
import HeroSection from "./HeroSection/HeroSection";
import OurPortfolio from "./OurPortfolio/OurPortfolio";

const Home = () => {
  return (
    <div className=" relative">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <OurClient></OurClient>
      <Marquee />
      <Video></Video>
      <ServicesSection />
      <Marquee />
      <OurPortfolio></OurPortfolio>
      <Testimonials />
      <Marcury></Marcury>
      <Marquee />
      <Footer></Footer>
    </div>
  );
};

export default Home;
