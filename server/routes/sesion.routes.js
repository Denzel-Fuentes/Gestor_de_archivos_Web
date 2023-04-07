
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
router.post('/login:login',findUserById);

export default router;