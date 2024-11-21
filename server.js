import express from "express";
import routes from "./src/routes/postsRoutes";

const app = express();

routes(app);

app.listen(3000, () =>{
    console.log("Servidor escutando...");
});