/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  SidebarContainer, Icon, CloseIcon, NavLink, SidebarWrapper, SideBtnWrap, SidebarMenu,
} from './SidebarElements';
import SocialIcons from '../socialIcons';
import { logoutUser } from '../../../store/reducers/users';

const Sidebar = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate('/login');
  };
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <NavLink to="/">Houses</NavLink>
          <NavLink to="/myreservations">My Reservations</NavLink>
          <NavLink to="/addhouse">Add House</NavLink>
          <NavLink to="/removehouse">Remove House</NavLink>
          <NavLink to="/reserve">Reserve</NavLink>
          <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SocialIcons />
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
