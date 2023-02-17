var jwt = require('jsonwebtoken');
exports.TokenIssue=(req,res)=>{
    let PayLoad={
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data:{Name:"shakib",City:"Dhaka",admin:true}
    }
    let Token = jwt.sign(PayLoad,"Secretkey123");
    res.send(Token);
}