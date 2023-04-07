const express = require('express');
const router = express.Router();
const productControl = require('./controllers/productController');

router.route('/').get((req, res) => {
    res.send('root page');
});

router.route('/product').get(productControl.get);

module.exports = router;
