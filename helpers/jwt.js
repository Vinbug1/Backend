const expressJwt = require('express-jwt');

function authJwt(){    
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressJwt({
        secret: secret,
         algorithms: ['HS256'],
         isRevoked: isRevoked,
    }).unless({
        //to allow user see my products list
        path: [
        {url: /\/public\/uploads(.*)/, methods:['GET','OPTIONS']},
        {url: /\/api\/v1\/products(.*)/, methods:['GET','OPTIONS']},
        {url: /\/api\/v1\/categories(.*)/, methods:['GET','OPTIONS']},
        `${api}/uses/login`,
        `${api}/uses/register`,
    ]
    })
}

async function isRevoked (req,payload,done) {
    if(!payload.isAdmin){
        done(null, true)
    }
    done();
}

module.exports = authJwt;