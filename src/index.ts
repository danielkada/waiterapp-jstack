import express from 'express';
import mongoose from 'mongoose';

import { Server } from 'socket.io';

import http from 'node:http';
import path from 'node:path';

import { router } from './router';

import { cors } from './app/middlewares/cors';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const port = 3001;

    app.use(cors);
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
    app.use(express.json());
    app.use(router);

    server.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => { console.log('error to connect mongodb'); });


