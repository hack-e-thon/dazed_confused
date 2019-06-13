const mongoose=require('mongoose');

const userSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type:String,required:true},
    age: {type:Number,required:true},
    email: {type:String,required:true,unique:true},
    password: {type:String,required:true},
    city: {type:String,required:true},
    gender: {type:String,required:true},
    contact: {type:Number,required:true},
    address: {type:String,required:true},
    stage: {type:String,default:'stage0'},

});

module.exports=mongoose.model('user',userSchema);