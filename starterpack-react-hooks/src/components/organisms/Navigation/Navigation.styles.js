import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 20px 0;
  width: 150px;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  grid-column: 1/1;
  grid-row: 1/3;
`;

export const Logo = styled.div`
  width: 100%;
  height: 70px;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  text-align: right;
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 60px;
`;

export const StyledLink = styled(NavLink).attrs({ className: (isActive) => (isActive ? 'active' : 'inactive') })`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  text-decoration: none;
  margin: 20px 25px;
  text-align: center;
  position: relative;
  &.active {
    color: #5b63bd;
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transform: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -26px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
