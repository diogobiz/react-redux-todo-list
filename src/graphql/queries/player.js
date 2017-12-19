import gql from 'graphql-tag'

export default gql`
  query GetPlayer($nickname: String!) {
    player(nickname: $nickname) {
      name,
      sex,
      vocation,
      level,
      achievementPoints,
      world,
      residence,
      lastLogin,
      accountStatus
    }
  }
`