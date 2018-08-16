// when a vege button gets clicked push it in a new fs.write object
// let myGarden = require('./mygarden.json')
let selectedVege = document.getElementsByClassName('vege')
let divOne = document.getElementById("div1");
// document.getElementsByTagName("button").addEventListener("click", function(){
//     alert('clicked');
// })

function addToGarden(){
    console.log(selectedVege.innerText)
}

// .addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
                    var data=ev.dataTransfer.getData("Text");
                    var copyimg = document.createElement("img");
                    var original = document.getElementById(data);
                    if (original == null){
                        alert("you already have a plant there")
                    }
                    copyimg.src = original.src;
                    ev.target.appendChild(copyimg);
}

function emptyDiv1(){
    document.getElementById("div1").innerHTML = "";
}

function emptyDiv2(){
    document.getElementById("div2").innerHTML = "";
}

function emptyDiv3(){
    document.getElementById("div3").innerHTML = "";
}

function emptyDiv4(){
    document.getElementById("div4").innerHTML = "";
}
