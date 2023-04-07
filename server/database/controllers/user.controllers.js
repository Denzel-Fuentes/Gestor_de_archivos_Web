//Aqui pondremos el Crud para controlar los usuarios
import mongoose from 'mongoose';
const url = 'mongodb://localhost/NodeFilesGestorDeArchivos';



// Definir el schema para la colección "User"
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  image: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: false }
});

// Definir el modelo para la colección "User"
const User = mongoose.model('User', userSchema);

// CRUD functions para la colección "User"
export const createUser=async function (user) {
  console.log(user)
  const email =await User.findOne({email:user.email})
  if(email){
    console.log("El correo ya esta registrado")
  }else{
    const newUser = new User(
      {name:user.given_name,
       lastname:user.family_name,
       image:user.picture,
       email:user.email,
       password:user.password,
      });
    await newUser.save();
    console.log('Usuario Creado')
    //console.log(newUser)
  }
}

export const findUserById =async function (req,res) {
  const password =await User.findOne({password:req.body.password}).exec()
  if(password){
    const email = req.body.email
    const name =  req.body.given_name
    res.render('index',
    {name:name,
    email:email,   
    });
  }else{
    res.json({msg:"El usuario no esta creado"});
  }
}

/* function updateUser(userId, updatedUser) {
  return User.findByIdAndUpdate(userId, updatedUser, { new: true }).exec();
} */

export const deleteUser= async function (userId) {
  return User.findByIdAndDelete(userId).exec();
}

