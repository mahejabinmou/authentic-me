import Marquee from "../Marquee/Marquee";
import Marcury from "../Marquery/Marquery";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import ContactForm from "./ContactForm/contactForm";
import ContactBanner from "./contactHero/contactHero";
import ContactMap from "./ContactMap/contactMap";

const Contact = () => {
	return (
		<>
			<Navbar />
			<ContactBanner />
			<ContactForm />
			<ContactMap />
			<Marcury />
			<Marquee />
			<Footer />
		</>
	);
};

export default Contact;
