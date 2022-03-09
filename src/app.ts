import express from 'express';
import config from "../config/default";
import connect from './db/connect';

const port = config.port;
const host = config.host;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, host, () => {
    console.log(`Server listing at http://${host}:${port}`);
    connect();
})
