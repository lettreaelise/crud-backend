const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'O nome é obrigatório'], 
        trim: true, 
        unique: [true, 'Já existe um produto com este nome'] // Validação de unicidade
    },
    description: { type: String, trim: true },
    quantity: { 
        type: Number, 
        required: [true, 'A quantidade é obrigatória'], 
        min: [0, 'A quantidade não pode ser negativa'] 
    },
    photo: { type: String, trim: true }, // URL da imagem (Na Cloudinary)
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
