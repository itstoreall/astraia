import { Page, Title, ContentBlock } from '../../styles/page.styles';

const Articles = () => {
  return (
    <Page>
      <Title>Статьи</Title>
      <ContentBlock>
        Loading
        {/* {articles?.length > 0 ? <ArticleList /> : <p>Loading...</p>} */}
      </ContentBlock>
    </Page>
  );
};

export default Articles;
