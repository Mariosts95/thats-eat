const mongoose = require('mongoose');

const CategoriesSchema = mongoose.Schema({
  name: { type: String, required: true },
});

CategoriesSchema.index({ key: 1 });

// assign the document in the 'categories' collection in db
const Category = mongoose.model('categories', CategoriesSchema);

module.exports = Category;
