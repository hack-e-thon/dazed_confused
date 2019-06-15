const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const multer = require('multer');
const mentorModel=require('../models/mentorModel');
const bcryptjs = require('bcryptjs'); // Encryption
const jwt=require('jsonwebtoken');

var upload = multer({dest: './public/upload'});


// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       cb(null, './uploads/');
//     },
//     filename: function(req, file, cb) {
//       cb(null, new Date().toISOString() + file.originalname);
//     }
//   });
  
//   const fileFilter = (req, file, cb) => {
//     // reject a file
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   };
  
//   const upload = multer({
//     storage: storage,
//     // limits: {
//     //   fileSize: 1024 * 1024 * 5
//     // },
//     fileFilter: fileFilter
//   });
  


// var str="http://localhost:3000/"
// //uploading photo
// router.put('/',upload.single('hw'),function(req,res){
//     mentorModel.findByIdAndUpdate(req.body.id, {$push:{hw:str+req.file.path}} ,  {new :true})
//     .exec()
//     .then((result)=>{
//         res.json(result).status(200)
//     })
//     .catch(err=>{
//         res.json(err).status(400)
//     })
// })

router.post('/getmentor',function(req,res){
    
    const id=req.body.mentorId;
    console.log("asd",req.body)
    mentorModel.findOne({_id:id})
    .exec()
    .then(mentor=>{
        res.send(mentor).status(200);
    })
})

router.post('/timeSlot',function(req,res){
    // res.send("mentor's Home").status(200);

    const timeSlot=req.body.timeSlot
    console.log(timeSlot)
    mentorModel.find({timeSlots:timeSlot})
    .exec()
    .then(mentorData=>{
        res.json(mentorData).status(200)
    })
}); 

router.get('/',function(req,res){
    mentorModel.find()
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});
   

router.put('/newtimeslot',function(req,res){
    const id=req.body.mentorId
    const time=new Date(req.body.timeSlot)
    mentorModel.updateOne({_id:id},{$push:{timeSlots:time}})
    .exec()
    .then(mentor=>{
        res.send(mentor).status(200);
    })
})



    router.post('/',upload.single('profileimage'),function(req,res){
        if(req.file){
            console.log('Uploading File....');
            var profileimage = req.file.filename;
        } else{
            console.log('No File Uploaded....');
            var profileimage = 'noimage.jpg';
        }
    const newData= new mentorModel({
        _id: new mongoose.Types.ObjectId(),
        name :req.body.name,
        //age: req.body.age,
        email: req.body.email,
        password:bcryptjs.hashSync(req.body.password,10),
        address: req.body.address,
        //city: req.body.city,
        //gender: req.body.gender,
        contact: req.body.contact,
        profileimage: profileimage
        //qualification: req.body.qualification
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
        console.log(req.body)
        if(mentor==null)
        res.send("Auth failed").status(401);
        else
        {
            if(bcryptjs.compareSync(req.body.password,mentor.password) )
            {
                const token=jwt.sign({
                    email:mentor.email,
                    _id:mentor.id
                },'secret',
                {
                    expiresIn: '24h'
                })
                res.json({
                    "message":"Auth Successful",
                    "token":token,
                    "mentorId":mentor._id
                }).status(200);
            }
            else{
                res.send("Auth Failed").status(401);
            }
        }
        
    })
})

//Updating the email of user with Id , note the path - do it likewise 
router.put('/updateEmail',function(req,res){
    const id = req.body.mentorId;
    const newEmail =req.body.email;
    mentorModel.updateOne({_id:id},{$set:{email:newEmail}})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});
      //Updating the address of mentor with Id , note the path - do it likewise 
      router.put('/updateAddress',function(req,res){
        const id = req.body.mentorId;
        const newAddress =req.body.address;
        mentorModel.updateOne({_id:id},{$set:{address:newAddress}})
        .exec()
        .then(data=>{
            res.json(data).status(200);
        })
    });
    
      //Updating the qualification of user with Id , note the path - do it likewise 
      router.put('/updateQualification',function(req,res){
        const id = req.body.mentorId;
        const newQualifaction =req.body.qualifaction;
        mentorModel.updateOne({_id:id},{$set:{qualification:newQualifaction}})
        .exec()
        .then(data=>{
            res.json(data).status(200);
        })
    });

     //Updating the password of user with Id , note the path - do it likewise 
     router.put('/updatePassword',function(req,res){
        const id = req.body.mentorId;
        const newPassword =req.body.password;
        mentorModel.updateOne({_id:id},{$set:{password:newPassword}})
        .exec()
        .then(data=>{
            res.json(data).status(200);
        })
    });
    
    
       //Updating the address of user with Id , note the path - do it likewise 
       router.put('/updateContact',function(req,res){
        const id = req.body.mentorId;
        const newContact =req.body.contact;
        mentorModel.updateOne({_id:id},{$set:{contact:newContact}})
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



