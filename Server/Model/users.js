const bookshelf = require('../db/config.js');
const Users = bookshelf.Model.extend({
  tableName: 'Users',
});

exports.addUser = async function ({username, password, email}) {
  const newUser = await new U
}


module.exports = Users;