const {Schema, model} = require('mongoose');
const {ObjectId} = Schema;

const cartSchema = new Schema({
    products: [
        {
            product: {
                type: ObjectId,
                ref: "Product"
            },
            count: Number,
            color: String,
            price:Number,
        },
    ],
    cartTotal: Number,
    totalAfterDiscount: Number,
    orderedBy: { type: ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = model('Cart', cartSchema);
