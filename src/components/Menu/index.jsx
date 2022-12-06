import React from 'react';
import StyledMenu from './styles';
import Container from '../Container';
import NavText from '../NavText';
import { Link } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';

const Menu = ({ active, setActive }) => {
  return (
    <Container>
      <StyledMenu>
        <Link to="/">
          <img src={logo} alt="Space Tourism Website logo" />
        </Link>
        <ul>
          <li active={active === 1} onClick={() => setActive(1)}>
            <Link to="/">
              <NavText>home</NavText>
            </Link>
          </li>
          <li active={active === 2}>
            <Link to="/destination" onClick={() => setActive(2)}>
              <NavText>destination</NavText>
            </Link>
          </li>
          <li active={active === 3}>
            <Link to="/crew" onClick={() => setActive(3)}>
              <NavText>crew</NavText>
            </Link>
          </li>
          <li active={active === 4}>
            <Link to="/technology" onClick={() => setActive(4)}>
              <NavText>technology</NavText>
            </Link>
          </li>
        </ul>
      </StyledMenu>
    </Container>
  );
};

export default Menu;
