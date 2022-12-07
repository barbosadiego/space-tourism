import React, { useContext } from 'react';
import Container from '../../components/Container';
import NavText from '../../components/NavText';
import MainButton from '../../components/MainButton';
import StyledHome, { StyletInfo } from './styles';
import { WindowContext } from '../../contexts/windowContext';

const Home = () => {
  const { windowData } = useContext(WindowContext);

  return (
    <>
      <StyledHome
        isMobile={windowData.mobile}
        isDesktop={windowData.desktop}
        isTablet={windowData.tablet}
      >
        <Container>
          <StyletInfo isDesktop={windowData.desktop}>
            <div>
              <NavText>SO, YOU WANT TO TRAVEL TO</NavText>
              <h1>space</h1>
              <p>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            {windowData.mobile && (
              <MainButton buttonWidth={150} isDesktop={false}>
                explore
              </MainButton>
            )}
            {windowData.tablet && (
              <MainButton buttonWidth={242} isDesktop={false}>
                explore
              </MainButton>
            )}
            {windowData.desktop && (
              <MainButton buttonWidth={274} isDesktop={true}>
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
