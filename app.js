const container = document.getElementById("container");
const side = document.getElementById("side");
const side_r = document.getElementById("side_r");
const home1 = document.getElementById("home1");
const home2 = document.getElementById("home2");
const home3 = document.getElementById("home3");
const home4 = document.getElementById("home4");
const btn4 = document.getElementById("btn4");
const ululul = document.getElementById("ululul");

ululul.style.marginLeft = "840px";
btn4.style.display = "none";
home1.style.display = "none";
home2.style.display = "none";
home3.style.display = "none";
home4.style.display = "none";

function div() {

    side.style.display = "none";
    side_r.style.display = "none";
    //container.style.display = "none"
    home1.style.display = "flex";
    btn4.style.display = "block"
    ululul.style.marginLeft = "720px";
    btn4.style.marginTop = "-6px";
}



function div1() {

    side.style.display = "none";
    side_r.style.display = "none";
    //container.style.display = "none"
    home1.style.display = "none";
    home3.style.display = "none";
    home4.style.display = "none";
    home2.style.display = "flex";

}



function div2() {

    side.style.display = "none";
    side_r.style.display = "none";
    //container.style.display = "none"
    home1.style.display = "none";
    
    home4.style.display = "none";
    home2.style.display = "none";
    home3.style.display = "flex";

}

function div3() {

    side.style.display = "none";
    side_r.style.display = "none";
    //container.style.display = "none"
    home1.style.display = "none";  
    home2.style.display = "none";
    home3.style.display = "none";
    home4.style.display = "flex";

}





function hidehome() {
    //container.style.display = "block"
    side.style.display = "block";
    side_r.style.display = "flex";
    home1.style.display = "none";
    home2.style.display = "none";
    home3.style.display = "none";
    home4.style.display = "none";
}

