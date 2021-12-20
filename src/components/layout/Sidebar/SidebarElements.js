import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #97bf0f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1rem;
  background: #97bf0f;
  font-size: 2rem;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: black;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: center;

  @media screen and (min-width: 480px ) {
    grid-template-rows: repeat(6, 60px);
  }

`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;
  border: none;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;
