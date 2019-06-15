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
    console.log("asdzxc",mentorDetails)
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
    console.log(mentorTimeSlots)
    mentorTimeSlots.forEach(element => {
        let li=document.createElement("li")
        let str=element.substring(0,10)
        console.log("zxczxc",str)
        li.appendChild(document.createTextNode(str))
        el.appendChild(li)

    });

    
    

})
.catch(function(err){
    console.log(err)
})


var userList;

axios({
    method:'post',
    url:'http://localhost:3000/appointments/mentorList',
    data:{
        mentorId:localStorage.getItem("mentorId")
    }
})
.then(function(res){
    console.log("asdasdasd",res)
    var userList=res.data;
    userList.forEach(element => {
        axios({
            method:"post",
            url:"http://localhost:3000/users/getuser",
            data:{
                userId:element.userId
            }
        })
        .then(res=>{
            console.log("zxc",res)
            let li=document.createElement("li").appendChild(document.createTextNode(res.data.name))
        document.getElementById("ul_appointments").appendChild(li)    
        })


        
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
