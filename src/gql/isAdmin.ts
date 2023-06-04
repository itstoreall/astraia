import { gql } from '@apollo/client';

const IS_ADMIN = gql`
  query IsAdmin($token: String!) {
    isAdmin(token: $token)
  }
`;

export default IS_ADMIN;
