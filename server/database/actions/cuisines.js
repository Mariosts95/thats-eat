const Cuisine = require('../models/cuisines');

const addCuisine = async (category) => {
  const newCuisine = await new Cuisine(category);
  // save the cuisine to database
  await newCuisine.save();
  return newCuisine;
};

// get cuisines list
const getCuisines = async () => {
  const cuisines = await Cuisine.find().exec();
  return cuisines;
};

module.exports = { addCuisine, getCuisines };
