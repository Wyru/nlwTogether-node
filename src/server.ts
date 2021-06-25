import 'express-async-errors';
import 'reflect-metadata';
import express from 'express'
import helmet from 'helmet';
import cors from 'express'
import router from './routes';
import morgan from 'morgan'
import { SERVER_CONFIG } from './config'
import { ErrorMiddleware } from './middlewares/ErrorMiddleware';

import "./database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('short'));

app.use(router);

app.use(ErrorMiddleware.logErrors);
app.use(ErrorMiddleware.handle);


app.listen(
  SERVER_CONFIG.PORT,
  () => {
    console.log(`LISTENING ON PORT ${SERVER_CONFIG.PORT}`);
  }
);