import gql from 'graphql-tag'

export default gql`
  query GetPlayer($username: String!) {
    users(username: $username) {
      username,
      img,
      repositories {
        name
      }
    }
  }
`