import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/19.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Destination from "../components/Destination";
import DestinationService from "../components/DestinationService";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
      cName="hero-mid"
      heroImg={AboutImg}
      title="Service"
      btnClass="hide"
     /> 
     <DestinationService/>
     <Trip/>  
     <Footer/>   
    </>
  );
}

export default Service;