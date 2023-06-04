import { gql } from '@apollo/client';

const GET_ARTICLE_BY_ID = gql`
  query GetArticleById($id: ID!) {
    getArticleById(ID: $id) {
      id
      title
      description
      article
      author
      image
    }
  }
`;

export default GET_ARTICLE_BY_ID;
