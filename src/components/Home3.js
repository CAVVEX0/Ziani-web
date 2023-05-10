import React from "react";
import styled from "styled-components";
import Img1 from "../assets/img/grid/61c33c2d3abf433c475e7f40_Rela-galery-img1.jpeg";
import Img2 from "../assets/img/grid/61c33da7ae92125ea49eca47_Rela-gallery2.jpeg";
import Img3 from "../assets/img/grid/61c34520de3ee52779f5e6a2_Rela-gallery4.jpg";
import Img4 from "../assets/img/grid/61c34671ac87b6ddd5753edc_Rela-gallery5.jpg";
import Img5 from "../assets/img/grid/61c3472a6e653730a11e3627_Rela-gallery6.jpg";
import Img6 from "../assets/img/grid/7.jpg";
import Img7 from "../assets/img/grid/8.jpg";
import Img8 from "../assets/img/grid/9.jpg";
import ImgStyle from "../assets/img/grid/ImgStyle.png";

const Container = styled.div`
  display: grid;
  place-items: center;
  min-height: 100%;
`;

const Section = styled.div`
  padding: 1rem;
  max-width: 60rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 48em) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Title = styled.h1`
  font-family: ${(props) => props.theme.fontold};
  font-size: 3.75rem;
  grid-column: span 3 / span 3;
  color: ${(props) => props.theme.colorTitle};
  line-height: 1;
  font-weight: inherit;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 48em) {
    grid-column: span 2 / span 2;
  }
`;
const TitleSpan = styled.span`
  grid-column: span 2 / span 2;
  align-self: center;
  
`;
const Text = styled.p`
  grid-row-start: 2;
  grid-column-start: 2;
  align-self: center;
  grid-column-start: 1;
  grid-column: span 2 / span 2;
  padding-right: 3rem;
  font-size: 18px;
`;
const Text2 = styled.p`
  align-self: center;
  font-size: 18px;
  grid-column: span 2 / span 2;
  text-align: center;
  padding: 0 1rem;
`;
const Grid1 = styled.div`
  height: auto;
  aspect-ratio: 1 / 1;
  transition: all ease 0.5s;
  box-shadow: black;

  &:hover {
    transform: scale(1.1);
  }
`;
const Grid4 = styled.div`
  height: auto;
  aspect-ratio: 1 / 1;
  grid-column-start: 2;
  transition: all ease 0.5s;
  box-shadow: black;

  &:hover {
    transform: scale(1.1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const GridBG = styled.div`
  height: auto;
  aspect-ratio: 1 / 1;
`;

const Home3 = () => {
  return (
    <Container>
      <Section>
        <Title>
          <TitleSpan>Grid Layout with Styled Components</TitleSpan>
        </Title>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Consequuntur, ipsum!
        </Text>
        <Grid1>
          <Image src={Img1} />
        </Grid1>
        <Grid1>
          <Image src={Img2} />
        </Grid1>
        <Grid1>
          <Image src={Img3} />
        </Grid1>
        <GridBG>
          <Image src={ImgStyle} />
        </GridBG>
        <Grid4>
          <Image src={Img6} />
        </Grid4>
        <Grid1>
          <Image src={Img4} />
        </Grid1>
        <Grid1>
          <Image src={Img5} />
        </Grid1>
        <Grid1>
          <Image src={Img8} />
        </Grid1>
        <Grid1>
          <Image src={Img7} />
        </Grid1>
        <Text2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Consequuntur, ipsum!
        </Text2>
      </Section>
    </Container>
  );
};

export default Home3;
