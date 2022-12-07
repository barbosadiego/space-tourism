import React, { useContext, useEffect, useState } from 'react';
import StyledMenu, { StyledItem } from './styles';
import Container from '../Container';
import NavText from '../NavText';
import { Link } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';
import { WindowContext } from '../../contexts/windowContext';

const Menu = ({ active, setActive }) => {
  const { windowData } = useContext(WindowContext);

  return (
    <Container>
      <StyledMenu isDesktop={windowData.desktop}>
        <Link to="/">
          <img src={logo} alt="Space Tourism Website logo" />
        </Link>

        <ul>
          <StyledItem active={active === 1} onClick={() => setActive(1)}>
            <Link to="/">
              {windowData.desktop && <span>00</span>}
              <NavText>home</NavText>
            </Link>
          </StyledItem>

          <StyledItem active={active === 2}>
            <Link to="/destination" onClick={() => setActive(2)}>
              {windowData.desktop && <span>01</span>}
              <NavText>destination</NavText>
            </Link>
          </StyledItem>

          <StyledItem active={active === 3}>
            <Link to="/crew" onClick={() => setActive(3)}>
              {windowData.desktop && <span>02</span>}
              <NavText>crew</NavText>
            </Link>
          </StyledItem>

          <StyledItem active={active === 4}>
            <Link to="/technology" onClick={() => setActive(4)}>
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
