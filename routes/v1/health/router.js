'use strict';

const _ = require('lodash');

const router = require('express').Router({mergeParams: true});

router.get('/check', (req, res) => res.send(_.pick(require('../../../package.json'), ['name', 'version'])));

module.exports = router;