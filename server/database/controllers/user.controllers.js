//Aqui pondremos el Crud para controlar los usuarios
import mongoose from 'mongoose';
const url = 'mongodb://localhost/NodeFilesGestorDeArchivos';

const mongoose = require('mongoose');

// Definir el schema para la colección "User"
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  image: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

// Definir el modelo para la colección "User"
const User = mongoose.model('User', userSchema);

// CRUD functions para la colección "User"
async function createUser(user) {
  const newUser = new User(user);
  return newUser.save();
}

function findUserById(userId) {
  return User.findById(userId).exec();
}

function updateUser(userId, updatedUser) {
  return User.findByIdAndUpdate(userId, updatedUser, { new: true }).exec();
}

function deleteUser(userId) {
  return User.findByIdAndDelete(userId).exec();
}

module.exports = {
  createUser,
  findUserById,
  updateUser,
  deleteUser
};
