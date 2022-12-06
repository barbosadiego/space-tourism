import styled from 'styled-components';
import bg_mobile from '../../assets/home/background-home-mobile.jpg';
import tablet_bg_mobile from '../../assets/home/background-home-tablet.jpg';
import desktop_bg_mobile from '../../assets/home/background-home-desktop.jpg';
import pxToRem from '../../helper/tipographySwitch';

const StyledHome = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  padding: 110px 20px 20px;
  text-align: center;

  // bg for mobile
  background-image: ${({ isMobile }) => (isMobile ? `url(${bg_mobile})` : '')};
  // bg for tablet
  background-image: ${({ isTablet }) =>
    isTablet ? `url(${tablet_bg_mobile})` : ''};
  // bg for dektop
  background-image: ${({ isDesktop }) =>
    isDesktop ? `url(${desktop_bg_mobile})` : ''};

  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    font-family: 'Bellefair', sans-serif;
    font-size: ${pxToRem(80)};
    line-height: ${pxToRem(100)};
  }

  p:last-of-type {
    margin-bottom: 60px;
    font-size: ${pxToRem(15)};
    line-height: ${pxToRem(25)};
  }

  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledHome;
