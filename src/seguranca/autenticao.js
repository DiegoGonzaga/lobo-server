import jwt from 'jsonwebtoken';
import con from '../data/connection'
const secret = 'arrozinho'; //palavra secreta utilizada pelo JWT
export let autenticaToken = (req, res, next) => {

    next();
}

export let assinaToken = (req, res) => {
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    const campos = [usuario, senha];
    let linha;

    con.query('select * from operadores where login=? and senha=?', campos, (err, result) => {
        if (err)
            return res.send(err.message);


        if(result.length>0)
            linha = result[0];
        else
            linha=false;

        if (linha) 
        {
            const token = jwt.sign({ usuario: usuario }, secret, { expiresIn: '24h' });

            res.json({ auth: true, token: token });
        }
        else 
        {
            res.json({ auth: false, token: null, message: "Dados inválidos" });
        }
    });
}

export let checkToken = (req, res, callback) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    
    if (!token) { //Token vazio
        res.json({ auth: false,token: null,message:'Token not supplied' }); 
    }
    else {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
        jwt.verify(token, secret, (err, decoded) => {
            if (err) 
            {
                return res.json({auth:false,message:'Token is not valid'})
            }
            else 
            {
                req.decoded = decoded;
                callback();
            }
        });

    }
}