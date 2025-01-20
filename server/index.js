import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

const port = process.env.PORT || 8000;

const app = express();

import connectDB from './config/db.js';
import imageKitRouter from './routes/imageKitAuth.js';

app.use(cors());
app.use(morgan('common'));

app.use('/imagekit', imageKitRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});