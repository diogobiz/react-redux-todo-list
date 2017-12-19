const { getDomFromURL } = require('../utils/dom.utils')
const { hasSpecificLength } = require('../utils/validations.utils')

const Character = require('../models/Character')

const getCharacterInfos = (playerName = '') =>
//retornando uma promise async
  new Promise(async (resolve, reject) => {
    const playerNameWasNotSent = hasSpecificLength({
      target: playerName,
      length: 0,
    })

    if (playerNameWasNotSent) {
      reject(new Error('Player name is required'))
    }

    /* 
      Como estamos usando o await, podemos usar o try/catch para capturar qualquer eventual
      erro que possa ocorrer, e, caso aconteça, rejeitamos ele na promise.
    */
    try {
      const url = `https://secure.tibia.com/community/?subtopic=characters&name=${playerName}`
      const dom = await getDomFromURL(url)

      const character = new Character(dom)
      //Se for  'true', ou seja, se o player não existir...
      if (character.playerDoesntExists()) {
        //Rejeita um error, passando a mensagem de player inexistente
        reject(new Error(`Player doesn't exists`))
      }

      //Caso contrário resolve (retorna) as informações do player
      resolve(character.allCharacterInformation)
    } catch (error) {
      //Rejeita qualquer erro
      reject(error)
    }
  })

module.exports = {
  getCharacterInfos
}