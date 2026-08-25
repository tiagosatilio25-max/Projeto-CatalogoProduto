const express = require("express");

const{
    listarProdutos,
    cadastrarProduto,
    alterarProduto,
    excluirProduto

} = require("../controllers/produtoController");

const router = express = express.router();

router.get("/", listarProdutos);

router.post("/", listarProdutos);

router.put("/:id", alterarProduto);

router.delete("/:id", excluirProduto);

module.exports = router;