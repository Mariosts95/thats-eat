const Store = require('../models/stores');

const addStore = async (store) => {
  const newStore = await new Store(store);
  // save the store to database
  await newStore.save();
  return newStore;
};

// get stores with pagination
const getStores = async (page, size) => {
  // convert the params from string to number
  // page = parseInt(page);
  // size = parseInt(size);
  const stores = await Store.find().exec();
  // const stores = await Store.find()
  //   .skip((page - 1) * size)
  //   .limit(size)
  //   .exec();

  // get the exact count
  const count = await Store.countDocuments();
  return { stores, count };
};

module.exports = { addStore, getStores };
