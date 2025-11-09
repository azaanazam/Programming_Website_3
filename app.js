const container = document.getElementById("container");
const side = document.getElementById("side");
const side_r = document.getElementById("side_r");
const home1 = document.getElementById("home1");
const home2 = document.getElementById("home2");
const home3 = document.getElementById("home3");
const home4 = document.getElementById("home4");
const btn4 = document.getElementById("btn4");
const ululul = document.getElementById("ululul");
const portal = document.getElementById("portal");

// const Name = document.getElementById("name").value;
// const Fname = document.getElementById("Fname").value;
// const dob = document.getElementById("dob").value;
// const email = document.getElementById("email").value;
// const password = document.getElementById("password").value;
// const submitBtn = document.getElementById("submit");





ululul.style.marginLeft = "840px";
btn4.style.display = "none";
home1.style.display = "none";
home2.style.display = "none";
home3.style.display = "none";
home4.style.display = "none";
portal.style.display = "none";

function div() {

    side.style.display = "none";
    side_r.style.display = "none";
    //container.style.display = "none"
    home1.style.display = "flex";
    btn4.style.display = "block"
    ululul.style.marginLeft = "720px";
    btn4.style.marginTop = "-6px";
    portal.style.display = "none";

}



function div1() {

    side.style.display = "none";
    side_r.style.display = "none";
    //container.style.display = "none"
    home1.style.display = "none";
    home3.style.display = "none";
    home4.style.display = "none";
    home2.style.display = "flex";
    portal.style.display = "none";


}



function div2() {

    side.style.display = "none";
    side_r.style.display = "none";
    //container.style.display = "none"
    home1.style.display = "none";

    home4.style.display = "none";
    home2.style.display = "none";
    home3.style.display = "flex";
    portal.style.display = "none";


}

function div3() {

    side.style.display = "none";
    side_r.style.display = "none";
    //container.style.display = "none"
    home1.style.display = "none";
    home2.style.display = "none";
    home3.style.display = "none";
    home4.style.display = "flex";
    portal.style.display = "none";


}





function hidehome() {
    //container.style.display = "block"
    side.style.display = "block";
    side_r.style.display = "flex";
    home1.style.display = "none";
    home2.style.display = "none";
    home3.style.display = "none";
    home4.style.display = "none";
    portal.style.display = "none";

}

function showPortal() {
    side.style.display = "none";
    side_r.style.display = "none";
    home1.style.display = "none";
    home2.style.display = "none";
    home3.style.display = "none";
    home4.style.display = "none";
    portal.style.display = "flex";
    btn4.style.display = "block"
    ululul.style.marginLeft = "720px";
    btn4.style.marginTop = "-6px";



}


function submitForm() {

   
const Name = document.getElementById("name").value;
const Fname = document.getElementById("Fname").value;
const dob = document.getElementById("dob").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

  if (!Name  || !Fname  || !dob || !email || !number || !password) {
    alert("Please fill all fields");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  
  if (users.some(u => u.email === email)) {
    alert("This email is already registered!");
    return;
  }

  users.push({ name, email, number, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("SignUp Successful!");


}


Name = "";
Fname = "";
dob = "";
email = "";
password = "";



