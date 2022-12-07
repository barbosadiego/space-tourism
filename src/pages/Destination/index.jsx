import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Container from '../../components/Container';

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

  return (
    <>
      <Container>
        {data &&
          data.destinations.map((item, index) => (
            <Card item={item} key={index} />
          ))}
      </Container>
    </>
  );
};

export default Destination;
