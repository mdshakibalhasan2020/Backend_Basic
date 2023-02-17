exports.HelloGet=(req,res)=>{
    res.status(200).json({status:"successful",data:"alhumdulliah this id get"});
}
exports.HelloPost=(req,res)=>{
    res.status(201).json({status:"successful",data:"alhumdulliah this id post"});
}