import React, { useEffect, useState } from 'react';
import StyledMenu, { StyledItem } from './styles';
import Container from '../Container';
import NavText from '../NavText';
import { Link } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';

const Menu = ({ active, setActive }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(min-width: 1100px)').matches) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  return (
    <Container>
      <StyledMenu isDesktop={isDesktop}>
        <Link to="/">
          <img src={logo} alt="Space Tourism Website logo" />
        </Link>

        <ul>
          <StyledItem active={active === 1} onClick={() => setActive(1)}>
            <Link to="/">
              {isDesktop && <span>00</span>}
              <NavText>home</NavText>
            </Link>
          </StyledItem>

          <StyledItem active={active === 2}>
            <Link to="/destination" onClick={() => setActive(2)}>
              {isDesktop && <span>01</span>}
              <NavText>destination</NavText>
            </Link>
          </StyledItem>

          <StyledItem active={active === 3}>
            <Link to="/crew" onClick={() => setActive(3)}>
              {isDesktop && <span>02</span>}
              <NavText>crew</NavText>
            </Link>
          </StyledItem>

          <StyledItem active={active === 4}>
            <Link to="/technology" onClick={() => setActive(4)}>
              {isDesktop && <span>03</span>}
              <NavText>technology</NavText>
            </Link>
          </StyledItem>
        </ul>
      </StyledMenu>
    </Container>
  );
};

export default Menu;
