const express=require("express");
const app=express();
const morgan= require("morgan");

//configuraciones
app.set("port",8001)
app.set("json spaces",2);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//rutas
app.use("/api/Quejas",require("./rutas/rutas"))

//empezando el servidor
app.listen(app.get("port"));

