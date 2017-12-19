const bookshelf = require('../db/config.js');

const UserInfo = bookshelf.Model.extend({
  tableName: 'user_info',
  idAttribute: 'id'
});

const addUserInfo = ({ user_id, first_name, last_name, phone_number }) => {
  return new UserInfo({
    user_id,
    first_name,
    last_name,
    phone_number
  })
  .save()
  .then(saved => saved);
};

module.exports = addUserInfo;
