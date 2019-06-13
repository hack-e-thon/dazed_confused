
var appointmentPending;
var userDetails
var mentorsAvailable
var mentorChoosen
axios({
    method:'get',
    url:'http://localhost:3000/users/'+userId,
    
})
.then(function(res){
    console.log(res)
})
.catch(function(err){
    console.log(err)
})

var timeSlot;
axios({
    method:'get',
    url:'http://localhost:3000/timeSlot',
    body:{
        timeSlot:timeSlot
    }
})
.then(function(res){
    mentorsAvailable=res;
    console.log(res)
})
.catch(function(err){
    console.log(err)
})


axios({
    method:'post',
    url:"http://localhost:3000/appointments/",
    body:{
        userId:userId,
        timeSlot:timeSlot,
        mentorId:mentorChoosen
    }
})
.then(function(res){
    console.log(res)
})
.catch(function(err){
    console.log(err)
})
