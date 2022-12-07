import React from 'react';
import {
  StyledCard,
  StyledInfo,
  StyledImage,
  StyledSelect,
  StyledDistance,
  StyledTravel,
} from './styles';

const Card = ({ item }) => {
  return (
    <StyledCard>
      <StyledImage>
        <p>
          <span>01</span>
          Pick your destination
        </p>
        <img src={item.images.png} alt={item.name} />
      </StyledImage>
      <StyledInfo>
        <StyledSelect>
          <li>moon</li>
          <li>mars</li>
          <li>europa</li>
          <li>titan</li>
        </StyledSelect>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <hr />
        <StyledDistance>
          <span>AVG. DISTANCE</span>
          <p>{item.distance}</p>
        </StyledDistance>
        <StyledTravel>
          <span>Est. travel time</span>
          <p>{item.travel}</p>
        </StyledTravel>
      </StyledInfo>
    </StyledCard>
  );
};

export default Card;
