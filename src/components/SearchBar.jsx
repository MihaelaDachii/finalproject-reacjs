import React, { useState } from "react";
import styled from "styled-components";
import homeImage from "../assets/hero.png";
import mockData from "./Mock";
import LocationDetails from "./LocationDetails";

export default function Hero() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSelectedLocation(mockData.data[searchInput.toLowerCase()]);
    setSearchInput("");
  };

  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
         
        </div>
        <div className="search">
          <SearchForm onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search your location"
              value={searchInput}
              onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          </SearchForm>
          {selectedLocation && <LocationDetails location={selectedLocation} />}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      flex-direction: column; /* Modificare pentru a afișa elementele în coloană */
      align-items: center; /* Modificare pentru a alinia elementele pe orizontală */
      gap: 0.5rem; /* Adăugare spațiu între elemente */
    }
  }

  @media screen and (min-width: 280px) and (max-width: 980px) {
    /* Stilizare pentru ecran de dimensiuni mici */
  }
`;

const SearchForm = styled.form`
  /* Stilizarea formularului de căutare */
  display: flex;
  align-items: center;

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem 0 0 0.5rem;
    outline: none;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0 0.5rem 0.5rem 0;
    background-color: #4361ee;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #023e8a;
    }
  }
`;
