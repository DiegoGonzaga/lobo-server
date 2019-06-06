import express from 'express';
import bodyParser from 'body-parser';
import rotearIncidentes from '../routes/incidentesRota';
import rotearOperadoresRota from '../routes/operadoresRota';
import rotearAutenticacaoRota from '../routes/autenticacaoRota';

const app= express();
const router = express.Router();

rotearIncidentes(router);
rotearOperadoresRota(router);
rotearAutenticacaoRota(router);

app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',router);
export default app;