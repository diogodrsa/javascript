import express from "express";
import bodyParser from "body-parser";
const app = express();
import cadastro from "./controller/cadastro.js";

const PORT = 3000;

app.use(bodyParser.json());

app.use("/cadastro", cadastro);

app.get("/", (req, res) => {
  res.send("Lista de Cadastro");
});

app.listen(PORT, () => console.log(`Server started on port:` + PORT));
