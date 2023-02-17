const app = require("./app");
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
app.listen(process.env.RUNNING_PORT , function(){
    console.log("THIS IS FROM ENV"+ process.env.RUNNING_PORT); 
});

//how to explain dfs code using c++?
//How to solve Authentication error problem in mongodb connection Using Node.js?