import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fr from '../assets/img/france.png'

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: 4em;
  color: black;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
const Image = styled.img`
width: 45px;
` 

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">
        <Image src={Fr}/>
      </Link>
    </LogoText>
  );
};

export default Logo;
