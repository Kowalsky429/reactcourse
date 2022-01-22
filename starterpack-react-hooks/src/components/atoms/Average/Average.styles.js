import styled from 'styled-components';

export const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${({ theme, avg }) => {
    if (avg > 4) return theme.colors.success;
    if (avg > 3) return theme.colors.warning;
    if (avg > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 13.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 12px;
`;
