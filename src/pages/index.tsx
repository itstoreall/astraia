import { ContentBlock, Page, Title } from '@/styles/page.styles';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Astraia</title>
        <meta name='description' content='Astraia - духовное саморазвитие' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>Header</header>
      <main>
        <Page>
          <Title>Home</Title>
          <ContentBlock>
            Loading
            {/* {articles?.length > 0 ? <ArticleList /> : <p>Loading...</p>} */}
          </ContentBlock>
        </Page>
        <Title>index/main</Title>
      </main>
    </>
  );
}
