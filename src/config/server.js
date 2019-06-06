import express from 'express';
import bodyParser from 'body-parser';
import rotearIncidentes from '../routes/incidentesRota';

const app= express();
const router = express.Router();

rotearIncidentes(router);

app.use(bodyParser.urlencoded({extended:true}));
app.use(router);
export default app;