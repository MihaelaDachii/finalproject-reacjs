import Picture1 from "../assets/4.jpg";
import Picture3 from "../assets/6.jpg";
import Picture7 from "../assets/10.jpg";
import Picture8 from "../assets/11.jpg";
import Picture9 from "../assets/12.jpg";
import Picture10 from "../assets/13.jpg";
import Picture11 from "../assets/14.jpg";
import Picture12 from "../assets/15.jpg";

import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Explore trending destinations for your next adventure.</p>
      
      <DestinationData
      className="first-des"
      heading="Barcelona, Spain"

      text="The Sagrada Família, located in the heart of Barcelona, Spain, is an architectural marvel and a symbol of both modernist and Gothic styles. Designed by the renowned architect Antoni Gaudí, this unfinished basilica has been under construction since 1882 and continues to captivate visitors with its breathtaking facades and intricate details. With its soaring spires, colorful mosaics, and stunning interiors, the Sagrada Família stands as a testament to Gaudí's visionary genius and remains a must-visit landmark that draws millions of tourists from around the world each year."
      img1={Picture1}
      img2={Picture3}
      />

      <DestinationData
      className="first-des-reverse"
      heading="Saint Petersburg, Russia"

      text="The Palace Bridge, situated in the enchanting city of Saint Petersburg, Russia, is a captivating landmark that holds a prominent place in the city's history and culture. Spanning across the Neva River, the bridge connects the central regions of the city and serves as a crucial transportation link for both pedestrians and vehicles.The bridge's elegant design and impressive engineering make it a true spectacle, especially when it comes alive at night. Illuminated by thousands of lights, the Palace Bridge transforms into a radiant display of colors, reflecting beautifully on the shimmering waters of the Neva River."
      img1={Picture7}
      img2={Picture8}
      />
        

     <DestinationData
     className="first-des"
     heading="Zakynthos, Greece"

      text="Navagio Beach, also known as Shipwreck Beach, is a world-famous destination located on the Greek island of Zakynthos. This stunning cove is renowned for its crystal-clear turquoise waters, fine golden sand, and the dramatic wreckage of a smuggler's ship that rests on the shore.
      The Blue Caves, situated on the northern coast of Zakynthos, Greece, are a mesmerizing natural wonder that captivates visitors with their stunning blue-hued waters and unique rock formations. These enchanting sea caves are accessible only by boat, offering an unforgettable journey through the sparkling waters of the Ionian Sea."
      
      img1={Picture9}
      img2={Picture10}
      />

     <DestinationData
     className="first-des-reverse"
     heading="London, UK."

      text="The London Eye, also known as the Millennium Wheel, is an iconic landmark situated on the South Bank of the River Thames in London, England. Standing tall at 135 meters (443 feet), it is one of the world's largest observation wheels and has become a symbol of the city's skyline.
      Today, the London Bridge stands as an essential part of the city's infrastructure, connecting the bustling financial district of the City of London with the vibrant Southwark area. It not only facilitates vehicular and pedestrian traffic but also offers picturesque views of the River Thames and the surrounding landmarks."
      
      img1={Picture11}
      img2={Picture12}
      />


    </div>
  );
};

export default Destination;