const express = require('express');
const parseURL = require('../utils/parse');
const router = new express.Router();

router.post('/', async (req, res) => {
    try {
        const url = req.body.url;
        const result = await parseURL(url);
        res.send(result);
    } catch (err) {
        res.status(404).send(err.message);
    }
});

router.get('/', async (req, res) => {
    try {
        res.status(404).send('Page not found');
    } catch (err) {
        res.status(400).send(err.message);
    }
});


module.exports = router;