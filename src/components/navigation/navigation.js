import React from 'react';
import {Container, Navbar, NavbarBrand} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom'
import ToolBar from "../UI/toolBar/toolBar";

const Navigation = () => {

  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand tag={RouterNavLink} to='/'>MusicApp</NavbarBrand>
          <ToolBar/>
      </Container>
    </Navbar>
  );
};

export default Navigation;