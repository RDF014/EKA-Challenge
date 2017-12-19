const bookshelf = require('../db/config.js');

const UserAddress = bookshelf.Model.extend({
  tableName: 'user_address',
  idAttribute: 'id'
});

const addUserAddress = ({ user_id, address, city, state, zip }) => {
  return new UserAddress({
    user_id,
    address,
    city,
    state,
    zip
  })
  .save()
  .then(saved => saved);
};

module.exports = addUserAddress;
