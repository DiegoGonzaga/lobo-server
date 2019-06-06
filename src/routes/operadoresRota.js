import {checkToken} from '../seguranca/autenticao';
import con from '../data/connection';
export default function rotearOperadoresRota(router)
{
    router.get('/operadores',checkToken,(req,res)=>
    {
        con.query('select idOperador,nome,sobrenome,registro,data_nasc,naturalidade,login from operadores',(err,result)=>
        {
            if(err)
                res.send(err.message);
            res.json(result);

        })
    });
}