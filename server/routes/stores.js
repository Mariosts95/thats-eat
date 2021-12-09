const router = require('express').Router();

const { getStores } = require('../database/actions/stores');
const { getCuisines } = require('../database/actions/cuisines');
const { getCategories } = require('../database/actions/categories');

router.get('/stores', (req, res, next) => {
  // get the parameters from query
  // const { from, size } = req.query;
  getStores()
    .then((data) => res.status(200).send(data))
    .catch((error) => {
      next(error);
    });
});
router.get('/cuisines', (req, res, next) => {
  getCuisines()
    .then((data) => res.status(200).send(data))
    .catch((error) => {
      next(error);
    });
});
router.get('/categories', (req, res, next) => {
  getCategories()
    .then((data) => res.status(200).send(data))
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
