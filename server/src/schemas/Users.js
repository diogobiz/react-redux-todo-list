const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { getUsers } = require('../services/users.service');

const UsersType = new GraphQLObjectType({
  name: 'Users',
  description: 'Users for github',

  fields: () => ({
    username: {
      type: GraphQLString,
      resolve: (root, args) => root.login,
    },
    img: {
      type: GraphQLString,
      resolve: (root, args) => root.avatar_url,
    }    
  })
})

const users = {
  type: new GraphQLList(UsersType),
  args: {
    username: {
      type: GraphQLString
    }
  },
  resolve: (root, args) => getUsers(args.username)
}

module.exports = {
  users
}
