var username = localStorage.getItem("name");
var item1 = localStorage.getItem("item1");
var item2 = localStorage.getItem("item2");
var item3 = localStorage.getItem("item3");
var amt1 = localStorage.getItem("amt1");
var amt2 = localStorage.getItem("amt2");
var amt3 = localStorage.getItem("amt3");

var item2_display = "<h4>" + item2 + ": </h4><span id = 'p2p'></span><br><br><span id='boii'>" + amt2 + "</span><br><span id = 'yoyyo'></span><br>";

var button2 = "<button class = 'plus' onclick = 'p2()'>+</button><button class = 'minus' onclick = n2()>-</button>";

document.getElementById("containerr").innerHTML = item2_display + button2

function back(){
    window.location = "options.html"
}

var audioo = new Audio("sfx.mp3")
var p2p = 0
function p2(){
    var valuee = document.getElementById("boii").innerHTML;
    document.getElementById("boii").innerHTML = parseInt(valuee) + 1
    p2p = p2p + 1
    document.getElementById("p2p").innerHTML = "Change: "+ p2p
    audioo.play()
    if (valuee >= level2){
        document.getElementById("yoyyo").innerHTML = ""
    }
}
var audioon = new Audio("sfx.mp3")
function n2(){
    var valuee = document.getElementById("boii").innerHTML;
    document.getElementById("boii").innerHTML = parseInt(valuee) - 1
    p2p = p2p - 1
    document.getElementById("p2p").innerHTML = "Change: "+ p2p
    audioon.play()
}
