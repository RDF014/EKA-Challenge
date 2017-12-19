const config = require('../../knexfile.js');
const Knex = require('knex')(config.development);
const Bookshelf = require('bookshelf')(Knex);

Knex.migrate.latest([config])
  .then(() => {
    return Knex.seed.run();
  })
  .then(() => {
    console.log('migration done');
  })
  .catch(err => console.log(err));

module.exports = Bookshelf;
