import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/img/style1.png";
import Bluebg from "../assets/img/bluepng.png";
import bgStyle from "../assets/img/bgStyle.png";

const Section = styled.div`
  height: 90vh;
  background-color: ${(props) => props.theme.bgColor};
  background-image: url(${Bluebg});
  background-position: 50% 90%, 100% 0;
  background-repeat: no-repeat;
  background-size: auto;
  border-radius: 0;
  position: relative;
`;
const Section2 = styled.div`
  background-image: url(${bgStyle});
  background-position: 110% 320%;
  background-repeat: no-repeat;
  background-size: auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 48rem;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  margin: 0 auto;
  padding-left: 1.25rem /* 20px */;
  padding-right: 1.25rem /* 20px */;
`;
const LogoCon = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
`;
const Logo = styled.img`
  width: 100%;
  border-width: 0;
`;
const Title = styled.h2`
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: "Old Standard TT", serif;
  color: ${(props) => props.theme.colorTitle};
  font-size: 3rem;
  font-weight: 400;
  line-height: 1;
  line-height: 1.25;
  margin-top: 1.25rem;
`;
const Text = styled.p`
  color: rgba(67, 72, 78, 0.7);
  text-align: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: 300;
  line-height: 1.86em;
`;

const About = () => {
  return (
    <Section>
      <Section2>
        <Container>
          <LogoCon>
            <Logo src={LogoImg} />
          </LogoCon>
          <Title>Welcome to Home of Tranquility, Relaxation and Respite.</Title>
          <Text>
            Everybody is looking for places where to relax and get more energy.
            In our wellness center silence, energy, beauty and vitality meet.
            The treatments we offer will refresh both your body and soul.We'll
            be glad to welcome you and recommend our facilities and services.
          </Text>
        </Container>
      </Section2>
    </Section>
  );
};

export default About;
