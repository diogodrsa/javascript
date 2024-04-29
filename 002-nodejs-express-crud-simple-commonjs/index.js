const express = require("express");
const app = express();
const cadastro = require("./controller/cadastro.js");

const PORT = 3000;

app.use("/cadastro", cadastro);

app.get("/", (req, res) => {
  res.send("Lista de Cadastro");
});

app.listen(PORT, () => console.log(`Server started on port:` + PORT));
