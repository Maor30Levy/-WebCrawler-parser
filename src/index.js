const express = require('express');
const cors = require('cors');
const { getKeys } = require('./keys/keys');
let keys;
const initServer = async () => {
    try {
        if (process.env.PORT) {
            await require('./keys/setKeys').setKeys();
        }
        keys = await getKeys();
        const app = express();
        const messageRouter = require('./routers/messageRouter');
        const port = process.env.PORT;
        app.use(express.json());
        app.use(cors());
        app.use(messageRouter);

        app.listen(port, () => {
            console.log(`Server is up on port ${port}!`)
        });
    } catch (err) {
        console.log(err);
    }

};

initServer();



