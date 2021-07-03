const {Schema, model} = require('mongoose');
const {ObjectId} = Schema;

const couponSchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true,
        required: 'Nombre es requerido',
        minlength: [6, 'Muy Corto'],
        maxlength: [12, 'Muy Largo'],
    },
    expiry: {
        type: Date,
        required: true,
    },
    discount: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = model('Coupon', couponSchema);
