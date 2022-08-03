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
                  <a href="#" id=${e.id} ><img src="../assets/download.svg"  style=" height: 18px; width: 18px;  margin-right: 15px;"></a>
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
}

  // Delete note Api call

  const deletenote = document.querySelector('#demo')
  deletenote.addEventListener('click', (e) => {
    console.log(trash)
    let req = {
      "noteIdList": [e.target.id],
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

  //const color = ["#fff", "#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb", "#fdcfe8", "#e6c9a8", "#e8eaed"]

  $(document).on('click', '.30', function (e) {
    updateColor = e.currentTarget.id
    console.log(e.currentTarget.id)
    console.log(updateColor)
    console.log("hii")
    let req = {
      color: updateColor,
      noteIdList: [e.target.id],
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

function displayNotes(allnt) {
  let data = allnt
  document.getElementById('demo').innerHTML = data.map((b) =>
    `<div class="box" style="border:1px solid green;">
  <p>${b.title}</p>
  <p>${b.isDeleted}</p>
  <p>${b.isArchived}</p>
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

function displayArchive(allnt) {
  let data = allnt
  document.getElementById('demo').innerHTML = data.map((b) =>
    `<div class="box" style="border:1px solid green;">
  <p>${b.title}</p>
  <p>${b.isDeleted}</p>
  <p>${b.isArchived}</p>
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
<a href="#" id=${b.id} ><img src="../assets/unarchive.svg"  style=" height: 18px; width: 18px;  margin-right: 15px;"></a>
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

function displaytrash(allnt) {
  let data = allnt
  document.getElementById('demo').innerHTML = data.map((b) =>
    `<div class="box" style="border:1px solid green;">
  <p>${b.title}</p>
  <p>${b.isDeleted}</p>
  <p>${b.isArchived}</p>
  <div class="newbox">
  <img src="../assets/delete1.svg" style=" height: 18px; width: 18px;  margin-right: 15px;" >
  <img src="../assets/delete.svg" style=" height: 18px; width: 18px;  margin-right: 15px;"> 
</div>
</div>`
  )
}