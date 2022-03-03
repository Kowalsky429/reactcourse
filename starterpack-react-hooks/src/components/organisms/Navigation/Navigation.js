import React from 'react';
import { Wrapper, Logo, StyledLink } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => (
  <Wrapper>
    <Logo>
      Studdy <br /> Buddy
    </Logo>
    <StyledLink to="/group">Dashboard</StyledLink>
  </Wrapper>
);
Navigation.propTypes = {};

export default Navigation;
