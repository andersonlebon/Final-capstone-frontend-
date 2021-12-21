import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

export const MobileIcon = styled.div`
  justify-self: end;
`;

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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black; 
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;
  padding: 15px 0;
  padding-left: 5px;
  text-transform: uppercase;
  display: block;
  margin-left: 8px;
  font-family: 'Lato', sans-serif;

  @media screen and (min-width: 800px) {
    font-size: 12px;
  }
  
  &.active {
    color: white;
    background-color: #97bf0f;
  }
`;
