
module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
      id: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      login: {
        type: DataTypes.STRING
      },
      password : {
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.INTEGER
      },
      isdeleted: {
        type: DataTypes.BOOLEAN
      },
    },{
        timestamps: false
    });
    return User;
  };