
    function openNav() {
        var nav = document.getElementById("mySidebar");
        if (nav.style.width == '250px')
        {
          nav.style.width = '0px';
        }
        else 
        {
          nav.style.width = '250px';
        }
    }
    
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        var title = document.getElementById('title').value;
        var desc = document.getElementById('description').value;


        let data={
          title:"Hello",
          description:"hiiii",
         
        }
    console.log(data);
    let token = localStorage.getItem('token')
      $.ajax({
          url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',
          type: 'POST',
          data:data,
          'Content-Type': 'application/json',
          headers:{'Authorization':token},
          success: function (result) {
              console.log(result);
          },
          error: function (error) {
            console.log(error);
          }
       });
    }
   

    