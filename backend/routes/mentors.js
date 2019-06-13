const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const mentorModel=require('../models/mentorModel');
//const bcryptjs = require('bcryptjs'); // Encryption

router.get('/getmentor',function(req,res){
    
    const id=req.body.mentorId;
    mentorModel.find({_id:id})
    .exec()
    .then(mentor=>{
        res.send(mentor).status(200);
    })
})

router.get('/timeSlot',function(req,res){
    // res.send("mentor's Home").status(200);

    const timeSlot=req.body.timeSlot
    mentorModel.find({timeSlots:timeSlot})
    .exec()
    .then(mentorData=>{
        res.json(mentorData).status(200)
    })
});
   

router.put('/newtimeslot',function(req,res){
    const id=req.body.mentorId
    const time=req.body.timeSlot
    mentorModel.updateOne({_id:id},{$push:{timeSlots:time}})
    .exec()
    .then(mentor=>{
        res.send("Success").status(200);
    })
})


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
        qualification: req.body.qualification
    });
    mentorModel.find({email:req.body.email})
    .exec()
    .then(mentor=>{
        if(mentor.length>0){
            res.send("User already exists").status(400);
        }
        else{
            newData.save();
            res.send("User created successfully").status(201);
        }
    })
})
//  
router.post('/login',function(req,res){
    mentorModel.findOne({email:req.body.email})
    .exec()
    .then(mentor=>{
        if(mentor==null)
        res.send("Auth failed").status(401);
        else
        {
            if(bcryptjs.compareSync(req.body.password,user.password) )
            {
                const token=jwt.sign({
                    email:user.email,
                    _id:user.id
                },'secret',
                {
                    expiresIn: '24h'
                })
                res.json({
                    "message":"Auth Successful",
                    "token":token
                }).status(200);
            }
            else{
                releaseEvents.send("Auth Failed").status(401);
            }
        }
        
    })
})

//Updating the email of mentor with Id , note the path - do it likewise 
router.put('/:mentorId/update/email',function(req,res){
    const id = req.params.mentorId;
    const newEmail =req.body.email;
    userModel.updateOne({_id:id},{$set:{email:newEmail}})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});
      //Updating the address of mentor with Id , note the path - do it likewise 
      router.put('/:mentorId/update/address',function(req,res){
        const id = req.params.mentorId;
        const newAddress =req.body.address;
        userModel.updateOne({_id:id},{$set:{address:newAddress}})
        .exec()
        .then(data=>{
            res.json(data).status(200);
        })
    });
    
    

//deleting the record of one user with Id 
router.delete('/:mentorId',function(req,res){
    const id = req.params.mentorId;
    mentorModel.deleteOne({_id:id})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});



module.exports=router;



