const mongoose=require('mongoose');

const mentorSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type:String,required:true},
    age: {type:Number,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    city: {type:String,required:true},
    gender: {type:String,required:true},
    contact: {type:Number,required:true},
    address: {type:String,required:true},
    qualification: {type:String},
    rating:{type:Number,default:0},
    timeSlots:{type:[Date]}
    
});

module.exports=mongoose.model('mentor',mentorSchema);