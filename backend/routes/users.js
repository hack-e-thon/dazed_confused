const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const userModel=require('../models/userModel');
//const bcryptjs = require('bcryptjs'); // Encryption




// router.get('/'),function(req,res){

// }

router.get('/getuser',function(req,res){
    // res.send("User's Home").status(200);
    const id=req.body.userId
    console.log(id)
    userModel.find({_id:id})
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
    userModel.find({email:req.body.email})
.exec()
.then(users=>{
    if(users.length>0){
        res.send("User already exists").status(400);
    }
    else{
        newData.save();
        res.send("User created successfully").status(201);
    }
})
})
      
router.put('/stageUpdate',function(req,res){
    const newStage=req.body.stage
    const userId=req.body.userId
    userModel.updateOne({_id:userId},{$set:{stage:newStage}})
    .exec()
    .then(updatedStage=>{
        res.send(updatedStage).status(200)
    })
    .catch(err=>{
        res.send(err).status(400)
    })
})



//Updating the email of user with Id , note the path - do it likewise 
router.put('/:userId/update/email',function(req,res){
    const id = req.params.userId;
    const newEmail =req.body.email;
    userModel.updateOne({_id:id},{$set:{email:newEmail}})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});
      //Updating the address of user with Id , note the path - do it likewise 
      router.put('/:userId/update/address',function(req,res){
        const id = req.params.userId;
        const newAddress =req.body.address;
        userModel.updateOne({_id:id},{$set:{address:newAddress}})
        .exec()
        .then(data=>{
            res.json(data).status(200);
        })
    });
    
    

//deleting the record of one user with Id 
router.delete('/:userId',function(req,res){
    const id = req.params.userId;
    userModel.deleteOne({_id:id})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});


router.post('/login',function(req,res){
    userModel.findOne({email:req.body.email})
    .exec()
    .then(user=>{
        if(user==null)
        res.send("Auth failed").status(401);
        else
        {
            if(bcryptjs.compareSync(req.body.password,user.password) )
            {
                const token=jwt.sign({
                    email:user.email,
                    _is:user.id
                },'secret',
                {
                    expiresIn: '1h'
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



module.exports=router;



