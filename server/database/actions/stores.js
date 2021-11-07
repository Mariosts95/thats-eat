const Store = require('../models/stores');

const addStore = async (store) => {
  const newStore = await new Store(store);
  // save the term to database
  await newStore.save();
  return newStore;
};

module.exports = { addStore };
