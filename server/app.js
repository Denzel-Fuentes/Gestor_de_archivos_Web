import express from "express";
import postRoutes from './routes/post.routes.js'
import sesionRoutes from './routes/sesion.routes.js'
import { GOOGLE_CLIENT_SECRET } from "./config.js";
import cookieSession  from 'cookie-session';
import passport from "passport";
import  session from 'express-session' ;

const app = express()
//configuracion de ejs
app.set("view engine","ejs")

//middleware
app.use(express.json());
import  './passport-setup.js';

//Configuracion para  el inicio de sesion
app.use(passport.initialize())

app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
    }));

app.use(session({
    secret:GOOGLE_CLIENT_SECRET,
}))

//Servir el archivo principal
app.use('/',express.static('./public'))

//usar las rutas que importamos
app.use(postRoutes);
app.use(sesionRoutes)


export default app;