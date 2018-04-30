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

export const AddDateMutation = gql`
mutation AddDate($initiator: String!, $zipCode: String!, $when: String!, $userId: Int!) {
  createDate(input:{initiator: $initiator, zipCode: $zipCode, when: $when, userId: $userId }) {
    id
    initiator
    zipCode
    when
    resolved
  }
}
`
export const GetUsers = gql`
query {
  allUsers {
    id
    name

  }
}`

export const AddUserToDate = gql`
mutation addUserToDate($userId: Int!, $dateId: Int!) {
  addUserToDate(input: {userId: $userId, dateId: $dateId}) {
    initiator
  }
}`
