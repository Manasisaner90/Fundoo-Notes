function openNav() {
  var nav = document.getElementById("mySidebar");
  if (nav.style.width == '250px') {
    nav.style.width = '0px';
  }
  else {
    nav.style.width = '250px';
  }
}
function togglePopup(d) {
  console.log(d)
  $(".popup").toggle();
 

}

// function OpenModal() {
//   let element = document.getElementById('div2')
//   element.style.display = 'block'
// }
// function CloseModal() {
//   let element = document.getElementById('div2')
//   element.style.display = 'none'
// }

function replace() {
  document.getElementById("div1").style.display = "none";
  document.getElementById("div2").style.display = "block";
}

//Add Notes Api call
var title = document.getElementById('ttl');
var desc = document.getElementById('desc');
let btn = document.getElementById("myBtn");
btn.addEventListener('click', () => {
  let data = {
    title: title.value,
    description: desc.value,
  }
  console.log(data);
  let token = localStorage.getItem('token')
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',
    type: 'POST',
    data: data,
    'Content-Type': 'application/json',
    headers: { 'Authorization': token },
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
  document.getElementById("div2").style.display = "none";
  document.getElementById("div1").style.display = "block";
});

window.onload = function () {
  document.getElementById('myBtn').onclick = function () {
    document.getElementById('myform').submit();
    return false;
  };
};

   
//GetNotes List Api code
let token = localStorage.getItem('token')
$.ajax({
  url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',
  type: 'GET',
  'Content-Type': 'application/json',
  headers: { 'Authorization': token },
  success: function (result) {
    console.log(result.data.data);
    let notearray = result.data.data;
    let note = notearray.filter((element)=>{
      return element.isDeleted === false && element.isArchived===false;

    }

    )
    document.getElementById('demo').innerHTML = note.map((e) =>`
    <div class ="box">
           <div onclick="togglePopup()" title=${e.title} description=${e.description}>
            <p >${e.title}</p>
            <p>${e.description}</p>
            </div>
              <div class="box2">
                    <img src="../assets/bell.svg" style=" height: 18px; width: 18px;  margin-right: 15px;" >
                    <img src="../assets/user.svg" style=" height: 18px; width: 18px;  margin-right: 15px;">
                 <div class="dropdown">
                    <span class="dropbtn"><img src="../assets/cpallet.svg"  style=" height: 18px; width: 18px;">
                   </span>
                   <div class = "dropdown-content1" style="left:0;">
                   <div class = "color">
                   <a href="#"  id="#a7ffeb" style="background-color:#a7ffeb"> </a>
                   <a href="#"  id="cbf0f8" style="background-color:#cbf0f8"> </a>
                   <a href="#"   id="#aecbfa" style="background-color:#aecbfa"> </a>
                   <a href="#"  id="#d7aefb" style="background-color:#d7aefb"> </a>
                   <a href="#"   id="#fdcfe8" style="background-color:#fdcfe8"> </a>
                   <a href="#"  id="#e6c9a8" style="background-color:#e6c9a8"> </a>
                   <a href="#"  id="#e8eae" style="background-color:#e8eae"> </a>
                   <a href="#"  id="#fff475" style="background-color:#fff475"> </a>
                   <a href="#"  id="#ccff90" style="background-color:#ccff90"> </a>
                   <a href="#"  id="#fbbc04" style="background-color:#fbbc04"> </a>
                   <a href="#" id="#f28b82"" style="background-color:#f28b82"> </a>
                   <a href="#"  id="#a7ffeb" style="background-color:#a7ffeb"> </a>
                 </div>
                 </div>
                   </div>
                    <img src="../assets/gallery.svg"  style=" height: 18px; width: 18px;  margin-right: 15px;" >
                  <a href="#" ><img src="../assets/download.svg"  style=" height: 18px; width: 18px;  margin-right: 15px;"></a>
                  <div class="dropdown">
                        <span class="dropbtn"><img src="../assets/3dot.svg" height: 10px; width: 10px;></span>
                        <div class="dropdown-content" style="left:0;">
                          <a href="#"  id=${e.id}>Delete note</a>
                          <a href="# ">Add label</a>
                          <a href="#">Add drawing</a>
                          <a href="#">Make a copy</a>
                          <a href="#">Show checkboxes</a>
                          <a href="#">Copy to Google Docs</a>
                        </div>
                  </div>
              </div>
      </div>`
    )
  },
  error: function (error) {
    console.log(error);

  }
});
 
const togglebtn = document.querySelector('#togglebtn');
const trashdiv = document.querySelector('.trashlist');

togglebtn.addEventListener('click',()=>{
  console.log("Hii")
if(trashdiv.style.display === "none"){
  trashdiv.style.display ="block";
}
else{
  trashdiv.style.display ="none";
}
});

// function myFunction() {
//   console.log("hii")
//   var x = document.getElementById("trashnotes");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } 
//   else {
//     x.style.display = "none";
//   }
// }

// function remove() {
//   var x = document.getElementById("selectNow");
//   x.remove(x.this);
// }

//  const deletenote = document.querySelector('#demo')
//  deletenote.addEventListener('click',(e)=>{
//   console.log(e.target.id);
//   // var Card = document.getElementById('id'); 
//   let req = {
//   noteIdList: [e.target.id],
//   isDeleted: true,
// }
//  console.log(token)
// $.ajax({
//     url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes',
//     type: 'POST',
//     data:req,
//     'Content-Type': 'application/json',
//     headers: { 'Authorization': token },
//     success: function (result) {
//         console.log(result);
//     },
//     error: function (error) {
//       console.log(error);
//     }
//  });
// })
const deletenote = document.querySelector('#demo')
deletenote.addEventListener('click',(e)=>{
let req= {
  "noteIdList":[e.target.id],
  "isDeleted": true
  }
  $.ajax({
  url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes',
  type: 'POST',
  data:JSON.stringify(req),
  headers: {
  'Content-Type': 'application/json',
  'Authorization': token,
  },
  success: function (result) {
  console.log(result);
  
  },
  error: function (error) {
  console.log(error);
  }
  });
})

// const archivedata = document.querySelector('#demo')
// archivedata.addEventListener('click',(e)=>{
//   console.log(e.target.id);

// let req = {
//   noteIdList: [e.target.id],
//   isArchived: true,
// }


// console.log(token)
// $.ajax({
//     url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes',
//     type: 'POST',
//     data:req,
//     'Content-Type': 'application/json',
//     headers: { 'Authorization': token },
//     success: function (result) {
//         console.log(result);
//     },
//     error: function (error) {
//       console.log(error);
//     }
//  });
// })

function display(){
  console.log(hii)
  document.getElementById("trashnotes").style.disply = "block"
}

ajaxGet(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`)
.then(function (result1) {
    console.log("hello")

    let Res2 = JSON.parse(result1);
    //   console.log(Res.data.data);
    let Response2 = Res2.data.data;
    console.log(Response2)

    let notesArray2 = Response2.filter(data => data.isArchived == false && data.isDeleted == false)
    nts2 = notesArray2

})

$(document).on('click', '#Itrash', function (event) {
  isDeleted = !isDeleted;
  console.log('deletetrue')
  console.log(event.target.id)

  let obj3 =
  {

      "noteIdList": [event.target.id],
      // "isArchived" : isArchive,
      "isDeleted": isDeleted
  }

  console.log(obj3)
})