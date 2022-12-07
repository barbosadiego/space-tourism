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

  p{
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    text-transform: none;
  } 

  a{
    text-decoration: none;
  }
`;

export default GlobalStyles;
