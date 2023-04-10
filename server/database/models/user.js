//Aqui pondremos el Crud para controlar los usuarios
import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs'


// Definir el schema para la colección "User"
const userSchema = new mongoose.Schema({
  name: { type: String, required: false },
  lastname: { type: String, required: false },
  image: { type: String, required: false },
  email: { type: String, required: false },
  password: { type: String, required: false }
});
userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword= function (password) {
  return bcrypt.compareSync(password, this.password);
};
// Definir el modelo para la colección "User"
export const User = mongoose.model('User', userSchema);