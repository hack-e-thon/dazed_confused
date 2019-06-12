const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const userModel=require('../models/userModel');
//const bcryptjs = require('bcryptjs'); // Encryption

router.get('/',function(req,res){
    // res.send("User's Home").status(200);
    userModel.find()
    .exec()
    .then(userData=>{
    
        res.json(userData).status(200)
    })
});
   

router.post('/',function(req,res){
    const newData= new userModel({
        _id: new mongoose.Types.ObjectId(),
        name :req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        city: req.body.city,
        gender: req.body.gender,
        contact: req.body.contact,
        stage: req.body.stage
    });
  
    
            newData.save(function(err){
                if(err)
                res.send(err).status(400);
                else
                res.send("Data Saved").status(201);
            });
            
        //Updating the email of user with ID , note the path - do it likewise 
router.put('/:userID/update/email',function(req,res){
    const id = req.params.userID;
    const newEmail =req.body.email;
    doctorModel.updateOne({_id:id},{$set:{email:newEmail}})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});
      //Updating the address of user with ID , note the path - do it likewise 
      router.put('/:userID/update/address',function(req,res){
        const id = req.params.userID;
        const newAddress =req.body.address;
        doctorModel.updateOne({_id:id},{$set:{address:newAddress}})
        .exec()
        .then(data=>{
            res.json(data).status(200);
        })
    });
    
    

//deleting the record of one user with ID 
router.delete('/:userID',function(req,res){
    const id = req.params.doctorID;
    doctorModel.deleteOne({_id:id})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});
});



module.exports=router;



