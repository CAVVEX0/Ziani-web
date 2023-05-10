import React from 'react'
import styled from 'styled-components';
import Button from '../Plugs/Button';
import Logo from '../Plugs/Logo';




const Section = styled.section`
  width: 100vw;
  background-color: white;
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: 5rem;
  margin: 0 auto;
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 48em) {
    display: none;
  }
`;
const MenuItem = styled.li`
  margin: 0 1rem;
  color: black;
  cursor: pointer;
  text-transform: capitalize;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: black;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;


const Navbar = () => {
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem>acceuil</MenuItem>
          <MenuItem>nos spécialitées</MenuItem>
          <MenuItem>nos hammams</MenuItem>
          <MenuItem>nos formules</MenuItem>
          <MenuItem>réservation</MenuItem>
          <MenuItem>contact </MenuItem>
        </Menu>
        <Button text="Book Now" link="https://google.com" />
      </NavBar>
    </Section>
  );
};
export default Navbar