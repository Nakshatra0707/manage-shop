var username = localStorage.getItem("name");
var item1 = localStorage.getItem("item1");
var item2 = localStorage.getItem("item2");
var item3 = localStorage.getItem("item3");
var amt1 = localStorage.getItem("amt1");
var amt2 = localStorage.getItem("amt2");
var amt3 = localStorage.getItem("amt3");

function total(){
    window.location = "total-stock.html"
}
function Item1(){
    window.location = "item1.html"
}
function Item2(){
    window.location = "item2.html"
}
function Item3(){
    window.location = "item2.html"
}
document.getElementById("item1").innerHTML = "<button onclick = 'Item1()' id = 'item11'>" + item1 + "</button>"
document.getElementById("item2").innerHTML = "<button onclick = 'Item2()' id = 'item22'>" + item2 + "</button>"
document.getElementById("item3").innerHTML = "<button onclick = 'Item3()' id = 'item33'>" + item3 + "</button>"

