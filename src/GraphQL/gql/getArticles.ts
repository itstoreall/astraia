import { gql } from '@apollo/client';

const GET_ARTICLES = gql`
  query GetArticles($blog: String!) {
    articles(blog: $blog) {
      id
      title
      description
      text
      author
      ipfs
      image
      views
      status
      tags
      timestamp
    }
  }
`;

export default GET_ARTICLES;
