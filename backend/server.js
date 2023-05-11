import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { mongoConnector } from './db/mongoConnector.js';
import router from './router/index.js';

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

mongoConnector();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`App running at ${PORT}`);
});
