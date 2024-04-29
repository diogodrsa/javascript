import express from "express";
const router = express.Router();

const usuarios = [
  {
    first_name: "Paulo",
    last_name: "Tarso",
  },
  {
    first_name: "João",
    last_name: "José",
  },
];

router.get("/", (req, res) => {
  res.send(usuarios);
});

export default router;
