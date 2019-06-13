const express=require('express');
const morgan = require('morgan');
const port=3000;
const app=express();
const parser=require('body-parser');
const mongoose=require('mongoose');
const users=require('./routes/users'); // userRoute path
const mentors=require('./routes/mentors'); //Mentors path
const appointments=require('./routes/appointments'); //Mentors path

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://Shivam:9691@cluster0-ezk1q.mongodb.net/test?retryWrites=true",function(err){
    if(err)
    {
        console.log(err);
    }
    else{   
        console.log("Atlas Connected");
    }
});

app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    next();
});

// //List all the routes here
app.use('/users',users);
app.use('/mentors',mentors);
app.use('/appointments',appointments);

// app.get('/',function(req,res){
//     res.send("connection working").status(200)
// })

app.listen(port,function(){
    
    console.log(`Server Listining on ${port}`);
});