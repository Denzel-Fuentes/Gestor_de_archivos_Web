
import { Router } from "express";
import { Google,GoogleAu,RespuestaGoogle ,EnviarDatosUser } from "../controllers/sesionGoogle.js";

const router = Router();

//Iniciar session con google
router.get('/success',EnviarDatosUser);
router.get('/google',Google );
router.get('/google/callback',GoogleAu,RespuestaGoogle);

//Crear Cuenta


export default router;