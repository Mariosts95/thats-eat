const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  price: { type: Number },
});

module.exports = { ProductSchema };
