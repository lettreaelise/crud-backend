const Product = require('../models/Product');

// Obter todos os produtos
const getAllProducts = async () => {
    return await Product.find();
};

// Obter um produto por ID
const getProductById = async (id) => {
    return await Product.findById(id);
};

// Criar um novo produto
const createProduct = async (data) => {
    try {
        const { name, description, quantity, photo } = data;
        const product = new Product({ name, description, quantity, photo });
        return await product.save();
    } catch (error) {
        if (error.code === 11000) {
            throw new Error('Já existe um produto com este nome.');
        }
        throw error;
    }
};

// Atualizar um produto por ID
const updateProduct = async (id, data) => {
    try {
        return await Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    } catch (error) {
        if (error.code === 11000) {
            throw new Error('Já existe um produto com este nome.');
        }
        throw error;
    }
};

// Excluir um produto por ID
const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
