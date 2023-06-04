import { gql } from '@apollo/client';

const GET_ADMIN = gql`
  query GetAdmin($login: String!, $password: String!) {
    getAdmin(login: $login, password: $password) {
      login
      password
      token
    }
  }
`;

export default GET_ADMIN;
