import con from '../data/connection';
import {assinaToken,checkToken} from '../seguranca/autenticao';
export default function rotearAutenticacaoRota(router)
{
    router.get('/gerarToken',assinaToken);
    router.get('/verificarToken',checkToken,(req,res)=>{res.send({auth:true,message:"Token is valid."})});
    router.get('/decodificarToken',checkToken,(req,res)=>res.send(req.decoded));
}