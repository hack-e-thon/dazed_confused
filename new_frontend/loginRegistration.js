    
function signup()
{
    var name=document.forms["signupform"]["name"].value;
    var email=document.forms["signupform"]["email"].value;
    var address=document.forms["signupform"]["address"].value;
    var password=document.forms["signupform"]["password"].value;
    var contact=document.forms["signupform"]["contact"].value;
    if(document.forms["signupform"]["userType"].value==="user")
    {
        
        // alert(document.forms["signupform"]["name"].value)
        axios({
            method:'post',
            url:'http://localhost:3000/users',
            data:{
                name:name,
                email:email,
                password:password,
                address:address,
                //city:city,
                //gender:gender,
                contact:contact
            }
        })
        .then(function(res){
            console.log(res)
            window.location.href="./loginuser.html"
        })
        .catch(function(err){
            console.log(err)
        })

    }
    if(document.forms["signupform"]["userType"].value==="mentor")
    {
        axios({
            method:'post',
            url:'http://localhost:3000/mentors',
            data:{
                name:name,
                email:email,
                password:password,
                address:address,
                //city:city,
                //gender:gender,
                contact:contact
            }
        })
        .then(function(res){
            window.location.href="./loginuser.html"
            console.log("working")
            console.log(res)
        })
        .catch(function(err){
            console.log(err)
        })
    }
    }



function login()
{
    var email=(document.forms["loginform"]["email"].value)
    var password=(document.forms["loginform"]["password"].value);
    //alert(email)
    //alert(password)
    //var x;
    var loginusertype=(document.forms["loginform"]["loginusertype"].value)
   
    
    console.log(loginusertype)
    
    if(loginusertype==="user")
    {
        //alert("asd");
        axios({
            method:'post',
            url:'http://localhost:3000/users/login',
            data:{
                email:email,
                password:password
            }
        })
        
        .then(function(response){
        //x=response;
                console.log(response)
               // alert("then")
                if(response.data!=="Auth failed")
                {
                    
                    console.log("asd");
                    localStorage.setItem("token",response.data.token);
                    localStorage.setItem("userId",response.data.userId)
                
                //userId=response.data.userId
                //console.log(token)
                //console.log(userId)
                    window.location.href="afterloginuser.html"
                
                }
                else
                {
                    alert("asdasd")
                    //when auth fails
                    console.log("failed")
                }
        })
        
    }

    if(loginusertype==="mentor")
    {
        //alert("asd");
        axios({
            method:'post',
            url:'http://localhost:3000/mentors/login',
            data:{
                email:email,
                password:password
            }
        })
        
        .then(function(response){
        //x=response;
                console.log("asd",response)
               // alert("then")
                if(response.data!=="Auth failed")
                {
                    
                    console.log(response);
                    localStorage.setItem("token",response.data.token);
                    localStorage.setItem("mentorId",response.data.mentorId)
                    window.location.href="afterloginmentor.html"
                
                //userId=response.data.userId
                //console.log(token)
                //console.log(userId)
                   // window.location.href="./afterloginmentor.html"
                
                }
                else
                {
                    alert("asdasd")
                    //when auth fails
                    console.log("failed")
                }
        })
        // console.log(localStorage.getItem("token"))
        // console.log(localStorage.getItem("userId"))
        
    }


}



