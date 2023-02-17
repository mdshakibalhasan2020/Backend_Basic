const StudentModel=require("../models/StudentsModel");

//create
exports.InsertStudent=(req,res)=>{
    let reqBody = req.body;
    StudentModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err});
        }
        else{
            res.status(201).json({status:"successful",data:data});
        }
    })
}
//R= read 
exports.ReadStudent=(req,res)=>{
    let Query={};
    let Projection="Name Roll Class ";
    StudentModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err});
        }
        else{
            res.status(201).json({status:"successful",data:data});
        }
    })
}
//update data 
exports.UpdateStudent=(req,res)=>{
    let id = req.params.id;
    let Query = {_id:id};
    let reqBody = req.body;
    StudentModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err});
        }
        else{
            res.status(201).json({status:"successful",data:data});
        }
    })
}
//delete data 
exports.DeleteStudent=(req,res)=>{
    let id = req.params.id;
    let Query = {_id:id};
    StudentModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err});
        }
        else{
            res.status(201).json({status:"successful",data:data});
        }
    })
}