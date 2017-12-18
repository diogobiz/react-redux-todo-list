const express = require('express')

//Import do graphqlHTTP que cria um servidor preparado pro GraphQL + HTTP
const graphqlHTTP = require('express-graphql')

module.exports = () => {
  const app = express()

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })
  
  //Registrando a rota '/player'
  app.use(
    '/player',
    graphqlHTTP({
      schema,
      graphiql: true,
    }) //Passando a instancia da função graphqlHTTP
  )
  
  return app
}