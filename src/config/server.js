import express from 'express';
import bodyParser from 'body-parser';

const app= express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));

export default app;