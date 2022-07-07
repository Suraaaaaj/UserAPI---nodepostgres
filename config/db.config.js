module.exports = {
    HOST: "ec2-44-206-11-200.compute-1.amazonaws.com",
    USER: "abwgbstqddtuyc",
    PASSWORD: "1f832277bf72e8dd0053fd414df12d5deb7f6d62d8a483647342836ee8fce936",
    DB: "dfrqqfh3422vsp",
    dialect: "postgres",
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  };