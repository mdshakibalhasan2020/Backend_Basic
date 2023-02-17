const mongoose = require('mongoose');
const DataModel = mongoose.Schema({
    Name: {type:String},
    Roll: {type:Number}, 
    // Mobile:{
    //     type:String,
    //     validate:{
    //         validator:function(value){
    //             return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
    //         }
    //     },
    //     message:"invalid bangladeshi mobile number"
    // },
    // Mobile:{
    //     type:String,
    //     validate:{
    //         validator:function(value){
    //             if(value.length===11){
    //                 return true;
    //             }
    //             else{
    //                 return false;
    //             }
    //         }
    //     },
    //     message:"11 digit is not required"
    // },
    Class: {type:String}
    //Remarks: {type:String,default:"No Remarks"}
},{versionKey:false})
const StudentsModel=mongoose.model("student",DataModel);
module.exports=StudentsModel;
//unique validation {type:string what ever ja hy hok,unique:true}
//max min validation {type:ja lagbe tai,max:jekono number,min:je kono number}