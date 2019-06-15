// var requestList

// var mentorDetails
// var mentorsRequestList
// var usersList
console.log("asd",localStorage.getItem("mentorId"))
axios({
    method:'post',
    url:'http://localhost:3000/mentors/getmentor',
    data:{
        mentorId:localStorage.getItem("mentorId")
    }
})
.then(function(res){
    mentorDetails=res.data
    console.log("asd",mentorDetails)
    console.log()
    document.getElementById("name").innerText=mentorDetails.name;
    document.getElementById("name1").innerText=mentorDetails.name;
    document.getElementById("address").innerText=mentorDetails.address;

    document.getElementById("email").innerText=mentorDetails.email;

    document.getElementById("contact").innerText=mentorDetails.contact;
    //var stageReached=userDetails.stage
    //var stage=document.getElementById("completedList")


    var mentorTimeSlots=mentorDetails.timeSlots;
    let el=document.getElementById("showtimeslots")
    mentorTimeSlots.forEach(element => {
        let li=document.createElement("li")
        li.appendChild(document.createTextNode(mentorTimeSlots[i]))
        el.appendChild(li)

    });

    
    

})
.catch(function(err){
    console.log(err)
})


var userList;

axios({
    method:'get',
    url:'http://localhost:3000/appointments/mentorList',
    data:{
        mentorId:mentorId
    }
})
.then(function(res){
    usersList=res.body
    userList.forEach(element => {
        let ul=document.getElementById("ul_appointments")
        documen
    });
})
.catch(function(err){
    console.log(err)
})

// axios({
//     method:'get',
//     url:'http://localhost:3000/appointments/mentorsRequestList',
//     data:{
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
//     data:{
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
//     data:{
//         userId:userId,
//         stage:newStage
//     }
// })

var email='user1@gmail.com'
var password='user1'
var token
var userId
