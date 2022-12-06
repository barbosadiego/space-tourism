import styled from 'styled-components';
import bg_mobile from '../../assets/home/background-home-mobile.jpg';
import tablet_bg_mobile from '../../assets/home/background-home-tablet.jpg';
import desktop_bg_mobile from '../../assets/home/background-home-desktop.jpg';

const StyledHome = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  padding: 100px 20px 20px;
  z-index: -1;

  // bg for mobile
  background-image: ${({ isMobile }) => (isMobile ? `url(${bg_mobile})` : '')};
  // bg for dektop or tablet
  background-image: ${({ isDesktop }) =>
    isDesktop ? `url(${desktop_bg_mobile})` : `url(${tablet_bg_mobile})`};

  background-size: cover;
  background-repeat: no-repeat;
`;

export default StyledHome;
