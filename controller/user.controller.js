const db = require("../models");
const User = db.users;

// To add new user
const addUser = async (req,res) => {
    console.log(req.body);
    let info = {
      id: req.body.id,
      login: req.body.login,
      password: req.body.password,
      age: req.body.age,
      isdeleted: req.body.isdeleted,
      firstname: req.body.firstname,
      lastname: req.body.lastname
    }

    const user = await User.create(info);
    res.status(200).send(user);
    console.log(user);
}

// To get all users
const getAllUsers = async (req,res) => {
  let users = await User.findAll({});
  res.status(200).send(users);
}

const getOne = async (req,res) => {
  let user = await User.findOne({where: {id: req.params.id}});
  res.status(200).send(user);
}




// Update user
const updateUser = async (req,res) => {
  let id = req.params.id;
  const user = await User.update(req.body, {where: {id : id}})
  res.status(200).send(user);
}

// delete user (Soft delete)

const deativateUser = async ( req,res) => {
  let id = req.params.id;
  let info = {
    isdeleted : true
  }
  const user = await User.update(info, {where: {id:id}});
  res.status(200).send(user);
}

const ativateUser = async ( req,res) => {
  let id = req.params.id;
  let info = {
    isdeleted : false
  }
  const user = await User.update(info, {where: {id:id}});
  res.status(200).send(user);
}

module.exports = {
  addUser,
  getAllUsers,
  updateUser,
  deativateUser,
  ativateUser,
  getOne
}