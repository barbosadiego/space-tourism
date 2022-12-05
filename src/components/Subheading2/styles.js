import styled from 'styled-components';
import pxToRem from '../../helper/tipographySwitch';

const Subheading2 = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 400;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(17)};
  text-transform: uppercase;
  letter-spacing: ${pxToRem(2.36)};
`;

export default Subheading2;
