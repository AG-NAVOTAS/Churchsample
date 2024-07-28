var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function () {

    if(content.className == "open"){
        //shrink the box
        content.className = "";
        button.innerHTML = "SHOW MORE";
    } else {
        //expand the box
        content.className = "open";
        button.innerHTML = "SHOW LESS";
    }

};