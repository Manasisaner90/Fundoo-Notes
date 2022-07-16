function validation(){
    var Email = document.getElementById('Email').value;
 
    if(Email == ""){
        document.getElementById('email').innerHTML = "Enter the email or phone number";
        return false;
    }
}