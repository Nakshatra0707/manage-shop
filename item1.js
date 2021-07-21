var username = localStorage.getItem("name");
var item1 = localStorage.getItem("item1");
var item2 = localStorage.getItem("item2");
var item3 = localStorage.getItem("item3");
var amt1 = localStorage.getItem("amt1");
var amt2 = localStorage.getItem("amt2");
var amt3 = localStorage.getItem("amt3");

var item1_display = "<h4>" + item1 + ": </h4><span id = 'p1p'></span><br><span id='boi'>" + amt1 + "</span><br><span id = 'yoyo'></span><br>";
var button1 = "<button class = 'plus' onclick = 'p1()'>+</button><button class = 'minus' onclick = n1()>-</button>";
document.getElementById("containerr").innerHTML = item1_display + button1

function back(){
    window.location = "options.html"
}

var p1p = 0
var audio = new Audio("sfx.mp3")
function p1(){
    var value = document.getElementById("boi").innerHTML;
    document.getElementById("boi").innerHTML = parseInt(value) + 1
    p1p = p1p + 1
    document.getElementById("p1p").innerHTML = "Change: " + p1p
    audio.play()
}
var audion = new Audio("sfx.mp3")
function n1(){
    var value = document.getElementById("boi").innerHTML;
    document.getElementById("boi").innerHTML = parseInt(value) - 1
    p1p = p1p - 1
    document.getElementById("p1p").innerHTML = "Change: "+ p1p
    audion.play()
    if (value < level1){
        document.getElementById("yoyo").innerHTML = "Buy More!"
    }
}
