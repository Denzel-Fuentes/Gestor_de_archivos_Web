import express from "express";
import postRoutes from './routes/post.routes.js'

const app = express()
//configuracion de ejs
app.set("view engine","ejs")
//middleware
app.use(express.json());
//usar las rutas que importamos
app.use(postRoutes);

export default app;