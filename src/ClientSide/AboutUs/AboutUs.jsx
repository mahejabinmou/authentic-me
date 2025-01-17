import Testimonials from "../Home/ClientsThought/ClientsThought";
import Marquee from "../Marquee/Marquee";
import Marcury from "../Marquery/Marquery";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Video from "../Video/Video";
import AboutUsBanner from "./AboutUsBanner/AboutUsBanner";
import Choose from "./Choose/Choose";
import Welcome from "./Welcome/welcome";

const AboutUs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AboutUsBanner></AboutUsBanner>
      <Welcome></Welcome>
      <Choose></Choose>
      <Marquee />
      <Video></Video>
      <Testimonials />
      <Marcury></Marcury>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
