import React from 'react';
import StyledMainButton from './styles';

const MainButton = ({ buttonWidth, children, isDesktop }) => {
  return (
    <StyledMainButton buttonWidth={buttonWidth} isDesktop={isDesktop}>
      {children}
    </StyledMainButton>
  );
};

export default MainButton;
