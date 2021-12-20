import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

export const Bars = styled(FaBars)`
  border-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  justify-self: end;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #97bf0f;
  }

  @media screen and (min-width: 768px) {
    display: none;
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-right: 2px solid gray;
  align-items: flex-start;
  padding-left: 0.5rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 20px 0 20px 24px;
  
  &.active {
    color: white;
    background-color: #97bf0f;
    width: 90%;  
`;