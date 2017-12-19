require('dotenv').config()
const Knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT || '5432',
    user: process.env.PG_USER || 'postgresql',
    password: process.env.PG_PW || '',
    database: 'postgres'
  }
});

Knex.raw('CREATE DATABASE eka')
  .then(() => {
    Knex.destroy();
  })
