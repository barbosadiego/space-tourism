import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { StyledMobileMenu, SyledItem, MobileMenuArea } from './styles';
import Container from '../Container';
import NavText from '../NavText';
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  return (
    <Container>
      <StyledMobileMenu isOpen={isMenuOpen}>
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

        <MobileMenuArea isOpen={isMenuOpen}>
          <Link to="/">
            <SyledItem
              active={pathname === '/'}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <span>00</span>
              <NavText>home</NavText>
            </SyledItem>
          </Link>
          <Link to="/destination">
            <SyledItem
              active={pathname === '/destination'}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <span>01</span>
              <NavText>destination</NavText>
            </SyledItem>
          </Link>
          <Link to="/crew">
            <SyledItem
              active={pathname === '/crew'}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <span>02</span>
              <NavText>crew</NavText>
            </SyledItem>
          </Link>
          <Link to="/technology">
            <SyledItem
              active={pathname === '/technology'}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <span>04</span>
              <NavText>technology</NavText>
            </SyledItem>
          </Link>
        </MobileMenuArea>
      </StyledMobileMenu>
    </Container>
  );
};

export default MobileMenu;
