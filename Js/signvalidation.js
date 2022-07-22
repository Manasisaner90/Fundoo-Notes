function validation(){
    var userName = document.getElementById('userName').value;
    // var regexusername = RegExp('^[a-z0-9]{14,}[@][a-z]{5}[.][a-z]{3}$');
    // var  usernameresult = regexusername.test(userName);
    var password = document.getElementById('password').value;
   
    
    // if(usernameresult == false){
    //     document.getElementById('Uname').innerHTML = "Enter valid Email id";
    //     return false;
    // }
    if(userName == ""){
        document.getElementById('Uname').innerHTML = "Enter email or phone Number";
        return false;
    }
    else{
        document.getElementById('Uname').innerHTML = ""
    }
    if(password == ""){
        document.getElementById('pass').innerHTML = "Enter email or phone Number";
        return false;
    }
    else{
        document.getElementById('pass').innerHTML =""
    }
   

    let data={
        email:userName,
        password:password,  
      }
  console.log(data)
    $.ajax({
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/login',
        type: 'POST',
        data:data,
        'Content-Type': 'application/json',
        success: function (result) {
            console.log(result);
            localStorage.setItem('token',result.id)
        },
        error: function (error) {
          console.log(error);
        }
     });
}