import passport from "passport";
import { Router } from "express";
import { Google,GoogleAu,RespuestaGoogle ,EnviarDatosUser } from "../controllers/sesionGoogle.js";
import { createUser,findUserById } from "../database/controllers/user.controllers.js";
const router = Router();

//Iniciar session con google
router.get('/success',EnviarDatosUser);
router.get('/google',Google );
router.get('/google/callback',GoogleAu,RespuestaGoogle);

//Crear Cuenta
router.post('/createUser',(req,res)=>{createUser(req.body); res.sendStatus(200)});
//Iniciar Sesion
router.get('/signup', (req, res, next) => {
    res.render('login');
});
  
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
})); 
  
  router.get('/signin', (req, res, next) => {
    res.render('login');
});
  
  
  router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
}));
  
  router.get('/profile',isAuthenticated, (req, res, next) => {
    res.render('profile');
});
  
  router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});
  
  
function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
  
    res.redirect('/')
}
  

export default router;