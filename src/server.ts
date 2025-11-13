import express from "express";
import { handler } from "./handler";

const app = express();
app.use(express.json());

app.get("/todos", async (req, res) => {
  const result = await handler({ httpMethod: "GET" } as any);
  res.status(result.statusCode).json(JSON.parse(result.body));
});

app.post("/todos", async (req, res) => {
  const result = await handler({
    httpMethod: "POST",
    body: JSON.stringify(req.body),
  } as any);
  res.status(result.statusCode).json(JSON.parse(result.body));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
