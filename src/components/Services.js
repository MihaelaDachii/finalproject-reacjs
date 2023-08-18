import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Best Prices",
      subTitle:
        "Our company is now featured among the top choices, offering the most competitive prices in the market.",
    },
   
    {
      icon: service3,
      title: "Flexible Payment",
      subTitle:
        "You can pay flexibly, which includes equal installments, without interest.",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      subTitle:
        "We help you with the list of places to visit, with all the necessary details.",
    },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 4rem 6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  padding-bottom: 30px; 
  padding-top: 100px; 
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;a
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      position: relative;
      width: 100%; /* Asigură-te că imaginea ocupă întreaga lățime a containerului */
      img {
        width: 40px;
        height: auto; /* Setează înălțimea să fie calculată automat pentru a menține proporțiile imaginii */
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-35%, -35%); /* Ajustează această valoare pentru poziționarea dorită */
        max-width: 30%;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

