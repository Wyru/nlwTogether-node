import express from 'express'
import helmet from 'helmet';
import cors from 'express'
import router from './routes';
import morgan from 'morgan'
import { SERVER_CONFIG } from './config'

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('short'));
app.use('/', router);


app.listen(
  SERVER_CONFIG.PORT,
  () => {
    console.log(`LISTENING ON PORT ${SERVER_CONFIG.PORT}`);
  }
);