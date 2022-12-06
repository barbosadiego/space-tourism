import React, { useEffect, useState } from 'react';
import MobileMenu from '../MobileMenu';
import Menu from '../Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  useEffect(() => {
    if (!window.matchMedia('(min-width: 768px)').matches) {
      setIsMobile(true);
    }
  }, []);

  // desktop and tablet menu
  if (!isMobile)
    return <Menu isMobile={isMobile} active={active} setActive={setActive} />;

  //mobile menu
  return (
    <MobileMenu
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      active={active}
      setActive={setActive}
    />
  );
};

export default Header;
