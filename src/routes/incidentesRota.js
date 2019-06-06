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

    router.get('/incidenteById',checkToken,(req,res)=>
    {
        con.query('select * from incidentes where idIncidente=?',req,body.id,(err,result)=>
        {
            if(err)
                res.send(err.message);
            res.json(result);

        })
    });
}