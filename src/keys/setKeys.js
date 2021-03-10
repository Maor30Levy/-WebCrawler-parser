const {saveSecret} = require('../aws/ssm');
const keys = require('./keys');

const setKeys = async ()=>{
    try{
        const devPort = process.env.PORT;
        await saveSecret('parserPort',devPort);
    }catch(err){
        console.log(err);
    }
};

module.exports = {setKeys};