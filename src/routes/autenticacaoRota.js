import con from '../data/connection';
import {assinaToken} from '../seguranca/autenticao';
export default function rotearAutenticacaoRota(router)
{
    router.get('/gerarToken',assinaToken);
}