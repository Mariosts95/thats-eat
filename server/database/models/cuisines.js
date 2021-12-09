const mongoose = require('mongoose');

const CuisineSchema = mongoose.Schema({
  name: { type: String, required: true },
});

CuisineSchema.index({ key: 1 });

// assign the document in the 'cuisines' collection in db
const Cuisine = mongoose.model('cuisines', CuisineSchema);

module.exports = Cuisine;
