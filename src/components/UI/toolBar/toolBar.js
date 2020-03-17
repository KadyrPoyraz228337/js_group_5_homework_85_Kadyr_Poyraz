import React from 'react';
import {Nav, NavItem, NavLink} from "reactstrap";
import {useSelector} from "react-redux";
import AuthUserToolBar from "./authUserToolBar";
import NoAuthUserToolBar from "./noAuthUserToolBar";
import {NavLink as RouterNavLink} from "react-router-dom";

const ToolBar = () => {
  const user = useSelector(state => state.users.user);

  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={RouterNavLink} to='/' exact>Artists</NavLink>
      </NavItem>
      {user && <AuthUserToolBar/>}
      {!user && <NoAuthUserToolBar/>}
    </Nav>
  );
};

export default ToolBar;