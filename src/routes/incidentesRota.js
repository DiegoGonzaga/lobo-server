import {checkToken} from '../seguranca/autenticao';
import con from '../data/connection';
export default function rotearIncidentesRota(router)
{
    router.get('/incidentes',checkToken,(req,res)=>
    {
        con.query('select * from incidentes',(err,result)=>
        {
            if(err)
                res.send(err.message);
            res.json(result);

        })
    });
}