import React from 'react';
import MainButton from './styles';

const index = ({ buttonWidth, children }) => {
  return <MainButton buttonWidth={buttonWidth}>{children}</MainButton>;
};

export default index;
