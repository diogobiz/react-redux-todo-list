const { GraphQLSchema, GraphQLObjectType } =  require('graphql');

const player =  require('./Character');
const users =  require('./Users');

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',
  
    fields: () => ({
      ...player,
      ...users
    })
  })
})
