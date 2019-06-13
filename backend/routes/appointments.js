const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const appointmentModel=require('../models/appointmentModel');


router.post('/',function(req,res){
    const userId=req.body.userId
    appointmentModel.find({userId:userId,status:false})
    .exec()
    .then(appointment=>{
        if(appointment.length>0)
        {
            res.send("Already an appointment is pending").status(403);
        }
        else{
            const newAppointment=new appointmentModel({
                _id: new mongoose.Types.ObjectId(),
                userId: req.body.userId,
                mentorId:req.body.mentorId,
                timeSlot:req.body.timeSlot,
            })
            newAppointment.save(function(err){
                if(err)
                {
                    res.send(err).status(400)
                }
                else{
                    res.send("Success").status(201)
                }
            })
        }
        
    })
})

router.put('/changeStatus',function(req,res){
    const appointmentId=req.body.appointmentId;
    const status=true
    appointmentModel.updateOne({_id:appointmentId},{$set:{status:status}})
    .exec()
    .then(appointment=>{
      res.send(appointment).status(202);  
    })
})


router.get('/mentorsRequestList',function(req,res){
    const mentorId=req.body.mentorId
    appointmentModel.find({mentorId:mentorId,status:false})
    .exec()
    .then(appointment=>{
        res.json(appointment).status(200)
    })
})

router.get('/mentorList',function(req,res){
    const mentorId=req.body.mentorId
    appointmentModel.find({mentorId:mentorId})
    .exec()
    .then(appointment=>{
        res.json(appointment).status(200)
    })
})



router.get('/user',function(req,res){
    const userId=req.body.userId
    appointmentModel.find({userId:userId})
    .exec()
    .then(appointment=>{
        res.json(appointment).status(200)
    })
})
module.exports=router