function validation(){
    var firstName = document.getElementById('firstName').value;
    var regexfirstName = RegExp('^[A-Z]{1}[a-z]{2,}$');
    var firstnameresult = regexfirstName.test(firstName);
    var lastName = document.getElementById('lastName').value;
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
 

    if(firstnameresult == false){
        document.getElementById('name').innerHTML = "Enter the valid name";
        return false;
    }

    if(firstName == ""){
        document.getElementById('name').innerHTML = "Enter the First Name";
        return false;
    }
    if((firstName.length <=2) || (firstName.length > 20)){
        document.getElementById('name').innerHTML = "firstname  length must be between 2 an 20";
        return false;
    }
    if(lastName == ""){
        document.getElementById('lname').innerHTML = "Enter the last Name";
        return false;
    }
    if(userName == ""){
        document.getElementById('Uname').innerHTML = "Enter the UserName";
        return false;
    }
    if(password == ""){
        document.getElementById('pwd').innerHTML = "Enter the Password";
        return false;
    } 
    if((password.length <= 5)|| (password.length > 15)){
        document.getElementById('pwd').innerHTML = "Password length must be between 5 and 15";
        return false;
    }
    if(password!=confirm){
        document.getElementById('pwd').innerHTML = "Password are not matching";
        return false;
    }
    if(confirm == ""){
        document.getElementById('cnfpass').innerHTML = "Enter the confirm password";
        return false;
    }
}