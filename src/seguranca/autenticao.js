import jwt from 'jsonwebtoken';
import {Usuario} from '../models/usuario';

const secret = process.env.SECRET; //palavra secreta utilizada pelo JWT


export let autenticaToken = (req, res, next) => {

    next();
}

export let assinaToken = (req, res) => {
    const {usuario,senha} = req.body;

    if(!usuario || !senha){
        let msg = { auth: false, token: null, message: "O(s) seguinte(s) campo(s) está(ão) vazio(s): " }
        let campos = [];
        if(!usuario)
            campos.push('usuario');
        if(!senha)
            campos.push('senha');
        msg.message+= `${campos}`
        return res.status(400).json(msg);
    }
        

    Usuario.findOne({where:{usuario,senha}})
    .then( result =>
        {
            if(!result)
                res.json({ auth: false, token: null, message: "Dados inválidos" });
            else
                res.json(jwt.sign({ usuario: usuario }, secret, { expiresIn: '24h' }));
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