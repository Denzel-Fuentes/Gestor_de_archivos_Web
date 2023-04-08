
import { User } from "../models/user.js";

// CRUD functions para la colección "User"
export const createUser=async function (user) {
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

export const findUserById =async function (req,res,next) {
  const query =await User.findOne({password:req.body.password}).exec()
  console.log(query)
  if(query){
    const email = query.email;
    const name =  query.name;
    res.render('index',
    {name:name,
    email:email,
    pic:""   
    });
  }else{
    res.redirect('/login:login#')
  }
}

/* function updateUser(userId, updatedUser) {
  return User.findByIdAndUpdate(userId, updatedUser, { new: true }).exec();
} */

export const deleteUser= async function (userId) {
  return User.findByIdAndDelete(userId).exec();
}

