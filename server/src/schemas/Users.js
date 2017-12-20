const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { getUsers } = require('../services/users.service');

const UsersType = new GraphQLObjectType({
  name: 'Users',
  description: 'Users for github',

  fields: () => ({
    username: {
      type: GraphQLString,
      resolve: (root, args) => root.login
    },
    img: {
      type: GraphQLString,
      resolve: (root, args) => root.avatar_url
    },
    repositories: {
      type: GraphQLList(RepositoriesType),
      resolve: (root, args) => {console.log('b', root); return root.repositories}
    }       
  })
})

const RepositoriesType = new GraphQLObjectType({
  name: 'Repositories',
  description: 'Repositories for users github',

  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: (root, args) => root.name
    }    
  })
})

const users = {
  type: GraphQLList(UsersType),
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
