import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';
import NavText from '../NavText';
import MobileMenu, { SyledItem } from './styles';
import Container from '../../components/Container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState();

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  return (
    <Container>
      <MobileMenu isOpen={isMenuOpen}>
        <Link to="/">
          <img src={logo} alt="Space Tourism Website logo" />
        </Link>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <img src={close} alt="menu close icon" />
          ) : (
            <img src={hamburger} alt="menu open icon" />
          )}
        </button>

        <ul>
          <SyledItem active={active === 1} onClick={() => setActive(1)}>
            <span>00</span>
            <NavText>home</NavText>
          </SyledItem>
          <SyledItem active={active === 2} onClick={() => setActive(2)}>
            <span>01</span>
            <NavText>destination</NavText>
          </SyledItem>
          <SyledItem active={active === 3} onClick={() => setActive(3)}>
            <span>02</span>
            <NavText>crew</NavText>
          </SyledItem>
          <SyledItem active={active === 4} onClick={() => setActive(4)}>
            <span>04</span>
            <NavText>technology</NavText>
          </SyledItem>
        </ul>
      </MobileMenu>
    </Container>
  );
};

export default Header;
