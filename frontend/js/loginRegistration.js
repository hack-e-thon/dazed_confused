//const axios=require('axios')


var userId;

axios({
    method:'get',
    url:'http://localhost:3000/'
})
.then(function(response){
    console.log(response)
})
.catch(function(err){
    console.log(err)
})

axios({
    method:'post',
    url:'http://localhost:3000/mentors/login',
    headers:{Autorization:'Beare' + token},
    data:{
        email:email,
        password:password
    }
})
.then(function(response){
    console.log(response.data.message)
    token=response.data.token
    userId=response.data.userId
    console.log(token)
    console.log(userId)
    
})


axios({
    method:'post',
    url:'http://localhost:3000/users',
    data:{
        name:name,
        age:age,
        emailId:emailId,
        password:password,
        address:address,
        city:city,
        gender:gender,
        contact:contact
    }
})
.then(function(res){
    console.log(res)
})
.catch(function(err){
    console.log(err)
})



axios({
    method:'post',
    url:'http://localhost:3000/mentors',
    data:{
        name:name,
        age:age,
        emailId:emailId,
        password:password,
        address:address,
        city:city,
        gender:gender,
        contact:contact,
        qualification:qualification
    }
})
.then(function(res){
    console.log(res)
})
.catch(function(err){
    console.log(err)
})



