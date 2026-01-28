const express = require('express');
const tokenController = require('../controllers/tokenController');

const router = new express.Router();

router.get('/list', tokenController.list);
router.post('/add', tokenController.add);
router.post('/del', tokenController.delete);
router.post('/royalty', tokenController.calculateRoyalty);

module.exports = router;
