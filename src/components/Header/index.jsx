import React, { useEffect, useState } from 'react';
import MobileMenu from '../MobileMenu';
import Menu from '../Menu';
import StyledHeader from './styles';

const Header = ({ isMobile, isDesktop }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(1);

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  // desktop and tablet menu
  if (!isMobile)
    return (
      <StyledHeader>
        <Menu isDesktop={isDesktop} active={active} setActive={setActive} />;
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
