import React, { useState } from "react";
import styled from "styled-components";
import image4 from "../assets/image4.jpg";
import image8 from "../assets/image8.jpg";
import image12 from "../assets/image12.jpg";
import image14 from "../assets/image14.jpg";
import image16 from "../assets/image16.jpg";
import image21 from "../assets/image21.jpg";
import image22 from "../assets/image22.jpg";
import image25 from "../assets/image25.jpg";
import image26 from "../assets/image26.jpg";
import image29 from "../assets/image29.jpg";
import image30 from "../assets/image30.jpg";
import image32 from "../assets/image32.jpg";
import info1 from "../assets/info1.png"
import info2 from "../assets/info2.png"
import info3 from "../assets/info3.png"

export default function DestinationService() {
  const data = [
    {
      image: image4,
      title: "Barcelona, Spain",
      subTitle: "The Sagrada Família, located in the heart of Barcelona, Spain.",
      cost: "8,800",
      duration: "Approx 2 night trip",
    },
    {
      image: image8,
      title: "Saint Petersburg, Russia",
      subTitle: "Saint Isaac's Cathedral, located in the heart of Saint Petersburg, Russia.",
      cost: "4,200",
      duration: "Approx 2 night trip",
    },
    {
      image: image12,
      title: "Zakynthos, Greece",
      subTitle: "Navagio Beach, also known as Shipwreck Beach, is a world-famous destination located on the Greek island.",
      cost: "5,500",
      duration: "Approx 2 night trip",
    },
    {
      image: image14,
      title: "London, UK",
      subTitle: "The London Eye, also known as the Millennium Wheel, is an iconic landmark.",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: image16,
      title: "Switzerland",
      subTitle: "Switzerland, renowned for its majestic Alps, pristine lakes, and charming villages.",
      cost: "5,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: image22,
      title: "Phuket, Thailanda",
      subTitle: "London, the capital of England and the United",
      cost: "8,800",
      duration: "Approx 3 night 2 day trip",
    },
    {
      image: image25,
      title: "Vienna, Austria",
      subTitle: "Vienna, the capital city of Austria, is a captivating blend of historical grandeur.",
      cost: "8,800",
      duration: "Approx 2 night trip",
    },
    {
      image: image26,
      title: "Paris, France",
      subTitle: "Paris is a mecca for art and culture.",
      cost: "4,200",
      duration: "Approx 2 night trip",
    },
    {
      image: image29,
      title: "Rome, Italy",
      subTitle: "Rome, the Eternal City, stands as a living testament to the grandeur of ancient civilizations.",
      cost: "5,500",
      duration: "Approx 2 night trip",
    },
    {
      image: image30,
      title: "Rovinj, Croatia",
      subTitle: "Rovinj, a picturesque coastal town nestled on the Istrian Peninsula of Croatia",
      cost: "4,100",
      duration: "Approx 1 night trip",
    },
    {
      image: image32,
      title: "Brasov, Romania",
      subTitle: "Nestled in the heart of the Carpathian Mountains, Brasov is a captivating Romanian city.",
      cost: "4,100",
      duration: "Approx 1 night trip",
    },
    {
      image: image21,
      title: "Pamukkale, Turkey",
      subTitle: "Pamukkale's surreal landscape is a result of millennia of mineral-rich thermal waters.",
      cost: "8,800",
      duration: "Approx 2 night trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="DestinationService">
      <div className="title">
        <h2>Our Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
               
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0;
    
    .destination {
  padding: 1rem;
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #8338ec14;
  border-radius: 1rem;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateX(0.4rem) translateY(-1rem);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  img {
    width: 100%;
    max-width: 100%; 
  }
  .info {
    display: flex;
    align-items: center;
    .services {
      display: flex;
      gap: 0.3rem;
      img {
        border-radius: 1rem;
        background-color: #4d2ddb84;
        width: 2rem;
        padding: 0.3rem 0.4rem;
      }
    }
    display: flex;
    justify-content: space-between;
  }
  .distance {
    display: flex;
    justify-content: space-between;
  }
}

  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
