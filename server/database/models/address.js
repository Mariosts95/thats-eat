const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
  street: { type: String, required: true },
  number: { type: Number, required: true },
  township: { type: String, required: true },
  postalCode: { type: Number, required: true },
  city: { type: String, required: true },
});

module.exports = { addressSchema };
