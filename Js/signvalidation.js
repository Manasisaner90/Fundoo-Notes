function validation(){
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
   
    if(userName == ""){
        document.getElementById('Uname').innerHTML = "Enter email or phone Number";
        return false;
    }
    if(password == ""){
        document.getElementById('pass').innerHTML = "Enter email or phone Number";
        return false;
    }
   
}