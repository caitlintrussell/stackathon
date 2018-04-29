import gql from 'graphql-tag';

export const meQuery = gql`
  query {
    me {
      id
      name
      dates {
        voteCount
        memberCount
      }
    }
  }
`;

export const datesQuery = gql`
  query {
    me {
      id
      dates {
        when
        voteCount
        memberCount
        id
      }
    }
  }
`;
