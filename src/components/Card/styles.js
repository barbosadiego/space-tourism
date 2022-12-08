import styled, { css } from 'styled-components';
import pxToRem from '../../helper/tipographySwitch';

export const StyledCard = styled.div`
  position: absolute;
  left: 0;
  opacity: 0;
  width: 100vw;
  pointer-events: none;
  transition: 0.3s;
  z-index: -1;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: ${pxToRem(95)};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px 40px;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      pointer-events: auto;
      z-index: 1;
    `}
`;

export const StyledImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    font-size: ${pxToRem(16)};
    font-weight: 400;
    font-family: 'Barlow Condensed';
    line-height: ${pxToRem(19.2)};
    letter-spacing: 2.7px;
    margin-bottom: 32px;
    text-transform: uppercase;

    span {
      display: inline-block;
      margin-right: 18px;
      color: rgba(255, 255, 255, 0.25);
      font-weight: 700;
      font-size: 1rem;
    }
  }

  & img {
    width: 170px;
    height: 170px;
  }
`;

export const StyledInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  text-align: center;

  h1 {
    font-size: ${pxToRem(56)};
    line-height: ${pxToRem(64.18)};
  }

  p {
    font-size: ${pxToRem(15)};
    line-height: ${pxToRem(25)};
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 32px;
  }

  hr {
    border-color: #383b4b;
    margin-bottom: 32px;
  }
`;

export const StyledDistance = styled.div`
  span {
    display: block;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(16.8)};
    letter-spacing: 2.36;
    margin-bottom: 12px;
  }

  p {
    font-family: 'Bellefair', sans-serif;
    font-size: ${pxToRem(28)};
    line-height: ${pxToRem(32.09)};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
  }
`;
