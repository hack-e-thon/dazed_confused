// var requestList

// var mentorDetails
// var mentorsRequestList
// var usersList
// axios({
//     method:'get',
//     url:'http://localhost:3000/getMentor',
//     body:{
//         mentorId=mentorId
//     }
// })
// .then(function(res){
//     mentorDetails=res
// })
// .catch(function(err){
//     console.log(err)
// })

// axios({
//     method:'get',
//     url:'http://localhost:3000/appointments/mentorList',
//     body:{
//         mentorId:mentorId
//     }
// })
// .then(function(res){
//     usersList=res
// })
// .catch(function(err){
//     console.log(err)
// })

// axios({
//     method:'get',
//     url:'http://localhost:3000/appointments/mentorsRequestList',
//     body:{
//         mentorId:mentorId
//     }
// })
// .then(function(res){
//     mentorsList=res
// })
// .catch(function(err){
//     console.log(err)
// })

// axios({
//     ethod:'put',
//     url:'http://localhost:3000/mentors/'
// })



// var appointmentId
// axios({
//     method:'put',
//     url:'http://localhost:3000/appointments/changeStatus',
//     body:{
//         appointmentId:appointmentId
//     }
// })
// .then(function(res){
//     console.log(res)
// })
// .catch(function(err){
//     console.log(err)
// })


// var stageUpdate
// var newStage
// axios({
//     method:'put',
//     url:'http://localhost:3000/users/stageUpdate',
//     body:{
//         userId:userId,
//         stage:newStage
//     }
// })

var email='user1@gmail.com'
var password='user1'
var token
var userId
axios({
    method:'post',
    url:'http://localhost:3000/users/login',
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