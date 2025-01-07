const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "please enter the product name"]
    },
    quantity: {
        type: Number,
        require: true,
        default: 0
    },
    Price: {
        type: Number,
        require: true,
        default: 0,
    },
    image: {
        type:String,
        require: false,
    },

},
    {
        Timestampa: true
    }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;