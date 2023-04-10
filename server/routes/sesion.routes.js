import passport from "passport";
import { Router } from "express";
import { Google,GoogleAu,RespuestaGoogle} from "../controllers/sesionGoogle.js";
const router = Router();
import { findbyemail } from "../database/controllers/user.controllers.js";
import { findFilesById ,findFileType } from "../database/controllers/files.controllers.js";
import { User} from "../database/models/user.js";
import { File } from "../database/models/files.js";
//Iniciar session con google o crear cuenta
router.get('/success',async (req,res)=>{
  await findbyemail(req.session.passport.user)
  res.redirect('profile')
});

router.get('/google',Google );
router.get('/google/callback',GoogleAu,RespuestaGoogle);

//Crear Cuenta
//router.post('/createUser',(req,res)=>{createUser(req.body); res.sendStatus(200)});
//Iniciar Sesion
router.get('/signup', (req, res, next) => {
    res.render('login',{login:'register',register:'login'});
});
  
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
})); 
  
  router.get('/signin', (req, res, next) => {
    res.render('login',{login:'login',register:'register'});
});
  
  
  router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
}));


router.get('/profile',isAuthenticated, async (req, res, next) => {
    //console.log(req.session.passport.user.picture)
    const email = req.session.passport.user.email
    const name = req.session.passport.user.displayName
    const pic = req.session.passport.user.picture
    const id = await User.find({email:req.session.passport.user.email},{_id:1})
    const files = await findFilesById(id);
    console.log("------------------------")
    console.log(files);
    res.render('profile',
    {user:{name:name,email:email,pic:pic},files:files});
});

  
  router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});
  
router.get('/filtrar',async(req,res)=>{
  const filtro = req.query.filtro;
  console.log(req.query)
  const id = await User.find({email:req.session.passport.user.email},{_id:1})
  const datosfiltrados = await File.find({id_user:id,filetype:filtro},{_id:1,filename:1,filetype:1,date:1})
  console.log("----------------------------------------")

  console.log(datosfiltrados);
  res.json(datosfiltrados);
})

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
  
    res.redirect('/')
}
  //Cerrar sesion
  router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
  });

export default router;