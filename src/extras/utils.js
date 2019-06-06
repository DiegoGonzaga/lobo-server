const utilitario = {};
const SIDE=
{
    LEFT:1, RIGHT:2
}

utilitario.isNumber = (n)=>
{
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/*
 * Mostra o horário atual entre colchetes
 */
utilitario.horario = ()=>
{
    const d = new Date();
    const hora=preecheString(d.getHours(),'0',SIDE.LEFT,2);
    const minuto=preecheString(d.getMinutes(),'0',SIDE.LEFT,2);
    const segundo=preecheString(d.getSeconds(),'0',SIDE.LEFT,2);
    const h = "["+hora+":"+ minuto +":"+ segundo+"]";
    return h;
}

/*
 * @param word - palavra a ser preenchida 
 * @param character - caracter que será incluído
 * @param side - qual será o lado que o caracter será incluído
 * @param size - tamanho final da String final
 * @return String - retorna uma String com o tamanho definido de 'size'
 */
const preecheString =(word,character,side,size)=>
{
    let nova=word+'';
    if (side == SIDE.LEFT) 
    {
        while (nova.length < size)
            nova = character + nova;
    }
    else if (side == SIDE.RIGHT) 
    {
        while (nova.length < size)
            nova = nova + character;
    }
    else
    {
        nova='';
    }
        
    return nova;
}
export default utilitario;