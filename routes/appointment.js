const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const appointModel=require('../models/appointmentModel');


router.post('/userId',function(req,res){

    appointModel.find({userId:req.param.userId,status:false})
    .exec()
    .then(appointment=>{
        if(appointment.length>0)
        {
            res.send("Already an appointment is pending").status(403);
        }
        else{
            const newAppointment=new appointModel({
                _id: new mongoose.Types.ObjectId(),
                userId: req.body.userId,
                mentorId:req.body.mentorId,
                timeSlot:req.body.timeSlot,
                status:req.body.status
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

router.put('/appointmentId',function(req,res){
    const appointmentId=req.param.appointmentId;
    const status=true
    appointModel.updateOne({_id:appointmentId},{$set:{status:status}})
    .exec()
    .then(appointment=>{
      res.send(appointment).status(202);  
    })
})


router.get('/mentor/:mentorId',function(req,res){
    appointModel.find({mentorId:req.param.mentorId})
    .exec()
    .then(appointment=>{
        res.json(appointment).status(200)
    })
})

router.get('/user/:userId',function(req,res){
    appointModel.find({userId:req.param.userId})
    .exec()
    .then(appointment=>{
        res.json(appointment).status(200)
    })
})
