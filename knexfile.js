// Update with your config settings.
import "dotenv/config"
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
console.log("DB URI",process.env.DB_URI)
export default {
  development: {
    client: 'postgresql',
    // connection: {
    //   host: process.env.DB_HOST,
    //   user: process.env.DB_USER,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_DATABASE,
    // },
    connection:process.env["DB_URI"],
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  },
  pool: {
    afterCreate: (conn, done) => {
      console.log('📡 Connection to PostgreSQL established!');
      done(null, conn);
    },
  },
};
