import React, { useContext } from 'react';
import { WindowContext } from '../../contexts/windowContext';
import { StyledCard, StyledInfo, StyledImage, StyledDistance } from './styles';

const Card = ({ item, active, index }) => {
  const { windowData } = useContext(WindowContext);

  return (
    <StyledCard
      id={index + 1}
      active={active === index + 1}
      isTablet={windowData.tablet}
      isDesktop={windowData.desktop}
    >
      <StyledImage isTablet={windowData.tablet} isDesktop={windowData.desktop}>
        <p>
          <span>01</span>
          Pick your destination
        </p>
        <img src={`${item.images.png}`} alt={item.name} />
      </StyledImage>

      <StyledInfo isTablet={windowData.tablet} isDesktop={windowData.desktop}>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <hr />
        <StyledDistance
          isTablet={windowData.tablet}
          isDesktop={windowData.desktop}
        >
          <div>
            <span>AVG. DISTANCE</span>
            <p>{item.distance}</p>
          </div>
          <div>
            <span>Est. travel time</span>
            <p>{item.travel}</p>
          </div>
        </StyledDistance>
      </StyledInfo>
    </StyledCard>
  );
};

export default Card;
