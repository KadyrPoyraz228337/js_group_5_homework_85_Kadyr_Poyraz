import React from 'react';
import {NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const NoAuthUserToolBar = () => {
  return (
    <>
      <NavItem className='ml-5'>
        <NavLink tag={RouterNavLink} to='/login' exact>Login</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RouterNavLink} to='/register' exact>SignUp</NavLink>
      </NavItem>
    </>
  );
};

export default NoAuthUserToolBar;