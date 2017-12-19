const axios = require('axios');
const { hasSpecificLength } = require('../utils/validations.utils')

const Character = require('../models/Character')

const getUsers = (userName = '') =>
//retornando uma promise async
  new Promise(async (resolve, reject) => {
    const playerNameWasNotSent = hasSpecificLength({
      target: userName,
      length: 0,
    })

    if (playerNameWasNotSent) {
      reject(new Error('User name is required'))
    }
    
    try {
      const url = `https://api.github.com/search/users?q=${userName}`;
      axios.get(url)
        .then((response) => {
          resolve(response.data.items);
        })
        .catch((error) => {
          reject(error);
        });
      
    } catch (error) {
      reject(error)
    }
  })

module.exports = {
  getUsers
}