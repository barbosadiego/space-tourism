import React, { useContext, useState } from 'react';
import MobileMenu from '../MobileMenu';
import Menu from '../Menu';
import StyledHeader from './styles';
import { WindowContext } from '../../contexts/windowContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { windowData } = useContext(WindowContext);

  // desktop and tablet menu
  if (!windowData.mobile)
    return (
      <StyledHeader>
        <Menu isDesktop={windowData.desktop} />;
      </StyledHeader>
    );

  //mobile menu
  return (
    <StyledHeader>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </StyledHeader>
  );
};

export default Header;
