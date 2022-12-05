import styled from 'styled-components';
import pxToRem from '../../helper/tipographySwitch';

const Subheading1 = styled.p`
  font-family: 'Bellefair', sans-serif;
  font-weight: 400;
  font-size: ${pxToRem(28)};
  line-height: ${pxToRem(32)};
  text-transform: uppercase;
`;

export default Subheading1;
