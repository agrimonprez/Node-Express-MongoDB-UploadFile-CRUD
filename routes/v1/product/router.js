'use strict';

const _ = require('lodash');
const productCtrl = require('../../../controllers/product');

const router = require('express').Router({ mergeParams: true });

router.post('/', productCtrl.createProduct);
router.get('/:id', productCtrl.getOneProduct);
router.get('/', productCtrl.getAllProducts);
router.put('/:id', productCtrl.editOneProduct);
router.delete('/:id', productCtrl.deleteOneProduct);


module.exports = router;