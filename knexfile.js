// Update with your config settings.

require("dotenv").config();

module.exports = {
  staging: {
    client: "pg",
    connection: process.env.HEROKU_POSTGRESQL_BLACK_URL,

    migrations: {
      directory: "./database/development/migrations",
    },

    seeds: {
      directory: "./database/development/seeds",
    },
  },

  development: {
    client: "pg",
    useNullDefault: true,
    connection: {
      host: process.env.POSTGRESS_DEV_HOST,
      port: process.env.POSTGRESS_DEV_PORT,
      user: process.env.POSTGRESS_DEV_USER,
      password: process.env.POSTGRESS_DEV_PASSWORD,
      database: process.env.POSTGRESS_DEV_DATABASE,
    },

    migrations: {
      directory: "./database/development/migrations",
    },

    seeds: {
      directory: "./database/development/seeds",
    },
  },

  production: {
    client: "pg",
    useNullAsDefault: true,

    connection: process.env.DATABASE_URL,

    migrations: {
      directory: "./database/development/migrations",
    },
    seeds: {
      directory: "./database/development/seeds",
    },
  },
};
