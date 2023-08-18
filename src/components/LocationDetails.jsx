import React from "react";
import styled from "styled-components";

const LocationDetails = ({ location }) => {
  const { name, description, address, image_url, visiting_hours } = location.attractions[0];

  return (
    <DetailsContainer>
      <img src={image_url} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Adresă: {address}</p>
      <div>
        <strong>Visiting Hours:</strong>
        <p>{visiting_hours}</p>
      </div>
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -1rem;
  margin-top: 2rem;
  font-size: 12px;
  img {
    width: 170px;
    height: 170px;
    max-width: 400px;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

export default LocationDetails;
