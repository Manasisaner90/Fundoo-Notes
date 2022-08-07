function openNav() {
  var nav = document.getElementById("mySidebar");
  if (nav.style.width == '250px') {
    nav.style.width = '0px';
  }
  else {
    nav.style.width = '250px';
  }
}


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
// function editProduct(){

//   document.getElementById("${e.title}").value = productID;
//   document.getElementById("${e.description}").value = product_desc;


// const mcloseButton = document.getElementById('UpBtn')

// mcloseButton.addEventListener('click', () =>{
//   console.log('clickedddd')
//   modal.style.display = "none"
//  // document.querySelector(".modal-container").style.display = "none"

//   let data = {
//     noteId: updateId,
//     title: title.value,
//     description: desc.value,
//   }
//   console.log(data);
//   let token = localStorage.getItem('token')
//   $.ajax({
//     url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes',
//     type: 'POST',
//     data: data,
//     'Content-Type': 'application/json',
//     headers: { 'Authorization': token },
//     success: function (result) {
//       console.log(result);
//     },
//     error: function (error) {
//       console.log(error);
//     }
//   });
// });
// }

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

var notearray;
let token = localStorage.getItem('token');
getNotes();
// getdata();

//GetNotes List Api code
function getNotes() {

  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',
    type: 'GET',
    'Content-Type': 'application/json',
    headers: { 'Authorization': token },
    success: function (result) {
      console.log(result.data.data);
      notearray = result.data.data;
      note = notearray.filter((element) => {
        return element.isDeleted === false && element.isArchived === false;
      })

      document.getElementById('demo').innerHTML = note.map((e) => `
    <div  class ="box" style="background-color:${e.color}" >
           <div id="UpBtn" title=${e.title} description=${e.description}>
            <p  title=${e.title} id=${e.description} >${e.title} </p>
            <p>${e.description}</p>
            </div>
              <div class="box2 d-flex">
                    <img src="../assets/bell.svg" style=" width: 18px;  margin-right: 15px;" >
                    <img src="../assets/user.svg" style=" width: 18px;  margin-right: 15px;">
                 <div class="dropdown">
                    <span class="dropbtn"><img src="../assets/cpallet.svg"  style=" width: 18px;">
                   </span>
                   <div class = "dropdown-content1" style="left:0;">
                   <div class = "color">
                   <a href="#"   id="#a7ffeb" title=${e.id} style="background-color:#a7ffeb"> </a>
                   <a href="#"   id="#cbf0f8" title=${e.id} style="background-color:#cbf0f8"> </a>
                   <a href="#"   id="#aecbfa" title=${e.id} style="background-color:#aecbfa"> </a>
                   <a href="#"   id="#d7aefb" title=${e.id} style="background-color:#d7aefb"> </a>
                   <a href="#"   id="#fdcfe8" title=${e.id} style="background-color:#fdcfe8"> </a>
                   <a href="#"   id="#e6c9a8" title=${e.id} style="background-color:#e6c9a8"> </a>
                   <a href="#"   id="#e8eae"  title=${e.id} style="background-color:#e8eae"> </a>
                   <a href="#"   id="#fff475" title=${e.id} style="background-color:#fff475"> </a>
                   <a href="#"   id="#ccff90" title=${e.id} style="background-color:#ccff90"> </a>
                   <a href="#"   id="#fbbc04" title=${e.id} style="background-color:#fbbc04"> </a>
                   <a href="#"   id="#f28b82" title=${e.id} style="background-color:#f28b82"> </a>
                   <a href="#"   id="#a7ffeb" title=${e.id} style="background-color:#a7ffeb"> </a>
                 </div>
                </div>
               </div>
                    <img src="../assets/gallery.svg"  style=" width: 18px;  margin-right: 15px;" >
                    <div id="Archive">
                  <a href="#"><img id=${e.id} src="../assets/download.svg"  style=" width: 18px;  margin-right: 15px;"></a>
                 </div>
                  <div class="dropdown">
                        <span class="dropbtn"><img src="../assets/3dot.svg"  width: 10px;></span>
                        <div class="dropdown-content" style="left:0;">
                          <div id="Itrash">
                          <a href="#" id=${e.id}>Delete</a>
                          </div>
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
}
$(document).ready(function(){
  $("#clBtn").click(function(){
    $("div2").hide();
  });
});

let btnn = document.getElementById("demo");
btnn.addEventListener('click', (h) => {
  console.log(h.target)
  let data = {
    noteId: updateId,
    title: title.value,
    description: desc.value,
  }
  console.log(data);
  let token = localStorage.getItem('token')
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes',
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
//  let updateId = title.target.id;
// $(document).on('click', '#Archive', function (a) {
// let data = {
//   noteId: updateId,
//   title: title.value,
//   description: desc.value,
// }
// console.log(data);
// $.ajax({
//   url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes',
//   type: 'POST',
//   data: data,
//   'Content-Type': 'application/json',
//   headers: { 'Authorization': token },
//   success: function (result) {
//     console.log(result);
//   },
//   error: function (error) {
//     console.log(error);
//   }
// });
// })
// Delete note Api call

// const deletenote = document.querySelector('#demo')
// deletenote.addEventListener('click', (e) => {
//   console.log(trash)
//   let req = {
//     "noteIdList": [e.target.id],
//     "isDeleted": true
//   }

$(document).on('click', '#Itrash', function (event) {
  console.log('deletetrue')
  console.log(event.target.id)
  let req =
  {
    "noteIdList": [event.target.id],
    "isDeleted": true
  }
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes',
    type: 'POST',
    data: JSON.stringify(req),
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

//restore note Api Call
$(document).on('click', '#Restore', function (event) {
  console.log('deletefalse')
  console.log(event.target)
  let req =
  {
    "noteIdList": [event.target.title],
    "isDeleted": false
  }
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes',
    type: 'POST',
    data: JSON.stringify(req),
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

//Delete Forever Api Call
$(document).on('click', '#Delete', function (a) {
  console.log('deletetrue')
  console.log(a.target)
  let req = {
    noteIdList: [a.target.title],
    isDeleted: false,
  }

  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/deleteForeverNotes',
    type: 'POST',
    data: JSON.stringify(req),
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

// Archived note Api call
$(document).on('click', '#Archive', function (a) {
  console.log('Archivetrue')
  console.log(a.target)
  let req = {
    "noteIdList": [a.target.id],
    "isArchived": true,
  }
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes',
    type: 'POST',
    data: JSON.stringify(req),
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


// UnArchived note Api call
$(document).on('click', '#unarchive', function (a) {
  console.log('Archivefalse')
  console.log(a.target)
  let req = {
    "noteIdList": [a.target.id],
    "isArchived": false,
  }
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes',
    type: 'POST',
    data: JSON.stringify(req),
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
//const color = ["#fff", "#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb", "#fdcfe8", "#e6c9a8", "#e8eaed"]

$(document).on('click', '.color', function (n) {
  updateColor = n.target.id
  console.log(n.target)
  console.log(updateColor)
  console.log("hii")
  var noteid = n.target.noteid
  let req = {
    "color": updateColor,
    "noteIdList": [n.target.title],
  }

  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes',
    type: 'POST',
    data: JSON.stringify(req),
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

document.getElementById('nots').addEventListener('click', (c) => {
  console.log("get note", c.target);
  note = notearray.filter((element) => {
    return element.isDeleted === false && element.isArchived === false;
  })
  displayNotes(note)
})
document.getElementById('archive').addEventListener('click', (c) => {
  console.log("archive note", c.target);
  archivearray = notearray.filter((element) => {
    return element.isArchived === true;
  })
  displayArchive(archivearray)
})
document.getElementById('trash').addEventListener('click', (c) => {
  console.log("trash note", c.target);
  trasharray = notearray.filter((element) => {
    return element.isDeleted === true;
  })
  displaytrash(trasharray)
})

//disply all notes
function displayNotes(allnt) {
  let data = allnt
  document.getElementById('demo').innerHTML = data.map((b) =>
    `<div class="box" style="border:1px solid green;">
  <p>${b.title}</p>
  <p>${b.description}</p>
  <div class="newbox">
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
<a href="#" id=${b.id} ><img src="../assets/download.svg"  style=" height: 18px; width: 18px;  margin-right: 15px;"></a>
<div class="dropdown">
      <span class="dropbtn"><img src="../assets/3dot.svg" height: 10px; width: 10px;></span>
      <div class="dropdown-content" style="left:0;">
        <a href="#"  id=${b.id}>Delete note</a>
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
}

//display archive notes
function displayArchive(allnt) {
  let data = allnt
  document.getElementById('demo').innerHTML = data.map((b) =>
    `<div class="box" style="border:1px solid green; background-color:${b.color}">
  <p>${b.title}</p>
  <p>${b.description}</p>
  <div class="newbox">
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
<a href="#" id="unarchive"><img  id=${b.id} src="../assets/unarchive.svg"  style=" height: 18px; width: 18px;  margin-right: 15px;"></a>
<div class="dropdown">
      <span class="dropbtn"><img src="../assets/3dot.svg" height: 10px; width: 10px;></span>
      <div class="dropdown-content" style="left:0;">
        <a href="#"  id=${b.id}>Delete note</a>
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
}

// display tarsh notes
function displaytrash(allnt) {
  let data = allnt
  document.getElementById('demo').innerHTML = data.map((b) =>
    `<div class="box" style="border:1px solid green; background-color:${b.color}">
  <p>${b.title}</p>
  <p>${b.description}</p>
  <div class="newbox">
  <img id="Delete" title=${b.id} src="../assets/delete1.svg" style=" height: 18px; width: 18px;  margin-right: 15px;" >
  <img id="Restore" title=${b.id} src="../assets/delete.svg" style=" height: 18px; width: 18px;  margin-right: 15px;"> 
</div>
</div>`
  )
}

document.getElementById('demo').addEventListener('click', (d) => {

  console.log(d.target.id, d.target.title)
  //$(".popup").toggle();
  document.querySelector('.overlay').innerHTML =
    ` <div id="div2"  class="col-md-12" >
  
  <div class="d-flex flex-wrap popup">
  <div class=" mt-3 d-flex col-md-12">
    <input type="text" class="mb-2" id="ttl" placeholder=${d.target.title} autocomplete="off">
    <img src="../assets/pin.svg">
    </div>
    <input type="text" class="mb-2 mt-3 ml-2" id="desc" placeholder=${d.target.id} autocomplete="off">
    <div class="d-flex  justify-content-between ">
    <div class="col-md-10">
      <img src="../assets/bell.svg">
      <img src="../assets/user.svg">
      <img src="../assets/cpallet.svg">
      <img src="../assets/gallery.svg">
      <img src="../assets/download.svg">
      <img src="../assets/3dot.svg" style=" height: 18px; width: 18px;">
      <img src="../assets/back.svg">
      <img class="redu" src="../assets/back.svg">
    </div>
    <div class="col-md-2">
      <button   type="submit" id="clBtn"  title=${d.target.id} value="submit" class="btn btn-light mb-2">Close</button>
    </div>
    </div>
 </div>
</div>`
})

// document.getElementById('demo').addEventListener('click',(p)=>{
//   console.log(p)
//   document.querySelector('#div2').innerHTML = ``
// })


var elements = document.getElementsByClassName("box");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    // elements[i].style.width = "50%";
    document.getElementById('demo').style.flexWrap = "nowrap"
  }
}
