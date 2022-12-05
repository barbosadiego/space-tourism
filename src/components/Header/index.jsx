import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';
import NavText from '../NavText';
import MobileMenu, { SyledItem, DesktopMenu } from './styles';
import Container from '../../components/Container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  useEffect(() => {
    if (!window.matchMedia('(min-width: 768px)').matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  // desktop and tablet menu
  if (!isMobile)
    return (
      <Container>
        <DesktopMenu>
          <div>
            <img src={logo} alt="Space Tourism Website logo" />
          </div>
          <ul>
            <li>
              <Link to="/">
                <NavText>home</NavText>
              </Link>
            </li>
            <li>
              <Link to="/destination">
                <NavText>destination</NavText>
              </Link>
            </li>
            <li>
              <Link to="/crew">
                <NavText>crew</NavText>
              </Link>
            </li>
            <li>
              <Link to="/technology">
                <NavText>technology</NavText>
              </Link>
            </li>
          </ul>
        </DesktopMenu>
      </Container>
    );

  //mobile menu
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
          <Link to="/">
            <SyledItem
              active={active === 1}
              onClick={() => {
                setActive(1);
                setIsMenuOpen(false);
              }}
            >
              <span>00</span>
              <NavText>home</NavText>
            </SyledItem>
          </Link>
          <Link to="/destination">
            <SyledItem
              active={active === 2}
              onClick={() => {
                setActive(2);
                setIsMenuOpen(false);
              }}
            >
              <span>01</span>
              <NavText>destination</NavText>
            </SyledItem>
          </Link>
          <Link to="/crew">
            <SyledItem
              active={active === 3}
              onClick={() => {
                setActive(3);
                setIsMenuOpen(false);
              }}
            >
              <span>02</span>
              <NavText>crew</NavText>
            </SyledItem>
          </Link>
          <Link to="/technology">
            <SyledItem
              active={active === 4}
              onClick={() => {
                setActive(4);
                setIsMenuOpen(false);
              }}
            >
              <span>04</span>
              <NavText>technology</NavText>
            </SyledItem>
          </Link>
        </ul>
      </MobileMenu>
    </Container>
  );
};

export default Header;
