import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#projects">Projects</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
    <ToggleTheme />
  </Wrapper>
);

export default NavbarLinks;
