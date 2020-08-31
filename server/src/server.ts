import express, { json } from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());// permitindo que qualquer aplicaçaõ utilize minha api

app.use(routes);

app.listen(3333);