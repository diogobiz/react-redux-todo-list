const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const schema = require('../schemas/Character');

//Import do graphqlHTTP que cria um servidor preparado pro GraphQL + HTTP
const graphqlHTTP = require('express-graphql');

module.exports = () => {
  const app = express()

  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*')
  //   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  //   next()
  // })
  
  // enable CORS
  app.use(cors())
  
  // // request body parser
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  // request body cookie parser
  app.use(cookieParser())  

  //Registrando a rota '/player'
  app.use(
    '/player',
    graphqlHTTP({
      schema,
      graphiql: true,
      formatError: error => ({message: error.message, path: error.path})
    }) //Passando a instancia da função graphqlHTTP
  )
  
  return app
}