import React from 'react';
import { Wrapper, Logo, StyledLink } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => (
  <Wrapper>
    <Logo>
      Studdy <br /> Buddy
    </Logo>
    <StyledLink exact="true" to="/">
      Dashboard
    </StyledLink>
    <StyledLink to="/add-user">Add user</StyledLink>
  </Wrapper>
);
Navigation.propTypes = {};

export default Navigation;
