import express = require('express');
import cors = require('cors');
import * as http from 'http';
import 'dotenv/config'
import mongoose from "mongoose";
import authRoutes from './routes/authRoutes';

const port: string | undefined = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRoutes);

const server = http.createServer(app);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(port, () => {
            console.log(`Server is listening on ${port}`);
        })
    }).catch(err => {
    console.log(`Database connection failed.\n${err}`)
});
