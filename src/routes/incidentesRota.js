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

    router.post('/novoIncidente',(req,res)=>
    {
        let tipo = parseInt(req.body.tipo);
        let local = req.body.local;
        let informacaoAdicional = req.body.informacaoAdicional;
        let campos = [local, tipo, informacaoAdicional];
        let sql = "insert into registrosIncidentes(`local`,`TiposIncidente_idTipoIncidente`,`informacaoAdicional`) values (?,?,?)";

        con.query(sql, campos, (err, result, fields) => {
            if (err)
                res.send(err)
            res.json({sucess:true});

        });
    });

    router.get('/naoValidados',checkToken,(req,res)=>
    {
        let sql = "select * from registrosIncidentes where analisado=0";
        con.query(sql, (err, result) => {
            if (err)
                res.send(err);
            res.send(result);
        });
    })

    router.put('/validaIncidente',checkToken,(req,res)=>
    {
        let indices = req.body.indicesReportes;
                let sql = "update registrosIncidentes set analisado=1 where idRegistrosIncidentes=?";
                con.query(sql, [indices], (err, result) => {
                    if (err)
                        return res.send(err);
                    res.send(result);
                })
    });
}
