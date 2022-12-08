import React, { useContext } from 'react';
import { WindowContext } from '../../contexts/windowContext';
import {
  StyledCard,
  StyledInfo,
  StyledImage,
  StyledSelect,
  StyledDistance,
  StyledTravel,
} from './styles';

const Card = ({ item, active, index }) => {
  const { windowData } = useContext(WindowContext);

  return (
    <StyledCard
      id={index + 1}
      active={active === index + 1}
      isMobile={windowData.mobile}
      isTablet={windowData.tablet}
      isDesktop={windowData.desktop}
    >
      <StyledImage>
        <p>
          <span>01</span>
          Pick your destination
        </p>
        <img src={`${item.images.png}`} alt={item.name} />
      </StyledImage>

      <StyledInfo>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <hr />
        <StyledDistance>
          <span>AVG. DISTANCE</span>
          <p>{item.distance}</p>
          <span>Est. travel time</span>
          <p>{item.travel}</p>
        </StyledDistance>
      </StyledInfo>
    </StyledCard>
  );
};

export default Card;
