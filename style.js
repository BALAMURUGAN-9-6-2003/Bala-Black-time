let date = document.querySelector(".date-num");
let month = document.querySelector(".month-num");
let year = document.querySelector(".year-num");
let hou = document.querySelector(".hou-num");
let min = document.querySelector(".min-num");
let sec = document.querySelector(".sec-num");
let p = document.querySelector("p");
naw = "";
function na() {
  nam = prompt("Enter Your Name");
  localStorage.setItem(naw, nam);
}
if (localStorage.getItem(naw) !== null) {
  t = localStorage.getItem(naw);
  p.innerHTML = "Hello," + t[0].toUpperCase() + t.substring(1);
} else {
  na();
}

function cal() {
  if (localStorage.getItem(naw) !== null) {
    t = localStorage.getItem(naw);
    p.innerHTML = "Hi," + t[0].toUpperCase() + t.substring(1);
  } else {
    na();
  }
  const d = new Date();
  if(d.getDate()<9)
  {
    date.innerHTML = '0'+d.getDate();
  }
  else{
  date.innerHTML = d.getDate();
  }
  if(d.getMonth() + 1<9)
  {
  month.innerHTML ='0'+( d.getMonth() + 1);
  }
  year.innerHTML = d.getFullYear();
  if (d.getHours() % 12 === 0) hou.innerHTML = "12";
  else hou.innerHTML = d.getHours() % 12;
  min.innerHTML = d.getMinutes();
  sec.innerHTML = d.getSeconds();
}
setInterval(cal, 1000);
