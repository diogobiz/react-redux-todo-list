const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const { getCharacterInfos } = require('../services/character.service');

const CharacterType = new GraphQLObjectType({
  name: 'Character',
  description: 'character for tibia',

  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: (root, args) => root.name,
    },
    sex: {
      type: GraphQLString,
      resolve: (root, args) => root.sex,
    },
    vocation: {
      type: GraphQLString,
      resolve: (root, args) => root.vocation,
    },
    level: {
      type: GraphQLString,
      resolve: (root, args) => root.level,
    },
    achievementPoints: {
      type: GraphQLString,
      resolve: (root, args) => root.achievementPoints,
    },
    world: {
      type: GraphQLString,
      resolve: (root, args) => root.world,
    },
    residence: {
      type: GraphQLString,
      resolve: (root, args) => root.residence,
    },
    lastLogin: {
      type: GraphQLString,
      resolve: (root, args) => root.lastLogin,
    },
    accountStatus: {
      type: GraphQLString,
      resolve: (root, args) => root.accountStatus,
    },
  }),
})

const player = {
  type: CharacterType,
  args: {
    nickname: {
      type: GraphQLString
    }
  },
  resolve: (root, args) => getCharacterInfos(args.nickname)
}

module.exports = {
  player
}
