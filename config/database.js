  // strapi-api/config/database.js
  module.exports = ({ env }) => ({
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host: env("DATABASE_HOST", "localhost"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "services"),
          username: env("DATABASE_USERNAME", "postgres"),
          password: env("DATABASE_PASSWORD", "{cC.F&'+c6}z;`Y7"),
          schema: env("DATABASE_SCHEMA", "public"),
        },
        options: {},
      },
    },
  });