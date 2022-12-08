import React, { useContext, useEffect, useState } from 'react';
import StyledMenu, { StyledItem } from './styles';
import Container from '../Container';
import NavText from '../NavText';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';
import { WindowContext } from '../../contexts/windowContext';

const Menu = ({ setIsMenuOpen }) => {
  const { windowData } = useContext(WindowContext);
  const { pathname } = useLocation();

  return (
    <Container>
      <StyledMenu isDesktop={windowData.desktop}>
        <Link to="/">
          <img src={logo} alt="Space Tourism Website logo" />
        </Link>

        <ul>
          <StyledItem active={pathname === '/'}>
            <Link to="/">
              {windowData.desktop && <span>00</span>}
              <NavText>home</NavText>
            </Link>
          </StyledItem>

          <StyledItem active={pathname === '/destination'}>
            <Link to="/destination">
              {windowData.desktop && <span>01</span>}
              <NavText>destination</NavText>
            </Link>
          </StyledItem>

          <StyledItem active={pathname === '/crew'}>
            <Link to="/crew">
              {windowData.desktop && <span>02</span>}
              <NavText>crew</NavText>
            </Link>
          </StyledItem>

          <StyledItem active={pathname === '/technology'}>
            <Link to="/technology">
              {windowData.desktop && <span>03</span>}
              <NavText>technology</NavText>
            </Link>
          </StyledItem>
        </ul>
      </StyledMenu>
    </Container>
  );
};

export default Menu;
