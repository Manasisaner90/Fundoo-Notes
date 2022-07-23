
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
});


window.onload = function () {
  document.getElementById('myBtn').onclick = function () {
    document.getElementById('myform').submit();
    return false;
  };
};



let data = {
  title: title.value,
  description: desc.value,
}
let token = localStorage.getItem('token')
$.ajax({
  url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',
  type: 'GET',
 
  'Content-Type': 'application/json',
  headers: { 'Authorization': token },
  success: function (result) {
    console.log(result.data.data);
    let note = result.data.data;
    document.getElementById('demo').innerHTML = note.map((e) =>
      `<div class = "box">
            <p>${e.title}</p>
            <p>${e.description}</p>
            <div class="box2">
            <img src="../assets/bell.svg" style=" height: 18px; width: 18px;  margin-bottom: 10px;margin-right: 15px;" >
                  <img src="../assets/user.svg" style=" height: 18px; width: 18px;  margin-bottom: 10px;margin-right: 15px;">
                  <img src="../assets/cpallet.svg"  style=" height: 18px; width: 18px;  margin-bottom: 10px;margin-right: 15px;">
                  <img src="../assets/gallery.svg"  style=" height: 18px; width: 18px;  margin-bottom: 10px;margin-right: 15px;" >
                  <img src="../assets/download.svg"  style=" height: 18px; width: 18px;  margin-bottom: 10px;margin-right: 15px;">
                  <img src="../assets/3dot.svg"  style=" height: 18px; width: 18px;  margin-bottom: 10px;margin-right: 15px;">
            </div>
       </div>`
    )
  },
  error: function (error) {
    console.log(error);

  }
});


