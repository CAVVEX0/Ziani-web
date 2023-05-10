import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
`;

const Home = () => {
  return <Container>Home</Container>;
};

export default Home;
