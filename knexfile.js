// knexfile.js

module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3', 
      },
      useNullAsDefault: true,
      migrations: {
        tableName: 'knex_migrations',
        directory: './migrations',
      },
      seeds: {
        directory: './seeds',
      },
    },
  
    testing: {
      client: 'sqlite3',
      connection: {
        filename: './test.sqlite3', 
      },
      useNullAsDefault: true,
      migrations: {
        tableName: 'knex_migrations',
        directory: './migrations',
      },
      seeds: {
        directory: './seeds',
      },
    },
  };
  