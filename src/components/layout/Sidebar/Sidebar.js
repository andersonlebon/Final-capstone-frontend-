/* eslint-disable react/prop-types */
import React from 'react';
import {
  SidebarContainer, Icon, CloseIcon, NavLink, SidebarWrapper, SideBtnWrap, SidebarMenu,
} from './SidebarElements';
import SocialIcons from '../socialIcons';

const Sidebar = ({ isOpen, toggle }) => (
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
      </SidebarMenu>
      <SideBtnWrap>
        <SocialIcons />
      </SideBtnWrap>
    </SidebarWrapper>
  </SidebarContainer>
);

export default Sidebar;
