import app from './config/server';
import util from './extras/utils';
app.listen(3000,()=>
{
    console.log(util.horario() + ' Servidor conectado!');
});