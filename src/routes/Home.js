import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
    <Navbar />
      <Hero
      cName="hero"
      heroImg="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      title="Your Exploration, Your Story"
      text="Choose the destination that captures your heart"
      buttonText="Journey Plan"
      url="/"
      btnClass="show"
     />
     <Destination/>
     <Trip/>
     <Footer/>
    </>
  );
}

export default Home;