const bookshelf = require('../db/config.js');
const UserInfo = bookshelf.Model.extend({
  tableName: 'UserInfo',
});
module.exports = UserInfo;