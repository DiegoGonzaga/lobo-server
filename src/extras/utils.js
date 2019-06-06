const utilitario = {};

utilitario.isNumber = (n)=>
{
    return !isNaN(parseFloat(n)) && isFinite(n);
}

utilitario.horario = ()=>
{
    const d = new Date();
    const h = "["+d.getHours()+":"+ d.getMinutes() +":"+ d.getSeconds()+"]";
    return h;
}
export default utilitario;