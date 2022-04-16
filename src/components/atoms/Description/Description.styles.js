import styled from 'styled-components';

export const StyledDescription = styled.div`
  padding: 25px 20px;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  .name {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  .attendance {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
