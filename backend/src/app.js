const express = require("express");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/produtos", produtoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor executando em http://localhost:${PORT}`);
});