const { Router } =  require('express');
const ProdutosController = require('../controllers/ProdutosController.js');

const router = Router();

router.get('/produtos', ProdutosController.listaTodosOsProdutos);
router.get('/produtos/:id', ProdutosController.listaUmProduto);

router.post('/produtos', ProdutosController.criaProduto);

router.put('/produtos/:id', ProdutosController.atualizaProduto);

router.delete('/produtos/:id', ProdutosController.deletaProduto);

module.exports = router;