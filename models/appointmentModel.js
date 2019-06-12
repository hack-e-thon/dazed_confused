const mongoose =require('mongoose')

const appoinmentSchema=mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:true
        },
        mentorId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'mentor',
            required:true
        },
        timeSlot:{
            type:String,
            required:true
        },
        status:{
            type:Boolean,
            default:false,
            required:true
        }
    },


)