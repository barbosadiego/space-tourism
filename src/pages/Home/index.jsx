import React from 'react';
import Container from '../../components/Container';
import NavText from '../../components/NavText';
import MainButton from '../../components/MainButton';
import StyledHome from './styles';

const Home = ({ isMobile, isDesktop, isTablet }) => {
  return (
    <>
      <StyledHome isMobile={isMobile} isDesktop={isDesktop} isTablet={isTablet}>
        <Container>
          <NavText>SO, YOU WANT TO TRAVEL TO</NavText>
          <h1>space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
          <MainButton buttonWidth={150} isDesktop={isDesktop}>
            explore
          </MainButton>
        </Container>
      </StyledHome>
    </>
  );
};

export default Home;
