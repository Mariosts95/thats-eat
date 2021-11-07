const router = require('express').Router();
const { addStore } = require('../database/actions/stores');
// add new store
router.post('/createStore', (req, res, next) => {
  const store1 = req.body;
  addStore(store1)
    .then((newStore) => {
      return res.status(200).send(newStore);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
