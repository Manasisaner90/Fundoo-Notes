function validation(){
    var firstName = document.getElementById('firstName').value;
    var regexfirstName = RegExp('^[A-Z]{1}[a-z]{2,}$');
    var firstnameresult = regexfirstName.test(firstName);
    var lastName = document.getElementById('lastName').value;
    var regexlastName = RegExp('^[A-Z]{1}[a-z]{2,}$');
    var lastNameresult = regexlastName.test(lastName);
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
 

    if(firstnameresult == false){
        document.getElementById('name').innerHTML = "Enter the valid name";
        console.log("firstnameresult");
        return false;
    }
     else{
        document.getElementById('name').innerHTML = "";
        console.log("firstnameresultelse");
     }

    if(firstName == ""){
        document.getElementById('name').innerHTML = "Enter the First Name";
        console.log("firstname");
        return false;
    }
    if((firstName.length <=2) || (firstName.length > 20)){
        document.getElementById('name').innerHTML = "firstname  length must be between 2 an 20";
        console.log("firstname length");
        return false;
    }
    if(lastName == ""){
        document.getElementById('lname').innerHTML = "Enter the last Name";
        console.log("lastname");
        return false;
    }
    if(lastNameresult == false){
        document.getElementById('lname').innerHTML = "Enter the valid name";
        console.log("firstname result");
        return false;
    }
    else{
        document.getElementById('lname').innerHTML = "";
        console.log("lastname else");
     }

    if(userName == ""){
        document.getElementById('Uname').innerHTML = "Enter the UserName";
        console.log("username");
        return false;
    }
    else{
        document.getElementById('Uname').innerHTML = "";
        console.log("username else");
     }

    if(password == ""){
        document.getElementById('pwd').innerHTML = "Enter the Password";
        console.log("passwords");
        return false;
    } 
    
    if((password.length <= 5)|| (password.length > 15)){
        document.getElementById('pwd').innerHTML = "Password length must be between 5 and 15";
        console.log("password length");
        return false;
    }
    if(password!=confirm){
        document.getElementById('pwd').innerHTML = "Password are not matching";
        console.log("confirm password");
        return false;
    }
    else{
        document.getElementById('pwd').innerHTML = "";
        console.log("confirm password else");
     }
    if(confirm == ""){
        document.getElementById('cnfpass').innerHTML = "Enter the confirm password";
        console.log("confirm");
        return false;
        
    }
    else{
        document.getElementById('cnfpass').innerHTML = "";
        console.log("confirm  else");
     }

    let data={
        firstName:firstName,
        lastName:lastName,
        email:userName,
        password:password,
        service:"advance"
      }
  console.log(data);
    $.ajax({
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',
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

