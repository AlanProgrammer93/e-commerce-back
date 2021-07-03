const {Schema, model} = require('mongoose');

const subSchema = new Schema({
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
    },
    parent: {
        type: Schema.Types.ObjectId, ref: "Category",
        required: true
    }
}, { timestamps: true });

module.exports = model('Sub', subSchema);
