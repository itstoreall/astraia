import { gql } from '@apollo/client';

const UPDATE_ADMIN = gql`
  mutation Admin($input: AccessInput) {
    updateAdmin(input: $input) {
      login
      password
      token
    }
  }
`;

export default UPDATE_ADMIN;
