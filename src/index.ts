import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

import path from 'node:path';
import { cors } from './app/middlewares/cors';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3001;

    app.use(cors);
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => { console.log('error to connect mongodb'); });


