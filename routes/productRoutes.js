const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');

// Rota para obter todos os produtos
router.get('/', async (req, res, next) => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
});

// Rota para obter um produto por ID
router.get('/:id', async (req, res, next) => {
    try {
        const product = await getProductById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
});

// Rota para criar um novo produto
router.post('/', async (req, res, next) => {
    try {
        const newProduct = await createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para atualizar um produto por ID
router.put('/:id', async (req, res, next) => {
    try {
        const updatedProduct = await updateProduct(req.params.id, req.body);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para excluir um produto por ID
router.delete('/:id', async (req, res, next) => {
    try {
        await deleteProduct(req.params.id);
        res.status(200).json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
