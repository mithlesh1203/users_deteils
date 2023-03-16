const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  countryName: {
    type: String,
    require: true,
  },
  exchangeRate: {
    type: Number,
    require: true,
  },
  countryCode: {
    type: String,
    require: true,
  },

},{
    collection: 'products'
  })


const Products = mongoose.model('products', ProductSchema);

module.exports = Products;