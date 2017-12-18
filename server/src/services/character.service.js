//Importando novamente as nossas dependencias do DOM
const { getDomFromURL, getTextContent } = require('../utils/dom.utils');

const {  hasSpecificLength } = require('../utils/validations.utils');

//Importando o Modelo Character
const Character = require('../models/Character');

//Aplicando o `async` na função
const getCharacterInfos = async (playerName = '') => {
  const playerNameWasNotSent = hasSpecificLength({ target: playerName, length: 0 });
  if (playerNameWasNotSent) {
    throw new Error('Player name is required')
  }

  //Criando a nossa URL a partir do nome recebido
  const url = `https://secure.tibia.com/community/?subtopic=characters&name=${playerName}`;
  //Criando o DOM com o await, para que possamos escrever o código de forma síncrona
  const dom = await getDomFromURL(url);

  const character = new Character(dom);
  
  return character.allCharacterInformation
}

//Apenas testes
getCharacterInfos('hue proliferator')
getCharacterInfos('mad dentist')

module.exports = {
  getCharacterInfos
}