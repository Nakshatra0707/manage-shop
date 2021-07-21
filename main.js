function save(){
    var username = document.getElementById("name").value;
    var item1 = document.getElementById("item_1").value;
    var item2 = document.getElementById("item_2").value;
    var item3 = document.getElementById("item_3").value;
    var amt1 = document.getElementById("1_amt").value;
    var amt2 = document.getElementById("2_amt").value;
    var amt3 = document.getElementById("3_amt").value;
    localStorage.setItem("name", username);
    localStorage.setItem("item1", item1);
    localStorage.setItem("item2", item2);
    localStorage.setItem("item3", item3);
    localStorage.setItem("amt1", amt1);
    localStorage.setItem("amt2", amt2);
    localStorage.setItem("amt3", amt3);
    window.location = "options.html";
}