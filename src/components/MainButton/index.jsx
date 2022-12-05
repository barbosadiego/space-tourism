import React from 'react';
import StyledMainButton from './styles';

const MainButton = ({ buttonWidth, children }) => {
  return (
    <StyledMainButton buttonWidth={buttonWidth}>{children}</StyledMainButton>
  );
};

export default MainButton;
