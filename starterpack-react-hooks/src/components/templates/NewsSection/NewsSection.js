import React, { useState, useEffect } from 'react';
import { ArticleWrapper, Wrapper, NewsSectionHeader, TitleWrapper, ContentWrapper } from 'components/templates/NewsSection/NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

export const query = `
{
  allArticles{
    id
    title
    category
    content
    image{
      url
    }
  }
}
`;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            // authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
            authorization: '048dd23b17dcb713810f79a70283dc',
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => setError(`Sorry we couldn't load articles for you`));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image = null }) => (
          <ArticleWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="image" /> : null}
            </ContentWrapper>
            <Button isBig>click me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
