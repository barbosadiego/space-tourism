import React, { useContext, useState } from 'react';
import MobileMenu from '../MobileMenu';
import Menu from '../Menu';
import StyledHeader from './styles';
import { WindowContext } from '../../contexts/windowContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(1);
  const { windowData } = useContext(WindowContext);

  // desktop and tablet menu
  if (!windowData.mobile)
    return (
      <StyledHeader>
        <Menu
          isDesktop={windowData.desktop}
          active={active}
          setActive={setActive}
        />
        ;
      </StyledHeader>
    );

  //mobile menu
  return (
    <StyledHeader>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        active={active}
        setActive={setActive}
      />
    </StyledHeader>
  );
};

export default Header;
