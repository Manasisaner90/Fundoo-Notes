function validation(){
    var Email = document.getElementById('Email').value;
   
    if(Email == ""){
        document.getElementById('email').innerHTML = "Enter email or phone Number";
        return false;
    }
   
}