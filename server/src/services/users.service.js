const axios = require('axios');
const { hasSpecificLength } = require('../utils/validations.utils')

const Character = require('../models/Character')

const setRepositories = (users, respositories) => {
  if (!!users && users.length) {
    return users.map((user) => {
      if (!!respositories && respositories.length) {
        user.repositories = respositories.map((repository) => ({name: repository.name}));
      } else {
        user.repositories = null;
      }
      return user;
    });
  }
}

const getUsers = (userName = '') =>
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
      const getRepos = [];
      axios.get(url)
        .then((response) => {
          let users = response.data.items;
          users.forEach((user) => {
            getRepos.push(axios.get(user.repos_url));
          });

          axios.all(getRepos)
            .then(axios.spread((acct, perms) => {
              users = setRepositories(users, acct.data);
              resolve(users);
            }))
            .catch((error) => {
              console.log(error);
              users = setRepositories(users, null);   
              resolve(users);   
            });          
        })
        .catch((error) => {
          reject(error);
        });
      
    } catch (error) {
      reject(error)
    }
  })

  getUsers("diogobiz")
module.exports = {
  getUsers
}