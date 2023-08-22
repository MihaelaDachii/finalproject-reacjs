import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpg";
import avatarImage2 from "../assets/avatarImage2.jpg"
import avatarImage3 from "../assets/avatarImage3.jpg"

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Travellers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          Experiența cu agenția de turism a fost uimitoare! Itinerariul bine structurat și atenția la detalii au făcut călătoria noastră memorabilă. Recoman din suflet.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Mihaela Dachii</h4>
              <span>Web developer</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          Recomand cu căldură această agenție de turism. Echipa lor a făcut tot posibilul să se asigure că fiecare aspect al călătoriei noastre a fost perfect organizat.
          </p>
          <div className="info">
            <img src={avatarImage2} alt="" />
            <div className="details">
              <h4>Catalin Ivan</h4>
              <span>Real estate agent</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          Serviciile de înaltă calitate, m-au impresionat. Ghidurile bine pregătite și selecția de destinații au făcut din vacanța mea o experiență de neuitat
          </p>
          <div className="info">
            <img src={avatarImage3} alt="" />
            <div className="details">
              <h4>Andreea Mosoiu</h4>
              <span>Aquisitions</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
   margin: 4rem 6rem;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      line-height: 1.7;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        line-height: 1.7;

        img {
          border-radius: 4.2rem;
          height: 10rem;
          width: 10rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
