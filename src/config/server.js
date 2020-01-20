import express from 'express';
import bodyParser from 'body-parser';
import jwt from "express-jwt";
import rotearIncidentes from '../routes/incidentesRota';
import rotearOperadoresRota from '../routes/operadoresRota';
import rotearAutenticacaoRota from '../routes/autenticacaoRota';

const app = express();
const router = express.Router();

rotearIncidentes(router);
rotearOperadoresRota(router);
rotearAutenticacaoRota(router);

app.use('/', jwt({ secret: process.env.SECRET }).unless({ path: ['/gerarToken'] }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

export default app;