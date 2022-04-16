import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const NavTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-right: 15px;
  span {
    color: ${({ theme }) => theme.colors.success};
  }
`;

export const NavLinkItem = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.darkGrey};
  padding: 4px 8px;
  border-radius: 50%;
  margin: 0 10px;
  &:hover {
    background: ${({ theme }) => theme.colors.grey};
  }
`;
