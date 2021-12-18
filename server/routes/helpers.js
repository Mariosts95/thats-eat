const router = require('express').Router();

const { addStore } = require('../database/actions/stores');
const { addCuisine } = require('../database/actions/cuisines');
const { addCategory } = require('../database/actions/categories');

// add new store
router.post('/addStore', (req, res, next) => {
  const stores = req.body;
  stores.forEach((store) => {
    addStore(store)
      .then((newStore) => res.status(200).send(newStore))
      .catch((error) => {
        next(error);
      });
  });
});

// add cuisines
router.post('/addCuisines', (req, res, next) => {
  const cuisines = req.body;
  cuisines.forEach((cuisine) => {
    addCuisine(cuisine)
      .then((newCuisine) => res.status(200).send(newCuisine))
      .catch((error) => {
        next(error);
      });
  });
});

// add categories
router.post('/addCategories', (req, res, next) => {
  const categories = req.body;
  categories.forEach((category) => {
    addCategory(category)
      .then((newCuisine) => res.status(200).send(newCuisine))
      .catch((error) => {
        next(error);
      });
  });
});

module.exports = router;
