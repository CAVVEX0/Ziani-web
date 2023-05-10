import React from "react";
import styled from "styled-components";
import DrawSvg from "../Plugs/DrawSvg";

const Section = styled.section`
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  width: 100vw;
  max-width: 1300px;
  padding-top: 3rem;
  position: relative;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3em;
  text-transform: capitalize;
  font-family: "Old Standard TT", serif;
  font-weight: 400;
  color: ${props => props.theme.colorTitle};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-bottom: 2px solid black;
  width: fit-content;

  @media (max-width: 48em) {
    font-size: 2em;
  }
`;

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.bgColor};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */
  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;
        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  div {
    border-radius: 0 50px 0 50px;
    text-align: left;
  }
  p {
    border-radius: 0 40px 0 40px;
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid black;

  @media (max-width: 48em) {
    width: 70%;
  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: #eeedde;
  color: black;
  padding: 1rem;
  position: relative;
  border: 1px solid black;
`;
const SubTitle = styled.span`
  display: block;
  font-size: 1.5em;
  text-transform: capitalize;
  color: solid black;

  @media (max-width: 48em) {
    font-size: 1.25em;
    font-weight: 600;
  }
`;
const Text = styled.span`
  display: block;
  font-size: 0.875em;
  text-transform: capitalize;
  color: solid black;
  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 48em) {
    font-size: 0.75em;
  }
`;

const AboutMapItem = ({ title, subtext }) => {
  return (
    <Item>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Speciality = () => {
  return (
    <Section>
      <Title>Nos Hammams</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <AboutMapItem
            title="Hammam Istanbul"
            subtext="Pour femmes et enfants /
            Ouvert 7j/7"
          />
          <AboutMapItem
            title="Hammam L’orient"
            subtext="Pour femmes uniquement /
            Ouvert jeudi-samedi-dimanche"
          />
          <AboutMapItem
            title="Hammam Salam "
            subtext="Pour hommes /
            Ouvert 7j/7"
          />
          <AboutMapItem
            title="Hammam Individuel VIP"
            subtext="Pour femmes /
            Sur rendez-vous uniquement"
          />
          <AboutMapItem
            title="Coiffure & Esthétique"
            subtext="Pour femmes uniquement"
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Speciality;
