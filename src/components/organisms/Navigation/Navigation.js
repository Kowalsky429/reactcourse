import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 0;
  width: 150px;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  text-align: right;
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 60px;
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  margin-bottom: 20px;
  ${Link}:active {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

const Navigation = () => (
  <Wrapper>
    <Logo>
      Studdy <br /> Buddy
    </Logo>
    <StyledLink to="/">Dashboard</StyledLink>
    <StyledLink to="/add-user">Add user</StyledLink>
    <StyledLink to="#">Settings</StyledLink>
    <StyledLink to="#">Logout</StyledLink>
  </Wrapper>
);
Navigation.propTypes = {};

export default Navigation;
