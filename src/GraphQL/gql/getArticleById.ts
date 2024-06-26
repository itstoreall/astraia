import { gql } from '@apollo/client';

const GET_BY_ID = gql`
  query GetArticleById($blog: String!, $id: ID!) {
    getArticleById(blog: $blog, ID: $id) {
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

export default GET_BY_ID;
