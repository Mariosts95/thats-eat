const router = require('express').Router();

const StoresAPI = require('./stores');
const HelpersAPI = require('./helpers');

router.use('/', StoresAPI);
router.use('/helpers', HelpersAPI);

module.exports = router;
