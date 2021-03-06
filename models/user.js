const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        index: true,
    },
    role: {
        type: String,
        default: "subscriber",
    },
    cart: {
        type: Array,
        default: [],
    },
    address: String,
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Product" }],

}, { timestamps: true });

module.exports = model('User', userSchema);
