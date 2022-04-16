import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 1/3;
  grid-column: 3/3;
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
  overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h2`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 0;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 14px;
  line-height: 1.4rem;
`;

export const TitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  margin-bottom: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  img {
    margin-left: 35px;
    max-width: 200px;
    max-height: 200px;
    object-fit: cover;
  }
`;
