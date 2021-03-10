const {getSecret} = require('../aws/ssm');

const getKeys = async ()=>{
    try{
        const keys = {
            port: await getSecret('parserPort')
        };
        return keys
    }catch(err){
        console.log(err)
    }
};

module.exports = {getKeys};