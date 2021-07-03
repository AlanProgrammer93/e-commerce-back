const {Schema, model} = require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Nombre es requerido",
        minlength: [2, 'Too short'],
        maxlength: [32, 'Too long'],
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
    }
}, { timestamps: true });

module.exports = model('Category', categorySchema);
