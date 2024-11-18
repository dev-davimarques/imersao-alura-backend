// Importando de dentro do módulo express na pasta node_modules
import express from "express";

// Atribuir uma função chamada express() a constante app
const app = express();
app.listen(3000,() =>{
    console.log("Servidor escutando...");
});

// Criar um rota e definir a resposta
app.get("/api", (req, res) =>{
    res.status(200).send("Boas vindas à imersão!");
});