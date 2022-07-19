function validation(){
    var Email = document.getElementById('Email').value;
   
    if(Email == ""){
        document.getElementById('email').innerHTML = "Enter email or phone Number";
        return false;
    }
   
    let data={
        email:Email.value,
           
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