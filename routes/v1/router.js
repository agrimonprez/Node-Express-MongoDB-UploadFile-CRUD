'use script';

const v1 = require('express').Router({ mergeParams: true });
v1.use('/health', require('./health/router'));
v1.use('/stuff', require('./stuff/router'));
v1.use('/product', require('./product/router'));
v1.use('/auth', require('./user/router'));

module.exports = v1;