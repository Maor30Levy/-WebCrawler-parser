const { saveSecret } = require('../aws/ssm');
const keys = require('./keys');

const setKeys = async () => {
    try {
        const devPort = process.env.PORT;
        const parserHost = process.env.PARSER_HOST
        await saveSecret('parserPort', devPort);
        await saveSecret('parserHost', parserHost);
    } catch (err) {
        console.log(err);
    }
};

module.exports = { setKeys };