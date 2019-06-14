const mongoose=require('mongoose');

const userSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type:String,required:true},
    age: {type:Number},
    email: {type:String,required:true,unique:true},
    password: {type:String,required:true},
    city: {type:String},
    gender: {type:String},
    contact: {type:Number,required:true},
    address: {type:String,required:true},
    stage: {type:Number,default:0},

});

module.exports=mongoose.model('user',userSchema);