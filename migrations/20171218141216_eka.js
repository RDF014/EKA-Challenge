
exports.up = function(knex, Promise) {
    return Promise.all([

      knex.schema.createTableIfNotExists('Users', (table) => {
        table.increments('Id');
        table.string('Username');
        table.string('Password');
        table.string('Email');
      }),

      knex.schema.createTableIfNotExists('UserInfo', (table) => {
        table.increments('Id');
        table.integer('User_Id').references('Id').inTable('Users');
        table.string('FirstName');
        table.string('LastName');
        table.string('PhoneNumber');
      }),

      knex.schema.createTableIfNotExists('UserAddress', (table) => {
        table.increments('Id');
        table.integer('User_Id').references('Id').inTable('Users');
        table.string('Address');
        table.string('City');
        table.string('State');
        table.string('Zip');
      })

    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('Users'),
    knex.schema.dropTableIfExists('UserInfo'),
    knex.schema.dropTableIfExists('UserAddress')
  ])
};
