import React from 'react';
import Container from '../../components/Container';
import NavText from '../../components/NavText';
import MainButton from '../../components/MainButton';
import StyledHome, { StyletInfo } from './styles';

const Home = ({ isMobile, isDesktop, isTablet }) => {
  return (
    <>
      <StyledHome isMobile={isMobile} isDesktop={isDesktop} isTablet={isTablet}>
        <Container>
          <StyletInfo>
            <NavText>SO, YOU WANT TO TRAVEL TO</NavText>
            <h1>space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
            {isMobile && (
              <MainButton buttonWidth={150} isDesktop={isDesktop}>
                explore
              </MainButton>
            )}
            {isTablet && (
              <MainButton buttonWidth={242} isDesktop={isDesktop}>
                explore
              </MainButton>
            )}
          </StyletInfo>
        </Container>
      </StyledHome>
    </>
  );
};

export default Home;
