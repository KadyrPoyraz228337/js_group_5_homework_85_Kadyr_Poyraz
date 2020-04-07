import React from 'react';
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavbarText,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOutUser} from "../../../store/actions/userActions";
import {fetchArtists} from "../../../store/actions/artistsActions";

const AuthUserToolBar = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);

  const imageLink = user.facebookId ? user.avatarImage : `http://localhost:8000/uploads/${user.avatarImage}`;

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
      <NavbarText className='d-flex align-items-center ml-3'>
        <h6 className='m-0'>
          <span className='mr-1'>Hello</span>
          <b>{user.displayName}</b>!
        </h6>
        {user.avatarImage && <div
          style={{
          width: '25px',
          height: '25px',
          background: '#000',
          borderRadius: '50px'
        }}
          className='d-flex align-items-center justify-content-center overflow-hidden ml-2'
          >
          <img
          src={imageLink}
          alt="user avatar"
          className='h-100 w-auto'
          />
          </div>}
      </NavbarText>
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