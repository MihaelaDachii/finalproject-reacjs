import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import DestinationService from "../components/DestinationService";
import SearchBar from "../components/SearchBar"
function Service() {
  return (
    <>
      <Navbar />
      
     <SearchBar/>
     <DestinationService/>
     <Trip/>  
     <Footer/>   
    </>
  );
}

export default Service;