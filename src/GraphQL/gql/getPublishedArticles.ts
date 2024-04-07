import { gql } from '@apollo/client';

const GET_PUBLISHED = gql`
  query GetPublishedArticles($blog: String!) {
    publishedArticles(blog: $blog) {
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

export default GET_PUBLISHED;
