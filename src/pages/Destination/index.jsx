import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import { StyledImage, StyledInfo } from './styles';

const Destination = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getPageInfo = async () => {
      try {
        const data = await fetch('./data/data.json');
        const res = await data.json();
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };

    getPageInfo();
  }, []);

  console.log(data);
  return (
    <>
      <Container>
        <StyledImage>image</StyledImage>
        <StyledInfo>info</StyledInfo>
      </Container>
    </>
  );
};

export default Destination;
