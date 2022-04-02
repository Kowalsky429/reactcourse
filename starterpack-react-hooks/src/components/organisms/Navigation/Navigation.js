import React from 'react';
import { Wrapper, Logo, StyledLink } from 'components/organisms/Navigation/Navigation.styles';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const auth = useAuth();
  return (
    <Wrapper>
      <Logo>
        Studdy <br /> Buddy
      </Logo>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink as="a" onClick={auth.signOut}>
        Log out
      </StyledLink>
    </Wrapper>
  );
};

Navigation.propTypes = {};

export default Navigation;
