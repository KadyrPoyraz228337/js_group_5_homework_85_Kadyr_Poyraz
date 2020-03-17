import React from 'react';
import {NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const AuthUserToolBar = () => {
  return (
    <>
      <NavItem>
        <NavLink tag={RouterNavLink} to='/trackHistory' exact>Track history</NavLink>
      </NavItem>
    </>
  );
};

export default AuthUserToolBar;