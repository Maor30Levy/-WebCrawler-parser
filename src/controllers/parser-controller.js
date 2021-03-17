const parseURL = require('../utils/parse');

const parser = async (req, res) => {
    try {
        const result = await parseURL(req.body.url);
        res.send(result);
    } catch (err) {
        res.status(404).send(err.message);
    }
};

module.exports = { parser };