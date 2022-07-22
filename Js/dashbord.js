
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
    
    const note = [{"title": "title"}, {"description": "desc"}];
    let text = "";
    
    
    document.getElementById("demo").innerHTML = text;
    


    function replace() {
      document.getElementById("div1").style.display = "none";
      document.getElementById("div2").style.display = "block";
    } 

   var title = document.getElementById('ttl');
   var desc = document.getElementById('desc');
   let btn = document.getElementById("myBtn");
    btn.addEventListener('click',()=>{
      let data={
        title:title.value,
        description:desc.value,   
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
    });

    const myBtn = document.getElementById('myBtn');

    myBtn.addEventListener('click', function handleClick(event) {
      event.preventDefault();
      const inputs = document.querySelectorAll('#ttl, #desc');
      inputs.forEach(input => {
        input.value = '';
      });
    });
    

    window.onload = function() {
      document.getElementById('myBtn').onclick = function() {
          document.getElementById('myform').submit();
          return false;
      };
  };

  

  let data={
    title:title.value,
    description:desc.value,   
  }
  let token = localStorage.getItem('token')
  $.ajax({
      url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',
      type: 'GET',
      data:data,
      'Content-Type': 'application/json',
      headers:{'Authorization':token},
      success: function (result) {
          console.log(result.data.data);
          let note = result.data.data;
          // for (let i = 0; i < note.length; i++) {
          //   console.log(note[i].title)
            document.getElementById('demo').innerHTML = note.map((e) =>
            `Fundoo Notes
            <div style =" border:1px solid red; height:auto; width:80px;" >
            <p>${e.title}</p>
            <p>${e.description}</p>
            </div>`
            )
          // }
      },
      error: function (error) {
        console.log(error);
        
      }
   });
  

 