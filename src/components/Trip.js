import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/image16.jpg";
import Trip2 from "../assets/17.jpg";
import Trip3 from "../assets/18.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Explore distinctive destinations using Google Maps</p>
      <div className="tripcard">
        <TripData
        image={Trip1}
        heading = "Trip in Switzerland"
        text="Switzerland, renowned for its majestic Alps, pristine lakes, and charming villages, is a picturesque haven in the heart of Europe. Famous for its precision and watchmaking, this multicultural country boasts a high standard of living and a well-preserved natural environment. From the begining cosmopolitan cities of Zurich and Geneva to the idyllic landscapes of the Swiss countryside."
        />

        <TripData
        image={Trip2}
        heading = "Trip in Romania"
        text="Romania, a country of diverse landscapes and rich history, offers a unique blend of medieval charm and natural wonders. From the legendary castles of Transylvania, such as Bran Castle, to the stunning Carpathian Mountains, Romania's beauty and cultural heritage leave an indelible mark on those who explore its enchanting towns and picturesque countryside."
        />

        <TripData
        image={Trip3}
        heading = "Trip in Italy"
        text="Italy, the cradle of ancient civilization, is a land of art, history, and culinary delights. From the iconic Colosseum in Rome to the romantic canals of Venice and the artistic masterpieces of Florence, Italy exudes a timeless allure. Its coastal towns, like the Amalfi Coast and Cinque Terre, entice visitors with their breathtaking beauty and Mediterranean charm."
        />
      </div>
    </div>
  );
}

export default Trip;