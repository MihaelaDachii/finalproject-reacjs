import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/3.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";

function About() {
  return (
    <>
     <Navbar />
      <Hero
      cName="hero-mid"
      heroImg={AboutImg}
      title="About"
      btnClass="hide"
     />
     <Services/>
      <AboutUs/>  
      <Footer/>
    </>
  );
}

export default About;