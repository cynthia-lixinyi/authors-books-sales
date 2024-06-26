// database config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './api/data.db'
    },
    migrations: {
      directory: './api/migrations'
    },
    seeds: {
      directory: './api/seeds'
    },
    useNullAsDefault: true,
  },

  // staging: {
  //   client: 'sqlite3',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'sqlite3',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
