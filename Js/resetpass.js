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
   
}