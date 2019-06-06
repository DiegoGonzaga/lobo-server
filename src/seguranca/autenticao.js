import jwt from 'jsonwebtoken';
const secret = 'arrozinho'; //palavra secreta utilizada pelo JWT
export let autenticaToken = (req, res, next) => {

    next();
}

export let assinaToken = (req, res, callback) => {
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    const user = '70';
    const pass = '1234';
    if (usuario && senha)
        if (usuario == user && senha == pass) {
            const token = jwt.assign({ usuario: usuario }, secret, { expiresIn: '24h' });

            res.json({ token: token, auth: true });
        }
        else {
            res.json({ auth: null, token: null });
        }
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