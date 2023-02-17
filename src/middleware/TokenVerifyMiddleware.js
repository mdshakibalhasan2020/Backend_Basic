var jwt = require('jsonwebtoken');
module.exports=(req,res,next)=>{
    let Token = req.headers['token-key']
    jwt.verify(Token,"Secretkey123",function(err,decoded){
        if(err){
            res.status(401).json({status:"Invalid token",data:err})
        }
        else{
            next();
        }
    })
}