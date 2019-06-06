import {autenticaToken} from '../seguranca/autentica';
export default function rotearIncidentesRota(router)
{
    router.get('/incidentes',autenticaToken,(req,res)=>
    {
        res.send('teste');
    });
}