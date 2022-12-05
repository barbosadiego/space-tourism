import { createGlobalStyle } from 'styled-components';
import pxToRem from '../helper/tipographySwitch';

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  
  #root{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main{
    flex: 1;
  }

  ul, li{
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, p{
    font-family: "Bellefair", sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
  }

  h1{
    font-size: ${pxToRem(150)};
    line-height: ${pxToRem(171)};
  }

  h2{
    font-size: ${pxToRem(100)};
    line-height: ${pxToRem(115)};
  }

  h3{
    font-size: ${pxToRem(56)};
    line-height: ${pxToRem(64)};
  }

  h4{
    font-size: ${pxToRem(32)};
    line-height: ${pxToRem(37)};
  }

  h5{
    font-family: 'Barlow Condensed', sans-serif;
    font-size: ${pxToRem(28)};
    line-height: ${pxToRem(32)};
    letter-spacing: ${pxToRem(4.75)};
  }

  p{
    font-family: 'Barlow Condensed', sans-serif;
    font-size: ${pxToRem(18)};
    font-weight: 400;
    line-height: ${pxToRem(32)};
    letter-spacing: ${pxToRem(2.7)};
  }

  a{
    text-decoration: none;
  }
`;

export default GlobalStyles;
