const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        text: true
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000,
        text: true
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    subs: [{
        type: Schema.Types.ObjectId,
        ref: "Sub"
    }],
    quantity: Number,
    sold: {
        type: Number,
        default: 0
    },
    images: {
        type: Array
    },
    shipping: {
        type: String,
        enum: ['Yes', 'No'],
    },
    color: {
        type: String,
        enum: ['Black', 'Brown', 'Silver', 'White', 'Blue'],
    },
    brand: {
        type: String,
        enum: ['Apple', 'Samsung', 'Microsoft', 'Lenovo', 'ASUS'],
    },
    ratings: [
        {
            star: Number,
            postedBy: {type: Schema.Types.ObjectId, ref: "User"}
        }
    ]
}, { timestamps: true });

module.exports = model('Product', productSchema);
