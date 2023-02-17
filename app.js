const express = require('express');
const router = require('./src/routes/api');
const app = new express();
//import security middleware
const bodyPerser=require('body-parser');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const  mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const helmet = require('helmet');
const mongoose = require('mongoose');


//use security middleware
//app.use(rateLimit());
app.use(cors());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(helmet());
app.use(bodyPerser.json());

//req rate limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	max: 100, 
});
app.use(limiter)
//conncet with mongodb
let URI = "mongodb://127.0.0.1:27017/Schools";
let option = {user: '',pass:''};
mongoose
	.set('strictQuery',false)
	.connect(URI,option,(error)=>{
		console.log("success");
		console.log(error);
	});


app.use("/api/v1",router);
//undefine route 
app.use('*',(req,res)=>{
    res.status(404).json({ status:"fail",data:"not found"});
})
module.exports=app;