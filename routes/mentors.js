const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const mentorModel=require('../models/mentorModel');
//const bcryptjs = require('bcryptjs'); // Encryption

router.get('/',function(req,res){
    // res.send("mentor's Home").status(200);
    mentorModel.find()
    .exec()
    .then(mentorData=>{
    
        res.json(mentorData).status(200)
    })
});
   

router.post('/',function(req,res){
    const newData= new mentorModel({
        _id: new mongoose.Types.ObjectId(),
        name :req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        city: req.body.city,
        gender: req.body.gender,
        contact: req.body.contact,
        qualification: req.body.qualification,
        appointment:req.body.appointment
    });
  
    
            newData.save(function(err){
                if(err)
                res.send(err).status(400);
                else
                res.send("Data Saved").status(201);
            });
        })
        //Updating the email of mentor with ID , note the path - do it likewise 
router.put('/:mentorID/update/email',function(req,res){
    const id = req.params.mentorID;
    const newEmail =req.body.email;
    userModel.updateOne({_id:id},{$set:{email:newEmail}})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});
      //Updating the address of mentor with ID , note the path - do it likewise 
      router.put('/:mentorID/update/address',function(req,res){
        const id = req.params.mentorID;
        const newAddress =req.body.address;
        userModel.updateOne({_id:id},{$set:{address:newAddress}})
        .exec()
        .then(data=>{
            res.json(data).status(200);
        })
    });
    
    

//deleting the record of one user with ID 
router.delete('/:mentorID',function(req,res){
    const id = req.params.mentorID;
    mentorModel.deleteOne({_id:id})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});



module.exports=router;



