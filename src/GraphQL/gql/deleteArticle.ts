import { gql } from '@apollo/client';

const DEL_ARTICLE = gql`
  mutation DeleteArticle($blog: String!, $id: ID!) {
    deleteArticle(blog: $blog, ID: $id)
  }
`;

export default DEL_ARTICLE;
