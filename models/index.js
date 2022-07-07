const dbConfig = require("../config/db.config.js");
const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: {
      require: dbConfig.dialectOptions.ssl.require,
      rejectUnauthorized: dbConfig.dialectOptions.ssl.rejectUnauthorized
    }
},
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

sequelize.authenticate()
  .then(()=> {
    console.log('connected...');
  }).catch(err => {
    console.log('Error ' + err);
  })
  

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./user.module.js")(sequelize, DataTypes);

db.sequelize.sync( { force: false })
  .then( () => {
    console.log('yes re-sync done!');
  })

module.exports = db;