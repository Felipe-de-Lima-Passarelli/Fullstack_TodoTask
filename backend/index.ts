import express from "express";
import { connection } from "./src/db.js";
import cors from "cors";
import { router } from "./src/routes.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3001", "VERCEL URL"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(router);

connection();

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
