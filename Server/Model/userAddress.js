const bookshelf = require('../db/config.js');
const UsersAddress = bookshelf.Model.extend({
  tableName: 'UserAddress',
});
module.exports = UsersAddress;