import React from 'react';
import {Button, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logOutUser} from "../../../store/actions/userActions";
import {fetchArtists} from "../../../store/actions/artistsActions";

const AuthUserToolBar = () => {

  const dispatch = useDispatch();
  const logout = async () => {
    await dispatch(logOutUser());
    await dispatch(fetchArtists())
  };

  return (
    <>
      <NavItem>
        <NavLink tag={RouterNavLink} to='/trackHistory' exact>Track history</NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Add new
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem tag={RouterNavLink} to='/artists/new'>
            Add new artist
          </DropdownItem>
          <DropdownItem tag={RouterNavLink} to='/albums/new'>
            Add new album
          </DropdownItem>
          <DropdownItem tag={RouterNavLink} to='/tracks/new'>
            Add new track
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <Button
        color='danger'
        className='ml-5'
        onClick={logout}
      >
        Logout
      </Button>
    </>
  );
};

export default AuthUserToolBar;