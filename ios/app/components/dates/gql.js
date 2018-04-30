import gql from 'graphql-tag';

export const GetDateInfo = gql `
query GetDates($id: Int!){
  dateById(id: $id) {
    id
    initiator
    zipCode
    when
    members {
      name
    }
    votes {
      value
      user {
        name
      }
    }
  }
}
`;
