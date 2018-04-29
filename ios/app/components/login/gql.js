import gql from 'graphql-tag';
export const loginMutation = gql`
mutation LoginMutation($email: String!, $password: String!) {
  login(input: {email: $email, password: $password}) {
    id
    name
    email
    dates {
      initiator
      zipCode
      voteCount
      memberCount
    }
  }
}
`;

export const meQuery = gql`
  query {
    me {
      id
      name
      email
      dates {
        initiator
        zipCode
        voteCount
        memberCount
      }
    }
  }
`;

