import { gql } from '@apollo/client';

const PUBLISH_ARTICLE = gql`
  mutation PublishArticle($blog: String!, $id: ID!) {
    publishArticle(blog: $blog, ID: $id) {
      status
    }
  }
`;

export default PUBLISH_ARTICLE;
