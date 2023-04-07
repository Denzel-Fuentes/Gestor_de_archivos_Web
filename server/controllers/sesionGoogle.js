import passport from "passport";
import { createUser } from "../database/controllers/user.controllers.js";
export const EnviarDatosUser = async(req,res)=>{
    //console.log(req.session.passport.user.picture)
    const email = req.session.passport.user.email
    const name = req.session.passport.user.displayName
    const pic = req.session.passport.user.picture
    createUser(req.session.passport.user);
    res.render('index',
    {name:name,
    email:email,   
    pic:pic});
}
export const Google = passport.authenticate('google', { scope:[ 'profile','email']})


export const GoogleAu =passport.authenticate('google',{failureRedirect:'/failed'})

export const RespuestaGoogle =async(req,res)=>{
    res.redirect('/success')
  //Successful authentication , redirect home
}