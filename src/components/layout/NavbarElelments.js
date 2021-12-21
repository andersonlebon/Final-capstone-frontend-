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
  width: 100%;
  height: 100%;
  display: block;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 1.5rem;
  padding: 15px 20px 15px 20px;
  color: black; 
  font-weight: bold;
  cursor: pointer;
  font-size: 11px;
  text-transform: uppercase;
  width: 100%;
  display: inline-block;
 
  
  &.active {
    color: white;
    background-color: #97bf0f;
  }
`;
