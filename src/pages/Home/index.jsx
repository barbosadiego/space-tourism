import React from 'react';
import Container from '../../components/Container';
import StyledHome from './styles';

const Home = ({ isMobile, isDesktop }) => {
  console.log(isMobile);
  return (
    <>
      <Container>
        <StyledHome isMobile={isMobile} isDesktop={isDesktop}>
          <p>home page</p>
        </StyledHome>
      </Container>
    </>
  );
};

export default Home;
