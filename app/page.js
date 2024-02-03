import styles from "./page.module.css";
import Contact from "./UI/Contact/Contact";
import Work from "./UI/Experience/Work";
import Homepage from "./UI/Homepage/Homepage";
import Services from "./UI/Homepage/ServicesC/Services";
import Portfolio from "./UI/Portfolio/Portfolio";
import Reviews from "./UI/Reviews/Reviews";
import Footer from "./UI/Footer";

export default function Home() {
  return (
    <>
      <Homepage/>
      <Services/>
      <Work/>
      <Portfolio/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </>
  );
}
