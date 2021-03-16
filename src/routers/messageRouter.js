const express = require('express');
const parseURL = require('../utils/parse');
const router = new express.Router();

router.post('/', async (req, res) => {
    try {
        const result = await parseURL(req.body.url);
        res.send(result);
    } catch (err) {
        res.status(404).send(err.message);
    }
});

module.exports = router;