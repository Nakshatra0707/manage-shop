var username = localStorage.getItem("name");
var item1 = localStorage.getItem("item1");
var item2 = localStorage.getItem("item2");
var item3 = localStorage.getItem("item3");
var amt1 = localStorage.getItem("amt1");
var amt2 = localStorage.getItem("amt2");
var amt3 = localStorage.getItem("amt3");
var item = item1 + ": " + amt1
var itemm = item2 + ": " + amt2
var itemmm = item3 + ": " + amt3
var item1_display = "<h3>" + item + "</h3>"
var item2_display = "<h3>" + itemm + "</h3>"
var item3_display = "<h3>" + itemmm + "</h3>"
var total_amt = parseInt(amt1) + parseInt(amt2) + parseInt(amt3)
var total_display ="<h3>" + "Total:" + total_amt + "</h3>"
document.getElementById("ok").innerHTML = item1_display + item2_display + item3_display + total_display
function back(){
    window.location = "options.html"
}