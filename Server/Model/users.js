const bookshelf = require('../db/config.js');

const Users = bookshelf.Model.extend({
  tableName: 'users',
  idAttribute: 'id'
});

const addUser = ({ username, password, email }) => {
  return new Users({
    username,
    password,
    email
  })
  .save()
  .then(saved => saved.id);
};

module.exports = addUser;
