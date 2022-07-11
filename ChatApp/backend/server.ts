import express = require('express');
import cors = require('cors');
import * as http from 'http';
//import * as Mongoose from "mongoose";
import 'dotenv/config'

const port: string | undefined = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})