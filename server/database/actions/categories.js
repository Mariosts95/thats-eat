const Category = require('../models/categories');

const addCategory = async (category) => {
  const newCategory = await new Category(category);
  // save the category to database
  await newCategory.save();
  return newCategory;
};

// get categories list
const getCategories = async () => {
  const categories = await Category.find().exec();
  return categories;
};

module.exports = { addCategory, getCategories };
