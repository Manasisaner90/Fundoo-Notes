function validation(){
    var Npaas = document.getElementById('Npaas').value;
    var confpassword = document.getElementById('confpassword').value;
   
    if(Npaas == ""){
        document.getElementById('Npwd').innerHTML = "Enter New Password";
        return false;
    }
    if(confpassword == ""){
        document.getElementById('Cpass').innerHTML = " Confirm Password";
        return false;
    }
   
    
    let data={
        email:Npaas.value,
        password:confpassword.value,   
      }

    $.ajax({
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/reset',
        type: 'POST',
        data:data,
        'Content-Type': 'application/json',
        success: function (result) {
            console.log(result);
        },
        error: function (error) {
          console.log(error);
        }
     });
}