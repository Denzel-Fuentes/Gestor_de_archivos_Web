// Aqui declararemos las rutas  y los metodos GET POS PUT ....
import { Router } from "express";
import { createFile,fileDowload,fileDelete } from "../database/controllers/files.controllers.js";
import { File } from "../database/models/files.js";
import { User } from "../database/models/user.js";
const router = Router();
import passport from "passport";
router.get('/login:type',(req,res)=>{
    const {type} = req.params;
    console.log(type)
    if (type === ":createUser") {
        res.render('login',{login:'register',register:'login'});
    }else{res.render('login',{login:'login',register:'register'});}
    
});

router.post('/Archivo',createFile);
router.get('/descargar/:id', fileDowload);
router.get('/deleteFile/:id',fileDelete);


export default router;