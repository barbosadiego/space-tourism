import React, { useContext, useEffect, useState } from 'react';
import Card from '../../components/Card';
import Container from '../../components/Container';
import { WindowContext } from '../../contexts/windowContext';
import { StyledDial, StyledButton } from './styles';

const Destination = () => {
  const [data, setData] = useState();
  const [active, setActive] = useState(1);
  const { windowData } = useContext(WindowContext);

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

  return (
    <>
      <Container>
        <StyledDial isDesktop={windowData.desktop}>
          <li>
            <StyledButton onClick={() => setActive(1)} active={active === 1}>
              moon
            </StyledButton>
          </li>
          <li>
            <StyledButton onClick={() => setActive(2)} active={active === 2}>
              mars
            </StyledButton>
          </li>
          <li>
            <StyledButton onClick={() => setActive(3)} active={active === 3}>
              europa
            </StyledButton>
          </li>
          <li>
            <StyledButton onClick={() => setActive(4)} active={active === 4}>
              titan
            </StyledButton>
          </li>
        </StyledDial>
        {data &&
          data.destinations.map((item, index) => (
            <Card item={item} key={index} active={active} index={index} />
          ))}
      </Container>
    </>
  );
};

export default Destination;
