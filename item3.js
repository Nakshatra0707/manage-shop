var username = localStorage.getItem("name");
var item1 = localStorage.getItem("item1");
var item2 = localStorage.getItem("item2");
var item3 = localStorage.getItem("item3");
var amt1 = localStorage.getItem("amt1");
var amt2 = localStorage.getItem("amt2");
var amt3 = localStorage.getItem("amt3");

var item3_display = "<h4>" + item3 + ": </h4><span id = 'p3p'></span><br><span id='boi'>" + amt3 + "</span><br><span id = 'yoyyyo'></span><br>";
var button3 = "<button class = 'plus' onclick = 'p3()'>+</button><button class = 'minus' onclick = n3()>-</button>";
document.getElementById("containerr").innerHTML = item3_display + button3;

var audiooo = new Audio("sfx.mp3")
var p3p = 0
function p3(){
    var valueee = document.getElementById("boiii").innerHTML;
    document.getElementById("boiii").innerHTML = parseInt(valueee) + 1
    p3p = p3p + 1
    document.getElementById("p3p").innerHTML = "Change: "+ p3p
    audiooo.play()
}
var audiooon = new Audio("sfx.mp3")
function n3(){
    var valueee = document.getElementById("boiii").innerHTML;
    document.getElementById("boiii").innerHTML = parseInt(valueee) - 1
    p3p = p3p - 1
    document.getElementById("p3p").innerHTML = "Change: "+ p3p
    audiooon.play()
}